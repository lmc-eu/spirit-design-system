import React from 'react';
import Alert from '../Alert';
import { AlertInfoContent, AlertSuccessContent, AlertWarningContent, AlertDangerContent } from './AlertContents';

const AlertCentered = () => (
  <>
    <Alert color="success" isCentered>
      <AlertSuccessContent />
    </Alert>

    <Alert color="informative" isCentered>
      <AlertInfoContent />
    </Alert>

    <Alert color="warning" isCentered>
      <AlertWarningContent />
    </Alert>

    <Alert color="danger" isCentered>
      <AlertDangerContent />
    </Alert>
  </>
);

export default AlertCentered;
