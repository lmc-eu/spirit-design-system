import { clearFixture, getFixture } from '../../../tests/helpers/fixture';
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
});
