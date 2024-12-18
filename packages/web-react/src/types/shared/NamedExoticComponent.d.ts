/* eslint-disable @typescript-eslint/ban-types */

import type { ExoticComponent, FC, StaticLifecycle } from 'react';

declare global {
  namespace React {
    interface NamedExoticComponent<P = {}> extends ExoticComponent<P> {
      spiritComponent?: string;
    }

    interface FunctionComponent<P = {}> extends FC<P> {
      spiritComponent?: string;
    }

    interface ComponentClass<P = {}, S = {}> extends StaticLifecycle<P, S> {
      spiritComponent?: string;
    }
  }
}
