import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import UNSTABLE_Table from '../UNSTABLE_Table';

describe('UNSTABLE_Table', () => {
  classNamePrefixProviderTest(UNSTABLE_Table, 'UNSTABLE_Table');

  stylePropsTest(UNSTABLE_Table);

  restPropsTest(UNSTABLE_Table, 'table');

  it('should render children', () => {
    const { container } = render(
      <UNSTABLE_Table>
        <thead>
          <tr>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data</td>
          </tr>
        </tbody>
      </UNSTABLE_Table>,
    );

    expect(container.querySelector('table')).toBeInTheDocument();
    expect(container.querySelector('thead')).toBeInTheDocument();
    expect(container.querySelector('tbody')).toBeInTheDocument();
  });

  it('should have default className', () => {
    const { container } = render(<UNSTABLE_Table>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table');
  });

  it('should have striped className', () => {
    const { container } = render(<UNSTABLE_Table isStriped>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table--striped');
  });

  it('should have bordered className', () => {
    const { container } = render(<UNSTABLE_Table isBordered>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table--bordered');
  });

  it('should have compact className', () => {
    const { container } = render(<UNSTABLE_Table isCompact>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table--compact');
  });

  it('should have hoverable className', () => {
    const { container } = render(<UNSTABLE_Table isHoverable>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table--hoverable');
  });

  it('should have responsive className', () => {
    const { container } = render(<UNSTABLE_Table isResponsive>Content</UNSTABLE_Table>);

    expect(container.querySelector('table')).toHaveClass('UNSTABLE_Table--responsive');
  });

  it('should have multiple modifier classNames', () => {
    const { container } = render(
      <UNSTABLE_Table isStriped isBordered isHoverable>
        Content
      </UNSTABLE_Table>,
    );

    const table = container.querySelector('table');
    expect(table).toHaveClass('UNSTABLE_Table--striped');
    expect(table).toHaveClass('UNSTABLE_Table--bordered');
    expect(table).toHaveClass('UNSTABLE_Table--hoverable');
  });
});
