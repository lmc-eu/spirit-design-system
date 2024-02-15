import * as FloatingUI from '@floating-ui/dom';
import BaseComponent from './BaseComponent';
import { EventHandler, SelectorEngine } from './dom';
import { SpiritConfig, clickOutsideElement, enableDismissTrigger, enableToggleAutoloader } from './utils';

const NAME = 'tooltip';
const DATA_KEY = 'tooltip';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const EVENT_CLICK = 'click';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';

const TRIGGER_HOVER = 'hover';
const TRIGGER_CLICK = 'click';

const SELECTOR_ARROW = '[data-spirit-element="arrow"]';
const SELECTOR_WRAPPER = '[data-spirit-element="tooltip-wrapper"]';
const CLASS_NAME_VISIBLE = 'is-visible';
const CLASS_NAME_HIDDEN = 'is-hidden';

type Config = {
  enableFlipping: boolean;
  enableFlippingCrossAxis: boolean;
  enableShifting: boolean;
  enableSizing: boolean;
  flipFallbackAxisSideDirection: 'none' | 'start' | 'end';
  flipFallbackPlacements: string;
  placement: FloatingUI.Placement;
  placementControlled: boolean;
  trigger: string;
};

export const transformStringToArray = (str: string) =>
  str.split(',').map((item) => item.trim()) as FloatingUI.Placement[];

class Tooltip extends BaseComponent {
  activeTrigger: { [key: string]: boolean };
  arrow?: HTMLElement;
  arrowCornerOffset?: number;
  arrowWidth?: number;
  isHovered: boolean;
  isToggled: boolean;
  tip: HTMLElement;
  tooltipComputedStyle?: CSSStyleDeclaration;
  tooltipMaxWidth?: number;
  tooltipOffset?: number;
  trigger?: HTMLElement;
  triggers?: string[];

  constructor(element: SpiritElement, config?: SpiritConfig) {
    if (typeof FloatingUI === 'undefined') {
      throw new TypeError('Floating UI dependency is missing. Please, install it (https://floating-ui.com/)');
    }
    super(element, config);

    this.activeTrigger = {};
    this.isHovered = false;
    this.isToggled = false;
    this.tip = this.getTipElement();
    this.triggers = this.getTriggers();

    if (this.isPlacementControlled()) {
      this.trigger = this.getTipTooltipWrapper();
      this.arrow = this.tip.querySelector(SELECTOR_ARROW) as HTMLElement;
      this.tooltipComputedStyle = window.getComputedStyle(this.tip); // The tooltip computed style
      this.tooltipMaxWidth = parseInt(this.tooltipComputedStyle.maxWidth, 10); // The tooltip max width
      this.tooltipOffset = parseInt(this.tooltipComputedStyle.getPropertyValue('--tooltip-offset'), 10); // The tooltip offset
      this.arrowCornerOffset =
        this.arrow &&
        parseInt(window.getComputedStyle(this.arrow).getPropertyValue('--tooltip-arrow-corner-offset'), 10); // The tooltip arrow corner offset
      this.arrowWidth = this.arrow && parseInt(window.getComputedStyle(this.arrow).getPropertyValue('width'), 10); // The tooltip arrow width

      if (this.tip && this.trigger) {
        FloatingUI.autoUpdate(
          this.trigger,
          this.tip,
          () => this.trigger && this.updateTooltipPosition(this.trigger, this.tip),
        );
      }
    }

    this.addEventListeners();
  }

  static get NAME() {
    return NAME;
  }

  getTriggers() {
    const config = this.config as Config;
    const defaultTriggers = [TRIGGER_CLICK, TRIGGER_HOVER];

    return config.trigger ? transformStringToArray(config.trigger) : defaultTriggers;
  }

  toggle() {
    this.activeTrigger[TRIGGER_CLICK] = 'click' in this.activeTrigger ? !this.activeTrigger[TRIGGER_CLICK] : true;
    this.activeTrigger[TRIGGER_HOVER] = 'hover' in this.activeTrigger ? !this.activeTrigger[TRIGGER_HOVER] : true;

    if (this.isShown()) {
      this.leave();

      return;
    }

    this.enter();
  }

  isPlacementControlled() {
    const config = this.config as Config;
    const placementControlledKey = 'placementControlled';

    // key can exist in the dataset but can have undefined value
    return placementControlledKey in config && config[placementControlledKey] !== false;
  }

  updateConfig(newConfig: Partial<Config>) {
    const config = this.config as Config;

    if (this.trigger && this.tip) {
      this.config = { ...config, ...newConfig };
      this.updateTooltipPosition(this.trigger, this.tip);
    }
  }

  show() {
    if (this.element?.style?.display === 'none') {
      throw new Error('Please use show on elements without `display: none`');
    }

    const showEvent = EventHandler.trigger(this.element, Tooltip.eventName(EVENT_SHOW)) as Event;

    if (showEvent.defaultPrevented) {
      return;
    }

    this.element.setAttribute('aria-describedby', this.tip.getAttribute('id'));

    this.tip.classList.remove(CLASS_NAME_HIDDEN);

    // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
    if ('ontouchstart' in document.documentElement) {
      // Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
      // Argument of type 'Element' is not assignable to parameter of type 'ConcatArray<never>'.
      // @ts-expect-error No overload matches this call.
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', null);
      }
    }

    if (this.trigger && this.tip) {
      this.updateTooltipPosition(this.trigger, this.tip);
    }

    EventHandler.trigger(this.element, Tooltip.eventName(EVENT_SHOWN));
  }

  hide() {
    if (!this.isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this.element, Tooltip.eventName(EVENT_HIDE)) as Event;
    if (hideEvent.defaultPrevented) {
      return;
    }

    this.tip.classList.add(CLASS_NAME_HIDDEN);
    // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support
    if ('ontouchstart' in document.documentElement) {
      // Overload 1 of 2, '(...items: ConcatArray<never>[]): never[]', gave the following error.
      // Argument of type 'Element' is not assignable to parameter of type 'ConcatArray<never>'.
      // @ts-expect-error No overload matches this call.
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', null);
      }
    }

    this.activeTrigger[TRIGGER_CLICK] = false;
    this.activeTrigger[TRIGGER_HOVER] = false;
    this.isHovered = false;

    if (this.isWithActiveTrigger()) {
      return;
    }

    this.element.removeAttribute('aria-describedby');
    EventHandler.trigger(this.element, Tooltip.eventName(EVENT_HIDDEN));
  }

  isShown() {
    return (
      this.tip && (this.tip.classList?.contains(CLASS_NAME_VISIBLE) || !this.tip.classList?.contains(CLASS_NAME_HIDDEN))
    );
  }

  getTipTooltipWrapper() {
    const id = this.tip.getAttribute('id') as string;

    const triggerWrapperElement = document.getElementById(id)?.closest(SELECTOR_WRAPPER) as HTMLElement;

    return triggerWrapperElement;
  }

  getTipElement() {
    if (!this.tip) {
      this.tip =
        (SelectorEngine.findOne(this.element?.dataset?.spiritTarget) as HTMLElement) ||
        this.element ||
        this.element?.parentElement;
    }

    return this.tip;
  }

  getTooltipFloatingProps() {
    const {
      enableFlipping,
      enableShifting,
      enableSizing,
      enableFlippingCrossAxis,
      flipFallbackAxisSideDirection,
      flipFallbackPlacements,
      placement,
    } = this.config as Config;

    return {
      placement,
      flip: enableFlipping ?? true,
      shift: enableShifting ?? true,
      size: enableSizing ?? true,
      flipCrossAxis: enableFlippingCrossAxis ?? true,
      flipFallbackPlacements: flipFallbackPlacements && transformStringToArray(flipFallbackPlacements),
      flipFallbackAxisSideDirection: flipFallbackAxisSideDirection || 'none',
    };
  }

  getFlipConfig() {
    const { flip } = FloatingUI;
    const tooltipFloatingProps = this.getTooltipFloatingProps();
    const {
      flip: flipProp,
      flipCrossAxis,
      flipFallbackAxisSideDirection,
      flipFallbackPlacements,
    } = tooltipFloatingProps;

    return (
      flipProp &&
      flip({
        mainAxis: flipProp,
        crossAxis: flipCrossAxis,
        fallbackAxisSideDirection: flipFallbackAxisSideDirection,
        /* eslint-disable no-undefined */
        fallbackPlacements: flipFallbackPlacements || undefined,
      })
    );
  }

  getShiftConfig() {
    const { shift, limitShift } = FloatingUI;
    const tooltipFloatingProps = this.getTooltipFloatingProps();
    const mainAxisOffset = (this.arrowCornerOffset || 0) + (this.arrowWidth || 0);

    return (
      tooltipFloatingProps.shift &&
      shift({
        limiter: limitShift({
          offset: () => ({
            mainAxis: mainAxisOffset,
          }),
        }),
      })
    );
  }

  getSizeConfig(tooltip: HTMLElement) {
    const { size } = FloatingUI;
    const { tooltipMaxWidth } = this;
    const tooltipFloatingProps = this.getTooltipFloatingProps();

    if (tooltipFloatingProps.size && tooltipMaxWidth) {
      return size({
        apply({ availableWidth }: { availableWidth: number }) {
          Object.assign(tooltip.style, {
            maxWidth: `${tooltipMaxWidth < availableWidth ? tooltipMaxWidth : availableWidth}px`,
          });
        },
      });
    }

    return null;
  }

  getTrigger() {
    const id = this.tip && (this.tip.getAttribute('id') as string);

    return document.querySelector(`[data-spirit-target="#${id}"]`) as HTMLElement;
  }

  updateTooltipPosition(button: HTMLElement, tooltip: HTMLElement) {
    const { computePosition, offset: floatingOffset, arrow: floatingArrow } = FloatingUI;
    const { tooltipOffset, arrowCornerOffset, arrow } = this;
    const { placement: userPlacement } = this.getTooltipFloatingProps();

    const hasFlip = this.getFlipConfig();
    const hasShift = this.getShiftConfig();
    const hasSize = this.getSizeConfig(tooltip);

    if (button && tooltip && arrow) {
      computePosition(button, tooltip, {
        placement: userPlacement,
        middleware: [
          floatingOffset(tooltipOffset),
          hasFlip,
          hasShift,
          hasSize,
          floatingArrow({ element: arrow, padding: arrowCornerOffset }), // arrow() should be placed at the end
        ],
      }).then(({ x, y, middlewareData, placement }) => {
        Object.assign(tooltip.style, {
          top: `${y}px`,
          left: `${x}px`,
        });

        const side = placement.split('-')[0];

        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[side] as 'top' | 'right' | 'bottom' | 'left';

        if (middlewareData.arrow && arrow) {
          const offset =
            staticSide === 'top' || staticSide === 'bottom'
              ? arrow.offsetHeight
              : (arrow.offsetHeight + arrow.offsetWidth) / 2;

          const { x: arrowX, y: arrowY } = middlewareData.arrow;

          Object.assign(arrow.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null ? `${arrowY}px` : '',
            bottom: '',
            right: '',
            [staticSide]: `-${Math.floor(offset)}px`,
          });
        }

        tooltip.dataset.spiritPlacement = placement;
      });
    }
  }

  autoCloseHandler = (event: Event) => {
    const trigger = this.getTrigger();

    const shouldClose = trigger && clickOutsideElement(trigger, event) && event.target !== this.tip;
    if (event.target && shouldClose) {
      this.activeTrigger[TRIGGER_CLICK] = false;
      this.activeTrigger[TRIGGER_HOVER] = false;
      this.leave();
    }
  };

  isWithActiveTrigger() {
    return Object.values(this.activeTrigger).includes(true);
  }

  enter() {
    if (this.isShown() || this.isHovered) {
      this.isHovered = true;

      return;
    }

    this.isHovered = true;

    this.show();
  }

  leave() {
    if (this.isWithActiveTrigger()) {
      return;
    }

    this.isHovered = false;

    this.hide();
  }

  addEventListeners() {
    if (this.triggers?.includes(TRIGGER_CLICK)) {
      this.addClickEventListeners();
    }

    if (this.triggers?.includes(TRIGGER_HOVER)) {
      this.addMouseEventListeners();
    }
  }

  addClickEventListeners() {
    const trigger = this.getTrigger();

    EventHandler.on(document, EVENT_CLICK, (event: Event) => this.autoCloseHandler(event));

    EventHandler.on(trigger, EVENT_CLICK, () => {
      const context = Tooltip.getOrCreateInstance(this.element as HTMLElement);
      context.toggle();
    });
  }

  addMouseEventListeners() {
    const trigger = this.getTrigger();

    EventHandler.on(trigger, EVENT_MOUSEENTER, () => {
      const context = Tooltip.getOrCreateInstance(this.element as HTMLElement);
      context.activeTrigger[TRIGGER_HOVER] = true;
      context.enter();
    });

    EventHandler.on(trigger, EVENT_MOUSELEAVE, () => {
      const context = Tooltip.getOrCreateInstance(this.element as HTMLElement);
      context.activeTrigger[TRIGGER_HOVER] = false;
      context.leave();
    });
  }
}

enableToggleAutoloader(Tooltip, undefined, 'target');
enableDismissTrigger(Tooltip, 'hide');

export default Tooltip;
