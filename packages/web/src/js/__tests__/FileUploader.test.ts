import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
import { SelectorEngine } from '../dom';
import FileUploader from '../FileUploader';

describe('FileUploader', () => {
  let fixtureEl: Element;
  let container: HTMLElement;
  let input: HTMLInputElement;
  let instance: FileUploader;

  beforeEach(() => {
    container = document.createElement('div');
    input = document.createElement('input');
    input.type = 'file';
    container.appendChild(input);
    instance = new FileUploader(container);
    fixtureEl = getFixture();
  });

  afterEach(() => {
    instance.clearFileQueue();
    clearFixture();
  });

  it('should be an instance of FileUploader', () => {
    expect(instance).toBeInstanceOf(FileUploader);
  });

  it('NAME should be "fileUploader"', () => {
    expect(FileUploader.NAME).toBe('fileUploader');
  });

  it('isDraggable should be true', () => {
    expect(instance.isDragAndDropSupported).toBeTruthy();
  });

  it('clearFileQueue should remove all files from the queue', () => {
    const file1 = new File([''], 'test1.txt', { type: 'text/plain', lastModified: Date.now() });
    const file2 = new File([''], 'test2.txt', { type: 'text/plain', lastModified: Date.now() });
    instance.addToQueue(file1);
    instance.addToQueue(file2);
    instance.clearFileQueue();
    expect(instance.getFileQueue.size).toBe(0);
  });

  describe('constructor', () => {
    it('should take care of element passed as a CSS selector', () => {
      fixtureEl.innerHTML = `
        <div class="FileUploader" data-toggle="fileUploader">
          <template data-spirit-snippet="item"></template>
          <div class="FileUploaderInput" data-spirit-element="wrapper">
            <label for="fileUploadMultiple" class="FileUploaderInput__label">Label</label>
            <div class="FileUploaderInput__dropZone" data-spirit-element="dropZone"></div>
          </div>
          <h3 id="attachments-multipleFile" hidden>Attachments</h3>
          <ul class="FileUploaderList" aria-labelledby="attachments-multipleFile" data-spirit-element="list"></ul>
        </div>
      `;

      const fileUploaderEl = fixtureEl.querySelector('[data-toggle="fileUploader"]') as HTMLElement;
      const fileUploaderBySelector = new FileUploader(fileUploaderEl);

      expect(fileUploaderBySelector.element).toEqual(fileUploaderEl);
    });
  });

  describe('data attributes', () => {
    beforeEach(() => {
      fixtureEl.innerHTML = `
        <div class="FileUploader" data-toggle="fileUploader" data-max-file-size="5000000" data-file-queue-limit="5">
          <input type="file" data-spirit-element="input" />
        </div>
      `;
    });

    it('should read data-max-file-size attribute and set fileSizeLimit', () => {
      const fileUploaderEl = fixtureEl.querySelector('[data-toggle="fileUploader"]') as HTMLElement;
      const fileUploaderInstance = new FileUploader(fileUploaderEl);
      expect(fileUploaderInstance.fileSizeLimit).toBe(5000000);
    });

    it('should read data-file-queue-limit attribute and set fileQueueLimit', () => {
      const fileUploaderEl = fixtureEl.querySelector('[data-toggle="fileUploader"]') as HTMLElement;
      const fileUploaderInstance = new FileUploader(fileUploaderEl);
      expect(fileUploaderInstance.fileQueueLimit).toBe(5);
    });

    it('should use default values when data attributes are not provided', () => {
      fixtureEl.innerHTML = `
        <div class="FileUploader" data-toggle="fileUploader">
          <input type="file" data-spirit-element="input" />
        </div>
      `;
      const fileUploaderEl = fixtureEl.querySelector('[data-toggle="fileUploader"]') as HTMLElement;
      const fileUploaderInstance = new FileUploader(fileUploaderEl);
      expect(fileUploaderInstance.fileSizeLimit).toBe(10000000); // Default file size limit
      expect(fileUploaderInstance.fileQueueLimit).toBe(10); // Default file queue limit
    });
  });

  describe('Supported and Unsupported files', () => {
    let fileUploader: FileUploader;

    beforeEach(() => {
      document.body.innerHTML = `
      <div class="file-uploader" data-max-file-size="10000000" data-file-queue-limit="10">
        <div class="file-uploader__wrapper" data-spirit-element="wrapper">
          <ul class="file-uploader__list" data-spirit-element="list"></ul>
          <input type="file" name="attachment" multiple data-spirit-element="input" accept="image/*" />
          <div class="file-uploader__drop-zone" data-spirit-element="dropZone">Drag and drop files here</div>
        </div>
      </div>
    `;

      fileUploader = new FileUploader(SelectorEngine.findOne('.file-uploader')!);
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    describe('checkAllowedFileType()', () => {
      test('should allow a supported file type', () => {
        const file = new File(['content'], 'example.jpg', { type: 'image/jpeg' });
        expect(() => fileUploader.checkAllowedFileType(file)).not.toThrow();
      });

      test('should throw an error for an unsupported file type', () => {
        const file = new File(['content'], 'example.txt', { type: 'text/plain' });
        expect(() => fileUploader.checkAllowedFileType(file)).toThrowError(
          `The file "example.txt" is not supported. Please ensure you are uploading a supported file format.`,
        );
      });
    });
  });
});
