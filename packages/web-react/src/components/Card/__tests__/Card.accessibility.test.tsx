import { render } from '@testing-library/react';
import React from 'react';
import { accessibilityTest, guardMissingSelector, runAxe } from '@local/tests';
import Card from '../Card';
import CardBody from '../CardBody';
import CardTitle from '../CardTitle';

jest.mock('../../../hooks/useIcon');

describe('Card accessibility', () => {
  const cardContent = (
    <CardBody>
      <CardTitle isHeading>Card Title</CardTitle>
      <p>Card content goes here.</p>
    </CardBody>
  );

  accessibilityTest((props) => <Card {...props}>{cardContent}</Card>, 'article');

  it('should be accessible with custom element type', async () => {
    const { container } = render(<Card elementType="section">{cardContent}</Card>);

    const card = container.querySelector('section');
    guardMissingSelector('section', card);

    const results = await runAxe(card);

    expect(results).toHaveNoAxeViolations();
  });

  it('should be accessible in horizontal layout', async () => {
    const { container } = render(<Card direction="horizontal">{cardContent}</Card>);

    const card = container.querySelector('article');
    guardMissingSelector('article', card);

    const results = await runAxe(card);

    expect(results).toHaveNoAxeViolations();
  });

  it('should be accessible when boxed', async () => {
    const { container } = render(<Card isBoxed>{cardContent}</Card>);

    const card = container.querySelector('article');
    guardMissingSelector('article', card);

    const results = await runAxe(card);

    expect(results).toHaveNoAxeViolations();
  });
});
