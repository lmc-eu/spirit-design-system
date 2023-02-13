# Dictionaries

This project uses `dictionaries` to unify props between different components.

- Every dictionary is always a range. E.g. the dictionary Size content Small, Medium, Large.
- If at least 1 item is used from the dictionary in a component's property, all the others should be used. E.g. if there are button sizes Medium and Large, there should also be the size Small.
- A given property is not a dictionary by itself. The property is contained in the dictionary. That is, the Action Primary Default color is contained in the Action Primary dictionary entry.
- Products can extend their dictionaries.

## List of dictionaries

- [Size](#size)
- [Color](#color)

### Size

| Dictionary    | Values                               | Code name    |
| ------------- | ------------------------------------ | ------------ |
| Size          | `small`, `medium`, `large`           | Size         |
| Size Extended | Size Dictionary + `xsmall`, `xlarge` | SizeExtended |

### Color

| Dictionary    | Values                                        | Code name    |
| ------------- | --------------------------------------------- | ------------ |
| Emotion Color | `success`, `informative`, `warning`, `danger` | EmotionColor |
| Text Color    | `primary`, `secondary`, `inverted`            | TextColor    |
