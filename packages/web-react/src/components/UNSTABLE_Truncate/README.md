# UNSTABLE Truncate

> ⚠️ This component is UNSTABLE. It may significantly change at any point in the future.
> Please use it with caution.

Truncate is a component that truncates text based on various criteria: lines, words, or characters.

```jsx
import { UNSTABLE_Truncate } from '@lmc-eu/spirit-web-react';

<UNSTABLE_Truncate>{/* Text go here */}</UNSTABLE_Truncate>;
```

## Truncation Modes

The component supports three truncation modes using the `mode` prop:

### Lines

Truncate text to a specific number of lines using `mode="lines"` and `limit` props:

```jsx
<UNSTABLE_Truncate limit={2} mode="lines">
  {/* Text go here */}
</UNSTABLE_Truncate>
```

### Words

Truncate text to a specific number of words using `mode="words"` and `limit` props:

```jsx
<UNSTABLE_Truncate limit={10} mode="words">
  {/* Text go here */}
</UNSTABLE_Truncate>
```

### Characters

Truncate text to a specific number of characters using `mode="characters"` and `limit` props:

```jsx
<UNSTABLE_Truncate limit={50} mode="characters">
  {/* Text go here */}
</UNSTABLE_Truncate>
```

### Content Compatibility

The truncation modes have different requirements for the content they can process:

| Mode         | Plain Text | Formatted Text (HTML/React Elements) | Notes                                               |
| ------------ | ---------- | ------------------------------------ | --------------------------------------------------- |
| `lines`      | ✅         | ✅                                   | Uses CSS line-clamping, works with any content      |
| `words`      | ✅         | ❌                                   | Requires string content, doesn't process HTML/React |
| `characters` | ✅         | ❌                                   | Requires string content, doesn't process HTML/React |

#### Examples

✅ **Works** - Plain text with any mode:

```jsx
<UNSTABLE_Truncate mode="words" limit={10}>
  This is plain text that can be truncated
</UNSTABLE_Truncate>
```

✅ **Works** - Formatted text with `lines` mode:

```jsx
<UNSTABLE_Truncate mode="lines" limit={2}>
  Text with <strong>emphasis</strong> and <a href="#">links</a>
</UNSTABLE_Truncate>
```

❌ **Doesn't work** - Formatted text with `words` or `characters` mode:

```jsx
<UNSTABLE_Truncate mode="words" limit={10}>
  Text with <strong>emphasis</strong> {/* Won't truncate properly */}
</UNSTABLE_Truncate>
```

### Expandable Example

This example demonstrates how to make truncated text expandable, allowing users to toggle between the truncated and full content.

```jsx
import React, { useState } from 'react';
import { Button, Text, UNSTABLE_Truncate } from '@lmc-eu/spirit-web-react';

const Example = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Text>
        {isExpanded ? (
          children
        ) : (
          <UNSTABLE_Truncate limit={2} mode="lines">
            {children}
          </UNSTABLE_Truncate>
        )}
      </Text>

      <Button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Show Less' : 'Show More'}</Button>
    </>
  );
};
```

### DEPRECATION NOTICE

⚠️ The `lines` prop is deprecated. Use `mode="lines"` and `limit` instead.

```jsx
// Deprecated
<UNSTABLE_Truncate lines={2}>{/* Text go here */}</UNSTABLE_Truncate>

// Recommended
<UNSTABLE_Truncate limit={2} mode="lines">{/* Text go here */}</UNSTABLE_Truncate>
```

[What are deprecations?][readme-deprecations]

## API

| Name          | Type                                 | Default   | Required | Description                                                                                                                      |
| ------------- | ------------------------------------ | --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `string` \| `ReactNode`              | `null`    | ✓        | Content of the Truncate                                                                                                          |
| `elementType` | `ElementType`                        | `span`    | ✕        | Type of element used                                                                                                             |
| `limit`       | `number`                             | `3`       | ✕        | The limit for the truncation (lines, words, or characters)                                                                       |
| `lines`       | `number`                             | `3`       | ✕        | [**DEPRECATED**][readme-deprecations] The number of lines on which the text is truncated. Use `mode="lines"` and `limit` instead |
| `mode`        | `'lines' \| 'words' \| 'characters'` | `'lines'` | ✕        | The type of truncation to apply                                                                                                  |

The components accept [additional attributes][readme-additional-attributes].
If you need more control over the styling of a component, you can use [style props][readme-style-props]
and [escape hatches][readme-escape-hatches].

[readme-additional-attributes]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#additional-attributes
[readme-deprecations]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-twig/README.md#deprecations
[readme-escape-hatches]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#escape-hatches
[readme-style-props]: https://github.com/lmc-eu/spirit-design-system/blob/main/packages/web-react/README.md#style-props
