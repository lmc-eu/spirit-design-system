import React from 'react';
import Alert from '../Alert';
import { AlertDangerContent, AlertInfoContent, AlertSuccessContent, AlertWarningContent } from './AlertContents';

const AlertIcons = () => (
  <>
    <Alert color="success" iconName="profile">
      <AlertSuccessContent />
    </Alert>

    <Alert color="informative" iconName="info">
      <AlertInfoContent />
    </Alert>

    <Alert color="warning" iconName="warning">
      <AlertWarningContent />
    </Alert>

    <Alert color="danger" iconName="close">
      <AlertDangerContent />
    </Alert>
  </>
);

export default AlertIcons;
