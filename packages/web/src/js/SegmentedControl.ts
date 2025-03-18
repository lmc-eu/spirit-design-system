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

    this.init();
  }

  static get NAME(): string {
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

  static getActivePosition(parent: HTMLElement, children: HTMLElement[]): number {
    const activeItem = SegmentedControl.getActiveItem(children);
    const parentPaddingLeft = parseFloat(getComputedStyle(parent).paddingLeft) || 0;

    return activeItem ? activeItem.offsetLeft - parentPaddingLeft : 0;
  }

  static setActivePosition(parent: HTMLElement, children: HTMLElement[]): void {
    const offsetLeft = SegmentedControl.getActivePosition(parent, children);
    parent.style.setProperty(`--${cssVariablePrefix}segmented-control-highlight-x-pos`, `${offsetLeft}px`);
  }

  onChange(): void {
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
    this.onResize = this.onResize.bind(this);
    this.onChange = this.onChange.bind(this);

    EventHandler.on(window, RESIZE_EVENT, this.onResize);

    for (const item of this.items) {
      const input = SelectorEngine.findOne(SELECTOR_INPUT, item);

      if (input) {
        EventHandler.on(input, CHANGE_EVENT, this.onChange);
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
