import React from 'react';
import Alert from '../Alert';
import { AlertInfoContent, AlertSuccessContent, AlertWarningContent, AlertDangerContent } from './AlertContents';

const AlertColors = () => (
  <>
    <Alert color="success">
      <AlertSuccessContent />
    </Alert>

    <Alert color="informative">
      <AlertInfoContent />
    </Alert>

    <Alert color="warning">
      <AlertWarningContent />
    </Alert>

    <Alert color="danger">
      <AlertDangerContent />
    </Alert>
  </>
);

export default AlertColors;
