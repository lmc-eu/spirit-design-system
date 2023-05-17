import { EventHandler, SelectorEngine } from './dom';
import BaseComponent from './BaseComponent';
import { enableToggleAutoloader } from './utils';

const NAME = 'fileUploader';
const EVENT_KEY = `.${NAME}`;
const EVENT_QUEUE_FILE = `queueFile${EVENT_KEY}`;
const EVENT_QUEUED_FILE = `queuedFile${EVENT_KEY}`;
const EVENT_UNQUEUE_FILE = `unqueueFile${EVENT_KEY}`;
const EVENT_UNQUEUED_FILE = `unqueuedFile${EVENT_KEY}`;
const EVENT_ERROR = `error${EVENT_KEY}`;
const IS_DRAGGABLE_CLASS_NAME = 'has-drag-and-drop';
const IS_DRAGGING_CLASS_NAME = 'is-dragging';
const DROP_ZONE_HIDDEN_CLASS_NAME = 'd-none';
const DROP_ZONE_DISABLED_CLASS_NAME = 'd-none'; // TODO: Modify when the disabled state is ready for the entire component (https://jira.lmc.cz/browse/DS-772)
const WRAPPER_ELEMENT_SELECTOR = '[data-spirit-element="wrapper"]';
const INPUT_ELEMENT_SELECTOR = '[data-spirit-element="input"]';
const LIST_ELEMENT_SELECTOR = '[data-spirit-element="list"]';
const DROP_ZONE_ELEMENT_SELECTOR = '[data-spirit-element="dropZone"]';
const TEMPLATE_ELEMENT_SELECTOR = '[data-spirit-snippet="item"]';
const TEMPLATE_ELEMENT_SLOT_NAME = 'data-spirit-populate-field';
const DATA_DISMISS_ATTRIBUTE = 'data-dismiss';
const DEFAULT_FILE_SIZE_LIMIT = 10000000; // = 10 MB
const DEFAULT_FILE_QUEUE_LIMIT = 10;
const errorMessages = {
  errorMaxFileSize: 'The file size limit has been exceeded',
  errorFileDuplicity: 'This file already exists in the queue',
  errorMaxUploadedFiles: 'You have exceeded the number of files allowed in the queue',
  errorFileNotSupported: 'is not a supported file. Please ensure you are uploading a supported file format.',
};

class FileUploader extends BaseComponent {
  wrapper: HTMLElement;
  inputElement: HTMLInputElement;
  listElement: HTMLElement | null;
  dropZone: HTMLElement | null;
  isDragAndDropSupported: boolean;
  fileSizeLimit: number;
  fileQueueLimit: number;
  queueLimitBehavior: string;
  inputName: string;
  isMultiple: boolean;
  accept: string;
  isDragging: boolean;
  fileQueue: Map<string, File>;

  constructor(element: HTMLElement) {
    super(element);

    this.wrapper = SelectorEngine.findOne(WRAPPER_ELEMENT_SELECTOR, element) as HTMLInputElement;
    this.inputElement = SelectorEngine.findOne(INPUT_ELEMENT_SELECTOR, element) as HTMLInputElement;
    this.listElement = SelectorEngine.findOne(LIST_ELEMENT_SELECTOR, element);
    this.dropZone = SelectorEngine.findOne(DROP_ZONE_ELEMENT_SELECTOR, element);
    this.isDragAndDropSupported = 'draggable' in document.createElement('span');
    this.fileSizeLimit = this.wrapper?.dataset.spiritMaxFileSize
      ? Number(this.wrapper?.dataset.spiritMaxFileSize)
      : DEFAULT_FILE_SIZE_LIMIT;
    this.fileQueueLimit = this.wrapper?.dataset.spiritFileQueueLimit
      ? Number(this.wrapper?.dataset.spiritFileQueueLimit)
      : DEFAULT_FILE_QUEUE_LIMIT;
    this.queueLimitBehavior = this.wrapper?.dataset.spiritQueueLimitBehavior
      ? this.wrapper?.dataset.spiritQueueLimitBehavior
      : 'none';
    this.inputName = this.inputElement?.name || 'attachment';
    this.isMultiple = this.inputElement?.multiple;
    this.accept = this.inputElement?.accept;
    this.isDragging = false;
    this.fileQueue = new Map();

    this.init();
  }

  static get NAME() {
    return NAME;
  }

  get getFileQueue() {
    return this.fileQueue;
  }

  public clearFileQueue(): void {
    this.fileQueue.clear();

    while (this.listElement?.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
  }

  static getUpdatedFileName(name: string): string {
    return `file__${name.replace(/\./g, '_').replace(/\s/g, '_')}`;
  }

  dragReset() {
    this.isDragging = false;
    this.wrapper?.classList.remove(IS_DRAGGING_CLASS_NAME);
  }

  checkAllowedFileSize(file: File) {
    if (file.size > this.fileSizeLimit) {
      throw new Error(errorMessages.errorMaxFileSize);
    }
  }

  checkFileQueueDuplicity(file: File) {
    if (this.fileQueue.has(FileUploader.getUpdatedFileName(file.name))) {
      throw new Error(errorMessages.errorFileDuplicity);
    }
  }

  checkQueueLimit() {
    if (this.fileQueue.size >= this.fileQueueLimit) {
      throw new Error(errorMessages.errorMaxUploadedFiles);
    }
  }

  checkAllowedFileType(file: File) {
    const fileExtension = file.name.split('.').pop()?.toLowerCase() as string;
    const fileType = file.type;
    let isTypeSupported;
    const shouldValidate = !(this.accept === '' || this.accept === '*' || this.accept === '*/*');

    if (!shouldValidate) {
      isTypeSupported = true;
    } else {
      const acceptArray = this.accept?.replace(/ /g, '').split(',');
      const acceptExtensions = acceptArray?.filter((exp) => exp.match(/\./g));
      const acceptTypes = acceptArray?.filter((exp) => exp.match(/\//g));

      acceptExtensions?.forEach((acceptExtension) => {
        const expression = acceptExtension.replace('.', '').replace('*', '');

        if (fileExtension.match(expression)) {
          isTypeSupported = true;
        }
      });

      acceptTypes?.forEach((acceptType) => {
        const expression = acceptType.replace('*', '');

        if (fileType.match(expression)) {
          isTypeSupported = true;
        }
      });
    }

    if (!isTypeSupported) {
      throw new Error(`"${file.name}": ${errorMessages.errorFileNotSupported}`);
    }
  }

  updateDropZoneVisibility() {
    if (this.queueLimitBehavior === 'none') {
      return;
    }

    const dropZoneClassName =
      this.queueLimitBehavior === 'hide' ? DROP_ZONE_HIDDEN_CLASS_NAME : DROP_ZONE_DISABLED_CLASS_NAME;

    // This is forcing the callback to run last
    setTimeout(() => {
      this.dropZone?.classList.toggle(dropZoneClassName, this.fileQueue.size === this.fileQueueLimit);
    }, 0);
  }

  createAttachmentElement() {
    const attachmentInputElement = document.createElement('input');
    attachmentInputElement.setAttribute('type', 'file');
    attachmentInputElement.setAttribute('name', `${this.inputName}[]`);
    attachmentInputElement.setAttribute('hidden', '');

    return attachmentInputElement;
  }

  getAttachmentElement(file: File, id: string): Element | null {
    const snippetTemplate = SelectorEngine.findOne(TEMPLATE_ELEMENT_SELECTOR, this.element) as HTMLTemplateElement;
    // content: [ #text, li.FileUploaderAttachment, #text ]
    const snippet = snippetTemplate?.content.cloneNode(true) as DocumentFragment;

    if (!snippet) {
      return null;
    }

    const dataContainer = new DataTransfer();
    dataContainer.items.add(file);

    const attachmentInputElement = this.createAttachmentElement();
    attachmentInputElement.files = dataContainer.files;

    const item = snippet.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="item"]`);
    const itemName = snippet.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="name"]`);
    const itemButton = snippet.querySelector(`[${TEMPLATE_ELEMENT_SLOT_NAME}="button"]`);

    item!.appendChild(attachmentInputElement);
    item!.setAttribute('id', id);
    itemName!.innerHTML = file.name;
    itemButton!.setAttribute(DATA_DISMISS_ATTRIBUTE, id);
    item!.removeAttribute(TEMPLATE_ELEMENT_SLOT_NAME);
    itemName!.removeAttribute(TEMPLATE_ELEMENT_SLOT_NAME);
    itemButton!.removeAttribute(TEMPLATE_ELEMENT_SLOT_NAME);

    // get only first element of the document fragment
    // @see: https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    return snippet.children.item(0);
  }

  createAttachmentEvents(id: string) {
    const currentItem = SelectorEngine.findOne(`[${DATA_DISMISS_ATTRIBUTE}="${id}"]`);
    currentItem &&
      EventHandler.on(currentItem, 'click', (event: Event) => {
        event.preventDefault();
        const target = (event.target as HTMLElement)?.dataset?.dismiss;
        if (target) {
          this.removeFromQueue(target);
        }
      });
  }

  appendToList(file: File) {
    if (!this.listElement) {
      if (process.env.NODE_ENV === 'development') {
        /* Because part of the sheet is also a hidden title with an identifier */
        console.warn('Unfortunately, there is no list element created for inserting files to upload');
      }

      return;
    }

    if (!this.isMultiple) {
      this.clearFileQueue();
    }

    const id = FileUploader.getUpdatedFileName(file.name);
    const attachment = this.getAttachmentElement(file, id);

    if (!attachment) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Cannot find element with template to render');
      }

      return;
    }

    this.fileQueue.set(id, file);

    this.listElement.appendChild(attachment);

    this.createAttachmentEvents(id);

    this.dragReset();
  }

  addToQueue(file: File) {
    try {
      EventHandler.trigger(this.wrapper, EVENT_QUEUE_FILE, { fileQueue: this.fileQueue });
      this.checkAllowedFileSize(file);
      this.checkFileQueueDuplicity(file);
      this.checkAllowedFileType(file);
      this.checkQueueLimit();
      this.appendToList(file);
      this.updateDropZoneVisibility();
      EventHandler.trigger(this.wrapper, EVENT_QUEUED_FILE, { fileQueue: this.fileQueue });
    } catch (error) {
      EventHandler.trigger(this.wrapper, EVENT_ERROR, error);
    }
  }

  removeFromQueue(name: string) {
    if (this.fileQueue.has(name)) {
      EventHandler.trigger(this.wrapper, EVENT_UNQUEUE_FILE, { fileQueue: this.fileQueue });
      const itemElement = SelectorEngine.findOne(`li#${name}`);
      this.fileQueue.delete(name);
      itemElement?.remove();
      this.updateDropZoneVisibility();
      EventHandler.trigger(this.wrapper, EVENT_UNQUEUED_FILE, { fileQueue: this.fileQueue });
    }
  }

  onChange(event: Event & { target: HTMLInputElement }) {
    const { target } = event;
    const filesArray = target.files ? [...target.files] : [];

    let counter = 0;
    let overLimit;
    counter += this.fileQueue.size;

    filesArray.forEach((file: File) => {
      if (counter < this.fileQueueLimit) {
        this.addToQueue(file);
        counter += 1;
      } else {
        overLimit = true;
      }
    });

    if (overLimit) {
      this.checkQueueLimit();
      EventHandler.trigger(this.wrapper, EVENT_ERROR, new Error(errorMessages.errorMaxUploadedFiles));
    }

    // This is forcing the callback to run last
    setTimeout(() => {
      target.value = '';
      target.blur();
    }, 0);
  }

  static onDragOver(event: Event) {
    event.preventDefault();
  }

  onDragEnter() {
    this.isDragging = true;
    this.wrapper?.classList.add(IS_DRAGGING_CLASS_NAME);
  }

  onDragLeave() {
    this.dragReset();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();

    const transferItems = Array.from(event?.dataTransfer?.items || []);
    const transferFiles = Array.from(event?.dataTransfer?.files || []);

    if (!this.isMultiple && (transferItems.length > 1 || transferFiles.length > 1)) {
      if (process.env.NODE_ENV === 'development') {
        console.info(
          `If you want to upload multiple files, set the multiple attribute to the input element. <input type="file" multiple>`,
        );
      }
    }

    let counter = 0;
    let overLimit;
    counter += this.fileQueue.size;

    if (event?.dataTransfer?.items) {
      transferItems.forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file && counter < this.fileQueueLimit) {
            this.addToQueue(file);
            counter += 1;
          } else {
            overLimit = true;
          }
        }
      });
    } else {
      transferFiles.forEach((file) => {
        if (counter < this.fileQueueLimit) {
          this.addToQueue(file);
          counter += 1;
        } else {
          overLimit = true;
        }
      });
    }

    if (overLimit) {
      this.checkQueueLimit();
      EventHandler.trigger(this.wrapper, EVENT_ERROR, new Error(errorMessages.errorMaxUploadedFiles));
    }
  }

  addEventListeners() {
    EventHandler.on(this.inputElement, 'change', this.onChange.bind(this));

    if (this.isDragAndDropSupported && this.dropZone) {
      EventHandler.on(this.dropZone, 'dragover', FileUploader.onDragOver.bind(this));
      EventHandler.on(this.dropZone, 'dragenter', this.onDragEnter.bind(this));
      EventHandler.on(this.dropZone, 'dragleave', this.onDragLeave.bind(this));
      EventHandler.on(this.dropZone, 'drop', this.onDrop.bind(this));
    }
  }

  init() {
    this.addEventListeners();
    if (this.isDragAndDropSupported) {
      this.wrapper?.classList.add(IS_DRAGGABLE_CLASS_NAME);
    }
    // Removal of original name attribute for prevent of duplicate files from multiple inputs
    this.inputElement?.removeAttribute('name');
  }
}

enableToggleAutoloader(FileUploader);

export default FileUploader;
