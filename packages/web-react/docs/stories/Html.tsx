/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Source } from '@storybook/addon-docs';

interface InfoProps {
  source: string;
}

const Info = ({ source }: InfoProps) => (
  <div>
    <Source code={source} />
  </div>
);

interface HtmlProps {
  storyId: string;
  groupId: string;
}

const Html = ({ storyId, groupId }: HtmlProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [componentSource, setComponentSource] = useState('');
  const elementId = `story--${groupId}-${storyId}--${storyId}`;

  useEffect(() => {
    setInterval(() => {
      const componentHtml = document.getElementById(elementId)?.innerHTML;
      if (componentHtml) {
        setComponentSource(componentHtml as string);
      }
      setIsDisplayed(true);
    }, 500);
  }, [elementId]);

  return componentSource ? <div>{isDisplayed && <Info source={componentSource} />}</div> : null;
};

export default Html;
