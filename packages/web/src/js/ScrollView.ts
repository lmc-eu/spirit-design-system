// The `ScrollView` component is currently untested. This is because it is not possible to test it in a headless
// environment (tests fail on `getBoundingClientRect` that we need to mock somehow).

import BaseComponent from './BaseComponent';
import { EventHandler, SelectorEngine } from './dom';
import { debounce, enableToggleAutoloader } from './utils';

export const Alignment = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom',
} as const;

export type AlignmentKeys = keyof typeof Alignment;
export type AlignmentType = (typeof Alignment)[AlignmentKeys];

export const Direction = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export type DirectionKeys = keyof typeof Direction;
export type DirectionType = (typeof Direction)[DirectionKeys];

type CurrentPosition = {
  [key in AlignmentType]: number;
};

const NAME = 'scrollView';
const DEBOUNCE_DELAY_MS = 50;
const DEFAULT_DIRECTION = Direction.VERTICAL;
const SELECTOR_VIEWPORT = '[data-spirit-element="viewport"]';
const SELECTOR_CONTENT = '[data-spirit-element="content"]';
const CLASS_NAME_IS_SCROLLED_AT_START = 'is-scrolled-at-start';
const CLASS_NAME_IS_SCROLLED_AT_END = 'is-scrolled-at-end';
const EVENT_RESIZE = 'resize';
const EVENT_SCROLL = 'scroll';

// Method `getElementsPositionDifference` sometimes returns floating point values that results in inaccurate detection
// of start/end. It is necessary to accept this inaccuracy and take every value less or equal to 1px as start/end.
const EDGE_DETECTION_INACCURACY_PX = 1;

class ScrollView extends BaseComponent {
  content: SpiritElement;
  currentPosition: CurrentPosition;
  direction: DirectionType;
  isScrolledAtEnd: boolean;
  isScrolledAtStart: boolean;
  scrollPositionEnd: AlignmentType;
  scrollPositionStart: AlignmentType;
  viewport: SpiritElement;

  static get NAME(): string {
    return NAME;
  }

  static get DATA_KEY(): string {
    return `${this.NAME}`;
  }

  constructor(element: SpiritElement) {
    super(element);

    this.currentPosition = {
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
    };
    this.direction = this.element.dataset?.spiritDirection
      ? <DirectionType>String(this.element.dataset.spiritDirection)
      : DEFAULT_DIRECTION;

    this.content = SelectorEngine.findOne(SELECTOR_CONTENT, this.element);
    this.viewport = SelectorEngine.findOne(SELECTOR_VIEWPORT, this.element);

    this.scrollPositionStart = this.direction === Direction.HORIZONTAL ? Alignment.LEFT : Alignment.TOP;
    this.scrollPositionEnd = this.direction === Direction.HORIZONTAL ? Alignment.RIGHT : Alignment.BOTTOM;

    this.isScrolledAtStart = false;
    this.isScrolledAtEnd = false;

    this.init();
  }

  addEventListeners(): void {
    EventHandler.on(this.viewport, EVENT_SCROLL, debounce(this.handleScrollViewState, DEBOUNCE_DELAY_MS));
    EventHandler.on(window, EVENT_RESIZE, debounce(this.handleScrollViewState, DEBOUNCE_DELAY_MS));
  }

  getElementsPositionDifference = (): CurrentPosition => {
    const contentPosition: DOMRect = this.content.getBoundingClientRect();
    const viewportPosition: DOMRect = this.viewport.getBoundingClientRect();

    return {
      bottom: contentPosition.bottom - viewportPosition.bottom,
      left: contentPosition.left - viewportPosition.left,
      right: contentPosition.right - viewportPosition.right,
      top: contentPosition.top - viewportPosition.top,
    };
  };

  handleScrollViewState = (): void => {
    this.currentPosition = this.getElementsPositionDifference();

    const isScrolledAtStartActive = this.currentPosition[this.scrollPositionStart] <= -1 * EDGE_DETECTION_INACCURACY_PX;
    const isScrolledAtEndActive = this.currentPosition[this.scrollPositionEnd] >= EDGE_DETECTION_INACCURACY_PX;

    if (isScrolledAtStartActive !== this.isScrolledAtStart) {
      this.isScrolledAtStart = isScrolledAtStartActive;
    }

    if (isScrolledAtEndActive !== this.isScrolledAtEnd) {
      this.isScrolledAtEnd = isScrolledAtEndActive;
    }

    if (isScrolledAtStartActive) {
      this.element.classList.add(CLASS_NAME_IS_SCROLLED_AT_START);
    } else {
      this.element.classList.remove(CLASS_NAME_IS_SCROLLED_AT_START);
    }

    if (isScrolledAtEndActive) {
      this.element.classList.add(CLASS_NAME_IS_SCROLLED_AT_END);
    } else {
      this.element.classList.remove(CLASS_NAME_IS_SCROLLED_AT_END);
    }
  };

  init(): void {
    this.addEventListeners();
    this.handleScrollViewState();
  }
}

enableToggleAutoloader(ScrollView);

export default ScrollView;
