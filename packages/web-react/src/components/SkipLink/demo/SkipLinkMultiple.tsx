import React from 'react';
import { SkipLink } from '../../..';

const SkipLinkMultiple = (): JSX.Element => (
  <div>
    <nav aria-label="Skip links">
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#footer-content">Skip to footer content</SkipLink>
    </nav>
    <p>
      To show the skip links, you can use the keyboard shortcut <kbd>Tab</kbd> to focus on the links. To select a link,
      press the key <kbd>Enter</kbd>.
    </p>
    <section id="main-content" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>This is the main content area for the demonstration purpose.</h3>
      <div style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure quisquam, saepe. A accusamus aliquid
          distinctio, ducimus earum exercitationem fuga id in iste natus nesciunt officiis pariatur possimus quam
          recusandae velit.
        </p>
      </div>
    </section>
    <footer id="footer-content" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc' }}>
      <h3>This is the footer content area for the demonstration purpose.</h3>
      <div style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
        <p>
          Footer content goes here. This is where you would typically place copyright information, links, and other
          footer-related content.
        </p>
      </div>
    </footer>
  </div>
);

export default SkipLinkMultiple;
