import React, { useState } from 'react';
import { Select, Stack, TextField } from '../..';
import { type TruncateMode, TruncateModes } from '../../../types';
import UNSTABLE_Truncate from '../UNSTABLE_Truncate';

const TruncateDefault = () => {
  const [mode, setMode] = useState<TruncateMode>(TruncateModes.LINES);
  const [limit, setLimit] = useState(3);

  const sampleText =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla. Vivamus ac leo pretium faucibus. Pellentesque pretium lectus id turpis. Maecenas lorem. Maecenas sollicitudin. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Suspendisse sagittis ultrices augue. Aenean fermentum risus id tortor. Etiam bibendum elit eget erat. Nulla quis diam. Donec iaculis gravida nulla. Nulla pulvinar eleifend sem. Fusce aliquam vestibulum ipsum. Sed ac dolor sit amet purus malesuada congue. In dapibus augue non sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nam sed tellus id magna elementum tincidunt.';

  const modeOptions = [
    { value: TruncateModes.LINES, label: 'Lines' },
    { value: TruncateModes.WORDS, label: 'Words' },
    { value: TruncateModes.CHARACTERS, label: 'Characters' },
  ];

  const getLimitLabel = () => {
    switch (mode) {
      case TruncateModes.LINES:
        return 'Number of lines';
      case TruncateModes.WORDS:
        return 'Number of words';
      case TruncateModes.CHARACTERS:
        return 'Number of characters';
      default:
        return 'Limit';
    }
  };

  return (
    <Stack hasSpacing>
      <form>
        <Stack elementType="fieldset" hasSpacing UNSAFE_className="border-0">
          <Select
            value={mode}
            onChange={(e) => setMode(e.currentTarget.value as TruncateMode)}
            label="Truncation mode"
            name="modeType"
            id="truncate-mode"
          >
            {modeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <TextField
            type="number"
            min="1"
            value={limit}
            onChange={(e) => setLimit(Number(e.currentTarget.value))}
            label={getLimitLabel()}
            name="limitNumber"
            id="truncate-limit"
          />
        </Stack>
      </form>
      <UNSTABLE_Truncate limit={limit} mode={mode}>
        {sampleText}
      </UNSTABLE_Truncate>
    </Stack>
  );
};

export default TruncateDefault;
