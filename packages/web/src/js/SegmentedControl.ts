import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import BaseComponent from './BaseComponent';
import SelectorEngine from './dom/SelectorEngine';
import { enableToggleAutoloader, SpiritConfig } from './utils';
import { EventHandler } from './dom';

const NAME = 'segmentedControl';
const SELECTOR_ITEM = '.SegmentedControl__item';
const SELECTOR_INPUT = '.SegmentedControl__input';
const RESIZE_EVENT = 'resize';
const CHANGE_EVENT = 'change';

class SegmentedControl extends BaseComponent {
  parent: HTMLElement;
  items: HTMLElement[];

  constructor(element: SpiritElement, config?: SpiritConfig) {
    super(element, config);
    this.parent = this.element as HTMLElement;
    this.items = this.getChildren();

    if (!this.parent) {
      return;
    }

    this.init();
  }

  static get NAME() {
    return NAME;
  }

  static getActiveItem(children: HTMLElement[]): HTMLElement | undefined {
    return children.find((child) =>
      Array.from(child.children).some(
        (element): element is HTMLInputElement => element instanceof HTMLInputElement && element.checked,
      ),
    );
  }

  getChildren(selector = SELECTOR_ITEM): HTMLElement[] {
    return SelectorEngine.findAll(selector, this.parent);
  }

  static setActivePosition(parent: HTMLElement, children: HTMLElement[]): void {
    const activeItem = SegmentedControl.getActiveItem(children);
    const parentPaddingLeft = parseFloat(getComputedStyle(parent).paddingLeft) || 0;
    const offsetLeft = activeItem ? activeItem.offsetLeft - parentPaddingLeft : 0;

    parent?.style.setProperty(`--${cssVariablePrefix}segmented-control-highlight-x-pos`, `${offsetLeft}px`);
  }

  onClick(): void {
    SegmentedControl.setActivePosition(this.parent, this.items);
  }

  onInit(): void {
    SegmentedControl.setActivePosition(this.parent, this.items);
  }

  onResize(): void {
    this.parent.style.transition = 'none';
    SegmentedControl.setActivePosition(this.parent, this.items);
    this.parent.style.transition = '';
  }

  addEventListeners(): void {
    EventHandler.on(window, RESIZE_EVENT, this.onResize.bind(this));

    for (const item of this.items) {
      const input = SelectorEngine.findOne(SELECTOR_INPUT, item);

      if (input) {
        EventHandler.on(input, CHANGE_EVENT, this.onClick.bind(this));
      }
    }
  }

  init() {
    this.onInit();
    this.addEventListeners();
  }
}

enableToggleAutoloader(SegmentedControl);

export default SegmentedControl;
