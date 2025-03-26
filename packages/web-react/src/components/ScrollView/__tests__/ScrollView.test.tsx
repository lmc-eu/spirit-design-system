import '@testing-library/jest-dom';
import React from 'react';
import { classNamePrefixProviderTest, restPropsTest, stylePropsTest, validHtmlAttributesTest } from '@local/tests';
import ScrollView from '../ScrollView';

describe('ScrollView', () => {
  classNamePrefixProviderTest(ScrollView, 'ScrollView');

  stylePropsTest((props) => <ScrollView {...props} />);

  restPropsTest(ScrollView, 'div');

  validHtmlAttributesTest(ScrollView);
});
