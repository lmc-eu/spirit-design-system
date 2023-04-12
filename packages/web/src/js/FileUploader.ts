import { EventHandler, SelectorEngine } from './dom';
import BaseComponent from './BaseComponent';
import { enableToggleAutoloader } from './utils';

const NAME = 'fileUploader';
const IS_DRAGGABLE_CLASS_NAME = 'has-drag-and-drop';
const IS_DRAGGING_CLASS_NAME = 'is-dragging';
const WRAPPER_ELEMENT_SELECTOR = '[data-spirit-element="wrapper"]';
const INPUT_ELEMENT_SELECTOR = '[data-spirit-element="input"]';
const LIST_ELEMENT_SELECTOR = '[data-spirit-element="list"]';
const DROP_ZONE_ELEMENT_SELECTOR = '[data-spirit-element="dropZone"]';
const TEMPLATE_ELEMENT_SELECTOR = '[data-spirit-snippet="item"]';
const TEMPLATE_ELEMENT_SLOT_NAME = 'data-populate-field';
const DATA_DISMISS_ATTRIBUTE = 'data-dismiss';
const DEFAULT_FILE_SIZE_LIMIT = 10000000; // = 10 MB
const DEFAULT_FILE_QUEUE_LIMIT = 10;

class FileUploader extends BaseComponent {
  wrapper: HTMLElement;
  inputElement: HTMLInputElement;
  listElement: HTMLElement | null;
  dropZone: HTMLElement | null;
  isDragAndDropSupported: boolean;
  fileSizeLimit: number;
  fileQueueLimit: number;
  inputName: string;
  isMultiple: boolean;
  isDragging: boolean;
  fileQueue: Map<string, File>;

  constructor(element: HTMLElement) {
    super(element);

    this.wrapper = SelectorEngine.findOne(WRAPPER_ELEMENT_SELECTOR, element) as HTMLInputElement;
    this.inputElement = SelectorEngine.findOne(INPUT_ELEMENT_SELECTOR, element) as HTMLInputElement;
    this.listElement = SelectorEngine.findOne(LIST_ELEMENT_SELECTOR, element);
    this.dropZone = SelectorEngine.findOne(DROP_ZONE_ELEMENT_SELECTOR, element);
    this.isDragAndDropSupported = 'draggable' in document.createElement('span');
    this.fileSizeLimit = element.dataset.maxFileSize ? Number(element.dataset.maxFileSize) : DEFAULT_FILE_SIZE_LIMIT;
    this.fileQueueLimit = element.dataset.fileQueueLimit
      ? Number(element.dataset.fileQueueLimit)
      : DEFAULT_FILE_QUEUE_LIMIT;
    this.inputName = this.inputElement?.name || 'attachment';
    this.isMultiple = this.inputElement?.multiple;
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
    return `file__${name.replace(/\./g, '_')}`;
  }

  dragReset() {
    this.isDragging = false;
    this.wrapper?.classList.remove(IS_DRAGGING_CLASS_NAME);
  }

  checkAllowedFileSize(file: File) {
    if (file.size > this.fileSizeLimit) {
      throw new Error('The file size limit has been exceeded');
    }
  }

  checkFileQueueDuplicity(file: File) {
    if (this.fileQueue.has(FileUploader.getUpdatedFileName(file.name))) {
      throw new Error('This file already exists in the queue');
    }
  }

  checkQueueLimit() {
    if (this.fileQueue.size >= this.fileQueueLimit) {
      throw new Error('You have exceeded the number of files allowed in the queue');
    }
  }

  createAttachmentElement() {
    const attachmentInputElement = document.createElement('input');
    attachmentInputElement.setAttribute('type', 'file');
    attachmentInputElement.setAttribute('name', `${this.inputName}[]`);
    attachmentInputElement.setAttribute('hidden', '');

    return attachmentInputElement;
  }

  getAttachmentElement(file: File, id: string): HTMLElement | null {
    const snippetTemplate = SelectorEngine.findOne(TEMPLATE_ELEMENT_SELECTOR, this.element) as HTMLTemplateElement;
    const snippet = snippetTemplate?.content.cloneNode(true) as HTMLElement;

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

    return snippet;
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

    // Appending an item into queue
    this.fileQueue.set(id, file);

    // Appending node into list
    this.listElement.appendChild(attachment);

    // Creating an event for the delete item button
    this.createAttachmentEvents(id);

    // Reset drag state
    this.dragReset();
  }

  addToQueue(file: File) {
    try {
      this.checkAllowedFileSize(file);
      this.checkFileQueueDuplicity(file);
      this.checkQueueLimit();
      this.appendToList(file);
    } catch (error) {
      console.warn(error);
    }
  }

  removeFromQueue(name: string) {
    if (this.fileQueue.has(name)) {
      const itemElement = SelectorEngine.findOne(`li#${name}`);
      this.fileQueue.delete(name);
      itemElement?.remove();
    }
  }

  onChange(event: Event & { target: HTMLInputElement }) {
    const { target } = event;
    const filesArray = target.files ? [...target.files] : [];

    filesArray.forEach((file) => this.addToQueue(file));

    setTimeout(() => {
      // Delete the value from the original input after adding to queue
      target.value = '';
      // Reset focus state on input after file(s) selection
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

    if (transferItems) {
      transferItems.forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            this.addToQueue(file);
          }
        }
      });
    } else {
      transferFiles.forEach((file) => this.addToQueue(file));
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
