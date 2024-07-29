# Your Exporter

This exporter will become super powerful package that exports design system data into production-ready code. When you are ready to publish it, don't forget to write a nice Readme!

## Exporter Features

Here are the key features of this exporter:

- **Support for X:** Generates X from your design system
- **Support for Y:** It also supports Y!

## Example of Output

Given any design system, the exporter will produce CSS color definitions in the following format:

```css
/* This file was automatically generated. Do not modify manually. */

:root {
  /* The reddest of reds */
  --color-red: #ff0000;
  --color-blue: #0000ff;
  /* The main color used throughout the application. */
  --color-primary: var(--color-red);
}
```

## Configuration Options

Here is a list of all the configuration options this exporter provides:

- **generateDisclaimer:** Toggle to show a disclaimer indicating the file is auto-generated.
