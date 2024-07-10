import React, { useState } from 'react';
import { TextField } from '../../TextField';
import UNSTABLE_Truncate from '../UNSTABLE_Truncate';

const TruncateDefault = () => {
  const [lines, setLines] = useState(3);

  return (
    <>
      <form>
        <fieldset style={{ border: 0 }}>
          <TextField
            type="number"
            min="1"
            max="10"
            value={lines}
            onChange={(e) => setLines(Number(e.currentTarget.value))}
            label="Number of truncated lines:"
            name="linesNumber"
            id="truncate-lines"
            helperText="Maximum number of lines for demo purposes is 10."
          />
        </fieldset>
      </form>
      <UNSTABLE_Truncate lines={lines}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla. Vivamus ac leo pretium faucibus.
        Pellentesque pretium lectus id turpis. Maecenas lorem. Maecenas sollicitudin. Nullam justo enim, consectetuer
        nec, ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Suspendisse sagittis ultrices augue. Aenean fermentum risus id
        tortor. Etiam bibendum elit eget erat. Nulla quis diam. Donec iaculis gravida nulla. Nulla pulvinar eleifend
        sem. Fusce aliquam vestibulum ipsum. Sed ac dolor sit amet purus malesuada congue. In dapibus augue non sapien.
        Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus. Nam sed
        tellus id magna elementum tincidunt. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nam quis nulla.
        Vivamus ac leo pretium faucibus. Pellentesque pretium lectus id turpis. Maecenas lorem. Maecenas sollicitudin.
        Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Sed ut perspiciatis unde omnis iste
        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Suspendisse sagittis ultrices augue.
        Aenean fermentum risus id tortor. Etiam bibendum elit eget erat. Nulla quis diam. Donec iaculis gravida nulla.
        Nulla pulvinar eleifend sem. Fusce aliquam vestibulum ipsum. Sed ac dolor sit amet purus malesuada congue. In
        dapibus augue non sapien. Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin
        sem purus in lacus. Nam sed tellus id magna elementum tincidunt.
      </UNSTABLE_Truncate>
    </>
  );
};

export default TruncateDefault;
