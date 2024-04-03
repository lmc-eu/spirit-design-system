import React, { ChangeEvent, useState } from 'react';
import { AlignmentXDictionaryType, AlignmentYDictionaryType } from '../../../types';
import { Button } from '../../Button';
import { Link } from '../../Link';
import { Radio } from '../../Radio';
import { TextField } from '../../TextField';
import Toast from '../Toast';
import ToastBar from '../ToastBar';

const ToastAlignment = () => {
  const [isOpenFirst, setIsOpenFirst] = React.useState(true);
  const [isOpenSecond, setIsOpenSecond] = React.useState(true);
  const [isOpenThird, setIsOpenThird] = React.useState(false);
  const [alignmentY, setAlignmentY] = useState<AlignmentYDictionaryType>('bottom');
  const [alignmentX, setAlignmentX] = useState<AlignmentXDictionaryType>('center');

  const buttonLabel = isOpenThird ? 'Hide the showed toast' : 'Show the hidden toast';

  const handleAlignmentYChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlignmentY(e.target.value as AlignmentYDictionaryType);
  };

  const handleAlignmentXChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAlignmentX(e.target.value as AlignmentXDictionaryType);
  };

  // Experimental, Chrome 94+ on Android only:
  // Enable CSS to detect the presence of virtual keyboard.
  if ('virtualKeyboard' in navigator) {
    // @ts-expect-error 'navigator.virtualKeyboard' is of type 'unknown'.
    navigator.virtualKeyboard.overlaysContent = true;
  }

  return (
    <>
      <form>
        <fieldset style={{ border: 0 }}>
          <legend>Vertical alignment:</legend>
          <Radio
            name="alignmentY"
            isChecked={alignmentY === 'top'}
            onChange={handleAlignmentYChange}
            id="alignmentY-top"
            label="Top"
            value="top"
            marginRight="space-600"
          />{' '}
          <Radio
            name="alignmentY"
            isChecked={alignmentY === 'bottom'}
            onChange={handleAlignmentYChange}
            id="alignmentY-bottom"
            label="Bottom"
            value="bottom"
            marginRight="space-600"
          />
        </fieldset>

        <fieldset style={{ border: 0 }}>
          <legend>Horizontal alignment:</legend>
          <Radio
            name="alignmentX"
            isChecked={alignmentX === 'left'}
            onChange={handleAlignmentXChange}
            id="alignmentX-left"
            label="Left"
            value="left"
            marginRight="space-600"
          />{' '}
          <Radio
            name="alignmentX"
            isChecked={alignmentX === 'center'}
            onChange={handleAlignmentXChange}
            id="alignmentX-center"
            label="Center"
            value="center"
            marginRight="space-600"
          />{' '}
          <Radio
            name="alignmentX"
            isChecked={alignmentX === 'right'}
            onChange={handleAlignmentXChange}
            id="alignmentX-right"
            label="Right"
            value="right"
            marginRight="space-600"
          />
        </fieldset>
      </form>

      <form>
        <fieldset style={{ border: 0 }}>
          <legend className="mb-500">Virtual keyboard interaction:</legend>
          <TextField
            id="text-field-for-focus"
            label="In Chrome on Android, tap into this text field to see how Toast position updates:"
            name="default"
            placeholder="Tap here!"
          />
        </fieldset>
      </form>

      <fieldset style={{ border: 0 }}>
        <legend className="mb-500">Show the toast prepared in the DOM:</legend>
        <Button onClick={() => setIsOpenThird(!isOpenThird)} aria-expanded={isOpenThird} aria-controls="third-toastbar">
          {buttonLabel}
        </Button>
      </fieldset>

      <Toast alignmentX={alignmentX} alignmentY={alignmentY}>
        <ToastBar
          id="first-toastbar"
          isOpen={isOpenFirst}
          onClose={() => setIsOpenFirst(false)}
          color="success"
          hasIcon
          isDismissible
        >
          I was first!
          <Link href="#" color="inverted" isUnderlined>
            Action
          </Link>
        </ToastBar>
        <ToastBar
          id="second-toastbar"
          isOpen={isOpenSecond}
          onClose={() => setIsOpenSecond(false)}
          color="informative"
          hasIcon
          isDismissible
        >
          I appeared later. This toast has a long message that wraps automatically.
          <Link href="#" color="inverted" isUnderlined>
            Action
          </Link>
        </ToastBar>
        <ToastBar
          id="third-toastbar"
          isOpen={isOpenThird}
          onClose={() => setIsOpenThird(false)}
          color="warning"
          hasIcon
          isDismissible
        >
          I was hidden and you exposed me!
        </ToastBar>
      </Toast>
    </>
  );
};

export default ToastAlignment;
