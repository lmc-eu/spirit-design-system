import { cssVariablePrefix } from '@lmc-eu/spirit-design-tokens';
import BaseComponent from './BaseComponent';
import { EventHandler } from './dom';
import SelectorEngine from './dom/SelectorEngine';
import { enableToggleAutoloader, SpiritConfig } from './utils';

const NAME = 'segmentedControl';
const DATA_KEY = `${NAME}`;
const EVENT_KEY = `.${DATA_KEY}`;
const SELECTOR_ITEM = '.SegmentedControl__item';
const SELECTOR_INPUT = '.SegmentedControl__input';
const EVENT_RESIZE = `resize${EVENT_KEY}`;
const EVENT_CHANGE = `change${EVENT_KEY}`;

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

  static get DATA_KEY() {
    return `${this.NAME}`;
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
    EventHandler.trigger(this.parent, EVENT_CHANGE);
  }

  onInit(): void {
    SegmentedControl.setActivePosition(this.parent, this.items);
  }

  onResize(): void {
    this.parent.style.transition = 'none';
    SegmentedControl.setActivePosition(this.parent, this.items);
    this.parent.style.transition = '';
    EventHandler.trigger(this.parent, EVENT_RESIZE);
  }

  addEventListeners(): void {
    EventHandler.on(window, 'resize', this.onResize.bind(this));

    for (const item of this.items) {
      const input = SelectorEngine.findOne(SELECTOR_INPUT, item);

      if (input) {
        EventHandler.on(input, 'change', this.onChange.bind(this));
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
