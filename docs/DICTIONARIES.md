# Dictionaries

This project uses `dictionaries` to unify props between different components.

- Every dictionary is always a range. E.g. the dictionary Size content Small, Medium, Large.
- If at least 1 item is used from the dictionary in a component's property, all the others should be used. E.g. if there are button sizes Medium and Large, there should also be the size Small.
- A given property is not a dictionary by itself. The property is contained in the dictionary. That is, the Action Primary Default color is contained in the Action Primary dictionary entry.
- Products can extend their dictionaries.

## List of Dictionaries

- [Alignment](#alignment)
- [Color](#color)
- [Placement](#placement)
- [Size](#size)
- [Validation](#validation)

### Alignment

| Dictionary         | Values                    | Code name          |
| ------------------ | ------------------------- | ------------------ |
| AlignmentX         | `left`, `center`, `right` | AlignmentX         |
| AlignmentXExtended | AlignmentX + `stretch`    | AlignmentXExtended |
| AlignmentY         | `top`, `center`, `bottom` | AlignmentY         |
| AlignmentYExtended | AlignmentY + `stretch`    | AlignmentYExtended |

### Color

| Dictionary        | Values                                                           | Code name       |
| ----------------- | ---------------------------------------------------------------- | --------------- |
| Action Color      | `primary`, `secondary`, `tertiary`, `inverted`                   | ActionColor     |
| Action Link Color | `primary`, `secondary`, `inverted`                               | ActionLinkColor |
| Emotion Color     | `success`, `informative`, `warning`, `danger`                    | EmotionColor    |
| Text Color        | `primary`, `secondary`, `primary-inverted`, `secondary-inverted` | TextColor       |

### Placement

| Dictionary | Values                                                                                                                                       | Code name |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Placement  | `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` | Placement |

### Size

| Dictionary    | Values                               | Code name    |
| ------------- | ------------------------------------ | ------------ |
| Size          | `small`, `medium`, `large`           | Size         |
| Size Extended | Size Dictionary + `xsmall`, `xlarge` | SizeExtended |

### Validation

| Dictionary | Values                         | Code name  |
| ---------- | ------------------------------ | ---------- |
| Validation | `success`, `warning`, `danger` | Validation |
