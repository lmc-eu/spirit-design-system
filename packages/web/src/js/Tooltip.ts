import * as FloatingUI from '@floating-ui/dom';
import BaseComponent from './BaseComponent';
import EventHandler from './dom/EventHandler';
import SelectorEngine from './dom/SelectorEngine';
import { enableDismissTrigger, enableToggleTrigger, SpiritConfig } from './utils';

const NAME = 'tooltip';
const DATA_KEY = 'tooltip';
const EVENT_KEY = `.${DATA_KEY}`;

const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;

const SELECTOR_ARROW = '[data-spirit-element="arrow"]';
const CLASS_NAME_VISIBLE = 'is-visible';
const CLASS_NAME_HIDDEN = 'is-hidden';

type Config = {
  enableFlipping: boolean;
  enableShifting: boolean;
  enableSizing: boolean;
  enableFlippingCrossAxis: boolean;
  flipFallbackAxisSideDirection: 'none' | 'start' | 'end';
  flipFallbackPlacements: string;
  placement: FloatingUI.Placement;
  placementControlled: boolean;
};

export const transformStringToArray = (str: string) =>
  str.split(',').map((item) => item.trim()) as FloatingUI.Placement[];

class Tooltip extends BaseComponent {
  arrow?: HTMLElement;
  arrowCornerOffset?: number;
  tip: HTMLElement;
  tooltipComputedStyle?: CSSStyleDeclaration;
  tooltipMaxWidth?: number;
  tooltipOffset?: number;
  trigger?: HTMLElement;

  constructor(element: SpiritElement, config?: SpiritConfig) {
    if (typeof FloatingUI === 'undefined') {
      throw new TypeError('Floating UI dependency is missing. Please, install it (https://floating-ui.com/)');
    }

    super(element, config);

    this.tip = this.getTipElement();

    if (this.isPlacementControlled()) {
      this.trigger = this.getTipTooltipWrapper();
      this.arrow = this.tip.querySelector(SELECTOR_ARROW) as HTMLElement;
      this.tooltipComputedStyle = window.getComputedStyle(this.tip); // The tooltip computed style
      this.tooltipMaxWidth = parseInt(this.tooltipComputedStyle.maxWidth, 10); // The tooltip max width
      this.tooltipOffset = parseInt(this.tooltipComputedStyle.getPropertyValue('--tooltip-offset'), 10); // The tooltip offset
      this.arrowCornerOffset =
        this.arrow &&
        parseInt(window.getComputedStyle(this.arrow).getPropertyValue('--tooltip-arrow-corner-offset'), 10); // The tooltip arrow corner offset

      if (this.tip && this.trigger) {
        FloatingUI.autoUpdate(
          this.trigger,
          this.tip,
          () => this.trigger && this.updateTooltipPosition(this.trigger, this.tip),
        );
      }
    }
  }

  static get NAME() {
    return NAME;
  }

  toggle() {
    if (this.isShown()) {
      this.hide();
    } else {
      this.show();
    }
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

    const triggerWrapperElement = document
      .getElementById(id)
      ?.closest('[data-spirit-element="tooltip-wrapper"]') as HTMLElement;

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

    return (
      tooltipFloatingProps.shift &&
      shift({
        limiter: limitShift({
          offset: ({ rects }) => ({
            mainAxis: rects.reference.height,
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
}

enableToggleTrigger(Tooltip, 'toggle');
enableDismissTrigger(Tooltip, 'hide');

export default Tooltip;
