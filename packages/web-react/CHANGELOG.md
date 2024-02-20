# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.13.0"></a>

# [1.13.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.12.0...@lmc-eu/spirit-web-react@1.13.0) (2024-02-20)

### Bug Fixes

- **web-react:** Add forwardRef to Icon components ([f5cec52](https://github.com/lmc-eu/spirit-design-system/commit/f5cec52))
- **web-react:** Remove unnecessary rest props on Tooltip Trigger [#DS-1150](https://github.com/lmc-eu/spirit-design-system/issues/DS-1150) ([b7c145f](https://github.com/lmc-eu/spirit-design-system/commit/b7c145f))
- **web-react:** Require `html-react-parser` as dependency ([84ef862](https://github.com/lmc-eu/spirit-design-system/commit/84ef862))
- **web-react:** TooltipTrigger props update ([40b3ffd](https://github.com/lmc-eu/spirit-design-system/commit/40b3ffd))

### Documentation

- **web-react, web-twig:** Add `isFluid` to the API documentations of `FieldGroup` ([7e69912](https://github.com/lmc-eu/spirit-design-system/commit/7e69912))
- **web-react:** Add demo with Tooltip on Icon cmp ([a768a78](https://github.com/lmc-eu/spirit-design-system/commit/a768a78))
- **web, web-react, web-twig:** Fix the `aria-controls` ID references in examples ([2a7c1aa](https://github.com/lmc-eu/spirit-design-system/commit/2a7c1aa))
- **web:** Fix Sass implementation notes ([24054e1](https://github.com/lmc-eu/spirit-design-system/commit/24054e1))

### Features

- **web-react:** Deprecate non-flow-relative placements in `Dropdown` [#DS-1132](https://github.com/lmc-eu/spirit-design-system/issues/DS-1132) ([51da754](https://github.com/lmc-eu/spirit-design-system/commit/51da754))
- **web-react:** Tooltip can be opened by hover ([caac686](https://github.com/lmc-eu/spirit-design-system/commit/caac686)), closes [#DS-1140](https://github.com/lmc-eu/spirit-design-system/issues/DS-1140)

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.12.0"></a>

# [1.12.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.11.0...@lmc-eu/spirit-web-react@1.12.0) (2024-02-07)

### Bug Fixes

- **web-react:** Remove useless condition use of HTML parser ([ad74e08](https://github.com/lmc-eu/spirit-design-system/commit/ad74e08)), closes [#DS-1145](https://github.com/lmc-eu/spirit-design-system/issues/DS-1145)

### Chores

- **web-react:** Fix typo in demo app configuration ([3f0b66e](https://github.com/lmc-eu/spirit-design-system/commit/3f0b66e))
- **web-react:** Remove @floating-ui/react from devDependencies ([9623b9e](https://github.com/lmc-eu/spirit-design-system/commit/9623b9e))

### Code Refactoring

- **web-react:** Use `warning` utility instead of console.warn ([b293d3c](https://github.com/lmc-eu/spirit-design-system/commit/b293d3c))

### Documentation

- **web-react:** Improve additional API options info [#DS-1099](https://github.com/lmc-eu/spirit-design-system/issues/DS-1099) ([417f89a](https://github.com/lmc-eu/spirit-design-system/commit/417f89a))
- **web-react:** Usage of warnings in deprecations ([f18cdc8](https://github.com/lmc-eu/spirit-design-system/commit/f18cdc8)), closes [#DS-1145](https://github.com/lmc-eu/spirit-design-system/issues/DS-1145)

### Features

- **web-react:** Introduce option to disable scrolling inside Modal [#DS-732](https://github.com/lmc-eu/spirit-design-system/issues/DS-732) ([3e52d60](https://github.com/lmc-eu/spirit-design-system/commit/3e52d60))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.11.0"></a>

# [1.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.10.0...@lmc-eu/spirit-web-react@1.11.0) (2024-01-30)

### Bug Fixes

- **web-react:** Cleanup scrolling when Modal is unmounted ([654a147](https://github.com/lmc-eu/spirit-design-system/commit/654a147)), closes [#DS-1126](https://github.com/lmc-eu/spirit-design-system/issues/DS-1126)

### Chores

- **web,web-react:** Hide Vite HMR overlay ([66bb64a](https://github.com/lmc-eu/spirit-design-system/commit/66bb64a))
- **web,web-twig,web-react:** Unify demo differences in components [#DS-660](https://github.com/lmc-eu/spirit-design-system/issues/DS-660) ([db7426e](https://github.com/lmc-eu/spirit-design-system/commit/db7426e))

### Code Refactoring

- **web-react:** Clean up shared non-dictionary types and constants ([e7b9317](https://github.com/lmc-eu/spirit-design-system/commit/e7b9317))

### Dependencies

- **web-react:** Adding peer FloatingUI dependency to package.json ([33df3ee](https://github.com/lmc-eu/spirit-design-system/commit/33df3ee))

### Documentation

- **web-react:** Use spacing style props in all components [#DS-475](https://github.com/lmc-eu/spirit-design-system/issues/DS-475) ([b6b8721](https://github.com/lmc-eu/spirit-design-system/commit/b6b8721))
- **web, web-twig, web-react:** Clarify that `Modal` can be stacked, but not nested in the DOM ([16f3b70](https://github.com/lmc-eu/spirit-design-system/commit/16f3b70))

### Features

- **demo,web,web-react,form-validations:** Set font-display to block in google fonts load ([258d9e9](https://github.com/lmc-eu/spirit-design-system/commit/258d9e9))
- **web-react:** Introduce new TooltipModern component with FloatingUI ([14cbadc](https://github.com/lmc-eu/spirit-design-system/commit/14cbadc))
- **web-react:** Introduce spacing style props to all components [#DS-475](https://github.com/lmc-eu/spirit-design-system/issues/DS-475) ([867ba37](https://github.com/lmc-eu/spirit-design-system/commit/867ba37))
- **web-react:** Introduce vertical alignment options for `Modal` [#DS-940](https://github.com/lmc-eu/spirit-design-system/issues/DS-940) ([67e2594](https://github.com/lmc-eu/spirit-design-system/commit/67e2594))

### Tests

- **web-react:** Add test for hook useFloatingUI ([cce1551](https://github.com/lmc-eu/spirit-design-system/commit/cce1551))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.10.0"></a>

# [1.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.9.0...@lmc-eu/spirit-web-react@1.10.0) (2024-01-17)

### Documentation

- **web-react:** Make example `Modal` actions work ([b1d558b](https://github.com/lmc-eu/spirit-design-system/commit/b1d558b))

### Features

- **web-react:** Introduce optional uniform appearance of `Modal` [#DS-1091](https://github.com/lmc-eu/spirit-design-system/issues/DS-1091) ([531a9d9](https://github.com/lmc-eu/spirit-design-system/commit/531a9d9))

### Reverts

- **web-react:** Move `common` dependency back to package ([10af61a](https://github.com/lmc-eu/spirit-design-system/commit/10af61a))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.9.0"></a>

# [1.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.8.0...@lmc-eu/spirit-web-react@1.9.0) (2024-01-12)

### Bug Fixes

- **web-react:** Do not check `window` object on server ([409343f](https://github.com/lmc-eu/spirit-design-system/commit/409343f)), closes [#DS-1110](https://github.com/lmc-eu/spirit-design-system/issues/DS-1110)
- **web-react:** Do not render empty `style` prop ([5bd5dfa](https://github.com/lmc-eu/spirit-design-system/commit/5bd5dfa))
- **web-react:** Mock window.scrollTo in test of useScrollControl hook ([343ab51](https://github.com/lmc-eu/spirit-design-system/commit/343ab51))
- **web-react:** Simplify useScrollControl to not scroll or set top offset [#DS-1124](https://github.com/lmc-eu/spirit-design-system/issues/DS-1124) ([0df3c47](https://github.com/lmc-eu/spirit-design-system/commit/0df3c47))

### Chores

- **web-react:** Add `design-tokens` as peer dependency ([15ee46d](https://github.com/lmc-eu/spirit-design-system/commit/15ee46d))
- **web-react:** Use common local server configuration ([dac87dd](https://github.com/lmc-eu/spirit-design-system/commit/dac87dd)), closes [#DS-1093](https://github.com/lmc-eu/spirit-design-system/issues/DS-1093)

### Code Refactoring

- **web-react:** Check for loaded html parser otherwise use NoSsr ([d4fc36e](https://github.com/lmc-eu/spirit-design-system/commit/d4fc36e))
- **web-react:** Dynamically check for html parser loading ([fd456b4](https://github.com/lmc-eu/spirit-design-system/commit/fd456b4))
- **web-react:** Use `warning` utility instead of console.warn ([631c00e](https://github.com/lmc-eu/spirit-design-system/commit/631c00e))

### Dependencies

- Update all non-major dependencies ([67f8357](https://github.com/lmc-eu/spirit-design-system/commit/67f8357))
- Update all non-major dependencies ([8acf2e7](https://github.com/lmc-eu/spirit-design-system/commit/8acf2e7))
- Update dependency typescript to v5 ([0d99d02](https://github.com/lmc-eu/spirit-design-system/commit/0d99d02))

### Documentation

- **web-react:** Fixed links in Button and ButtonLink markdown ([63c4679](https://github.com/lmc-eu/spirit-design-system/commit/63c4679))
- **web-react:** Update Dropdown demo with Item usage [#DS-956](https://github.com/lmc-eu/spirit-design-system/issues/DS-956) ([1bde4ec](https://github.com/lmc-eu/spirit-design-system/commit/1bde4ec))

### Features

- **web-react:** Deprecate non-flow-relative Tooltip placements [#DS-1085](https://github.com/lmc-eu/spirit-design-system/issues/DS-1085) ([c1577bf](https://github.com/lmc-eu/spirit-design-system/commit/c1577bf))
- **web-react:** Introduce custom Stack spacing [#DS-1079](https://github.com/lmc-eu/spirit-design-system/issues/DS-1079) ([c0a678a](https://github.com/lmc-eu/spirit-design-system/commit/c0a678a))
- **web-react:** Introduce NoSsr component ([17c6b2c](https://github.com/lmc-eu/spirit-design-system/commit/17c6b2c)), closes [#DS-1110](https://github.com/lmc-eu/spirit-design-system/issues/DS-1110)

### Styles

- **web-react:** Fix lint errors and warnings ([a4bc522](https://github.com/lmc-eu/spirit-design-system/commit/a4bc522))

### Tests

- **web-react:** Add missing `Warning:` prefix to expected messages ([afb2bfc](https://github.com/lmc-eu/spirit-design-system/commit/afb2bfc))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.8.0"></a>

# [1.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.7.1...@lmc-eu/spirit-web-react@1.8.0) (2023-12-05)

### Bug Fixes

- **web-react:** Accordion DOM errors [#DS-948](https://github.com/lmc-eu/spirit-design-system/issues/DS-948) ([3f87401](https://github.com/lmc-eu/spirit-design-system/commit/3f87401))
- **web-react:** Add useScrollControl hook and block scrolling when Dialog open [#DS-1052](https://github.com/lmc-eu/spirit-design-system/issues/DS-1052) ([37cae9e](https://github.com/lmc-eu/spirit-design-system/commit/37cae9e))
- **web-react:** FileUploader error message changed to be same across all ([d617bc0](https://github.com/lmc-eu/spirit-design-system/commit/d617bc0))
- **web-react:** HeaderDialog is now closable on backdrop click ([6cd4c84](https://github.com/lmc-eu/spirit-design-system/commit/6cd4c84)), closes [#DS-1075](https://github.com/lmc-eu/spirit-design-system/issues/DS-1075)
- **web-react:** HeaderDialogLink now accept a NextLink [#DS-1003](https://github.com/lmc-eu/spirit-design-system/issues/DS-1003) ([5bf52c1](https://github.com/lmc-eu/spirit-design-system/commit/5bf52c1))
- **web-react:** Tablink and HeaderLink now accept a NextLink [#DS-1018](https://github.com/lmc-eu/spirit-design-system/issues/DS-1018) ([48bb80b](https://github.com/lmc-eu/spirit-design-system/commit/48bb80b))
- **web-react:** Tabs now have styleProps [#DS-977](https://github.com/lmc-eu/spirit-design-system/issues/DS-977) ([1ce3110](https://github.com/lmc-eu/spirit-design-system/commit/1ce3110))

### Documentation

- **web-react, web-twig:** Switch responsive Grid props to the cols object ([18f3df9](https://github.com/lmc-eu/spirit-design-system/commit/18f3df9))
- **web-react:** Added styleProps in the Tabs README API Tables [#DS-977](https://github.com/lmc-eu/spirit-design-system/issues/DS-977) ([adff622](https://github.com/lmc-eu/spirit-design-system/commit/adff622))
- **web-react:** Fix typo in README.md of Icon component ([f700adf](https://github.com/lmc-eu/spirit-design-system/commit/f700adf))

### Features

- **web-react:** Allow object in Grid prop cols, deprecate desktop and tablet [#DS-995](https://github.com/lmc-eu/spirit-design-system/issues/DS-995) ([85abe02](https://github.com/lmc-eu/spirit-design-system/commit/85abe02))
- **web-react:** Introduce Item component [#DS-1049](https://github.com/lmc-eu/spirit-design-system/issues/DS-1049) ([c3200a9](https://github.com/lmc-eu/spirit-design-system/commit/c3200a9))

### Tests

- **web-react:** Tabs tests for styleProps [#DS-977](https://github.com/lmc-eu/spirit-design-system/issues/DS-977) ([4ccaf16](https://github.com/lmc-eu/spirit-design-system/commit/4ccaf16))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.7.1"></a>

## [1.7.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.7.0...@lmc-eu/spirit-web-react@1.7.1) (2023-11-18)

### Bug Fixes

- **web-react:** Check `htmlParser` for function type ([14b195e](https://github.com/lmc-eu/spirit-design-system/commit/14b195e))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.7.0"></a>

# [1.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.6.0...@lmc-eu/spirit-web-react@1.7.0) (2023-11-15)

### Bug Fixes

- **web-react:** Add missing exports for Tooltip components ([eb16312](https://github.com/lmc-eu/spirit-design-system/commit/eb16312))
- **web-react:** FileUploader hidden input were not added without meta ([4bb4b21](https://github.com/lmc-eu/spirit-design-system/commit/4bb4b21))
- **web-react:** Icon component supports SSR ([79f9f6f](https://github.com/lmc-eu/spirit-design-system/commit/79f9f6f))
- **web-react:** Polymorph Link component types [#DS-1060](https://github.com/lmc-eu/spirit-design-system/issues/DS-1060) ([98864cf](https://github.com/lmc-eu/spirit-design-system/commit/98864cf))
- **web-react:** Replace useLayoutEffect with useIsomorphicLayoutEffect ([ea9f333](https://github.com/lmc-eu/spirit-design-system/commit/ea9f333))

### Code Refactoring

- **web-react:** Refactor Dropdown to controlled component [#DS-637](https://github.com/lmc-eu/spirit-design-system/issues/DS-637) ([3c0f08b](https://github.com/lmc-eu/spirit-design-system/commit/3c0f08b))

### Dependencies

- Pin dependencies ([84fe6f5](https://github.com/lmc-eu/spirit-design-system/commit/84fe6f5))
- Update all non-major dependencies ([828bc68](https://github.com/lmc-eu/spirit-design-system/commit/828bc68))

### Documentation

- **web-react:** Add the missing demo of `DropdownModern` with enhanced shadow ([4430fbb](https://github.com/lmc-eu/spirit-design-system/commit/4430fbb))
- **web-react:** Adding elementType to api table and new poly. example ([e7d8cda](https://github.com/lmc-eu/spirit-design-system/commit/e7d8cda))
- **web-react:** Corrected the example for Dropdown [#DS-601](https://github.com/lmc-eu/spirit-design-system/issues/DS-601) ([ddd7e20](https://github.com/lmc-eu/spirit-design-system/commit/ddd7e20))
- **web-react:** Extend `Header` README to be as detailed as in the Twig implementation ([5ba5ff1](https://github.com/lmc-eu/spirit-design-system/commit/5ba5ff1))
- **web-react:** FileUploaderAttachment documentation FileUploaderAttachment ([dd56280](https://github.com/lmc-eu/spirit-design-system/commit/dd56280))
- **web-react:** Put pure CSS examples of Tooltip in line so they are usable in more viewport sizes ([8ff9d3a](https://github.com/lmc-eu/spirit-design-system/commit/8ff9d3a))
- **web-react:** Showcase Dropdown enhanced shadow Feature flag [#DS-963](https://github.com/lmc-eu/spirit-design-system/issues/DS-963) ([8e8ea36](https://github.com/lmc-eu/spirit-design-system/commit/8e8ea36))
- **web-react:** Showcase placement valuse on Tooltip demo ([ec9c97d](https://github.com/lmc-eu/spirit-design-system/commit/ec9c97d)), closes [#DS-923](https://github.com/lmc-eu/spirit-design-system/issues/DS-923)
- **web, web-twig, web-react:** Document ModalHeader and ModalFooter usage recommendations [#DS-1033](https://github.com/lmc-eu/spirit-design-system/issues/DS-1033) ([403cc0b](https://github.com/lmc-eu/spirit-design-system/commit/403cc0b))
- **web,web-twig,web-react:** Add interactive demo of `Dropdown` placements [#DS-1037](https://github.com/lmc-eu/spirit-design-system/issues/DS-1037) ([deb054c](https://github.com/lmc-eu/spirit-design-system/commit/deb054c))
- **web,web-twig,web-react:** Make use of new `GridItem` component in `Tooltip` placement examples ([81d9952](https://github.com/lmc-eu/spirit-design-system/commit/81d9952))

### Features

- **web-react:** Allow combining links and buttons in `HeaderDesktopActions` ([1f5e4ae](https://github.com/lmc-eu/spirit-design-system/commit/1f5e4ae))
- **web-react:** Introduce `useIsomorphicLayoutEffect` hook ([a7f3c1d](https://github.com/lmc-eu/spirit-design-system/commit/a7f3c1d))

### Styles

- **web-react:** Introduce ESlint rule to avoid using useLayoutEffect ([563b7fb](https://github.com/lmc-eu/spirit-design-system/commit/563b7fb)), closes [#DS-1004](https://github.com/lmc-eu/spirit-design-system/issues/DS-1004)

### Tests

- **web-react:** Ignore demo files from code coverage reports ([7147a6d](https://github.com/lmc-eu/spirit-design-system/commit/7147a6d))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.6.0"></a>

# [1.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.5.0...@lmc-eu/spirit-web-react@1.6.0) (2023-11-02)

### Bug Fixes

- **web-react:** Increase image quality of FileUploader image preview ([52b9538](https://github.com/lmc-eu/spirit-design-system/commit/52b9538)), closes [#DS-1039](https://github.com/lmc-eu/spirit-design-system/issues/DS-1039)
- **web-react:** Recalculate FileUploader image preview by crop values ([92ffd4b](https://github.com/lmc-eu/spirit-design-system/commit/92ffd4b)), closes [#DS-1038](https://github.com/lmc-eu/spirit-design-system/issues/DS-1038)

### Features

- **web-react:** Attachment image preview object fit [#DS-1005](https://github.com/lmc-eu/spirit-design-system/issues/DS-1005) ([79aa88b](https://github.com/lmc-eu/spirit-design-system/commit/79aa88b))
- **web-react:** Use the new Placement dictionary in `Dropdown` [#DS-923](https://github.com/lmc-eu/spirit-design-system/issues/DS-923) ([e07eb5a](https://github.com/lmc-eu/spirit-design-system/commit/e07eb5a))
- **web-react:** Use the new Placement dictionary in `Tooltip` [#DS-923](https://github.com/lmc-eu/spirit-design-system/issues/DS-923) ([4ff2bda](https://github.com/lmc-eu/spirit-design-system/commit/4ff2bda))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.5.0"></a>

# [1.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.4.0...@lmc-eu/spirit-web-react@1.5.0) (2023-10-25)

### Bug Fixes

- **web-react:** ClickOutside working with Dialog and Dropdown [#DS-945](https://github.com/lmc-eu/spirit-design-system/issues/DS-945) ([ec1539c](https://github.com/lmc-eu/spirit-design-system/commit/ec1539c))
- **web-react:** Remove unused `isDisabled` prop from FileUploader ([ab66984](https://github.com/lmc-eu/spirit-design-system/commit/ab66984)), closes [#DS-933](https://github.com/lmc-eu/spirit-design-system/issues/DS-933)

### Chores

- **ci:** Skip Nx cache on Netlify builds ([c99bdbe](https://github.com/lmc-eu/spirit-design-system/commit/c99bdbe))
- **web-react:** Disable generating browser stats file ([e8f4c53](https://github.com/lmc-eu/spirit-design-system/commit/e8f4c53))
- **web-react:** Get rid of WebpackAnalyzerPlugin ([0fe93c4](https://github.com/lmc-eu/spirit-design-system/commit/0fe93c4))

### Code Refactoring

- **web-react:** Introduce `ModalCloseButton` component ([cdc8913](https://github.com/lmc-eu/spirit-design-system/commit/cdc8913))

### Dependencies

- Update all non-major dependencies ([e7b6413](https://github.com/lmc-eu/spirit-design-system/commit/e7b6413))
- Update all non-major dependencies ([f8e1a11](https://github.com/lmc-eu/spirit-design-system/commit/f8e1a11))
- Update dependency @types/react to v18.2.26 ([2094a04](https://github.com/lmc-eu/spirit-design-system/commit/2094a04))
- Update dependency @typescript-eslint/parser to v6 ([cfc6968](https://github.com/lmc-eu/spirit-design-system/commit/cfc6968))
- Upgrade @lmc-eu/eslint-config-base in all eslint configs ([3d83860](https://github.com/lmc-eu/spirit-design-system/commit/3d83860))

### Documentation

- **web-react:** FieldGroup demo separated to more files ([9de3cf4](https://github.com/lmc-eu/spirit-design-system/commit/9de3cf4))
- **web-react:** FileUploader - Support for crop image [#DS-954](https://github.com/lmc-eu/spirit-design-system/issues/DS-954) ([5ea21c8](https://github.com/lmc-eu/spirit-design-system/commit/5ea21c8))
- **web-react:** Multiple demos tweak to mach other technologies [#DS-979](https://github.com/lmc-eu/spirit-design-system/issues/DS-979) ([1ab7873](https://github.com/lmc-eu/spirit-design-system/commit/1ab7873))
- **web-react:** Separate ButtonLink component [#DS-979](https://github.com/lmc-eu/spirit-design-system/issues/DS-979) ([7a39ef6](https://github.com/lmc-eu/spirit-design-system/commit/7a39ef6))
- **web-react:** Unify Alert demo cross packages [#DS-979](https://github.com/lmc-eu/spirit-design-system/issues/DS-979) ([8f10eaf](https://github.com/lmc-eu/spirit-design-system/commit/8f10eaf))
- **web, web-react, web-twig:** Dealing with text truncate in Breadcrumb ([d15fd1b](https://github.com/lmc-eu/spirit-design-system/commit/d15fd1b)), closes [#DS-960](https://github.com/lmc-eu/spirit-design-system/issues/DS-960)

### Features

- **web-react:** Add disabled backdrop click option to Modal component ([59de9ab](https://github.com/lmc-eu/spirit-design-system/commit/59de9ab))
- **web-react:** FileUploader - Support for crop image [#DS-954](https://github.com/lmc-eu/spirit-design-system/issues/DS-954) ([6180f36](https://github.com/lmc-eu/spirit-design-system/commit/6180f36))
- **web-react:** Introduce BreadcrumbsItem component ([5927bed](https://github.com/lmc-eu/spirit-design-system/commit/5927bed)), closes [#DS-835](https://github.com/lmc-eu/spirit-design-system/issues/DS-835)
- **web-react:** Introduce Grid Item component [#DS-961](https://github.com/lmc-eu/spirit-design-system/issues/DS-961) ([2cf07c9](https://github.com/lmc-eu/spirit-design-system/commit/2cf07c9))
- **web-react:** Introduce UncontrolledPagination component ([d8368d1](https://github.com/lmc-eu/spirit-design-system/commit/d8368d1))
- **web-react:** Make BreadcrumbsItem href optional [#DS-957](https://github.com/lmc-eu/spirit-design-system/issues/DS-957) ([6cf75ad](https://github.com/lmc-eu/spirit-design-system/commit/6cf75ad))
- **web-twig:** FileUploader - Support for crop image [#DS-954](https://github.com/lmc-eu/spirit-design-system/issues/DS-954) ([96559cf](https://github.com/lmc-eu/spirit-design-system/commit/96559cf))
- **web-twig:** Introduce BreadcrumbsItem component ([3c9cf8c](https://github.com/lmc-eu/spirit-design-system/commit/3c9cf8c)), closes [#DS-835](https://github.com/lmc-eu/spirit-design-system/issues/DS-835)

### Styles

- **ci:** Use multiline strings for Netlify config commands ([4768e24](https://github.com/lmc-eu/spirit-design-system/commit/4768e24))
- **web-react:** Ignore `build` directory from linting ([d8f2d10](https://github.com/lmc-eu/spirit-design-system/commit/d8f2d10))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.4.0"></a>

# [1.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.3.0...@lmc-eu/spirit-web-react@1.4.0) (2023-09-26)

### Bug Fixes

- **web-react:** Drag and drop on disabled input ([4f64672](https://github.com/lmc-eu/spirit-design-system/commit/4f64672))

### Code Refactoring

- **web-react:** Remove useValidationText hook ([70e4cd4](https://github.com/lmc-eu/spirit-design-system/commit/70e4cd4))
- **web-react:** Use `VisuallyHidden` component instead of className ([f795b81](https://github.com/lmc-eu/spirit-design-system/commit/f795b81)), closes [#DS-926](https://github.com/lmc-eu/spirit-design-system/issues/DS-926)
- **web-react:** Use class name prefix for utilities and helpers ([678bcb1](https://github.com/lmc-eu/spirit-design-system/commit/678bcb1)), closes [#DS-926](https://github.com/lmc-eu/spirit-design-system/issues/DS-926)
- **web-react:** Use demo package css instead of own ([5325ad4](https://github.com/lmc-eu/spirit-design-system/commit/5325ad4))

### Documentation

- **web-react, web-twig:** Add DocsStack component ([a52215d](https://github.com/lmc-eu/spirit-design-system/commit/a52215d))
- **web-react:** Add Collapse demo [#DS-893](https://github.com/lmc-eu/spirit-design-system/issues/DS-893) ([d3cd38c](https://github.com/lmc-eu/spirit-design-system/commit/d3cd38c))
- **web-react:** Add Dropdown demo [#DS-895](https://github.com/lmc-eu/spirit-design-system/issues/DS-895) ([8d89302](https://github.com/lmc-eu/spirit-design-system/commit/8d89302))
- **web-react:** Add FileUploader demo [#DS-896](https://github.com/lmc-eu/spirit-design-system/issues/DS-896) ([29fd57a](https://github.com/lmc-eu/spirit-design-system/commit/29fd57a))
- **web-react:** Add hasStack and stackAlignment to DocsSection comp ([340613d](https://github.com/lmc-eu/spirit-design-system/commit/340613d))
- **web-react:** Add Header demo [#DS-898](https://github.com/lmc-eu/spirit-design-system/issues/DS-898) ([7e99b36](https://github.com/lmc-eu/spirit-design-system/commit/7e99b36))
- **web-react:** Add Heading demo [#DS-899](https://github.com/lmc-eu/spirit-design-system/issues/DS-899) ([41dac12](https://github.com/lmc-eu/spirit-design-system/commit/41dac12))
- **web-react:** Add Icons demo [#DS-900](https://github.com/lmc-eu/spirit-design-system/issues/DS-900) ([2904d10](https://github.com/lmc-eu/spirit-design-system/commit/2904d10))
- **web-react:** Add Link demo [#DS-901](https://github.com/lmc-eu/spirit-design-system/issues/DS-901) ([d1c2ae6](https://github.com/lmc-eu/spirit-design-system/commit/d1c2ae6))
- **web-react:** Add missing helperText to Checkbox README ([43e3160](https://github.com/lmc-eu/spirit-design-system/commit/43e3160))
- **web-react:** Add missing info in READMEs ([68e1123](https://github.com/lmc-eu/spirit-design-system/commit/68e1123))
- **web-react:** Add Modal demo [#DS-902](https://github.com/lmc-eu/spirit-design-system/issues/DS-902) ([d8487d4](https://github.com/lmc-eu/spirit-design-system/commit/d8487d4))
- **web-react:** Add Pagination demo DS-903 ([472097f](https://github.com/lmc-eu/spirit-design-system/commit/472097f))
- **web-react:** Add Pill demo [#DS-904](https://github.com/lmc-eu/spirit-design-system/issues/DS-904) ([f66fc35](https://github.com/lmc-eu/spirit-design-system/commit/f66fc35))
- **web-react:** Add Radio demo [#DS-905](https://github.com/lmc-eu/spirit-design-system/issues/DS-905) ([6675e31](https://github.com/lmc-eu/spirit-design-system/commit/6675e31))
- **web-react:** Add ScrollView demo [#DS-906](https://github.com/lmc-eu/spirit-design-system/issues/DS-906) ([cd08338](https://github.com/lmc-eu/spirit-design-system/commit/cd08338))
- **web-react:** Add Spinner demo [#DS-907](https://github.com/lmc-eu/spirit-design-system/issues/DS-907) ([54aef51](https://github.com/lmc-eu/spirit-design-system/commit/54aef51))
- **web-react:** Add Stack demo [#DS-908](https://github.com/lmc-eu/spirit-design-system/issues/DS-908) ([d61febc](https://github.com/lmc-eu/spirit-design-system/commit/d61febc))
- **web-react:** Add Tabs demo [#DS-909](https://github.com/lmc-eu/spirit-design-system/issues/DS-909) ([24b39c6](https://github.com/lmc-eu/spirit-design-system/commit/24b39c6))
- **web-react:** Add Tag demo [#DS-911](https://github.com/lmc-eu/spirit-design-system/issues/DS-911) ([37ddfbe](https://github.com/lmc-eu/spirit-design-system/commit/37ddfbe))
- **web-react:** Add Text demo [#DS-911](https://github.com/lmc-eu/spirit-design-system/issues/DS-911) ([160142d](https://github.com/lmc-eu/spirit-design-system/commit/160142d))
- **web-react:** Add TextArea demo [#DS-912](https://github.com/lmc-eu/spirit-design-system/issues/DS-912) ([08b5940](https://github.com/lmc-eu/spirit-design-system/commit/08b5940))
- **web-react:** Add TextField demo [#DS-913](https://github.com/lmc-eu/spirit-design-system/issues/DS-913) ([99f40f6](https://github.com/lmc-eu/spirit-design-system/commit/99f40f6))
- **web-react:** Add Tooltip demo [#DS-914](https://github.com/lmc-eu/spirit-design-system/issues/DS-914) ([fe96038](https://github.com/lmc-eu/spirit-design-system/commit/fe96038))
- **web-react:** Change copies of Stacked Modal composition ([52da584](https://github.com/lmc-eu/spirit-design-system/commit/52da584))
- **web-react:** Improve FileUploader API tables ([a69b414](https://github.com/lmc-eu/spirit-design-system/commit/a69b414))
- **web-react:** Introduce Modal with Dropdown component composition ([1cc6753](https://github.com/lmc-eu/spirit-design-system/commit/1cc6753))
- **web-react:** Introduce Modal with form components composition ([2a5a7ea](https://github.com/lmc-eu/spirit-design-system/commit/2a5a7ea))
- **web-react:** Introduce new stories for form fields [#DS-476](https://github.com/lmc-eu/spirit-design-system/issues/DS-476) ([5fdd555](https://github.com/lmc-eu/spirit-design-system/commit/5fdd555))
- **web-react:** Introduce new stories in components [#DS-476](https://github.com/lmc-eu/spirit-design-system/issues/DS-476) ([7f05e3e](https://github.com/lmc-eu/spirit-design-system/commit/7f05e3e))
- **web-react:** Introduce stories to the rest of the components [#DS-476](https://github.com/lmc-eu/spirit-design-system/issues/DS-476) ([8b0255f](https://github.com/lmc-eu/spirit-design-system/commit/8b0255f))
- **web-react:** Move all stories to their folder ([74e7fa8](https://github.com/lmc-eu/spirit-design-system/commit/74e7fa8))
- **web-react:** Move Modal compositions into `Modals` directory ([b487cf3](https://github.com/lmc-eu/spirit-design-system/commit/b487cf3))
- **web-react:** Remove redundant button from Modal With Accordion ([509d15c](https://github.com/lmc-eu/spirit-design-system/commit/509d15c))
- **web, web-react, web-twig:** Unify `Modal` READMEs ([f126dca](https://github.com/lmc-eu/spirit-design-system/commit/f126dca))

### Features

- **web-react:** Allow extended Size dictionary in Tag ([3dc975c](https://github.com/lmc-eu/spirit-design-system/commit/3dc975c))
- **web-react:** Implement new HelperText component [#DS-886](https://github.com/lmc-eu/spirit-design-system/issues/DS-886) ([23def5c](https://github.com/lmc-eu/spirit-design-system/commit/23def5c))
- **web-react:** Introduce HelperText component [#DS-886](https://github.com/lmc-eu/spirit-design-system/issues/DS-886) ([b978ee4](https://github.com/lmc-eu/spirit-design-system/commit/b978ee4))
- **web-react:** Shorten FieldGroup useValidationText path ([a21cce8](https://github.com/lmc-eu/spirit-design-system/commit/a21cce8))

### Styles

- **web-react:** Alphabetical reordering in ButtonLink ([ea75846](https://github.com/lmc-eu/spirit-design-system/commit/ea75846))
- **web-react:** Must use destructurring assignment ([761f782](https://github.com/lmc-eu/spirit-design-system/commit/761f782))

### Tests

- **web-react:** Ignore module pattern for `dist` directory ([193eecf](https://github.com/lmc-eu/spirit-design-system/commit/193eecf))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.3.0"></a>

# [1.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.2.0...@lmc-eu/spirit-web-react@1.3.0) (2023-09-06)

### Bug Fixes

- **web-react:** Debounce in ScrollView now trigger correctly during scrolling ([9affe52](https://github.com/lmc-eu/spirit-design-system/commit/9affe52)), closes [#DS-826](https://github.com/lmc-eu/spirit-design-system/issues/DS-826)
- **web-react:** Handle event capturing correctly in Dialog ([6ef0d0d](https://github.com/lmc-eu/spirit-design-system/commit/6ef0d0d)), closes [#DS-937](https://github.com/lmc-eu/spirit-design-system/issues/DS-937)
- **web-react:** Remove unused and already deprecated type ([a0fe11c](https://github.com/lmc-eu/spirit-design-system/commit/a0fe11c))
- **web-react:** Required `goBackTitle` in Breadcrumbs refs [#DS-834](https://github.com/lmc-eu/spirit-design-system/issues/DS-834) ([a31febc](https://github.com/lmc-eu/spirit-design-system/commit/a31febc))
- **web-react:** The rest props were transfered twice on FieldGroup ([dfbaf56](https://github.com/lmc-eu/spirit-design-system/commit/dfbaf56))

### Chores

- **web-react:** Use vite-raw-plugin to import markdown files in story ([e9dfab2](https://github.com/lmc-eu/spirit-design-system/commit/e9dfab2))

### Dependencies

- Pin dependencies ([1636a94](https://github.com/lmc-eu/spirit-design-system/commit/1636a94))
- Update all non-major dependencies ([2ed3156](https://github.com/lmc-eu/spirit-design-system/commit/2ed3156))
- Update dependency @testing-library/react to v14 ([25128ce](https://github.com/lmc-eu/spirit-design-system/commit/25128ce))
- Update dependency @typescript-eslint/eslint-plugin to v6 ([8a8b660](https://github.com/lmc-eu/spirit-design-system/commit/8a8b660))
- Update dependency eslint-config-prettier to v9 ([d9248a5](https://github.com/lmc-eu/spirit-design-system/commit/d9248a5))

### Documentation

- **web-react:** Add Accordion demo [#DS-890](https://github.com/lmc-eu/spirit-design-system/issues/DS-890) ([da8efe0](https://github.com/lmc-eu/spirit-design-system/commit/da8efe0))
- **web-react:** Add Breadcrumbs demo [#DS-981](https://github.com/lmc-eu/spirit-design-system/issues/DS-981) ([1dfaa07](https://github.com/lmc-eu/spirit-design-system/commit/1dfaa07))
- **web-react:** Add Button demo DS-892 ([51af5e3](https://github.com/lmc-eu/spirit-design-system/commit/51af5e3))
- **web-react:** Add Checkbox demos [#DS-889](https://github.com/lmc-eu/spirit-design-system/issues/DS-889) ([439654f](https://github.com/lmc-eu/spirit-design-system/commit/439654f))
- **web-react:** Add Container demo [#DS-894](https://github.com/lmc-eu/spirit-design-system/issues/DS-894) ([2feb782](https://github.com/lmc-eu/spirit-design-system/commit/2feb782))
- **web-react:** Add Grid demo [#DS-897](https://github.com/lmc-eu/spirit-design-system/issues/DS-897) ([3692aa7](https://github.com/lmc-eu/spirit-design-system/commit/3692aa7))
- **web-react:** Introduce DocsBox component ([ec381f7](https://github.com/lmc-eu/spirit-design-system/commit/ec381f7))
- **web-react:** Introduce new Stories for Button, Modal and Pill ([86acc0b](https://github.com/lmc-eu/spirit-design-system/commit/86acc0b))
- **web-react:** Separate stories and demos [#DS-873](https://github.com/lmc-eu/spirit-design-system/issues/DS-873) ([e25fa16](https://github.com/lmc-eu/spirit-design-system/commit/e25fa16))
- **web-twig, web-react:** Improve `Modal` documentation regarding `ScrollView` and optional title ([f4a54ca](https://github.com/lmc-eu/spirit-design-system/commit/f4a54ca))

### Features

- **web-react:** Introduce GridSpan component [#DS-431](https://github.com/lmc-eu/spirit-design-system/issues/DS-431) ([9d2ceaf](https://github.com/lmc-eu/spirit-design-system/commit/9d2ceaf))
- **web-react:** Introduce VisuallyHidden component ([6a3fa18](https://github.com/lmc-eu/spirit-design-system/commit/6a3fa18))

### Styles

- **web-react:** Declare missing `prettier` module for types ([0733ec0](https://github.com/lmc-eu/spirit-design-system/commit/0733ec0))
- **web-react:** Strings must use singlequote quotes ([c6ae0f3](https://github.com/lmc-eu/spirit-design-system/commit/c6ae0f3))

### Tests

- **web-react:** Find `goBackTitle` in Breadcrumbs refs [#DS-834](https://github.com/lmc-eu/spirit-design-system/issues/DS-834) ([a6dc3af](https://github.com/lmc-eu/spirit-design-system/commit/a6dc3af))
- **web-react:** Unnecessary use of `Date.now` refs [#DS-766](https://github.com/lmc-eu/spirit-design-system/issues/DS-766) ([06a1fdf](https://github.com/lmc-eu/spirit-design-system/commit/06a1fdf))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.2.0"></a>

# [1.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.1.0...@lmc-eu/spirit-web-react@1.2.0) (2023-08-23)

### Dependencies

- Update all non-major dependencies ([acba328](https://github.com/lmc-eu/spirit-design-system/commit/acba328))
- Update dependency @testing-library/jest-dom to v6 ([d21b678](https://github.com/lmc-eu/spirit-design-system/commit/d21b678))

### Documentation

- **form-validations, web-react, web-twig:** Sort props in tables ([4d8fb15](https://github.com/lmc-eu/spirit-design-system/commit/4d8fb15))
- **form-validations, web, web-twig, web-react:** Unify unicode characters in API tables ([8c837eb](https://github.com/lmc-eu/spirit-design-system/commit/8c837eb))
- **web-react, web-twig:** Unify the syntax of enums in API tables ([f83e9ac](https://github.com/lmc-eu/spirit-design-system/commit/f83e9ac))
- **web-react:** Add missing columns to API tables ([50b8b57](https://github.com/lmc-eu/spirit-design-system/commit/50b8b57))
- **web-react:** Add missing style props into components readmes ([e6f3533](https://github.com/lmc-eu/spirit-design-system/commit/e6f3533))
- **web-react:** All Select demos are same [#DS-816](https://github.com/lmc-eu/spirit-design-system/issues/DS-816) ([c8f137f](https://github.com/lmc-eu/spirit-design-system/commit/c8f137f))
- **web-react:** Default `icon` according to `color` variant in the `Alert` ([17471cf](https://github.com/lmc-eu/spirit-design-system/commit/17471cf))
- **web-react:** FileUploader Storybook demo ([4edef48](https://github.com/lmc-eu/spirit-design-system/commit/4edef48))
- **web-react:** Remove HTML and Props stories from components and remove nanoid package [#DS-589](https://github.com/lmc-eu/spirit-design-system/issues/DS-589) ([a7950e7](https://github.com/lmc-eu/spirit-design-system/commit/a7950e7))
- **web-react:** Rename components in example compositions ([2528fad](https://github.com/lmc-eu/spirit-design-system/commit/2528fad))
- **web-react:** Rename unsupported class property to UNSAFE_classname in Stack component ([b70a206](https://github.com/lmc-eu/spirit-design-system/commit/b70a206))
- **web-react:** Sort props alphabetically ([470fefd](https://github.com/lmc-eu/spirit-design-system/commit/470fefd))
- **web-react:** Standardize column heading of prop name ([757a8f4](https://github.com/lmc-eu/spirit-design-system/commit/757a8f4))
- **web-react:** Standardize usage of symbols in `Required` column ([faa7b03](https://github.com/lmc-eu/spirit-design-system/commit/faa7b03))
- **web-react:** Unify API of the `autoComplete` and `label` props ([f8aa168](https://github.com/lmc-eu/spirit-design-system/commit/f8aa168))
- **web-react:** Unify API table captions ([7861c18](https://github.com/lmc-eu/spirit-design-system/commit/7861c18))
- **web-twig:** Default `icon` according to `color` variant in the `Alert` ([4d51643](https://github.com/lmc-eu/spirit-design-system/commit/4d51643))
- **web, web-react:** Unify the syntax of boolean and string props ([8449ae8](https://github.com/lmc-eu/spirit-design-system/commit/8449ae8))

### Features

- **web-react:** Deprecate buttonLabel and editButtonLabel in ([985f2e0](https://github.com/lmc-eu/spirit-design-system/commit/985f2e0)), closes [#DS-881](https://github.com/lmc-eu/spirit-design-system/issues/DS-881)
- **web-react:** FileUploader Image attachment preview [#DS-852](https://github.com/lmc-eu/spirit-design-system/issues/DS-852) ([fb126fa](https://github.com/lmc-eu/spirit-design-system/commit/fb126fa))
- **web-react:** Introduce FieldGroup component ([33a6e90](https://github.com/lmc-eu/spirit-design-system/commit/33a6e90))
- **web-react:** Transfer Icon props from Spinner to Icon component ([73d61f9](https://github.com/lmc-eu/spirit-design-system/commit/73d61f9)), closes [#DS-759](https://github.com/lmc-eu/spirit-design-system/issues/DS-759)

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.1.0"></a>

# [1.1.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@1.0.0...@lmc-eu/spirit-web-react@1.1.0) (2023-08-09)

### Bug Fixes

- **web-react:** Click outside hook prevents click on input label ([dcc9ff2](https://github.com/lmc-eu/spirit-design-system/commit/dcc9ff2)), closes [#DS-879](https://github.com/lmc-eu/spirit-design-system/issues/DS-879)

### Dependencies

- Update all non-major dependencies ([19335a3](https://github.com/lmc-eu/spirit-design-system/commit/19335a3))

### Documentation

- **web-react:** Introduce Stacked Modals and Modal with Checkbox demo ([baf8392](https://github.com/lmc-eu/spirit-design-system/commit/baf8392))
- **web, web-react, web-twig:** Minor typo fix ([be40478](https://github.com/lmc-eu/spirit-design-system/commit/be40478))
- **web,web-twig:** Mark visual-only examples in `FileUploader` demo ([27b3533](https://github.com/lmc-eu/spirit-design-system/commit/27b3533))

### Features

- **web:** Extend `FileUploaderAttachment` with preview and custom actions slot ([768906f](https://github.com/lmc-eu/spirit-design-system/commit/768906f))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="1.0.0"></a>

# [1.0.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.48.3...@lmc-eu/spirit-web-react@1.0.0) (2023-07-21)

### BREAKING CHANGES

- **web-react:** Add `spirit` infix to data-placement in Tooltip [#DS-585](https://github.com/lmc-eu/spirit-design-system/issues/DS-585) ([c1f83d0](https://github.com/lmc-eu/spirit-design-system/commit/c1f83d0))
- **web-react:** Remove `error` Validation State in favor of `danger` [#DS-677](https://github.com/lmc-eu/spirit-design-system/issues/DS-677) ([d07b23b](https://github.com/lmc-eu/spirit-design-system/commit/d07b23b))
- **web-react:** Remove `isFullWidth` and `breakpoint` props from `Dropdown` [#DS-588](https://github.com/lmc-eu/spirit-design-system/issues/DS-588) ([d84016c](https://github.com/lmc-eu/spirit-design-system/commit/d84016c))
- **web-react:** Remove `size` prop from `Icon` in favor of `boxSize` [#DS-647](https://github.com/lmc-eu/spirit-design-system/issues/DS-647) ([f19f8bb](https://github.com/lmc-eu/spirit-design-system/commit/f19f8bb))
- **web-react:** Remove `theme` and `tag` props and `default` color from `Tag` [#DS-648](https://github.com/lmc-eu/spirit-design-system/issues/DS-648) ([ab5606a](https://github.com/lmc-eu/spirit-design-system/commit/ab5606a))
- **web-react:** Remove align prop in ModalFooter ([b5638ce](https://github.com/lmc-eu/spirit-design-system/commit/b5638ce))
- **web-react:** Remove Header deprecations [#DS-651](https://github.com/lmc-eu/spirit-design-system/issues/DS-651) ([2782212](https://github.com/lmc-eu/spirit-design-system/commit/2782212))
- **web-react:** Remove old Modal and rename ModalComposed to Modal [#DS-617](https://github.com/lmc-eu/spirit-design-system/issues/DS-617) ([f323e9b](https://github.com/lmc-eu/spirit-design-system/commit/f323e9b))
- **web-react:** Rename `message` prop to `validationText` in Form Fields [#DS-676](https://github.com/lmc-eu/spirit-design-system/issues/DS-676) ([b80d336](https://github.com/lmc-eu/spirit-design-system/commit/b80d336))
- **web-react:** Rename CheckboxField component to `Checkbox` [#DS-522](https://github.com/lmc-eu/spirit-design-system/issues/DS-522) ([e44f569](https://github.com/lmc-eu/spirit-design-system/commit/e44f569))
- **web-react:** Rename RadioField component to Radio [#DS-521](https://github.com/lmc-eu/spirit-design-system/issues/DS-521) ([d7f2d22](https://github.com/lmc-eu/spirit-design-system/commit/d7f2d22))
- **web-react:** Rename ScrollView `indicators` prop to `overflowDecorators` [#DS-825](https://github.com/lmc-eu/spirit-design-system/issues/DS-825) ([bdc9685](https://github.com/lmc-eu/spirit-design-system/commit/bdc9685))
- **web-react:** Set `Stack` default spacing to zero [#DS-741](https://github.com/lmc-eu/spirit-design-system/issues/DS-741) ([6cdd8af](https://github.com/lmc-eu/spirit-design-system/commit/6cdd8af))

### Documentation

- **web-react:** Align Field components README examples with other ([40e789c](https://github.com/lmc-eu/spirit-design-system/commit/40e789c))
- **web-react:** Introduce migration guide for v1 refs [#DS-800](https://github.com/lmc-eu/spirit-design-system/issues/DS-800) ([c17f7d1](https://github.com/lmc-eu/spirit-design-system/commit/c17f7d1))
- **web-react:** Sort Field components props aplhabetically in READMEs ([1f8afec](https://github.com/lmc-eu/spirit-design-system/commit/1f8afec))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.48.3"></a>

## [0.48.3](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.48.2...@lmc-eu/spirit-web-react@0.48.3) (2023-07-21)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.48.2"></a>

## [0.48.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.48.1...@lmc-eu/spirit-web-react@0.48.2) (2023-07-02)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.48.1"></a>

## [0.48.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.48.0...@lmc-eu/spirit-web-react@0.48.1) (2023-06-29)

Miscellaneous changes

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.48.0"></a>

# [0.48.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.47.0...@lmc-eu/spirit-web-react@0.48.0) (2023-06-28)

### Bug Fixes

- **web-react:** Spinner reexport ([323be71](https://github.com/lmc-eu/spirit-design-system/commit/323be71))
- **web-react:** Stacked Modal Composed closes both dialogs [#DS-740](https://github.com/lmc-eu/spirit-design-system/issues/DS-740) ([c9bfe42](https://github.com/lmc-eu/spirit-design-system/commit/c9bfe42))
- **web-react:** TextArea's maxLength prop is part of Detailed type ([ed0e897](https://github.com/lmc-eu/spirit-design-system/commit/ed0e897))

### Chores

- **web-react:** Set correct path according to the base directory ([6ebd5a3](https://github.com/lmc-eu/spirit-design-system/commit/6ebd5a3))

### Dependencies

- Pin dependencies ([f6bac6d](https://github.com/lmc-eu/spirit-design-system/commit/f6bac6d))
- Update all non-major dependencies ([ba23f3d](https://github.com/lmc-eu/spirit-design-system/commit/ba23f3d))
- Update all non-major dependencies ([c70b276](https://github.com/lmc-eu/spirit-design-system/commit/c70b276))

### Documentation

- **web-react:** Add unit to the `maxFileSize` in the `FileUploaderInput` props ([743eedd](https://github.com/lmc-eu/spirit-design-system/commit/743eedd))

### Features

- **web-react:** Introduce Pagination component [#DS-329](https://github.com/lmc-eu/spirit-design-system/issues/DS-329) ([d719485](https://github.com/lmc-eu/spirit-design-system/commit/d719485))
- **web-react:** Make the preferred height and max height of `ModalDialog` customizable [#DS-723](https://github.com/lmc-eu/spirit-design-system/issues/DS-723) ([8666aef](https://github.com/lmc-eu/spirit-design-system/commit/8666aef))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.47.0"></a>

# [0.47.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.46.0...@lmc-eu/spirit-web-react@0.47.0) (2023-06-11)

### Bug Fixes

- **web-react:** Set `hasSpacing` default value as false in the Stack component ([a0b5fe4](https://github.com/lmc-eu/spirit-design-system/commit/a0b5fe4))
- **web-react:** Storybook argument for ScrollView edgeIndicators ([165357c](https://github.com/lmc-eu/spirit-design-system/commit/165357c))
- **web-react:** Unexported `Tabs` components ([f9ee56c](https://github.com/lmc-eu/spirit-design-system/commit/f9ee56c))

### Chores

- **web-react:** Add Vite React plugin to demo app configuration ([a89b1c3](https://github.com/lmc-eu/spirit-design-system/commit/a89b1c3))
- **web-react:** Exlude demo indexes from build ([08425bd](https://github.com/lmc-eu/spirit-design-system/commit/08425bd)), closes [#309](https://github.com/lmc-eu/spirit-design-system/issues/309), [#DS-668](https://github.com/lmc-eu/spirit-design-system/issues/DS-668)
- **web-react:** Setup deploy of demo stack to Netlify ([2214647](https://github.com/lmc-eu/spirit-design-system/commit/2214647)), closes [#309](https://github.com/lmc-eu/spirit-design-system/issues/309), [#DS-668](https://github.com/lmc-eu/spirit-design-system/issues/DS-668)

### Documentation

- **web-react:** Demonstrate the composition of `ModalComposed` and `ScrollView` [#DS-808](https://github.com/lmc-eu/spirit-design-system/issues/DS-808) ([106abc1](https://github.com/lmc-eu/spirit-design-system/commit/106abc1))
- **web-react:** Introduce demo dev stack with Alert component ([669f303](https://github.com/lmc-eu/spirit-design-system/commit/669f303)), closes [#309](https://github.com/lmc-eu/spirit-design-system/issues/309), [#DS-668](https://github.com/lmc-eu/spirit-design-system/issues/DS-668)
- **web,web-react,web-twig:** Improve Demo Header [#DS-821](https://github.com/lmc-eu/spirit-design-system/issues/DS-821) ([c168eea](https://github.com/lmc-eu/spirit-design-system/commit/c168eea))

### Features

- **web-react:** Add disabled state to the FileUploader [#DS-772](https://github.com/lmc-eu/spirit-design-system/issues/DS-772) ([a5bd194](https://github.com/lmc-eu/spirit-design-system/commit/a5bd194))
- **web-react:** Added isFluid option for FileUploader ([f2209ff](https://github.com/lmc-eu/spirit-design-system/commit/f2209ff))
- **web-react:** CheckboxField and RadioField reference element feature ([cb404ee](https://github.com/lmc-eu/spirit-design-system/commit/cb404ee))
- **web-react:** Introduce ScrollView component [#DS-464](https://github.com/lmc-eu/spirit-design-system/issues/DS-464) ([3845697](https://github.com/lmc-eu/spirit-design-system/commit/3845697))
- **web-react:** Introduce Select component [#DS-789](https://github.com/lmc-eu/spirit-design-system/issues/DS-789) ([8cc74f9](https://github.com/lmc-eu/spirit-design-system/commit/8cc74f9))
- **web-react:** Link and Tag reference polymorph element feature ([db25206](https://github.com/lmc-eu/spirit-design-system/commit/db25206))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.46.0"></a>

# [0.46.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.45.0...@lmc-eu/spirit-web-react@0.46.0) (2023-05-29)

### Bug Fixes

- **web-react:** Fix missing property for hiding label on input ([e41abf6](https://github.com/lmc-eu/spirit-design-system/commit/e41abf6))

### Code Refactoring

- **web-react:** Separate logic of hook and component ValidationText ([fd01166](https://github.com/lmc-eu/spirit-design-system/commit/fd01166))

### Documentation

- **web-react:** Remove RadioField from ValidationText docs as there is no validationText prop ([829171b](https://github.com/lmc-eu/spirit-design-system/commit/829171b))

### Features

- **web-react:** Introduce ValidationText component ([5515bff](https://github.com/lmc-eu/spirit-design-system/commit/5515bff))
- **web-react:** TextArea with auto grow [#DS-761](https://github.com/lmc-eu/spirit-design-system/issues/DS-761) ([64c2dd2](https://github.com/lmc-eu/spirit-design-system/commit/64c2dd2))
- **web,web-react,web-twig:** Allow multiline message in CheckboxField [#DS-735](https://github.com/lmc-eu/spirit-design-system/issues/DS-735) ([395af3d](https://github.com/lmc-eu/spirit-design-system/commit/395af3d))
- **web,web-react,web-twig:** Allow multiline message in TextArea [#DS-738](https://github.com/lmc-eu/spirit-design-system/issues/DS-738) ([9759666](https://github.com/lmc-eu/spirit-design-system/commit/9759666))
- **web,web-react,web-twig:** Allow multiline message in TextField [#DS-734](https://github.com/lmc-eu/spirit-design-system/issues/DS-734) ([81b0882](https://github.com/lmc-eu/spirit-design-system/commit/81b0882))
- **web,web-react,web-twig:** Allow multiline validationText in FileUploaderInput [#DS-737](https://github.com/lmc-eu/spirit-design-system/issues/DS-737) ([6724d7a](https://github.com/lmc-eu/spirit-design-system/commit/6724d7a))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.45.0"></a>

# [0.45.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.44.0...@lmc-eu/spirit-web-react@0.45.0) (2023-05-18)

### Features

- **web-react:** Add iconName prop to FileUploader components [#DS-752](https://github.com/lmc-eu/spirit-design-system/issues/DS-752) ([f6a177a](https://github.com/lmc-eu/spirit-design-system/commit/f6a177a))
- **web-react:** Extend Stack component [#JALL-107](https://github.com/lmc-eu/spirit-design-system/issues/JALL-107) ([ab0d73a](https://github.com/lmc-eu/spirit-design-system/commit/ab0d73a))
- **web-react:** Hiding input when the queue is full [#DS-730](https://github.com/lmc-eu/spirit-design-system/issues/DS-730) ([159152b](https://github.com/lmc-eu/spirit-design-system/commit/159152b))
- **web-react:** Introduction of FileUploader component [#DS-683](https://github.com/lmc-eu/spirit-design-system/issues/DS-683) ([494ab34](https://github.com/lmc-eu/spirit-design-system/commit/494ab34))
- **web-twig:** Hiding input when the queue is full [#DS-730](https://github.com/lmc-eu/spirit-design-system/issues/DS-730) ([2612484](https://github.com/lmc-eu/spirit-design-system/commit/2612484))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.44.0"></a>

# [0.44.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.43.0...@lmc-eu/spirit-web-react@0.44.0) (2023-04-26)

### Features

- **web-twig:** Introduce styleProps, deprecate class in Alert [#DS-646](https://github.com/lmc-eu/spirit-design-system/issues/DS-646) ([99a8cc2](https://github.com/lmc-eu/spirit-design-system/commit/99a8cc2))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.43.0"></a>

# [0.43.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.42.0...@lmc-eu/spirit-web-react@0.43.0) (2023-04-17)

### Bug Fixes

- **web-react:** RadioField required props and Tag mixing size with color props ([027f1c0](https://github.com/lmc-eu/spirit-design-system/commit/027f1c0))

### Code Refactoring

- **web-react:** Remove old deprecation hook and improve deprecation messages [#DS-662](https://github.com/lmc-eu/spirit-design-system/issues/DS-662) ([e2f5b0a](https://github.com/lmc-eu/spirit-design-system/commit/e2f5b0a))

### Features

- **web-react:** Controllable stories states and values ​​according to dictionaries [#DS-622](https://github.com/lmc-eu/spirit-design-system/issues/DS-622) ([2ffa906](https://github.com/lmc-eu/spirit-design-system/commit/2ffa906))
- **web-react:** Extension and modification of Button and ButtonLink [#DS-453](https://github.com/lmc-eu/spirit-design-system/issues/DS-453) ([6eccf1e](https://github.com/lmc-eu/spirit-design-system/commit/6eccf1e))
- **web-react:** Introduce loading state to Button and ButtonLink [#DS-640](https://github.com/lmc-eu/spirit-design-system/issues/DS-640) ([9657c50](https://github.com/lmc-eu/spirit-design-system/commit/9657c50))
- **web-react:** Introduce Spinner component [#DS-639](https://github.com/lmc-eu/spirit-design-system/issues/DS-639) ([0fc7c35](https://github.com/lmc-eu/spirit-design-system/commit/0fc7c35))
- **web-react:** Rename Text Color dictionary to Action Link, introduce correct Text Color [#DS-639](https://github.com/lmc-eu/spirit-design-system/issues/DS-639) ([4d38c72](https://github.com/lmc-eu/spirit-design-system/commit/4d38c72))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.42.0"></a>

# [0.42.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.41.0...@lmc-eu/spirit-web-react@0.42.0) (2023-03-21)

### Dependencies

- Pin dependency terser-webpack-plugin to v5.3.6 ([27d5338](https://github.com/lmc-eu/spirit-design-system/commit/27d5338))

### Documentation

- **web-react:** Adding attributes to the component readme [#DS-604](https://github.com/lmc-eu/spirit-design-system/issues/DS-604) ([94607f9](https://github.com/lmc-eu/spirit-design-system/commit/94607f9))
- **web-react:** Collapse example hideOnClose for Storybook ([79f09f9](https://github.com/lmc-eu/spirit-design-system/commit/79f09f9))
- **web-react:** Collapse example showMore for Storybook ([4b75f0c](https://github.com/lmc-eu/spirit-design-system/commit/4b75f0c))
- **web-react:** Fix internal links to the components in the `web` package ([a636eee](https://github.com/lmc-eu/spirit-design-system/commit/a636eee))
- **web-react:** Fix links to the versions compare in the `web-react` package ([781cd68](https://github.com/lmc-eu/spirit-design-system/commit/781cd68))
- **web-react:** Remove `jsx static` example format from ModalComposed ([a9b484e](https://github.com/lmc-eu/spirit-design-system/commit/a9b484e))
- **web-react:** Replacing button element with Button component [#DS-598](https://github.com/lmc-eu/spirit-design-system/issues/DS-598) ([be96972](https://github.com/lmc-eu/spirit-design-system/commit/be96972))
- **web-twig:** Paragraph indentation and typos ([f24dfc3](https://github.com/lmc-eu/spirit-design-system/commit/f24dfc3))
- **web:** Paragraph indentation and typos ([e1c462f](https://github.com/lmc-eu/spirit-design-system/commit/e1c462f))

### Features

- **web-react:** ForwardRef for Button and ButtonLink [#DS-445](https://github.com/lmc-eu/spirit-design-system/issues/DS-445) ([3750292](https://github.com/lmc-eu/spirit-design-system/commit/3750292))
- **web-react:** Introduction of Header and HeaderDialog [#DS-425](https://github.com/lmc-eu/spirit-design-system/issues/DS-425) ([caab1d5](https://github.com/lmc-eu/spirit-design-system/commit/caab1d5))
- **web-react:** TextField and TextArea props extend ([54f858c](https://github.com/lmc-eu/spirit-design-system/commit/54f858c))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.41.0"></a>

# [0.41.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.40.0...@lmc-eu/spirit-web-react@0.41.0) (2023-03-08)

### Chores

- **web-react:** Remove license file from builded package ([312751f](https://github.com/lmc-eu/spirit-design-system/commit/312751f))

### Documentation

- **web-react, web-twig:** Fix Size Extended dictionary type in API tables ([86d8baf](https://github.com/lmc-eu/spirit-design-system/commit/86d8baf))
- **web-react:** Remove link to detailed information about Icons ([d443e3e](https://github.com/lmc-eu/spirit-design-system/commit/d443e3e))

### Features

- **web-react:** Align dictionaries [#DS-628](https://github.com/lmc-eu/spirit-design-system/issues/DS-628) ([f93525f](https://github.com/lmc-eu/spirit-design-system/commit/f93525f))
- **web-react:** Dictionaries constants ([04f5e99](https://github.com/lmc-eu/spirit-design-system/commit/04f5e99))
- **web-react:** Renaming dictionary types and keys ([62abba5](https://github.com/lmc-eu/spirit-design-system/commit/62abba5))
- **web-react:** TextField and TextArea helper text [#DS-597](https://github.com/lmc-eu/spirit-design-system/issues/DS-597) ([b0aa2de](https://github.com/lmc-eu/spirit-design-system/commit/b0aa2de))
- **web-react:** Update Tag - dictionaries and deprecate theme, tag and `default` [#DS-442](https://github.com/lmc-eu/spirit-design-system/issues/DS-442) [#DS-377](https://github.com/lmc-eu/spirit-design-system/issues/DS-377) ([0d9e729](https://github.com/lmc-eu/spirit-design-system/commit/0d9e729))
- **web-react:** Use Color and Size Dictionaries in Button and ButtonLink components [#DS-436](https://github.com/lmc-eu/spirit-design-system/issues/DS-436) ([84daa36](https://github.com/lmc-eu/spirit-design-system/commit/84daa36))
- **web-react:** Validation state dictionary [#DS-590](https://github.com/lmc-eu/spirit-design-system/issues/DS-590) ([bb495da](https://github.com/lmc-eu/spirit-design-system/commit/bb495da))
- **web-twig:** Align dictionaries [#DS-628](https://github.com/lmc-eu/spirit-design-system/issues/DS-628) ([061275a](https://github.com/lmc-eu/spirit-design-system/commit/061275a))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.40.0"></a>

# [0.40.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.39.1...@lmc-eu/spirit-web-react@0.40.0) (2023-02-17)

### Bug Fixes

- **web-react:** Add missing icon colors key-pairs for Alert component ([4d58d30](https://github.com/lmc-eu/spirit-design-system/commit/4d58d30)), closes [#DS-619](https://github.com/lmc-eu/spirit-design-system/issues/DS-619)
- **web-react:** Do not pass `iconName` prop to Alert html element ([0b6fef1](https://github.com/lmc-eu/spirit-design-system/commit/0b6fef1)), closes [#DS-619](https://github.com/lmc-eu/spirit-design-system/issues/DS-619)

### Code Refactoring

- **web-react:** Ensure that Dialog component have only one child ([26186ef](https://github.com/lmc-eu/spirit-design-system/commit/26186ef)), closes [#DS-626](https://github.com/lmc-eu/spirit-design-system/issues/DS-626)
- **web-react:** Introduce `SizeProps` type as generic for size prop ([46283f3](https://github.com/lmc-eu/spirit-design-system/commit/46283f3))
- **web-react:** Remove ModalBackdrop component ([242907e](https://github.com/lmc-eu/spirit-design-system/commit/242907e)), closes [#DS-626](https://github.com/lmc-eu/spirit-design-system/issues/DS-626)

### Dependencies

- Update all non-major dependencies ([fa43a3a](https://github.com/lmc-eu/spirit-design-system/commit/fa43a3a))

### Documentation

- **web-react:** Fix comment in ChildrenProps interface ([5701ddf](https://github.com/lmc-eu/spirit-design-system/commit/5701ddf))

### Features

- **web-react:** Introduction ModalComposed component [#DS-506](https://github.com/lmc-eu/spirit-design-system/issues/DS-506) ([b111e90](https://github.com/lmc-eu/spirit-design-system/commit/b111e90))
- **web-react:** Use Action and Emotion Color Dictionaries in Pill component [#DS-574](https://github.com/lmc-eu/spirit-design-system/issues/DS-574) ([ce3fc3a](https://github.com/lmc-eu/spirit-design-system/commit/ce3fc3a))
- **web-react:** Use Text Color Dictionary in Link component [#DS-573](https://github.com/lmc-eu/spirit-design-system/issues/DS-573) ([ec29a37](https://github.com/lmc-eu/spirit-design-system/commit/ec29a37))

### Tests

- **web-react:** Add missing test for `useIconName` hook ([be46fc4](https://github.com/lmc-eu/spirit-design-system/commit/be46fc4)), closes [#DS-619](https://github.com/lmc-eu/spirit-design-system/issues/DS-619)

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.39.1"></a>

## [0.39.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.39.0...@lmc-eu/spirit-web-react@0.39.1) (2023-02-13)

### Bug Fixes

- **web-react:** Add missing id prop for TextFieldBase input element ([75fa537](https://github.com/lmc-eu/spirit-design-system/commit/75fa537)), closes [#DS-599](https://github.com/lmc-eu/spirit-design-system/issues/DS-599)
- **web-react:** Make `size` prop on Heading component optional ([a0b09ad](https://github.com/lmc-eu/spirit-design-system/commit/a0b09ad))

### Dependencies

- Pin dependencies ([f695280](https://github.com/lmc-eu/spirit-design-system/commit/f695280))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.39.0"></a>

# [0.39.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.38.0...@lmc-eu/spirit-web-react@0.39.0) (2023-02-09)

### Bug Fixes

- **web-react:** Display warning message only in development environment ([da946e0](https://github.com/lmc-eu/spirit-design-system/commit/da946e0))
- **web-react:** Fix Heading README Dictionaries URL ([53071e2](https://github.com/lmc-eu/spirit-design-system/commit/53071e2))
- **web-react:** Introduce SpiritButtonLinkProps for ButtonLink component ([85af50e](https://github.com/lmc-eu/spirit-design-system/commit/85af50e))
- **web-react:** Tabs transfer properties [#DS-401](https://github.com/lmc-eu/spirit-design-system/issues/DS-401) ([5be8b17](https://github.com/lmc-eu/spirit-design-system/commit/5be8b17))

### Dependencies

- Update all non-major dependencies ([190529b](https://github.com/lmc-eu/spirit-design-system/commit/190529b))

### Features

- **web-react:** Allow extension of `size` prop of the Text component ([79563ba](https://github.com/lmc-eu/spirit-design-system/commit/79563ba))
- **web-react:** Define size dictionaries and use them in Text component [#DS-450](https://github.com/lmc-eu/spirit-design-system/issues/DS-450) ([5e6af5e](https://github.com/lmc-eu/spirit-design-system/commit/5e6af5e))
- **web-react:** Deprecate `size` prop in Icon component in favor of `boxSize` [#DS-452](https://github.com/lmc-eu/spirit-design-system/issues/DS-452) ([48d00e7](https://github.com/lmc-eu/spirit-design-system/commit/48d00e7))
- **web-react:** Dictionary SizeExtended extends Size dictionary ([68bfa35](https://github.com/lmc-eu/spirit-design-system/commit/68bfa35))
- **web-react:** Introduction Tooltip component [#DS-565](https://github.com/lmc-eu/spirit-design-system/issues/DS-565) ([d0ae08a](https://github.com/lmc-eu/spirit-design-system/commit/d0ae08a))
- **web-react:** Use Emotion Color Dictionary in Alert component [#DS-555](https://github.com/lmc-eu/spirit-design-system/issues/DS-555) ([df463c6](https://github.com/lmc-eu/spirit-design-system/commit/df463c6))
- **web-react:** Use size dictionaries in Heading component [#DS-572](https://github.com/lmc-eu/spirit-design-system/issues/DS-572) ([94260d3](https://github.com/lmc-eu/spirit-design-system/commit/94260d3))

### Styles

- **web-react:** Reformatting code using upgraded Prettier ([394c30c](https://github.com/lmc-eu/spirit-design-system/commit/394c30c))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.38.0"></a>

# [0.38.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.37.1...@lmc-eu/spirit-web-react@0.38.0) (2023-02-06)

### Chores

- **web-react:** Add missing package entry points for distribution ([30c3195](https://github.com/lmc-eu/spirit-design-system/commit/30c3195))
- **web-react:** Do not generate browser distribution files for UMD ([c4e4b96](https://github.com/lmc-eu/spirit-design-system/commit/c4e4b96))
- **web-react:** Do not generate type declarations for UMD format ([2c80743](https://github.com/lmc-eu/spirit-design-system/commit/2c80743))
- **web-react:** Log deprecations only in development mode ([630daf4](https://github.com/lmc-eu/spirit-design-system/commit/630daf4))
- **web-react:** Rename distribution directory with UMD to `bundles` ([2a817b7](https://github.com/lmc-eu/spirit-design-system/commit/2a817b7)), closes [#DS-580](https://github.com/lmc-eu/spirit-design-system/issues/DS-580)
- **web-react:** Rename main CommonJS entrypoint to index.cjs [#DS-580](https://github.com/lmc-eu/spirit-design-system/issues/DS-580) ([5a4ca81](https://github.com/lmc-eu/spirit-design-system/commit/5a4ca81))
- **web-react:** Run multiple scripts with `npm-run-all` ([9cd31d7](https://github.com/lmc-eu/spirit-design-system/commit/9cd31d7))

### Features

- **web-react:** Depreacate `isFullWidth` prop in Dropdown component ([d317148](https://github.com/lmc-eu/spirit-design-system/commit/d317148))
- **web-react:** Introduce `fullWidthMode` prop in Dropdown [#DS-493](https://github.com/lmc-eu/spirit-design-system/issues/DS-493) ([3e09293](https://github.com/lmc-eu/spirit-design-system/commit/3e09293))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.37.1"></a>

## [0.37.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.37.0...@lmc-eu/spirit-web-react@0.37.1) (2023-02-01)

### Documentation

- **web-react:** Fix renderToggle to renderTrigger ([1ad3d96](https://github.com/lmc-eu/spirit-design-system/commit/1ad3d96))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.37.0"></a>

# [0.37.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.36.0...@lmc-eu/spirit-web-react@0.37.0) (2023-01-29)

### Code Refactoring

- **web-react:** Fix spelling `adorment` -> `adornment` ([dfb7191](https://github.com/lmc-eu/spirit-design-system/commit/dfb7191))
- **web-react:** Use HOC to add Password Toggle to TextField ([61282e0](https://github.com/lmc-eu/spirit-design-system/commit/61282e0)), closes [#DS-508](https://github.com/lmc-eu/spirit-design-system/issues/DS-508)

### Documentation

- **web-react:** Introduce Bundlephobia badges about size and deps ([287ee39](https://github.com/lmc-eu/spirit-design-system/commit/287ee39))
- **web, web-react:** Fix external links in README's ([6384a5d](https://github.com/lmc-eu/spirit-design-system/commit/6384a5d))

### Features

- **web-react:** Add `hasPasswordToggle` feature to the TextField [#DS-508](https://github.com/lmc-eu/spirit-design-system/issues/DS-508) ([8988667](https://github.com/lmc-eu/spirit-design-system/commit/8988667))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.36.0"></a>

# [0.36.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.35.0...@lmc-eu/spirit-web-react@0.36.0) (2023-01-16)

### Bug Fixes

- **web-react:** Collapse content element props ([6440ef3](https://github.com/lmc-eu/spirit-design-system/commit/6440ef3))
- **web-react:** Dynamically resize Modal base on its content ([931458e](https://github.com/lmc-eu/spirit-design-system/commit/931458e)), closes [#DS-533](https://github.com/lmc-eu/spirit-design-system/issues/DS-533)

### Chores

- **web-react:** Mark package as side-effect free ([71c5844](https://github.com/lmc-eu/spirit-design-system/commit/71c5844))

### Features

- **web-react:** Export all types in main index too [#DS-532](https://github.com/lmc-eu/spirit-design-system/issues/DS-532) ([8c79d97](https://github.com/lmc-eu/spirit-design-system/commit/8c79d97))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.35.0"></a>

# [0.35.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.34.0...@lmc-eu/spirit-web-react@0.35.0) (2023-01-10)

### Bug Fixes

- **web-react:** Add missing component exports ([f2dae2b](https://github.com/lmc-eu/spirit-design-system/commit/f2dae2b))
- **web-react:** Make CheckboxField implementation same as in other packages and update itemPropsTest ([b136c5f](https://github.com/lmc-eu/spirit-design-system/commit/b136c5f))

### Chores

- **web-react:** Remove unused variables ([309216d](https://github.com/lmc-eu/spirit-design-system/commit/309216d))
- **web-react:** Renaming index files to the ts extension [#DS-456](https://github.com/lmc-eu/spirit-design-system/issues/DS-456) ([1f93f15](https://github.com/lmc-eu/spirit-design-system/commit/1f93f15))

### Dependencies

- Pin dependency @testing-library/user-event to 14.4.3 ([f57bddf](https://github.com/lmc-eu/spirit-design-system/commit/f57bddf))

### Documentation

- **web-react:** Fix Accordion and Modal code examples ([c308b1b](https://github.com/lmc-eu/spirit-design-system/commit/c308b1b))

### Features

- **web-react:** Introduce the missing input types of `TextField`: `number`, `search`, `tel`, `url` ([73aa91b](https://github.com/lmc-eu/spirit-design-system/commit/73aa91b))

### Styles

- **web-react:** Replacing backticks in storybook and tests [#DS-468](https://github.com/lmc-eu/spirit-design-system/issues/DS-468) ([9053322](https://github.com/lmc-eu/spirit-design-system/commit/9053322))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.34.0"></a>

# [0.34.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.33.0...@lmc-eu/spirit-web-react@0.34.0) (2022-12-26)

### Bug Fixes

- **web-react:** Fix export of the ButtonLink component [#DS-519](https://github.com/lmc-eu/spirit-design-system/issues/DS-519) ([792ef83](https://github.com/lmc-eu/spirit-design-system/commit/792ef83))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.33.0"></a>

# [0.33.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.32.0...@lmc-eu/spirit-web-react@0.33.0) (2022-12-16)

### BREAKING CHANGES

- **web-react:** Introduce uncontrolled Tabs component ([2b5b550](https://github.com/lmc-eu/spirit-design-system/commit/2b5b550))

### Dependencies

- Pin dependency @types/react-transition-group to 4.4.5 ([327ee68](https://github.com/lmc-eu/spirit-design-system/commit/327ee68))

### Documentation

- **contributing:** Addition to readme and contribution files ([692d7df](https://github.com/lmc-eu/spirit-design-system/commit/692d7df))
- **contributing:** Updating readme and contribution files ([6f7dc73](https://github.com/lmc-eu/spirit-design-system/commit/6f7dc73))
- **web-react:** Introducing the concept of controlled and uncontrolled ([a3599e1](https://github.com/lmc-eu/spirit-design-system/commit/a3599e1))

### Features

- **web-react:** Add Item variant to RadioField and CheckboxField and improve its stories [#DS-364](https://github.com/lmc-eu/spirit-design-system/issues/DS-364) ([4564bf2](https://github.com/lmc-eu/spirit-design-system/commit/4564bf2))
- **web-react:** Allow `TabItem` and `TabPane` to use transfer props ([1cc8e95](https://github.com/lmc-eu/spirit-design-system/commit/1cc8e95))
- **web-react:** Introduce Uncontrolled Accordion [#DS-459](https://github.com/lmc-eu/spirit-design-system/issues/DS-459) ([4011425](https://github.com/lmc-eu/spirit-design-system/commit/4011425))

### Tests

- **web-react:** Introduce UncontrolledTabs component test ([ad47ecf](https://github.com/lmc-eu/spirit-design-system/commit/ad47ecf))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.32.0"></a>

# [0.32.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.31.0...@lmc-eu/spirit-web-react@0.32.0) (2022-12-12)

### Bug Fixes

- **web-react:** Module `Transition` was not found while using Collapse ([b50b2d1](https://github.com/lmc-eu/spirit-design-system/commit/b50b2d1))

### Code Refactoring

- **web-react:** Do not call outside click handler on ever call ([1823714](https://github.com/lmc-eu/spirit-design-system/commit/1823714))
- **web-react:** Remove IconsProvider while IconsDecorator is ([dcb0a56](https://github.com/lmc-eu/spirit-design-system/commit/dcb0a56))

### Features

- **web-react:** Introduce Dialog component ([86ea63c](https://github.com/lmc-eu/spirit-design-system/commit/86ea63c))
- **web-react:** Introduce Modal component ([bc8c969](https://github.com/lmc-eu/spirit-design-system/commit/bc8c969))
- **web-react:** Introduce on auto close callback prop for Dropdown ([387f9db](https://github.com/lmc-eu/spirit-design-system/commit/387f9db))
- **web-react:** Introduce React Accordion component [#DS-447](https://github.com/lmc-eu/spirit-design-system/issues/DS-447) ([d8b5245](https://github.com/lmc-eu/spirit-design-system/commit/d8b5245))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.31.0"></a>

# [0.31.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.30.0...@lmc-eu/spirit-web-react@0.31.0) (2022-12-08)

### BREAKING CHANGES

- **web-react:** Rename Collapse `isCollapsed` prop to `isOpen` ([30ee874](https://github.com/lmc-eu/spirit-design-system/commit/30ee874)), closes [#DS-460](https://github.com/lmc-eu/spirit-design-system/issues/DS-460)

### Bug Fixes

- **web-react:** Dropdown props are not required anymore ([052c72b](https://github.com/lmc-eu/spirit-design-system/commit/052c72b))

### Features

- **web-react:** Introduce transitioning for Collapse component ([818ca30](https://github.com/lmc-eu/spirit-design-system/commit/818ca30))
- **web-react:** Introduce UncontrolledCollapse component ([cee6e05](https://github.com/lmc-eu/spirit-design-system/commit/cee6e05))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.30.0"></a>

# [0.30.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.29.0...@lmc-eu/spirit-web-react@0.30.0) (2022-11-30)

### BREAKING CHANGES

- **web-react:** Change autoclose prop in Dropdown ([cdd09fb](https://github.com/lmc-eu/spirit-design-system/commit/cdd09fb))
- **web-react:** Rename TextField size attribute to inputWidth ([73df013](https://github.com/lmc-eu/spirit-design-system/commit/73df013))

### Bug Fixes

- **web-react:** Add missing id attribute to text form components [#DS-319](https://github.com/lmc-eu/spirit-design-system/issues/DS-319) ([7cf93e2](https://github.com/lmc-eu/spirit-design-system/commit/7cf93e2))
- **web-react:** Add missing props and classes for Dropdown component ([b69f41a](https://github.com/lmc-eu/spirit-design-system/commit/b69f41a))
- **web-react:** Do not render icon before the first breadcrumb item [#JALL-32](https://github.com/lmc-eu/spirit-design-system/issues/JALL-32) ([f4c6901](https://github.com/lmc-eu/spirit-design-system/commit/f4c6901))
- **web-react:** Fix HTML rendering of the Storybook components with compound name ([a3dcb40](https://github.com/lmc-eu/spirit-design-system/commit/a3dcb40))

### Chores

- **web-react:** Bundle rollup config as CommonJS ([8942c3e](https://github.com/lmc-eu/spirit-design-system/commit/8942c3e))

### Dependencies

- Update dependency @lmc-eu/eslint-config-jest to v2 ([c6d1b83](https://github.com/lmc-eu/spirit-design-system/commit/c6d1b83))
- Update dependency @rollup/plugin-node-resolve to v15 ([5c8dc9b](https://github.com/lmc-eu/spirit-design-system/commit/5c8dc9b))
- Update dependency jest to v29 ([d7e3dc9](https://github.com/lmc-eu/spirit-design-system/commit/d7e3dc9))
- Update dependency jest-cli to v29 ([7e0cc75](https://github.com/lmc-eu/spirit-design-system/commit/7e0cc75))
- Update dependency jest-environment-jsdom to v29 ([f7342b1](https://github.com/lmc-eu/spirit-design-system/commit/f7342b1))
- Update dependency rollup to v3 ([5da2bd2](https://github.com/lmc-eu/spirit-design-system/commit/5da2bd2))

### Documentation

- **web-react:** Add missing htmlFor attribute in the component documentation ([3d2fca5](https://github.com/lmc-eu/spirit-design-system/commit/3d2fca5))
- **web-react:** Reorganize and amend TextField stories ([4b6859c](https://github.com/lmc-eu/spirit-design-system/commit/4b6859c))

### Features

- **web-react:** Add missing `breakpoint` prop to Dropdown component ([d0e5ff6](https://github.com/lmc-eu/spirit-design-system/commit/d0e5ff6))
- **web-react:** Clean and unify form components props ([8aa13d5](https://github.com/lmc-eu/spirit-design-system/commit/8aa13d5))
- **web-react:** Introduce TextArea component [#DS-319](https://github.com/lmc-eu/spirit-design-system/issues/DS-319) ([7e6e680](https://github.com/lmc-eu/spirit-design-system/commit/7e6e680))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.29.0"></a>

# [0.29.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.28.0...@lmc-eu/spirit-web-react@0.29.0) (2022-11-07)

### Chores

- **web-react:** Removed `camelcase` rule from ESlint config ([1e9eb6e](https://github.com/lmc-eu/spirit-design-system/commit/1e9eb6e))

### Dependencies

- Update all non-major dependencies ([48cac89](https://github.com/lmc-eu/spirit-design-system/commit/48cac89))

### Features

- **web-react:** Introduction React Dropdown [#DS-394](https://github.com/lmc-eu/spirit-design-system/issues/DS-394) ([6e4cc9a](https://github.com/lmc-eu/spirit-design-system/commit/6e4cc9a))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.28.0"></a>

# [0.28.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.27.0...@lmc-eu/spirit-web-react@0.28.0) (2022-10-25)

### Code Refactoring

- **web-react:** Extended hooks [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([4181504](https://github.com/lmc-eu/spirit-design-system/commit/4181504))

### Features

- **web-react:** Collapse react implementation [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([f450b93](https://github.com/lmc-eu/spirit-design-system/commit/f450b93))
- **web-react:** Updated types and tests [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([d52ca1a](https://github.com/lmc-eu/spirit-design-system/commit/d52ca1a))
- **web-react:** Updates by comments [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([c59eb64](https://github.com/lmc-eu/spirit-design-system/commit/c59eb64))
- **web-react:** Updates by comments and tests [#DS-275](https://github.com/lmc-eu/spirit-design-system/issues/DS-275) ([a9cf824](https://github.com/lmc-eu/spirit-design-system/commit/a9cf824))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.27.0"></a>

# [0.27.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.26.0...@lmc-eu/spirit-web-react@0.27.0) (2022-10-13)

### BREAKING CHANGES

- **web-react:** Do not provide non-existing CSS class `Tabs-content` in `Tabs` hook ([eb0ad9a](https://github.com/lmc-eu/spirit-design-system/commit/eb0ad9a))
- **web-react:** Set default fill to none in Icon [#DS-397](https://github.com/lmc-eu/spirit-design-system/issues/DS-397) ([8708f4d](https://github.com/lmc-eu/spirit-design-system/commit/8708f4d))
- **web-react:** Set Icon viewBox to fixed values to allow scaling ([c54b854](https://github.com/lmc-eu/spirit-design-system/commit/c54b854))
- **web-react:** Update Pill variants - remove secondary and add emotion colors [#DS-408](https://github.com/lmc-eu/spirit-design-system/issues/DS-408) ([850083c](https://github.com/lmc-eu/spirit-design-system/commit/850083c))

### Styles

- **web:** Upgrade stylelint config and fix errors [#DS-322](https://github.com/lmc-eu/spirit-design-system/issues/DS-322) ([4df87da](https://github.com/lmc-eu/spirit-design-system/commit/4df87da))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.26.0"></a>

# [0.26.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.25.0...@lmc-eu/spirit-web-react@0.26.0) (2022-10-03)

### BREAKING CHANGES

- Remove `narrow` preset of `Grid` in favour of product-specific layouts ([64f5588](https://github.com/lmc-eu/spirit-design-system/commit/64f5588))

### Features

- **web-react:** Add abstract component TextFieldBase [#DS-319](https://github.com/lmc-eu/spirit-design-system/issues/DS-319) ([002a00f](https://github.com/lmc-eu/spirit-design-system/commit/002a00f))
- **web-react:** Unify props of the form components ([169b84e](https://github.com/lmc-eu/spirit-design-system/commit/169b84e))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.25.0"></a>

# [0.25.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.24.0...@lmc-eu/spirit-web-react@0.25.0) (2022-09-22)

### BREAKING CHANGES

- **web:** Button must have set a size variant [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([4ef5e85](https://github.com/lmc-eu/spirit-design-system/commit/4ef5e85))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.24.0"></a>

# [0.24.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.23.0...@lmc-eu/spirit-web-react@0.24.0) (2022-09-15)

### Bug Fixes

- **web-react:** Added StyleProps to Tag component [#DS-325](https://github.com/lmc-eu/spirit-design-system/issues/DS-325) ([54599b7](https://github.com/lmc-eu/spirit-design-system/commit/54599b7))
- **web-react:** Create RestProps and added to all RC [#DS-332](https://github.com/lmc-eu/spirit-design-system/issues/DS-332) ([cb4a1bd](https://github.com/lmc-eu/spirit-design-system/commit/cb4a1bd))
- **web-react:** Remove unnecessary props from Storybook [#DS-325](https://github.com/lmc-eu/spirit-design-system/issues/DS-325) ([c507819](https://github.com/lmc-eu/spirit-design-system/commit/c507819))
- **web-react:** Update type property [#DS-332](https://github.com/lmc-eu/spirit-design-system/issues/DS-332) ([716d0f7](https://github.com/lmc-eu/spirit-design-system/commit/716d0f7))

### Dependencies

- Update all non-major dependencies ([264c250](https://github.com/lmc-eu/spirit-design-system/commit/264c250))

### Features

- **web-react:** Add aria-hidden to Icon component ([e43a474](https://github.com/lmc-eu/spirit-design-system/commit/e43a474))
- **web-react:** Add five columns option to Grid ([cafcc5b](https://github.com/lmc-eu/spirit-design-system/commit/cafcc5b))
- **web-react:** Add property size to the Button [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([05a93a9](https://github.com/lmc-eu/spirit-design-system/commit/05a93a9))
- **web-react:** Added missing props definition to Link and Input ([ebacb66](https://github.com/lmc-eu/spirit-design-system/commit/ebacb66))
- **web-react:** Remove Icon class from the Icon component and remove storybook link to Icon styles ([489784a](https://github.com/lmc-eu/spirit-design-system/commit/489784a))
- **web-react:** Set property color as optional to the Button [#DS-318](https://github.com/lmc-eu/spirit-design-system/issues/DS-318) ([a79c477](https://github.com/lmc-eu/spirit-design-system/commit/a79c477))
- **web-react:** Use Icon in Alert and add centered variant [#DS-304](https://github.com/lmc-eu/spirit-design-system/issues/DS-304) ([09e263e](https://github.com/lmc-eu/spirit-design-system/commit/09e263e))
- **web-react:** Use Icon in Breadcrumbs [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([1b57b76](https://github.com/lmc-eu/spirit-design-system/commit/1b57b76))
- **web-react:** Use Icon in Button [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([45c2240](https://github.com/lmc-eu/spirit-design-system/commit/45c2240))
- **web-react:** Use Icon in Header [#DS-305](https://github.com/lmc-eu/spirit-design-system/issues/DS-305) ([612d5ba](https://github.com/lmc-eu/spirit-design-system/commit/612d5ba))
- **web:** Update Breadcrumbs' last item's theme color (refs [#DS-313](https://github.com/lmc-eu/spirit-design-system/issues/DS-313)) ([7f53b42](https://github.com/lmc-eu/spirit-design-system/commit/7f53b42))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.23.0"></a>

# [0.23.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.22.0...@lmc-eu/spirit-web-react@0.23.0) (2022-08-31)

### Dependencies

- Update all non-major dependencies ([28d33a2](https://github.com/lmc-eu/spirit-design-system/commit/28d33a2))

### Documentation

- **web:** Improve previews for both development and Supernova context ([653b618](https://github.com/lmc-eu/spirit-design-system/commit/653b618))

### Features

- Add shx package to cross-platform commands ([9c358ef](https://github.com/lmc-eu/spirit-design-system/commit/9c358ef))
- **web-react:** Introduce `Breadcrumbs` component (refs [#DS-302](https://github.com/lmc-eu/spirit-design-system/issues/DS-302)) ([c6110bc](https://github.com/lmc-eu/spirit-design-system/commit/c6110bc))
- **web-react:** Introduce Icon component [#DS-287](https://github.com/lmc-eu/spirit-design-system/issues/DS-287) ([a710f52](https://github.com/lmc-eu/spirit-design-system/commit/a710f52))
- **web-react:** Introduce RadioField component ([7007e3a](https://github.com/lmc-eu/spirit-design-system/commit/7007e3a))

### Tests

- **web-react:** Allow prop tests to render async components ([b8ad8a3](https://github.com/lmc-eu/spirit-design-system/commit/b8ad8a3))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.22.0"></a>

# [0.22.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.21.0...@lmc-eu/spirit-web-react@0.22.0) (2022-08-10)

### Dependencies

- Update all non-major dependencies to v7.18.10 ([b4306fb](https://github.com/lmc-eu/spirit-design-system/commit/b4306fb))

### Features

- **web-react:** Introduce `informative` variant to `Alert` [#DS-274](https://github.com/lmc-eu/spirit-design-system/issues/DS-274) ([221c542](https://github.com/lmc-eu/spirit-design-system/commit/221c542))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.21.0"></a>

# [0.21.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.20.2...@lmc-eu/spirit-web-react@0.21.0) (2022-07-30)

### Dependencies

- Update all non-major dependencies ([8e53fff](https://github.com/lmc-eu/spirit-design-system/commit/8e53fff))

### Documentation

- **web-react:** Introduce instructions for contributors ([bf460e9](https://github.com/lmc-eu/spirit-design-system/commit/bf460e9))
- **web-react:** Typo in CheckboxField ([66f2c66](https://github.com/lmc-eu/spirit-design-system/commit/66f2c66))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.20.2"></a>

## [0.20.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.20.1...@lmc-eu/spirit-web-react@0.20.2) (2022-07-19)

### Bug Fixes

- **web-react:** Add missing default exports of components ([a875fee](https://github.com/lmc-eu/spirit-design-system/commit/a875fee))

### Dependencies

- Update all non-major dependencies ([2dd4292](https://github.com/lmc-eu/spirit-design-system/commit/2dd4292))
- Update all non-major dependencies ([c3efcf9](https://github.com/lmc-eu/spirit-design-system/commit/c3efcf9))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.20.1"></a>

## [0.20.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.20.0...@lmc-eu/spirit-web-react@0.20.1) (2022-07-11)

### Bug Fixes

- **web-react:** Pass rest props to main element of the component ([717c4a9](https://github.com/lmc-eu/spirit-design-system/commit/717c4a9))
- **web-react:** Substract props in type removed by button style hook ([0417518](https://github.com/lmc-eu/spirit-design-system/commit/0417518))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.20.0"></a>

# [0.20.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.19.0...@lmc-eu/spirit-web-react@0.20.0) (2022-07-07)

### Dependencies

- Pin dependencies ([8ba1b24](https://github.com/lmc-eu/spirit-design-system/commit/8ba1b24))
- Update all non-major dependencies ([4429cf1](https://github.com/lmc-eu/spirit-design-system/commit/4429cf1))
- Update all non-major dependencies ([8b2c9a9](https://github.com/lmc-eu/spirit-design-system/commit/8b2c9a9))

### Features

- **web-react:** Introduce Tabs components (refs [#DS-232](https://github.com/lmc-eu/spirit-design-system/issues/DS-232)) ([b88c91b](https://github.com/lmc-eu/spirit-design-system/commit/b88c91b))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.19.0"></a>

# [0.19.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.18.0...@lmc-eu/spirit-web-react@0.19.0) (2022-06-23)

### Chores

- Move tsconfigs to package root ([ed4b357](https://github.com/lmc-eu/spirit-design-system/commit/ed4b357))
- **repo:** Speed up monorepo scripts using Nx (refs [#265](https://github.com/lmc-eu/spirit-design-system/issues/265)) ([6c9e828](https://github.com/lmc-eu/spirit-design-system/commit/6c9e828))

### Dependencies

- Update all non-major dependencies ([493b4d7](https://github.com/lmc-eu/spirit-design-system/commit/493b4d7))
- Update dependency @types/jest to v28 ([d98405d](https://github.com/lmc-eu/spirit-design-system/commit/d98405d))
- Update dependency nanoid to v4 ([3446223](https://github.com/lmc-eu/spirit-design-system/commit/3446223))
- **web-react:** Add React 18 into peer dependencies (refs [#333](https://github.com/lmc-eu/spirit-design-system/issues/333)) ([9b52174](https://github.com/lmc-eu/spirit-design-system/commit/9b52174))

### Features

- **web-react:** Support custom classes and styles via UNSAFE\_ props ([fff2c35](https://github.com/lmc-eu/spirit-design-system/commit/fff2c35))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.18.0"></a>

# [0.18.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.17.0...@lmc-eu/spirit-web-react@0.18.0) (2022-06-06)

### Chores

- **ci:** Use @swc to speed up Jest tests ([93e1614](https://github.com/lmc-eu/spirit-design-system/commit/93e1614))

### Dependencies

- Update all non-major dependencies ([a7990c7](https://github.com/lmc-eu/spirit-design-system/commit/a7990c7))
- Update all non-major dependencies ([2de1f66](https://github.com/lmc-eu/spirit-design-system/commit/2de1f66))

### Documentation

- **web-react:** Introduce Header component documentation (refs [#256](https://github.com/lmc-eu/spirit-design-system/issues/256)) ([b4042e5](https://github.com/lmc-eu/spirit-design-system/commit/b4042e5))

### Features

- **web-react:** Introduce Header component (refs [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)) ([a28383b](https://github.com/lmc-eu/spirit-design-system/commit/a28383b))
- **web-react:** Introduce header's navigation bar components (refs [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)) ([50f6b51](https://github.com/lmc-eu/spirit-design-system/commit/50f6b51))
- **web-react:** Introduce Pill component to React [#DS-243](https://github.com/lmc-eu/spirit-design-system/issues/DS-243) ([f6fa674](https://github.com/lmc-eu/spirit-design-system/commit/f6fa674))
- **web-react:** Introduce toggle functionality to Header (refs [#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)) ([6486622](https://github.com/lmc-eu/spirit-design-system/commit/6486622))
- **web-react:** Make Header components accessible from package ([#DS-161](https://github.com/lmc-eu/spirit-design-system/issues/DS-161)) ([2dd005f](https://github.com/lmc-eu/spirit-design-system/commit/2dd005f))

### Tests

- **web-react:** Introduce Header component tests (refs [#256](https://github.com/lmc-eu/spirit-design-system/issues/256)) ([90056f3](https://github.com/lmc-eu/spirit-design-system/commit/90056f3))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.17.0"></a>

# [0.17.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.16.0...@lmc-eu/spirit-web-react@0.17.0) (2022-05-19)

### BREAKING CHANGES

- **web-react:** Add Tag sizes to react package [#DS-245](https://github.com/lmc-eu/spirit-design-system/issues/DS-245) ([2f826b8](https://github.com/lmc-eu/spirit-design-system/commit/2f826b8))

### Dependencies

- Update all non-major dependencies ([02f8247](https://github.com/lmc-eu/spirit-design-system/commit/02f8247))
- Update all non-major dependencies ([1cefb14](https://github.com/lmc-eu/spirit-design-system/commit/1cefb14))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.16.0"></a>

# [0.16.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.15.0...@lmc-eu/spirit-web-react@0.16.0) (2022-05-02)

### Bug Fixes

- **web-react:** Add missing default prop size for Heading (refs [#277](https://github.com/lmc-eu/spirit-design-system/issues/277)) ([c75d75c](https://github.com/lmc-eu/spirit-design-system/commit/c75d75c))

### Dependencies

- Update all non-major dependencies ([d6efb47](https://github.com/lmc-eu/spirit-design-system/commit/d6efb47))

### Documentation

- **web-react:** Refactor Button stories to be more maintainable ([14a38f4](https://github.com/lmc-eu/spirit-design-system/commit/14a38f4))
- **web-react:** Showcase the HTML for the rendered component ([758dc0f](https://github.com/lmc-eu/spirit-design-system/commit/758dc0f))

### Tests

- **web-react:** Refactor Heading component test to use test provider ([d910c2b](https://github.com/lmc-eu/spirit-design-system/commit/d910c2b))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.15.0"></a>

# [0.15.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.14.0...@lmc-eu/spirit-web-react@0.15.0) (2022-04-28)

### Dependencies

- **repo:** Install `jest-environment-jsdom` which is required by jest@28 ([ebae8d1](https://github.com/lmc-eu/spirit-design-system/commit/ebae8d1))
- Update all non-major dependencies ([c0817e6](https://github.com/lmc-eu/spirit-design-system/commit/c0817e6))
- Update dependency babel-jest to v28 ([cd71a29](https://github.com/lmc-eu/spirit-design-system/commit/cd71a29))
- Update dependency jest to v28 ([646396b](https://github.com/lmc-eu/spirit-design-system/commit/646396b))
- Update dependency jest-cli to v28 ([15b87d0](https://github.com/lmc-eu/spirit-design-system/commit/15b87d0))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.14.0"></a>

# [0.14.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.13.0...@lmc-eu/spirit-web-react@0.14.0) (2022-04-25)

### Bug Fixes

- CheckboxField label interaction [#DS-179](https://github.com/lmc-eu/spirit-design-system/issues/DS-179) ([9240a52](https://github.com/lmc-eu/spirit-design-system/commit/9240a52))

### Dependencies

- Resolve @types/react-dom to 18.0.0 and above (refs [#258](https://github.com/lmc-eu/spirit-design-system/issues/258)) ([e7a5924](https://github.com/lmc-eu/spirit-design-system/commit/e7a5924))
- Update all non-major dependencies ([db90539](https://github.com/lmc-eu/spirit-design-system/commit/db90539))
- Update dependency @testing-library/react to v13 ([8b18e27](https://github.com/lmc-eu/spirit-design-system/commit/8b18e27))
- Update dependency react to v18 (refs [#258](https://github.com/lmc-eu/spirit-design-system/issues/258)) ([71c1aa9](https://github.com/lmc-eu/spirit-design-system/commit/71c1aa9))
- Update dependency react-dom to v18 ([370b903](https://github.com/lmc-eu/spirit-design-system/commit/370b903))

### Documentation

- **web:** Document prefixing of CSS class names [#DS-143](https://github.com/lmc-eu/spirit-design-system/issues/DS-143) ([18d8be8](https://github.com/lmc-eu/spirit-design-system/commit/18d8be8))

### Styles

- **web-react:** Setup jest env for ESlint ([5fe8cbb](https://github.com/lmc-eu/spirit-design-system/commit/5fe8cbb))

### Tests

- **web-react:** Suppress annoying warning about new React render API ([7a71afb](https://github.com/lmc-eu/spirit-design-system/commit/7a71afb)), closes [#258](https://github.com/lmc-eu/spirit-design-system/issues/258)

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.13.0"></a>

# [0.13.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.12.0...@lmc-eu/spirit-web-react@0.13.0) (2022-04-13)

### Bug Fixes

- **web-react:** Export Link component from library ([5ee3322](https://github.com/lmc-eu/spirit-design-system/commit/5ee3322))

### Dependencies

- **repo:** Add missing peer dependencies required by packages ([e9283c2](https://github.com/lmc-eu/spirit-design-system/commit/e9283c2))
- Update all non-major dependencies ([9f7e5df](https://github.com/lmc-eu/spirit-design-system/commit/9f7e5df))
- Update dependency @testing-library/react-hooks to v8 ([69bf7f8](https://github.com/lmc-eu/spirit-design-system/commit/69bf7f8))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.12.0"></a>

# [0.12.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.11.0...@lmc-eu/spirit-web-react@0.12.0) (2022-04-08)

### BREAKING CHANGES

- Remove PasswordField in favor of TextField, add email type to TextField [#DS-182](https://github.com/lmc-eu/spirit-design-system/issues/DS-182) ([4ff5966](https://github.com/lmc-eu/spirit-design-system/commit/4ff5966))

### Dependencies

- Update all non-major dependencies ([127f300](https://github.com/lmc-eu/spirit-design-system/commit/127f300))

### Features

- **web-react:** Add email type to TextField [#DS-182](https://github.com/lmc-eu/spirit-design-system/issues/DS-182) ([f6b4623](https://github.com/lmc-eu/spirit-design-system/commit/f6b4623))
- **web-react:** Introduce Heading component (refs [#DS-167](https://github.com/lmc-eu/spirit-design-system/issues/DS-167)) ([fc3e770](https://github.com/lmc-eu/spirit-design-system/commit/fc3e770))
- **web-react:** Introduce Link component (refs [#DS-167](https://github.com/lmc-eu/spirit-design-system/issues/DS-167)) ([2e4ea94](https://github.com/lmc-eu/spirit-design-system/commit/2e4ea94))
- **web-react:** Introduce Text component (refs [#DS-167](https://github.com/lmc-eu/spirit-design-system/issues/DS-167)) ([c509571](https://github.com/lmc-eu/spirit-design-system/commit/c509571))

### Tests

- **web-react:** Refactor prefix testing into more general provider test ([70720cb](https://github.com/lmc-eu/spirit-design-system/commit/70720cb))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.11.0"></a>

# [0.11.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.10.0...@lmc-eu/spirit-web-react@0.11.0) (2022-03-31)

### BREAKING CHANGES

- **web-react:** Build library for ES6 ([9b03978](https://github.com/lmc-eu/spirit-design-system/commit/9b03978))

### Dependencies

- Update all non-major dependencies ([211daef](https://github.com/lmc-eu/spirit-design-system/commit/211daef))

### Documentation

- **web-react:** Add Introduction stories ([4f614d1](https://github.com/lmc-eu/spirit-design-system/commit/4f614d1))
- **web-react:** Introduce Login Form example in storybook ([4c114ba](https://github.com/lmc-eu/spirit-design-system/commit/4c114ba))
- **web-react:** Introduce more detailed Alert documentation ([02f961d](https://github.com/lmc-eu/spirit-design-system/commit/02f961d))

### Features

- **web-react:** Introduce `isFluid` prop for TextField component ([cd2b922](https://github.com/lmc-eu/spirit-design-system/commit/cd2b922))

### Styles

- **web-react:** Fix jsdoc typo ([9007ba7](https://github.com/lmc-eu/spirit-design-system/commit/9007ba7))
- **web-react:** Introduce global declaration file for types ([bb0592d](https://github.com/lmc-eu/spirit-design-system/commit/bb0592d))
- **web-react:** Remove unused prop ([53c1d9f](https://github.com/lmc-eu/spirit-design-system/commit/53c1d9f))
- **web-react:** Remove useless index and declare better global Window ([c38dc76](https://github.com/lmc-eu/spirit-design-system/commit/c38dc76))

### Tests

- **web-react:** Ignore data providers in test directory ([0f693af](https://github.com/lmc-eu/spirit-design-system/commit/0f693af))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.10.0"></a>

# [0.10.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.9.0...@lmc-eu/spirit-web-react@0.10.0) (2022-03-28)

## BREAKING CHANGES

- **web-react:** Remove `className` from all components refs [#DS-158](https://github.com/lmc-eu/spirit-design-system/issues/DS-158) ([788aaf5](https://github.com/lmc-eu/spirit-design-system/commit/788aaf5))
  - we want to be more defensive in styling the components
  - please use existing classes or see the docs for web package
  - @see: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
- **web-react:** Filter out unwanted props on components (refs [#DS-160](https://github.com/lmc-eu/spirit-design-system/issues/DS-160)) ([09ef597](https://github.com/lmc-eu/spirit-design-system/commit/09ef597))
  - we want to be more defensive in styling the components
  - please use existing classes or see the docs for web package
  - @see: https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web#rebranding
- **web-react:** Use `is` prefix for boolean props (refs [#DS-160](https://github.com/lmc-eu/spirit-design-system/issues/DS-160)) ([849a88a](https://github.com/lmc-eu/spirit-design-system/commit/849a88a))
  - we want to use `is` and `has` prefix for boolean props to improve readibility
  - also most of the components are not just HTML tag wrappers so it is
    needed to distinguish components API from HTML attributes

### Features

- **web-react:** Introduce Alert component (refs [#DS-164](https://github.com/lmc-eu/spirit-design-system/issues/DS-164)) ([6681999](https://github.com/lmc-eu/spirit-design-system/commit/6681999))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.9.0"></a>

# [0.9.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.8.0...@lmc-eu/spirit-web-react@0.9.0) (2022-03-22)

### Dependencies

- Update all non-major dependencies ([3fd178b](https://github.com/lmc-eu/spirit-design-system/commit/3fd178b))
- Update all non-major dependencies ([f464e89](https://github.com/lmc-eu/spirit-design-system/commit/f464e89))

### Documentation

- **web-react:** Fix typo in TextField doc ([eb328a3](https://github.com/lmc-eu/spirit-design-system/commit/eb328a3))
- **web-react:** Introduce missing button variants in storybook ([d4ba453](https://github.com/lmc-eu/spirit-design-system/commit/d4ba453))

### Features

- **web-react:** Introduce CheckboxField component (refs [#DS-136](https://github.com/lmc-eu/spirit-design-system/issues/DS-136)) ([89514c8](https://github.com/lmc-eu/spirit-design-system/commit/89514c8))
- **web-react:** Introduce isSquare prop on Button component ([f0ead80](https://github.com/lmc-eu/spirit-design-system/commit/f0ead80))
- **web-react:** Introduce PasswordField component (refs [#DS-149](https://github.com/lmc-eu/spirit-design-system/issues/DS-149)) ([5f7a31e](https://github.com/lmc-eu/spirit-design-system/commit/5f7a31e))

### Styles

- **ci:** Introduce ES Lint ruleset for Jest tests ([63e462d](https://github.com/lmc-eu/spirit-design-system/commit/63e462d))
- **web-react:** Reformat codebase using new eslint rules ([c2e3f5d](https://github.com/lmc-eu/spirit-design-system/commit/c2e3f5d))
- **web-react:** Use of @lmc-eu/eslint-config-react ([683e13f](https://github.com/lmc-eu/spirit-design-system/commit/683e13f))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.8.0"></a>

# [0.8.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.7.0...@lmc-eu/spirit-web-react@0.8.0) (2022-03-11)

### Bug Fixes

- **web-react:** Fix ButtonLink props ([24adcfc](https://github.com/lmc-eu/spirit-design-system/commit/24adcfc))

### Dependencies

- Update all non-major dependencies ([2e73df7](https://github.com/lmc-eu/spirit-design-system/commit/2e73df7))
- Update all non-major dependencies ([1e0fa1e](https://github.com/lmc-eu/spirit-design-system/commit/1e0fa1e))

### Documentation

- **web-react:** Refactor Grid component story using class name ([2a430fa](https://github.com/lmc-eu/spirit-design-system/commit/2a430fa))

### Features

- Update Button variant colors and add new inverted variant [#DS-148](https://github.com/lmc-eu/spirit-design-system/issues/DS-148) ([d66afb0](https://github.com/lmc-eu/spirit-design-system/commit/d66afb0))
- **web-react:** Introduce Stack component (refs [#DS-165](https://github.com/lmc-eu/spirit-design-system/issues/DS-165)) ([79e717b](https://github.com/lmc-eu/spirit-design-system/commit/79e717b))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.7.0"></a>

# [0.7.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.6.1...@lmc-eu/spirit-web-react@0.7.0) (2022-02-26)

### Code Refactoring

- **web-react:** Hook `useClassNamePrefix` now accept argument className ([30a80af](https://github.com/lmc-eu/spirit-design-system/commit/30a80af))
- **web-react:** Move Grid class building logic to react hook ([8cdcf81](https://github.com/lmc-eu/spirit-design-system/commit/8cdcf81))

### Dependencies

- Update all non-major dependencies ([cd7de25](https://github.com/lmc-eu/spirit-design-system/commit/cd7de25))
- Update dependency eslint-config-airbnb to v19 ([50846c9](https://github.com/lmc-eu/spirit-design-system/commit/50846c9))
- Update dependency eslint-plugin-promise to v6 ([360a014](https://github.com/lmc-eu/spirit-design-system/commit/360a014))
- Update dependency jest-junit to v13 ([64e6207](https://github.com/lmc-eu/spirit-design-system/commit/64e6207))

### Documentation

- **web-react:** Add missing jsdoc blocks in build scripts ([e6623cc](https://github.com/lmc-eu/spirit-design-system/commit/e6623cc))

### Features

- **web-react:** Introduce Container component ([7dd9fe0](https://github.com/lmc-eu/spirit-design-system/commit/7dd9fe0))
- **web-react:** Introduce Grid component ([35396f7](https://github.com/lmc-eu/spirit-design-system/commit/35396f7))
- **web-react:** Introduce TextField component (refs [#DS-120](https://github.com/lmc-eu/spirit-design-system/issues/DS-120)) ([8dc3c3d](https://github.com/lmc-eu/spirit-design-system/commit/8dc3c3d))

### Tests

- **web-react:** Collect coverage from all files for report ([d0ca12e](https://github.com/lmc-eu/spirit-design-system/commit/d0ca12e))
- **web-react:** Set absolute path for lcov reporter ([8c84ea7](https://github.com/lmc-eu/spirit-design-system/commit/8c84ea7))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.6.1"></a>

## [0.6.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.6.0...@lmc-eu/spirit-web-react@0.6.1) (2022-02-20)

### Bug Fixes

- **web-react:** Add missing children prop in buttons ([375506d](https://github.com/lmc-eu/spirit-design-system/commit/375506d))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.6.0"></a>

# [0.6.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.5.0...@lmc-eu/spirit-web-react@0.6.0) (2022-02-18)

### Chores

- **web-react:** Fill new entrypoints for package build ([f3dd04f](https://github.com/lmc-eu/spirit-design-system/commit/f3dd04f))

### Code Refactoring

- Define component class name on one place only ([38bb7ee](https://github.com/lmc-eu/spirit-design-system/commit/38bb7ee))
- **web-react:** Generate class names using utility functions [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([936add3](https://github.com/lmc-eu/spirit-design-system/commit/936add3))
- **web-react:** Use hooks to setup button and button link [#DS-132](https://github.com/lmc-eu/spirit-design-system/issues/DS-132) ([b3c06b7](https://github.com/lmc-eu/spirit-design-system/commit/b3c06b7))
- **web-react:** Use tag for element definition and constant for component class (refs [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104)) ([6d2c03b](https://github.com/lmc-eu/spirit-design-system/commit/6d2c03b))

### Dependencies

- Pin dependencies ([1b35871](https://github.com/lmc-eu/spirit-design-system/commit/1b35871))
- Pin dependencies ([dc33b40](https://github.com/lmc-eu/spirit-design-system/commit/dc33b40))
- Update all non-major dependencies ([a48da0b](https://github.com/lmc-eu/spirit-design-system/commit/a48da0b))
- Update all non-major dependencies ([7203ccb](https://github.com/lmc-eu/spirit-design-system/commit/7203ccb))
- Update all non-major dependencies ([a2289eb](https://github.com/lmc-eu/spirit-design-system/commit/a2289eb))

### Documentation

- **web-react:** How to provide prefix to classes using context (refs [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104)) ([7c4d0b5](https://github.com/lmc-eu/spirit-design-system/commit/7c4d0b5))

### Features

- **web-react:** DS-132 Add React implementation ButtonLink component ([81ec22e](https://github.com/lmc-eu/spirit-design-system/commit/81ec22e))
- **web-react:** Introduce context and hook for setting classname prefix ([9aab6ff](https://github.com/lmc-eu/spirit-design-system/commit/9aab6ff))
- **web-react:** Pass down an access to button dom via ref prop ([9e41fa1](https://github.com/lmc-eu/spirit-design-system/commit/9e41fa1))

### Styles

- Reformat changelogs using Prettier ([2491f02](https://github.com/lmc-eu/spirit-design-system/commit/2491f02))

### Tests

- **web-react:** Introduce component testing with testing library [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([61de0c2](https://github.com/lmc-eu/spirit-design-system/commit/61de0c2))
- **web-react:** Introduce test setup for react components [#DS-104](https://github.com/lmc-eu/spirit-design-system/issues/DS-104) ([2fc017f](https://github.com/lmc-eu/spirit-design-system/commit/2fc017f))

**Note:** Version bump only for package @lmc-eu/spirit-web-react

<a name="0.5.0"></a>

## [0.5.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.4.0...@lmc-eu/spirit-web-react@0.5.0) (2022-01-12)

### Bug Fixes

- **web-react:** Rename main types to be exported during build ([0893fcb](https://github.com/lmc-eu/spirit-design-system/commit/0893fcb))

### Chores

- Introduce global ESLint config ([17bda77](https://github.com/lmc-eu/spirit-design-system/commit/17bda77))

### Documentation

- **license:** Include license file ([8f0af0a](https://github.com/lmc-eu/spirit-design-system/commit/8f0af0a))
- **web-react:** Include changelog ([2742756](https://github.com/lmc-eu/spirit-design-system/commit/2742756))

### Features

- **web-react:** Enable class name extension via className prop ([d30a53f](https://github.com/lmc-eu/spirit-design-system/commit/d30a53f))

### Styles

- Reformat codebase using code formatter ([a2abf71](https://github.com/lmc-eu/spirit-design-system/commit/a2abf71))

<a name="0.4.0"></a>

## [0.4.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.3.0...@lmc-eu/spirit-web-react@0.4.0) (2021-12-21)

### Bug Fixes

- Change for the default color property value in the implementation of the tag component ([90e569f](https://github.com/lmc-eu/spirit-design-system/commit/90e569f))

### Chores

- **web-react:** Instroduce `test` script ([7fe668c](https://github.com/lmc-eu/spirit-design-system/commit/7fe668c))
- Add eslint with its configuration to react package and add linters to GitHub workflow ([47b21c3](https://github.com/lmc-eu/spirit-design-system/commit/47b21c3))

### Documentation

- Deploy examples instead of Storybook to GitHub Pages [#DS-76](https://github.com/lmc-eu/spirit-design-system/issues/DS-76) ([7d9607a](https://github.com/lmc-eu/spirit-design-system/commit/7d9607a))

### Features

- Update demo example ([6167786](https://github.com/lmc-eu/spirit-design-system/commit/6167786))
- Update react implementation of Button ([e20ffcb](https://github.com/lmc-eu/spirit-design-system/commit/e20ffcb))

### Styles

- **web-react:** Reformat codebase with ESLint ([6972c2c](https://github.com/lmc-eu/spirit-design-system/commit/6972c2c))

<a name="0.3.0"></a>

## [0.3.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.7...@lmc-eu/spirit-web-react@0.3.0) (2021-12-03)

### BREAKING CHANGES

- Remove default prefix from CSS class names to make it opt-in ([d064f94](https://github.com/lmc-eu/spirit-design-system/commit/d064f94))

<a name="0.2.7"></a>

## [0.2.7](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.6...@lmc-eu/spirit-web-react@0.2.7) (2021-12-02)

### Features

- Improve storybook and its stories. Update examples. Add shebang to husky commitlint ([f9885ef](https://github.com/lmc-eu/spirit-design-system/commit/f9885ef))
- Update color palette according to Figma and use same naming ([87266da](https://github.com/lmc-eu/spirit-design-system/commit/87266da))

<a name="0.2.6"></a>

## [0.2.6](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.5...@lmc-eu/spirit-web-react@0.2.6) (2021-11-26)

### Bug Fixes

- **web-react:** Export Tag from components ([3009321](https://github.com/lmc-eu/spirit-design-system/commit/3009321))

### Chores

- **web-react:** Refactor bundling to make cleaner dist structure ([9f27d9e](https://github.com/lmc-eu/spirit-design-system/commit/9f27d9e))

### Styles

- **web-react:** Reformat package codebase ([ea86d84](https://github.com/lmc-eu/spirit-design-system/commit/ea86d84))

<a name="0.2.5"></a>

## [0.2.5](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.4...@lmc-eu/spirit-web-react@0.2.5) (2021-11-26)

### Features

- Add react implementation of component Tag ([9a23d17](https://github.com/lmc-eu/spirit-design-system/commit/9a23d17))

<a name="0.2.4"></a>

## [0.2.4](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.3...@lmc-eu/spirit-web-react@0.2.4) (2021-11-13)

### Chores

- Declare path to repository in package.json ([d337221](https://github.com/lmc-eu/spirit-design-system/commit/d337221))

<a name="0.2.3"></a>

## [0.2.3](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.2...@lmc-eu/spirit-web-react@0.2.3) (2021-10-20)

### BREAKING CHANGES

- Remove product specific design tokens and CSS from Spirit packages ([0767891](https://github.com/lmc-eu/spirit-design-system/commit/0767891))
  - They will be managed by product teams.
  - Change Jobs demo to custom branding example with overridden design tokens and a Sass pipeline.

<a name="0.2.2"></a>

## [0.2.2](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.1...@lmc-eu/spirit-web-react@0.2.2) (2021-10-12)

### Code Refactoring

- **button:** Use ButtonProps type also in story ([91ad36b](https://github.com/lmc-eu/spirit-design-system/commit/91ad36b))
- Use typescript also for stories ([645fd86](https://github.com/lmc-eu/spirit-design-system/commit/645fd86))

<a name="0.2.1"></a>

## [0.2.1](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.2.0...@lmc-eu/spirit-web-react@0.2.1) (2021-10-07)

### Code Refactoring

- Configure storybook for react and sass support ([ed2e766](https://github.com/lmc-eu/spirit-design-system/commit/ed2e766))
- Setup storybook to use stories from packages ([809d533](https://github.com/lmc-eu/spirit-design-system/commit/809d533))

<a name="0.2.0"></a>

## [0.2.0](https://github.com/lmc-eu/spirit-design-system/compare/@lmc-eu/spirit-web-react@0.1.0...@lmc-eu/spirit-web-react@0.2.0) (2021-10-07)

### Code Refactoring

- Deliver untranspiled source code via esnext property ([6b5d13e](https://github.com/lmc-eu/spirit-design-system/commit/6b5d13e))
- Split webpack configuration into specific files ([cbf1ced](https://github.com/lmc-eu/spirit-design-system/commit/cbf1ced))
- Set webpack as root dev dependency ([4f82440](https://github.com/lmc-eu/spirit-design-system/commit/4f82440))
- Introduce Typescript support with build scripts ([c286c4c](https://github.com/lmc-eu/spirit-design-system/commit/c286c4c))
- Migrate Button to Typescript ([6788a23](https://github.com/lmc-eu/spirit-design-system/commit/6788a23))
- Keep source for publishing in `dist` directory in all packages ([31cc3af](https://github.com/lmc-eu/spirit-design-system/commit/31cc3af))

### Chores

- Remove unused browserslist config for web-react package ([df8da7c](https://github.com/lmc-eu/spirit-design-system/commit/df8da7c))
- Build package to dist directory ([3025806](https://github.com/lmc-eu/spirit-design-system/commit/3025806))
- Build UMD bundle using Webpack ([c244eea](https://github.com/lmc-eu/spirit-design-system/commit/c244eea))
- Cross-link monorepo packages with `*` and simplify cross-package paths in npm scripts ([35690d2](https://github.com/lmc-eu/spirit-design-system/commit/35690d2))

### Documentation

- Update main `README` to be in sync with code ([489f241](https://github.com/lmc-eu/spirit-design-system/commit/489f241))

### Features

- Introduce `spirit-web-react` package with `Button` component and add example usage ([12725cf](https://github.com/lmc-eu/spirit-design-system/commit/12725cf))

<a name="0.1.0"></a>

## 0.1.0 (2021-09-20)

### Features

- Introduce `spirit-web-react` package with `Button` component and add example usage ([1bc3f09](https://github.com/lmc-eu/spirit-design-system/commit/1bc3f09))
