import { RenderResult } from '@testing-library/react';

const getElement = (dom: RenderResult, testId: string | undefined) =>
  testId ? (dom.getByTestId(testId) as HTMLElement) : (dom.container.firstChild as HTMLElement);

export default getElement;
