import { render, waitFor } from '@testing-library/react';
import React, { ComponentType } from 'react';
import getElement from '../testUtils/getElement';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stylePropsTest = (Component: ComponentType<any>, testId?: string) => {
  it('renders class with UNSAFE_className', async () => {
    const testClassName = 'test-class';
    const dom = render(<Component UNSAFE_className={testClassName} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveClass(testClassName);
    });
  });

  it('renders style with UNSAFE_style', async () => {
    const testStyle = { color: 'red' };
    const dom = render(<Component UNSAFE_style={testStyle} />);

    await waitFor(() => {
      const element = getElement(dom, testId);
      expect(element).toHaveStyle(testStyle);
    });
  });

  it('should warn when using unsupported `style` prop', async () => {
    const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

    const testStyle = { color: 'red' };
    render(<Component style={testStyle} />);

    await waitFor(() =>
      expect(consoleWarnMock).toHaveBeenCalledWith(
        'Warning: The style prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      ),
    );

    consoleWarnMock.mockRestore();
  });

  it('should warn when using unsupported `className` prop', async () => {
    const consoleWarnMock = jest.spyOn(global.console, 'warn').mockImplementation();

    const testClassName = 'test-class';
    render(<Component className={testClassName} />);

    await waitFor(() =>
      expect(consoleWarnMock).toHaveBeenCalledWith(
        'Warning: The className prop is unsafe and is unsupported in Spirit Web React. Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. Note that this may break in future versions due to DOM structure changes.',
      ),
    );

    consoleWarnMock.mockRestore();
  });
};
