import React, { ChangeEvent, useEffect, useState } from 'react';
import { AlignmentXDictionaryType, AlignmentYDictionaryType, ToastColorType } from '../../../types';
import { Button } from '../../Button';
import { Checkbox } from '../../Checkbox';
import { Link } from '../../Link';
import { Radio } from '../../Radio';
import { Select } from '../../Select';
import { Stack } from '../../Stack';
import { TextArea } from '../../TextArea';
import { TextField } from '../../TextField';
import Toast from '../Toast';
import ToastBar from '../ToastBar';
import { ToastItem, ToastProvider } from '../ToastContext';
import { useToast } from '../useToast';

const ToastDynamicToastQueue = () => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [alignmentY, setAlignmentY] = useState<AlignmentYDictionaryType>('bottom');
  const [alignmentX, setAlignmentX] = useState<AlignmentXDictionaryType>('center');
  const [colorValue, setColorValue] = useState<ToastColorType>('inverted');
  const [hasIconValue, setHasIconValue] = useState(true);
  const [isDismissibleValue, setIsDismissibleValue] = useState(true);
  const [messageValue, setMessageValue] = useState('This is a new toast message.');

  const { queue, show, hide, clear, setQueue } = useToast();

  const defaultToastQueue: ToastItem[] = [
    {
      id: '1',
      isOpen: true,
      message: (
        <>
          I was first!{' '}
          <Link href="#" color="inverted" isUnderlined>
            Action
          </Link>
        </>
      ),
      color: 'success',
      hasIcon: true,
      isDismissible: true,
      iconName: undefined,
    },
    {
      id: '2',
      message: (
        <>
          I appeared later. This toast has a long message that wraps automatically.{' '}
          <Link href="#" color="inverted" isUnderlined>
            Action
          </Link>
        </>
      ),
      isOpen: true,
      color: 'informative',
      hasIcon: true,
      isDismissible: true,
      iconName: undefined,
    },
  ];

  useEffect(() => {
    setQueue(defaultToastQueue);
  }, []);

  const handleAlignmentYChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAlignmentY(event.target.value as AlignmentYDictionaryType);
  };

  const handleAlignmentXChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAlignmentX(event.target.value as AlignmentXDictionaryType);
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
          <Checkbox
            name="is-collapsible"
            id="toast-is-collapsible"
            label="Collapsible"
            isChecked={isCollapsible}
            onChange={() => setIsCollapsible(!isCollapsible)}
          />
        </fieldset>
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
          <legend className="mb-500">New Toast:</legend>
          <Stack hasSpacing>
            <Select
              label="Color"
              name="color"
              id="toast-color"
              onChange={(e) => setColorValue(e.currentTarget.value as ToastColorType)}
            >
              <option value="inverted">Inverted</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="danger">Danger</option>
              <option value="informative">Informative</option>
            </Select>
            <Checkbox
              name="has-icon"
              id="toast-has-icon"
              label="Has icon"
              isChecked={hasIconValue}
              onChange={() => setHasIconValue(!hasIconValue)}
            />
            <Checkbox
              name="is-dismissible"
              id="toast-is-dismissible"
              label="Dismissible"
              isChecked={isDismissibleValue}
              onChange={() => setIsDismissibleValue(!isDismissibleValue)}
            />
            <TextArea
              label="Message"
              name="content"
              id="toast-content"
              helperText="Can contain HTML."
              value={messageValue}
              onChange={(e) => setMessageValue(e.currentTarget.value)}
            />
            <div>
              <Button
                onClick={() => {
                  show(messageValue, `my-dynamic-toast-${Date.now().toString()}`, {
                    color: colorValue,
                    hasIcon: hasIconValue,
                    isDismissible: isDismissibleValue,
                  });
                }}
              >
                Add
              </Button>{' '}
              <Button color="secondary" onClick={() => clear()}>
                Clear queue
              </Button>
            </div>
          </Stack>
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

      <Toast alignmentX={alignmentX} alignmentY={alignmentY} isCollapsible={isCollapsible}>
        {queue.map((item) => {
          const { color, iconName, id, isOpen, message, hasIcon, isDismissible } = item;

          return (
            <ToastBar
              key={id}
              id={id}
              color={color}
              hasIcon={hasIcon}
              iconName={iconName}
              isDismissible={isDismissible}
              onClose={() => hide(id)}
              isOpen={!!isOpen && !!message}
            >
              {message}
            </ToastBar>
          );
        })}
      </Toast>
    </>
  );
};

const ToastDynamicToastQueueWithProvider = () => (
  <ToastProvider>
    <ToastDynamicToastQueue />
  </ToastProvider>
);

export default ToastDynamicToastQueueWithProvider;
