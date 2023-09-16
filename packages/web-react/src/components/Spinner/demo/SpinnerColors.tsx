import React from 'react';
import DocsBox from '../../../../docs/DocsBox';
import Spinner from '../Spinner';

const SpinnerColors = () => (
  <>
    <Spinner />

    <Spinner color="primary" />

    <Spinner color="secondary" />

    <DocsBox>
      <Spinner color="primary-inverted" />
    </DocsBox>

    <DocsBox>
      <Spinner color="secondary-inverted" />
    </DocsBox>
  </>
);

export default SpinnerColors;
