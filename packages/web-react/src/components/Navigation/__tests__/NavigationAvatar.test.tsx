import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest } from '@local/tests';
import { Icon } from '../../Icon';
import NavigationAvatar from '../NavigationAvatar';

const avatarContentMock = <Icon name="profile" boxSize={20} />;

describe('NavigationAvatar', () => {
  classNamePrefixProviderTest(NavigationAvatar, 'NavigationAvatar');

  stylePropsTest(NavigationAvatar);

  restPropsTest(NavigationAvatar, 'a');

  describe('default props', () => {
    beforeEach(() => {
      render(
        <NavigationAvatar avatarContent={avatarContentMock} href="/">
          Content
        </NavigationAvatar>,
      );
    });

    it('should have default classname', () => {
      expect(screen.getByRole('link')).toHaveClass('NavigationAvatar');
    });

    it('should render avatarContent', () => {
      const avatarContentElement = screen.getByRole('link').firstChild;

      expect(avatarContentElement).toHaveClass('Avatar Avatar--small');
      expect(avatarContentElement?.firstChild).toContainHTML('svg');
    });

    it('should render children', () => {
      expect(screen.getByRole('link')).toHaveTextContent('Content');
    });
  });

  it('should have square classname', () => {
    render(
      <NavigationAvatar avatarContent={avatarContentMock} href="/" isSquare>
        Content
      </NavigationAvatar>,
    );

    expect(screen.getByRole('link')).toHaveClass('NavigationAvatar--square');
  });

  it('should have correct elementType', () => {
    render(
      <NavigationAvatar avatarContent={avatarContentMock} elementType="button">
        Content
      </NavigationAvatar>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
