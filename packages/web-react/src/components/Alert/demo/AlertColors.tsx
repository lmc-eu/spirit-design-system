import React from 'react';
import Alert from '../Alert';
import { AlertDangerContent, AlertInfoContent, AlertSuccessContent, AlertWarningContent } from './AlertContents';

const AlertColors = () => (
  <>
    <Alert color="success">
      <AlertSuccessContent />
    </Alert>

    <Alert color="close">
      <AlertInfoContent />
    </Alert>

    <Alert color="close">
      <AlertWarningContent />
    </Alert>

    <Alert color="close">
      <AlertDangerContent />
    </Alert>
  </>
);

export default AlertColors;
