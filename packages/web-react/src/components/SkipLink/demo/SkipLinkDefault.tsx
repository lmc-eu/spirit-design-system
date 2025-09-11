import React from 'react';
import { SkipLink } from '../../..';

const SkipLinkDefault = (): JSX.Element => (
  <>
    <SkipLink href="#skiplink-demo-main-content">Skip to demo main content</SkipLink>

    <p>
      To show the skip links, you can use the keyboard shortcut <kbd>Tab</kbd> to focus on the links. To select a link,
      press the key <kbd>Enter</kbd>.
    </p>

    <section id="skiplink-demo-main-content" className="py-900 py-tablet-1000">
      <h3 className="typography-heading-xsmall-semibold mb-700">
        This is the main content area for the demonstration purpose.
      </h3>
      <div className="docs-Box docs-Box--multiline py-1400 py-tablet-1600">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quisquam, saepe. A accusamus aliquid
          distinctio, ducimus earum exercitationem fuga id in iste natus nesciunt officiis pariatur possimus quam
          recusandae velit.
        </p>
      </div>
    </section>
  </>
);

export default SkipLinkDefault;
