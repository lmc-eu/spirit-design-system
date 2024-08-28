'use strict';
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
function Be(p) {
  if (p.__esModule) return p;
  var s = p.default;
  if (typeof s == 'function') {
    var y = function n() {
      return this instanceof n ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    y.prototype = s.prototype;
  } else y = {};
  return (
    Object.defineProperty(y, '__esModule', { value: !0 }),
    Object.keys(p).forEach(function (n) {
      var T = Object.getOwnPropertyDescriptor(p, n);
      Object.defineProperty(
        y,
        n,
        T.get
          ? T
          : {
              enumerable: !0,
              get: function () {
                return p[n];
              },
            },
      );
    }),
    y
  );
}
var E = {},
  ge = {},
  ve;
function Re() {
  return (
    ve ||
      ((ve = 1),
      (function (p) {
        (() => {
          var s = {
              275: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsImageRefType = void 0),
                  ((o = e.DocsImageRefType || (e.DocsImageRefType = {})).upload = 'Upload'),
                  (o.asset = 'Asset'),
                  (o.figmaFrame = 'FigmaFrame');
              },
              2695: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsLinkRefType = void 0),
                  ((o = e.DocsLinkRefType || (e.DocsLinkRefType = {})).page = 'Page'),
                  (o.pageHeading = 'pageHeading'),
                  (o.group = 'Group'),
                  (o.url = 'url');
              },
              3476: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyPageBlockShortcut = e.DocumentationLegacyPageBlockShortcutType = void 0),
                  (function (t) {
                    (t.external = 'External'), (t.internal = 'Internal');
                  })(
                    (o =
                      e.DocumentationLegacyPageBlockShortcutType || (e.DocumentationLegacyPageBlockShortcutType = {})),
                  ),
                  (e.DocumentationLegacyPageBlockShortcut = class {
                    constructor(t) {
                      var i;
                      t.url ? (this.type = o.external) : (this.type = o.internal),
                        (this.title = this.shortcutTitleFromModel(t, this.type)),
                        (this.description = this.shortcutDescriptionFromModel(t, this.type)),
                        (this.previewUrl = this.shortcutPreviewUrlFromModel(t)),
                        this.type === o.internal &&
                        !((i = t.documentationItemPreview) === null || i === void 0) &&
                        i.valid &&
                        t.documentationItemId
                          ? (this.internalId = t.documentationItemId)
                          : ((this.internalId = null),
                            this.type === o.external && t.url ? (this.externalUrl = t.url) : (this.externalUrl = null));
                    }
                    shortcutTitleFromModel(t, i) {
                      var d, c, l, a, u;
                      let m = null;
                      return (
                        t.title && t.title.trim().length > 0
                          ? (m = t.title)
                          : i === o.internal
                            ? (m =
                                (c = (d = t.documentationItemPreview) === null || d === void 0 ? void 0 : d.title) !==
                                  null && c !== void 0
                                  ? c
                                  : null)
                            : i === o.external &&
                              (m =
                                (u =
                                  (a = (l = t.urlPreview) === null || l === void 0 ? void 0 : l.title) !== null &&
                                  a !== void 0
                                    ? a
                                    : t.url) !== null && u !== void 0
                                  ? u
                                  : null),
                        m && m.trim().length !== 0 ? m : null
                      );
                    }
                    shortcutDescriptionFromModel(t, i) {
                      var d;
                      let c = null;
                      return (
                        t.description && t.description.trim().length > 0
                          ? (c = t.description)
                          : i === o.external &&
                            (c = (d = t.urlPreview) === null || d === void 0 ? void 0 : d.description),
                        c && c.trim().length !== 0 ? c : null
                      );
                    }
                    shortcutPreviewUrlFromModel(t) {
                      var i, d, c, l, a;
                      return (a =
                        (c =
                          (i = t.assetUrl) !== null && i !== void 0
                            ? i
                            : (d = t.asset) === null || d === void 0
                              ? void 0
                              : d.url) !== null && c !== void 0
                          ? c
                          : (l = t.urlPreview) === null || l === void 0
                            ? void 0
                            : l.thumbnailUrl) !== null && a !== void 0
                        ? a
                        : null;
                    }
                  });
              },
              4222: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.Alignment = void 0),
                  ((o = e.Alignment || (e.Alignment = {})).left = 'Left'),
                  (o.center = 'Center'),
                  (o.stretch = 'Stretch');
              },
              1334: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.AssetFormat = void 0),
                  ((o = e.AssetFormat || (e.AssetFormat = {})).png = 'png'),
                  (o.pdf = 'pdf'),
                  (o.svg = 'svg');
              },
              1940: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.AssetScale = void 0),
                  ((o = e.AssetScale || (e.AssetScale = {})).x1 = 'x1'),
                  (o.x2 = 'x2'),
                  (o.x3 = 'x3'),
                  (o.x4 = 'x4');
              },
              959: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.AssetScaleType = void 0),
                  ((o = e.AssetScaleType || (e.AssetScaleType = {})).aspectFill = 'AspectFill'),
                  (o.aspectFit = 'AspectFit');
              },
              9257: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.BlurType = void 0),
                  ((o = e.BlurType || (e.BlurType = {})).layer = 'Layer'),
                  (o.background = 'Background');
              },
              6675: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.ALL_BORDER_POSITIONS = e.BorderPosition = void 0),
                  (function (t) {
                    (t.inside = 'Inside'), (t.center = 'Center'), (t.outside = 'Outside');
                  })((o = e.BorderPosition || (e.BorderPosition = {}))),
                  (e.ALL_BORDER_POSITIONS = [o.inside, o.center, o.outside]);
              },
              6701: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.ALL_BORDER_STYLES = e.BorderStyle = void 0),
                  (function (t) {
                    (t.dashed = 'Dashed'), (t.dotted = 'Dotted'), (t.solid = 'Solid'), (t.groove = 'Groove');
                  })((o = e.BorderStyle || (e.BorderStyle = {}))),
                  (e.ALL_BORDER_STYLES = [o.dashed, o.dotted, o.solid, o.groove]);
              },
              829: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.ImportWarningType = void 0),
                  ((o = e.ImportWarningType || (e.ImportWarningType = {})).UnsupportedFill = 'UnsupportedFill'),
                  (o.UnsupportedStroke = 'UnsupportedStroke'),
                  (o.UnsupportedEffect = 'UnsupportedEffect'),
                  (o.StyleNotApplied = 'StyleNotApplied'),
                  (o.NoPublishedStyles = 'NoPublishedStyles'),
                  (o.NoPublishedComponents = 'NoPublishedComponents'),
                  (o.NoPublishedAssets = 'NoPublishedAssets'),
                  (o.NoVersionFound = 'NoVersionFound'),
                  (o.ComponentHasNoThumbnail = 'ComponentHasNoThumbnail'),
                  (o.DuplicateImportedStyleId = 'DuplicateImportedStyleId'),
                  (o.DuplicateImportedStylePath = 'DuplicateImportedStylePath'),
                  (o.NoPublishedElements = 'NoPublishedElements');
              },
              3611: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.CustomDomainErrorCode = void 0),
                  ((o = e.CustomDomainErrorCode || (e.CustomDomainErrorCode = {})).generalError = 'GeneralError'),
                  (o.dnsNotConfigured = 'DNSNotConfigured'),
                  (o.maintenance = 'Maintenance');
              },
              6530: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.CustomDomainState = void 0),
                  ((o = e.CustomDomainState || (e.CustomDomainState = {})).initial = 'Initial'),
                  (o.domainSetupInProgress = 'DomainSetupInProgress'),
                  (o.domainSetupFailed = 'DomainSetupFailed'),
                  (o.domainSetupsSucces = 'DomainSetupSuccess'),
                  (o.sslSetupInProgress = 'SSLSetupInProgress'),
                  (o.sslSetupFailed = 'SSLSetupFailed'),
                  (o.sslSetupSuccess = 'SSLSetupSuccess');
              },
              4934: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockBehaviorDataType = void 0),
                  ((o = e.DocsBlockBehaviorDataType || (e.DocsBlockBehaviorDataType = {})).item = 'Item'),
                  (o.token = 'Token'),
                  (o.asset = 'Asset'),
                  (o.component = 'Component');
              },
              8081: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockBehaviorSelectionType = void 0),
                  ((o = e.DocsBlockBehaviorSelectionType || (e.DocsBlockBehaviorSelectionType = {})).entity = 'Entity'),
                  (o.group = 'Group'),
                  (o.entityAndGroup = 'EntityAndGroup');
              },
              9534: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockImagePropertyAspectRatio = void 0),
                  ((o = e.DocsBlockImagePropertyAspectRatio || (e.DocsBlockImagePropertyAspectRatio = {})).square =
                    'Square'),
                  (o.landscape = 'Landscape'),
                  (o.portrait = 'Portrait'),
                  (o.wide = 'Wide');
              },
              1043: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemEntityType = void 0),
                  ((o = e.DocsBlockItemEntityType || (e.DocsBlockItemEntityType = {})).token = 'Token'),
                  (o.tokenGroup = 'TokenGroup'),
                  (o.asset = 'Asset'),
                  (o.assetGroup = 'AssetGroup'),
                  (o.component = 'Component'),
                  (o.componentGroup = 'ComponentGroup');
              },
              3947: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemPropertyOptionRenderingStyle = void 0),
                  ((o =
                    e.DocsBlockItemPropertyOptionRenderingStyle ||
                    (e.DocsBlockItemPropertyOptionRenderingStyle = {})).segmentedControl = 'SegmentedControl'),
                  (o.toggleButton = 'ToggleButton'),
                  (o.select = 'Select'),
                  (o.checkbox = 'Checkbox');
              },
              4742: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemPropertyRichTextStyle = void 0),
                  ((o = e.DocsBlockItemPropertyRichTextStyle || (e.DocsBlockItemPropertyRichTextStyle = {})).title1 =
                    'Title1'),
                  (o.title2 = 'Title2'),
                  (o.title3 = 'Title3'),
                  (o.title4 = 'Title4'),
                  (o.title5 = 'Title5'),
                  (o.quote = 'Quote'),
                  (o.callout = 'Callout'),
                  (o.ol = 'OL'),
                  (o.ul = 'UL');
              },
              7825: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemPropertyTextStyle = void 0),
                  ((o = e.DocsBlockItemPropertyTextStyle || (e.DocsBlockItemPropertyTextStyle = {})).small = 'Small'),
                  (o.regular = 'Regular'),
                  (o.bold = 'Bold');
              },
              6751: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemPropertyType = void 0),
                  ((o = e.DocsBlockItemPropertyType || (e.DocsBlockItemPropertyType = {})).richText = 'RichText'),
                  (o.text = 'Text'),
                  (o.boolean = 'Boolean'),
                  (o.number = 'Number'),
                  (o.singleSelect = 'SingleSelect'),
                  (o.multiSelect = 'MultiSelect'),
                  (o.image = 'Image'),
                  (o.token = 'Token'),
                  (o.tokenType = 'TokenType'),
                  (o.tokenProperty = 'TokenProperty'),
                  (o.component = 'Component'),
                  (o.componentProperty = 'ComponentProperty'),
                  (o.asset = 'Asset'),
                  (o.assetProperty = 'AssetProperty'),
                  (o.page = 'Page'),
                  (o.pageProperty = 'PageProperty'),
                  (o.embedURL = 'EmbedURL'),
                  (o.embedFrame = 'EmbedFrame'),
                  (o.markdown = 'Markdown'),
                  (o.code = 'Code'),
                  (o.codeSandbox = 'CodeSandbox'),
                  (o.table = 'Table'),
                  (o.divider = 'Divider'),
                  (o.storybook = 'Storybook');
              },
              6777: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemVariantLayoutType = void 0),
                  ((o = e.DocsBlockItemVariantLayoutType || (e.DocsBlockItemVariantLayoutType = {})).column = 'Column'),
                  (o.row = 'Row');
              },
              9279: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockItemVariantLayoutWidth = void 0),
                  ((o = e.DocsBlockItemVariantLayoutWidth || (e.DocsBlockItemVariantLayoutWidth = {})).c1 = '1'),
                  (o.c2 = '2'),
                  (o.c3 = '3'),
                  (o.c4 = '4'),
                  (o.c5 = '5'),
                  (o.c6 = '6'),
                  (o.c7 = '7'),
                  (o.c8 = '8'),
                  (o.c9 = '9'),
                  (o.c10 = '10'),
                  (o.c11 = '11'),
                  (o.c12 = '12');
              },
              5271: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockOptionRenderingStyle = void 0),
                  ((o = e.DocsBlockOptionRenderingStyle || (e.DocsBlockOptionRenderingStyle = {})).segmentedControl =
                    'SegmentedControl'),
                  (o.toggleButton = 'ToggleButton'),
                  (o.select = 'Select'),
                  (o.checkbox = 'Checkbox');
              },
              3274: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockRichTextPropertyStyle = void 0),
                  ((o = e.DocsBlockRichTextPropertyStyle || (e.DocsBlockRichTextPropertyStyle = {})).title1 = 'Title1'),
                  (o.title2 = 'Title2'),
                  (o.title3 = 'Title3'),
                  (o.title4 = 'Title4'),
                  (o.title5 = 'Title5'),
                  (o.quote = 'Quote'),
                  (o.callout = 'Callout'),
                  (o.ol = 'OL'),
                  (o.ul = 'UL'),
                  (o.default = 'Default');
              },
              6001: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsBlockTextPropertyStyle = void 0),
                  ((o = e.DocsBlockTextPropertyStyle || (e.DocsBlockTextPropertyStyle = {})).title1 = 'Title1'),
                  (o.title2 = 'Title2'),
                  (o.title3 = 'Title3'),
                  (o.title4 = 'Title4'),
                  (o.title5 = 'Title5'),
                  (o.default = 'Default'),
                  (o.defaultBold = 'DefaultBold'),
                  (o.defaultSemibold = 'DefaultSemibold'),
                  (o.small = 'Small'),
                  (o.smallBold = 'SmallBold'),
                  (o.smallSemibold = 'SmallSemibold');
              },
              1755: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsEntityGroupBehavior = void 0),
                  ((o = e.DocsEntityGroupBehavior || (e.DocsEntityGroupBehavior = {})).group = 'Group'),
                  (o.tabs = 'Tabs');
              },
              8240: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsEntityType = void 0),
                  ((o = e.DocsEntityType || (e.DocsEntityType = {})).group = 'Group'),
                  (o.page = 'Page');
              },
              4142: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocsSectionType = void 0),
                  ((o = e.DocsSectionType || (e.DocsSectionType = {})).plain = 'Plain'),
                  (o.tabs = 'Tabs');
              },
              4782: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyCalloutType = void 0),
                  ((o = e.DocumentationLegacyCalloutType || (e.DocumentationLegacyCalloutType = {})).info = 'Info'),
                  (o.success = 'Success'),
                  (o.warning = 'Warning'),
                  (o.error = 'Error');
              },
              8549: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyGroupBehavior = void 0),
                  ((o = e.DocumentationLegacyGroupBehavior || (e.DocumentationLegacyGroupBehavior = {})).group =
                    'Group'),
                  (o.tabs = 'Tabs');
              },
              1931: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyHeadingType = void 0),
                  ((o = e.DocumentationLegacyHeadingType || (e.DocumentationLegacyHeadingType = {}))[(o.h1 = 1)] =
                    'h1'),
                  (o[(o.h2 = 2)] = 'h2'),
                  (o[(o.h3 = 3)] = 'h3');
              },
              5359: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyItemType = void 0),
                  ((o = e.DocumentationLegacyItemType || (e.DocumentationLegacyItemType = {})).group = 'Group'),
                  (o.page = 'Page');
              },
              9437: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyPageAssetType = void 0),
                  ((o = e.DocumentationLegacyPageAssetType || (e.DocumentationLegacyPageAssetType = {})).image =
                    'image'),
                  (o.figmaFrame = 'figmaFrame');
              },
              4649: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyPageBlockThemeType = void 0),
                  ((o =
                    e.DocumentationLegacyPageBlockThemeType ||
                    (e.DocumentationLegacyPageBlockThemeType = {})).override = 'Override'),
                  (o.comparison = 'Comparison');
              },
              8560: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DocumentationLegacyPageBlockType = void 0),
                  ((o = e.DocumentationLegacyPageBlockType || (e.DocumentationLegacyPageBlockType = {})).text = 'Text'),
                  (o.heading = 'Heading'),
                  (o.code = 'Code'),
                  (o.unorderedList = 'UnorderedList'),
                  (o.orderedList = 'OrderedList'),
                  (o.quote = 'Quote'),
                  (o.callout = 'Callout'),
                  (o.divider = 'Divider'),
                  (o.image = 'Image'),
                  (o.token = 'Token'),
                  (o.tokenList = 'TokenList'),
                  (o.tokenGroup = 'TokenGroup'),
                  (o.shortcuts = 'Shortcuts'),
                  (o.link = 'Link'),
                  (o.figmaEmbed = 'FigmaEmbed'),
                  (o.youtubeEmbed = 'YoutubeEmbed'),
                  (o.storybookEmbed = 'StorybookEmbed'),
                  (o.genericEmbed = 'Embed'),
                  (o.figmaFrames = 'FigmaFrames'),
                  (o.custom = 'Custom'),
                  (o.renderCode = 'RenderCode'),
                  (o.componentAssets = 'ComponentAssets'),
                  (o.column = 'Column'),
                  (o.columnItem = 'ColumnItem'),
                  (o.tabs = 'Tabs'),
                  (o.tabItem = 'TabItem'),
                  (o.table = 'Table'),
                  (o.tableCell = 'TableCell'),
                  (o.tableRow = 'TableRow');
              },
              4914: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.FrameAlignment = void 0),
                  ((o = e.FrameAlignment || (e.FrameAlignment = {})).frameHeight = 'FrameHeight'),
                  (o.center = 'Center');
              },
              5986: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.FrameLayout = void 0),
                  ((o = e.FrameLayout || (e.FrameLayout = {})).c8 = 'C8'),
                  (o.c7 = 'C7'),
                  (o.c6 = 'C6'),
                  (o.c5 = 'C5'),
                  (o.c4 = 'C4'),
                  (o.c3 = 'C3'),
                  (o.c2 = 'C2'),
                  (o.c1 = 'C1'),
                  (o.c175 = 'C1_75');
              },
              4667: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.GradientType = void 0),
                  ((o = e.GradientType || (e.GradientType = {})).linear = 'Linear'),
                  (o.radial = 'Radial'),
                  (o.angular = 'Angular');
              },
              4336: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.RichTextSpanAttributeType = void 0),
                  ((o = e.RichTextSpanAttributeType || (e.RichTextSpanAttributeType = {})).bold = 'Bold'),
                  (o.italic = 'Italic'),
                  (o.link = 'Link'),
                  (o.strikethrough = 'Strikethrough'),
                  (o.code = 'Code');
              },
              5467: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.ShadowType = void 0),
                  ((o = e.ShadowType || (e.ShadowType = {})).drop = 'Drop'),
                  (o.inner = 'Inner');
              },
              1694: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.SourceType = void 0),
                  ((o = e.SourceType || (e.SourceType = {})).figma = 'Figma'),
                  (o.tokenStudio = 'TokenStudio');
              },
              2047: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.TextCase = void 0),
                  ((o = e.TextCase || (e.TextCase = {})).original = 'Original'),
                  (o.upper = 'Upper'),
                  (o.lower = 'Lower'),
                  (o.camel = 'Camel'),
                  (o.smallCaps = 'SmallCaps');
              },
              5780: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.TextDecoration = void 0),
                  ((o = e.TextDecoration || (e.TextDecoration = {})).original = 'None'),
                  (o.underline = 'Underline'),
                  (o.strikethrough = 'Strikethrough');
              },
              1256: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.DT_TOKEN_TYPES =
                    e.tokenTypeIsReferencable =
                    e.REFERENCABLE_TOKEN_TYPES =
                    e.REPLACABLE_TOKEN_TYPES =
                    e.tokenTypeIsNonPure =
                    e.tokenTypeIsPure =
                    e.PURE_TOKEN_TYPES =
                    e.ALL_TOKEN_TYPES =
                    e.MS_DIMENSION_TOKEN_TYPES =
                    e.RAW_DIMENSION_TOKEN_TYPES =
                    e.DIMENSION_TOKEN_TYPES =
                    e.OPTION_TOKEN_TYPES =
                    e.STRING_TOKEN_TYPES =
                    e.TokenType =
                      void 0),
                  (function (t) {
                    (t.color = 'Color'),
                      (t.typography = 'Typography'),
                      (t.dimension = 'Dimension'),
                      (t.size = 'Size'),
                      (t.space = 'Space'),
                      (t.opacity = 'Opacity'),
                      (t.fontSize = 'FontSize'),
                      (t.lineHeight = 'LineHeight'),
                      (t.letterSpacing = 'LetterSpacing'),
                      (t.paragraphSpacing = 'ParagraphSpacing'),
                      (t.borderWidth = 'BorderWidth'),
                      (t.radius = 'BorderRadius'),
                      (t.duration = 'Duration'),
                      (t.zIndex = 'ZIndex'),
                      (t.shadow = 'Shadow'),
                      (t.border = 'Border'),
                      (t.gradient = 'Gradient'),
                      (t.string = 'String'),
                      (t.productCopy = 'ProductCopy'),
                      (t.fontFamily = 'FontFamily'),
                      (t.fontWeight = 'FontWeight'),
                      (t.textCase = 'TextCase'),
                      (t.textDecoration = 'TextDecoration'),
                      (t.visibility = 'Visibility'),
                      (t.blur = 'Blur');
                  })((o = e.TokenType || (e.TokenType = {}))),
                  (e.STRING_TOKEN_TYPES = [o.string, o.productCopy, o.fontFamily, o.fontWeight]),
                  (e.OPTION_TOKEN_TYPES = [o.textCase, o.textDecoration, o.visibility]),
                  (e.DIMENSION_TOKEN_TYPES = [
                    o.dimension,
                    o.size,
                    o.space,
                    o.opacity,
                    o.fontSize,
                    o.lineHeight,
                    o.letterSpacing,
                    o.paragraphSpacing,
                    o.borderWidth,
                    o.radius,
                    o.duration,
                    o.zIndex,
                  ]),
                  (e.RAW_DIMENSION_TOKEN_TYPES = [o.opacity, o.zIndex]),
                  (e.MS_DIMENSION_TOKEN_TYPES = [o.duration]),
                  (e.ALL_TOKEN_TYPES = [
                    ...e.DIMENSION_TOKEN_TYPES,
                    ...e.STRING_TOKEN_TYPES,
                    ...e.OPTION_TOKEN_TYPES,
                    o.color,
                    o.gradient,
                    o.border,
                    o.radius,
                    o.shadow,
                    o.typography,
                    o.blur,
                  ]),
                  (e.PURE_TOKEN_TYPES = [...e.DIMENSION_TOKEN_TYPES, ...e.STRING_TOKEN_TYPES, ...e.OPTION_TOKEN_TYPES]),
                  (e.tokenTypeIsPure = (t) => e.PURE_TOKEN_TYPES.includes(t)),
                  (e.tokenTypeIsNonPure = (t) => !(0, e.tokenTypeIsPure)(t)),
                  (e.REPLACABLE_TOKEN_TYPES = [
                    o.color,
                    ...e.DIMENSION_TOKEN_TYPES,
                    ...e.STRING_TOKEN_TYPES,
                    ...e.OPTION_TOKEN_TYPES,
                  ]),
                  (e.REFERENCABLE_TOKEN_TYPES = [
                    o.color,
                    ...e.DIMENSION_TOKEN_TYPES,
                    o.fontFamily,
                    o.fontWeight,
                    o.textCase,
                    o.textDecoration,
                  ]),
                  (e.tokenTypeIsReferencable = (t) => e.REFERENCABLE_TOKEN_TYPES.includes(t)),
                  (e.DT_TOKEN_TYPES = [
                    o.color,
                    o.shadow,
                    o.gradient,
                    o.typography,
                    o.border,
                    ...e.DIMENSION_TOKEN_TYPES,
                    o.fontFamily,
                    o.fontWeight,
                    ...e.OPTION_TOKEN_TYPES,
                  ]);
              },
              5389: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.MS_UNITS = e.PX_UNITS = e.RAW_UNITS = e.LINE_HEIGHT_UNITS = e.SIZE_UNITS = e.Unit = void 0),
                  (function (t) {
                    (t.pixels = 'Pixels'), (t.percent = 'Percent'), (t.rem = 'Rem'), (t.ms = 'Ms'), (t.raw = 'Raw');
                  })((o = e.Unit || (e.Unit = {}))),
                  (e.SIZE_UNITS = [o.pixels, o.percent, o.rem]),
                  (e.LINE_HEIGHT_UNITS = [o.pixels, o.percent, o.rem, o.raw]),
                  (e.RAW_UNITS = [o.raw]),
                  (e.PX_UNITS = [o.pixels]),
                  (e.MS_UNITS = [o.ms]);
              },
              2916: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.UserRole = void 0),
                  ((o = e.UserRole || (e.UserRole = {})).owner = 'Owner'),
                  (o.admin = 'Admin'),
                  (o.creator = 'Creator'),
                  (o.viewer = 'Viewer'),
                  (o.billing = 'Billing');
              },
              6398: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.VisibilityType = void 0),
                  ((o = e.VisibilityType || (e.VisibilityType = {})).visible = 'Visible'),
                  (o.hidden = 'Hidden');
              },
              4838: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.WorkspaceNPMRegistryAuthType = void 0),
                  ((o = e.WorkspaceNPMRegistryAuthType || (e.WorkspaceNPMRegistryAuthType = {})).basic = 'Basic'),
                  (o.bearer = 'Bearer');
              },
              2015: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.WorkspaceNPMRegistryType = void 0),
                  ((o = e.WorkspaceNPMRegistryType || (e.WorkspaceNPMRegistryType = {})).npmJS = 'NPMJS'),
                  (o.gitHub = 'GitHub'),
                  (o.azureDevOps = 'AzureDevOps'),
                  (o.artifactory = 'Artifactory'),
                  (o.custom = 'Custom');
              },
              4357: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.WorkspaceSubscriptionPlanInterval = void 0),
                  ((o = e.WorkspaceSubscriptionPlanInterval || (e.WorkspaceSubscriptionPlanInterval = {})).yearly =
                    'yearly'),
                  (o.monthly = 'monthly');
              },
              743: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.WorkspaceSubscriptionProductCode = void 0),
                  ((o = e.WorkspaceSubscriptionProductCode || (e.WorkspaceSubscriptionProductCode = {})).free = 'free'),
                  (o.team = 'team'),
                  (o.teamTest = 'team_test'),
                  (o.company = 'company'),
                  (o.enterprise = 'enterprise');
              },
              5841: (r, e) => {
                var o;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.WorkspaceSubscriptionStatus = void 0),
                  ((o = e.WorkspaceSubscriptionStatus || (e.WorkspaceSubscriptionStatus = {})).active = 'active'),
                  (o.gracePeriod = 'gracePeriod'),
                  (o.cancelled = 'cancelled'),
                  (o.suspended = 'suspended');
              },
              3803: (r, e) => {
                var o, t;
                Object.defineProperty(e, '__esModule', { value: !0 }),
                  (e.PulsarExecutor = e.OutputFileType = void 0),
                  ((t = e.OutputFileType || (e.OutputFileType = {})).copyRemoteUrl = 'copyRemoteUrl'),
                  (t.text = 'text'),
                  (t.binary = 'binary'),
                  ((o = e.PulsarExecutor || (e.PulsarExecutor = {})).supernova = 'supernova'),
                  (o.local = 'local');
              },
            },
            y = {};
          function n(r) {
            var e = y[r];
            if (e !== void 0) return e.exports;
            var o = (y[r] = { exports: {} });
            return s[r](o, o.exports, n), o.exports;
          }
          var T = {};
          (() => {
            var r = T;
            Object.defineProperty(r, '__esModule', { value: !0 }),
              (r.UserRole =
                r.Unit =
                r.TokenType =
                r.TextDecoration =
                r.TextCase =
                r.ShadowType =
                r.RichTextSpanAttributeType =
                r.GradientType =
                r.FrameLayout =
                r.FrameAlignment =
                r.SourceType =
                r.DocsImageRefType =
                r.DocsLinkRefType =
                r.DocsSectionType =
                r.DocsEntityType =
                r.DocsEntityGroupBehavior =
                r.DocsBlockTextPropertyStyle =
                r.DocsBlockRichTextPropertyStyle =
                r.DocsBlockOptionRenderingStyle =
                r.DocsBlockItemVariantLayoutWidth =
                r.DocsBlockItemVariantLayoutType =
                r.DocsBlockItemPropertyType =
                r.DocsBlockItemPropertyTextStyle =
                r.DocsBlockItemPropertyRichTextStyle =
                r.DocsBlockItemPropertyOptionRenderingStyle =
                r.DocsBlockItemEntityType =
                r.DocsBlockImagePropertyAspectRatio =
                r.DocsBlockBehaviorSelectionType =
                r.DocsBlockBehaviorDataType =
                r.DocumentationLegacyPageBlockShortcutType =
                r.DocumentationLegacyPageBlockThemeType =
                r.DocumentationLegacyPageBlockType =
                r.DocumentationLegacyPageAssetType =
                r.DocumentationLegacyItemType =
                r.DocumentationLegacyHeadingType =
                r.DocumentationLegacyGroupBehavior =
                r.DocumentationLegacyCalloutType =
                r.BorderStyle =
                r.BorderPosition =
                r.BlurType =
                r.AssetScaleType =
                r.AssetScale =
                r.AssetFormat =
                r.Alignment =
                r.ALL_TOKEN_TYPES =
                r.ALL_BORDER_STYLES =
                r.ALL_BORDER_POSITIONS =
                r.OPTION_TOKEN_TYPES =
                r.STRING_TOKEN_TYPES =
                r.DIMENSION_TOKEN_TYPES =
                  void 0),
              (r.PulsarExecutor =
                r.OutputFileType =
                r.CustomDomainState =
                r.CustomDomainErrorCode =
                r.ImportWarningType =
                r.WorkspaceNPMRegistryType =
                r.WorkspaceNPMRegistryAuthType =
                r.WorkspaceSubscriptionStatus =
                r.WorkspaceSubscriptionProductCode =
                r.WorkspaceSubscriptionPlanInterval =
                r.VisibilityType =
                  void 0);
            var e = n(1256);
            Object.defineProperty(r, 'DIMENSION_TOKEN_TYPES', {
              enumerable: !0,
              get: function () {
                return e.DIMENSION_TOKEN_TYPES;
              },
            }),
              Object.defineProperty(r, 'STRING_TOKEN_TYPES', {
                enumerable: !0,
                get: function () {
                  return e.STRING_TOKEN_TYPES;
                },
              }),
              Object.defineProperty(r, 'OPTION_TOKEN_TYPES', {
                enumerable: !0,
                get: function () {
                  return e.OPTION_TOKEN_TYPES;
                },
              });
            var o = n(6675);
            Object.defineProperty(r, 'ALL_BORDER_POSITIONS', {
              enumerable: !0,
              get: function () {
                return o.ALL_BORDER_POSITIONS;
              },
            });
            var t = n(6701);
            Object.defineProperty(r, 'ALL_BORDER_STYLES', {
              enumerable: !0,
              get: function () {
                return t.ALL_BORDER_STYLES;
              },
            });
            var i = n(1256);
            Object.defineProperty(r, 'ALL_TOKEN_TYPES', {
              enumerable: !0,
              get: function () {
                return i.ALL_TOKEN_TYPES;
              },
            });
            var d = n(4222);
            Object.defineProperty(r, 'Alignment', {
              enumerable: !0,
              get: function () {
                return d.Alignment;
              },
            });
            var c = n(1334);
            Object.defineProperty(r, 'AssetFormat', {
              enumerable: !0,
              get: function () {
                return c.AssetFormat;
              },
            });
            var l = n(1940);
            Object.defineProperty(r, 'AssetScale', {
              enumerable: !0,
              get: function () {
                return l.AssetScale;
              },
            });
            var a = n(959);
            Object.defineProperty(r, 'AssetScaleType', {
              enumerable: !0,
              get: function () {
                return a.AssetScaleType;
              },
            });
            var u = n(9257);
            Object.defineProperty(r, 'BlurType', {
              enumerable: !0,
              get: function () {
                return u.BlurType;
              },
            });
            var m = n(6675);
            Object.defineProperty(r, 'BorderPosition', {
              enumerable: !0,
              get: function () {
                return m.BorderPosition;
              },
            });
            var g = n(6701);
            Object.defineProperty(r, 'BorderStyle', {
              enumerable: !0,
              get: function () {
                return g.BorderStyle;
              },
            });
            var b = n(4782);
            Object.defineProperty(r, 'DocumentationLegacyCalloutType', {
              enumerable: !0,
              get: function () {
                return b.DocumentationLegacyCalloutType;
              },
            });
            var v = n(8549);
            Object.defineProperty(r, 'DocumentationLegacyGroupBehavior', {
              enumerable: !0,
              get: function () {
                return v.DocumentationLegacyGroupBehavior;
              },
            });
            var P = n(1931);
            Object.defineProperty(r, 'DocumentationLegacyHeadingType', {
              enumerable: !0,
              get: function () {
                return P.DocumentationLegacyHeadingType;
              },
            });
            var h = n(5359);
            Object.defineProperty(r, 'DocumentationLegacyItemType', {
              enumerable: !0,
              get: function () {
                return h.DocumentationLegacyItemType;
              },
            });
            var D = n(9437);
            Object.defineProperty(r, 'DocumentationLegacyPageAssetType', {
              enumerable: !0,
              get: function () {
                return D.DocumentationLegacyPageAssetType;
              },
            });
            var O = n(8560);
            Object.defineProperty(r, 'DocumentationLegacyPageBlockType', {
              enumerable: !0,
              get: function () {
                return O.DocumentationLegacyPageBlockType;
              },
            });
            var B = n(4649);
            Object.defineProperty(r, 'DocumentationLegacyPageBlockThemeType', {
              enumerable: !0,
              get: function () {
                return B.DocumentationLegacyPageBlockThemeType;
              },
            });
            var R = n(3476);
            Object.defineProperty(r, 'DocumentationLegacyPageBlockShortcutType', {
              enumerable: !0,
              get: function () {
                return R.DocumentationLegacyPageBlockShortcutType;
              },
            });
            var x = n(4934);
            Object.defineProperty(r, 'DocsBlockBehaviorDataType', {
              enumerable: !0,
              get: function () {
                return x.DocsBlockBehaviorDataType;
              },
            });
            var L = n(8081);
            Object.defineProperty(r, 'DocsBlockBehaviorSelectionType', {
              enumerable: !0,
              get: function () {
                return L.DocsBlockBehaviorSelectionType;
              },
            });
            var j = n(9534);
            Object.defineProperty(r, 'DocsBlockImagePropertyAspectRatio', {
              enumerable: !0,
              get: function () {
                return j.DocsBlockImagePropertyAspectRatio;
              },
            });
            var M = n(1043);
            Object.defineProperty(r, 'DocsBlockItemEntityType', {
              enumerable: !0,
              get: function () {
                return M.DocsBlockItemEntityType;
              },
            });
            var A = n(3947);
            Object.defineProperty(r, 'DocsBlockItemPropertyOptionRenderingStyle', {
              enumerable: !0,
              get: function () {
                return A.DocsBlockItemPropertyOptionRenderingStyle;
              },
            });
            var F = n(4742);
            Object.defineProperty(r, 'DocsBlockItemPropertyRichTextStyle', {
              enumerable: !0,
              get: function () {
                return F.DocsBlockItemPropertyRichTextStyle;
              },
            });
            var w = n(7825);
            Object.defineProperty(r, 'DocsBlockItemPropertyTextStyle', {
              enumerable: !0,
              get: function () {
                return w.DocsBlockItemPropertyTextStyle;
              },
            });
            var H = n(6751);
            Object.defineProperty(r, 'DocsBlockItemPropertyType', {
              enumerable: !0,
              get: function () {
                return H.DocsBlockItemPropertyType;
              },
            });
            var U = n(6777);
            Object.defineProperty(r, 'DocsBlockItemVariantLayoutType', {
              enumerable: !0,
              get: function () {
                return U.DocsBlockItemVariantLayoutType;
              },
            });
            var W = n(9279);
            Object.defineProperty(r, 'DocsBlockItemVariantLayoutWidth', {
              enumerable: !0,
              get: function () {
                return W.DocsBlockItemVariantLayoutWidth;
              },
            });
            var Y = n(5271);
            Object.defineProperty(r, 'DocsBlockOptionRenderingStyle', {
              enumerable: !0,
              get: function () {
                return Y.DocsBlockOptionRenderingStyle;
              },
            });
            var G = n(3274);
            Object.defineProperty(r, 'DocsBlockRichTextPropertyStyle', {
              enumerable: !0,
              get: function () {
                return G.DocsBlockRichTextPropertyStyle;
              },
            });
            var V = n(6001);
            Object.defineProperty(r, 'DocsBlockTextPropertyStyle', {
              enumerable: !0,
              get: function () {
                return V.DocsBlockTextPropertyStyle;
              },
            });
            var K = n(1755);
            Object.defineProperty(r, 'DocsEntityGroupBehavior', {
              enumerable: !0,
              get: function () {
                return K.DocsEntityGroupBehavior;
              },
            });
            var $ = n(8240);
            Object.defineProperty(r, 'DocsEntityType', {
              enumerable: !0,
              get: function () {
                return $.DocsEntityType;
              },
            });
            var z = n(4142);
            Object.defineProperty(r, 'DocsSectionType', {
              enumerable: !0,
              get: function () {
                return z.DocsSectionType;
              },
            });
            var q = n(2695);
            Object.defineProperty(r, 'DocsLinkRefType', {
              enumerable: !0,
              get: function () {
                return q.DocsLinkRefType;
              },
            });
            var Z = n(275);
            Object.defineProperty(r, 'DocsImageRefType', {
              enumerable: !0,
              get: function () {
                return Z.DocsImageRefType;
              },
            });
            var J = n(1694);
            Object.defineProperty(r, 'SourceType', {
              enumerable: !0,
              get: function () {
                return J.SourceType;
              },
            });
            var Q = n(4914);
            Object.defineProperty(r, 'FrameAlignment', {
              enumerable: !0,
              get: function () {
                return Q.FrameAlignment;
              },
            });
            var X = n(5986);
            Object.defineProperty(r, 'FrameLayout', {
              enumerable: !0,
              get: function () {
                return X.FrameLayout;
              },
            });
            var ee = n(4667);
            Object.defineProperty(r, 'GradientType', {
              enumerable: !0,
              get: function () {
                return ee.GradientType;
              },
            });
            var oe = n(4336);
            Object.defineProperty(r, 'RichTextSpanAttributeType', {
              enumerable: !0,
              get: function () {
                return oe.RichTextSpanAttributeType;
              },
            });
            var te = n(5467);
            Object.defineProperty(r, 'ShadowType', {
              enumerable: !0,
              get: function () {
                return te.ShadowType;
              },
            });
            var re = n(2047);
            Object.defineProperty(r, 'TextCase', {
              enumerable: !0,
              get: function () {
                return re.TextCase;
              },
            });
            var ne = n(5780);
            Object.defineProperty(r, 'TextDecoration', {
              enumerable: !0,
              get: function () {
                return ne.TextDecoration;
              },
            });
            var ae = n(1256);
            Object.defineProperty(r, 'TokenType', {
              enumerable: !0,
              get: function () {
                return ae.TokenType;
              },
            });
            var ie = n(5389);
            Object.defineProperty(r, 'Unit', {
              enumerable: !0,
              get: function () {
                return ie.Unit;
              },
            });
            var ce = n(2916);
            Object.defineProperty(r, 'UserRole', {
              enumerable: !0,
              get: function () {
                return ce.UserRole;
              },
            });
            var le = n(6398);
            Object.defineProperty(r, 'VisibilityType', {
              enumerable: !0,
              get: function () {
                return le.VisibilityType;
              },
            });
            var se = n(4357);
            Object.defineProperty(r, 'WorkspaceSubscriptionPlanInterval', {
              enumerable: !0,
              get: function () {
                return se.WorkspaceSubscriptionPlanInterval;
              },
            });
            var ue = n(743);
            Object.defineProperty(r, 'WorkspaceSubscriptionProductCode', {
              enumerable: !0,
              get: function () {
                return ue.WorkspaceSubscriptionProductCode;
              },
            });
            var pe = n(5841);
            Object.defineProperty(r, 'WorkspaceSubscriptionStatus', {
              enumerable: !0,
              get: function () {
                return pe.WorkspaceSubscriptionStatus;
              },
            });
            var de = n(4838);
            Object.defineProperty(r, 'WorkspaceNPMRegistryAuthType', {
              enumerable: !0,
              get: function () {
                return de.WorkspaceNPMRegistryAuthType;
              },
            });
            var ye = n(2015);
            Object.defineProperty(r, 'WorkspaceNPMRegistryType', {
              enumerable: !0,
              get: function () {
                return ye.WorkspaceNPMRegistryType;
              },
            });
            var Te = n(829);
            Object.defineProperty(r, 'ImportWarningType', {
              enumerable: !0,
              get: function () {
                return Te.ImportWarningType;
              },
            });
            var me = n(3611);
            Object.defineProperty(r, 'CustomDomainErrorCode', {
              enumerable: !0,
              get: function () {
                return me.CustomDomainErrorCode;
              },
            });
            var fe = n(6530);
            Object.defineProperty(r, 'CustomDomainState', {
              enumerable: !0,
              get: function () {
                return fe.CustomDomainState;
              },
            });
            var I = n(3803);
            Object.defineProperty(r, 'OutputFileType', {
              enumerable: !0,
              get: function () {
                return I.OutputFileType;
              },
            }),
              Object.defineProperty(r, 'PulsarExecutor', {
                enumerable: !0,
                get: function () {
                  return I.PulsarExecutor;
                },
              });
          })();
          var S = p;
          for (var f in T) S[f] = T[f];
          T.__esModule && Object.defineProperty(S, '__esModule', { value: !0 });
        })();
      })(ge)),
    ge
  );
}
var k = function () {
  return (
    (k =
      Object.assign ||
      function (s) {
        for (var y, n = 1, T = arguments.length; n < T; n++) {
          y = arguments[n];
          for (var S in y) Object.prototype.hasOwnProperty.call(y, S) && (s[S] = y[S]);
        }
        return s;
      }),
    k.apply(this, arguments)
  );
};
function xe(p) {
  return p.toLowerCase();
}
var Le = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g],
  je = /[^A-Z0-9]+/gi;
function C(p, s) {
  s === void 0 && (s = {});
  for (
    var y = s.splitRegexp,
      n = y === void 0 ? Le : y,
      T = s.stripRegexp,
      S = T === void 0 ? je : T,
      f = s.transform,
      r = f === void 0 ? xe : f,
      e = s.delimiter,
      o = e === void 0 ? ' ' : e,
      t = Pe(Pe(p, n, '$1\0$2'), S, '\0'),
      i = 0,
      d = t.length;
    t.charAt(i) === '\0';

  )
    i++;
  for (; t.charAt(d - 1) === '\0'; ) d--;
  return t.slice(i, d).split('\0').map(r).join(o);
}
function Pe(p, s, y) {
  return s instanceof RegExp
    ? p.replace(s, y)
    : s.reduce(function (n, T) {
        return n.replace(T, y);
      }, p);
}
function be(p, s) {
  var y = p.charAt(0),
    n = p.substr(1).toLowerCase();
  return s > 0 && y >= '0' && y <= '9' ? '_' + y + n : '' + y.toUpperCase() + n;
}
function ke(p) {
  return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}
function Oe(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: '', transform: be }, s));
}
function _e(p, s) {
  return s === 0 ? p.toLowerCase() : be(p, s);
}
function Me(p, s) {
  return s === 0 ? p.toLowerCase() : ke(p);
}
function Ae(p, s) {
  return s === void 0 && (s = {}), Oe(p, k({ transform: _e }, s));
}
function De(p) {
  return p.charAt(0).toUpperCase() + p.substr(1);
}
function Ce(p) {
  return De(p.toLowerCase());
}
function Ie(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: ' ', transform: Ce }, s));
}
function Fe(p) {
  return p.toUpperCase();
}
function we(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: '_', transform: Fe }, s));
}
function N(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: '.' }, s));
}
function He(p, s) {
  return s === void 0 && (s = {}), Ie(p, k({ delimiter: '-' }, s));
}
function Ue(p, s) {
  return s === void 0 && (s = {}), N(p, k({ delimiter: '-' }, s));
}
function We(p, s) {
  return s === void 0 && (s = {}), N(p, k({ delimiter: '/' }, s));
}
function Ee(p, s) {
  var y = p.toLowerCase();
  return s === 0 ? De(y) : y;
}
function Ye(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: ' ', transform: Ee }, s));
}
function Ge(p, s) {
  return s === void 0 && (s = {}), N(p, k({ delimiter: '_' }, s));
}
const Ve = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        camelCase: Ae,
        camelCaseTransform: _e,
        camelCaseTransformMerge: Me,
        capitalCase: Ie,
        capitalCaseTransform: Ce,
        constantCase: we,
        dotCase: N,
        headerCase: He,
        noCase: C,
        paramCase: Ue,
        pascalCase: Oe,
        pascalCaseTransform: be,
        pascalCaseTransformMerge: ke,
        pathCase: We,
        sentenceCase: Ye,
        sentenceCaseTransform: Ee,
        snakeCase: Ge,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ke = Be(Ve);
(function (p) {
  (() => {
    var s = {
        639: (r, e, o) => {
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.Iterators = void 0);
          const t = o(58);
          e.Iterators = class {
            static allTokenTypes() {
              return [
                t.TokenType.color,
                t.TokenType.typography,
                t.TokenType.dimension,
                t.TokenType.size,
                t.TokenType.space,
                t.TokenType.opacity,
                t.TokenType.fontSize,
                t.TokenType.lineHeight,
                t.TokenType.letterSpacing,
                t.TokenType.paragraphSpacing,
                t.TokenType.borderWidth,
                t.TokenType.radius,
                t.TokenType.duration,
                t.TokenType.zIndex,
                t.TokenType.shadow,
                t.TokenType.border,
                t.TokenType.gradient,
                t.TokenType.string,
                t.TokenType.productCopy,
                t.TokenType.fontFamily,
                t.TokenType.fontWeight,
                t.TokenType.textCase,
                t.TokenType.textDecoration,
                t.TokenType.visibility,
                t.TokenType.blur,
              ];
            }
            static allDimensionTokenTypes() {
              return [
                t.TokenType.dimension,
                t.TokenType.size,
                t.TokenType.space,
                t.TokenType.opacity,
                t.TokenType.fontSize,
                t.TokenType.lineHeight,
                t.TokenType.letterSpacing,
                t.TokenType.paragraphSpacing,
                t.TokenType.borderWidth,
                t.TokenType.radius,
                t.TokenType.duration,
                t.TokenType.zIndex,
              ];
            }
            static allStringTokenTypes() {
              return [t.TokenType.string, t.TokenType.productCopy, t.TokenType.fontFamily, t.TokenType.fontWeight];
            }
            static allOptionTokenTypes() {
              return [t.TokenType.textCase, t.TokenType.textDecoration, t.TokenType.visibility];
            }
          };
        },
        989: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ColorFormat = void 0),
            ((o = e.ColorFormat || (e.ColorFormat = {})).rgb = 'rgb'),
            (o.rgba = 'rgba'),
            (o.smartRgba = 'smartRgba'),
            (o.hex6 = 'hex6'),
            (o.hex8 = 'hex8'),
            (o.hashHex6 = 'hashHex6'),
            (o.hashHex8 = 'hashHex8'),
            (o.smartHashHex = 'smartHashHex'),
            (o.smartHex = 'smartHex'),
            (o.hsl = 'hsl'),
            (o.hsla = 'hsla'),
            (o.smartHsla = 'smartHsla'),
            (o.smartUIColor = 'smartUIColor');
        },
        545: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.StringCase = void 0),
            ((o = e.StringCase || (e.StringCase = {})).camelCase = 'camelCase'),
            (o.capitalCase = 'capitalCase'),
            (o.constantCase = 'constantCase'),
            (o.dotCase = 'dotCase'),
            (o.headerCase = 'headerCase'),
            (o.noCase = 'noCase'),
            (o.paramCase = 'paramCase'),
            (o.pascalCase = 'pascalCase'),
            (o.pathCase = 'pathCase'),
            (o.sentenceCase = 'sentenceCase'),
            (o.snakeCase = 'snakeCase');
        },
        617: (r, e, o) => {
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.FileHelper = void 0);
          const t = o(58);
          e.FileHelper = class {
            static createCopyRemoteFile({ relativePath: i, fileName: d, url: c }) {
              return { path: i, name: d, type: t.OutputFileType.copyRemoteUrl, url: c };
            }
            static createTextFile({ relativePath: i, fileName: d, content: c }) {
              return { path: i, name: d, type: t.OutputFileType.text, content: c };
            }
            static createBinaryFile({ relativePath: i, fileName: d, data: c }) {
              return { path: i, name: d, type: t.OutputFileType.binary, data: c };
            }
          };
        },
        761: (r, e) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.sureOptionalReference = void 0),
            (e.sureOptionalReference = function (o, t, i = !0) {
              if (!o || !i) return null;
              const d = t.get(o);
              if (!d) throw new Error(`Trying to retrieve unknown referenced token ${o}`);
              return d;
            });
        },
        118: (r, e) => {
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.NetworkHelper = void 0),
            (e.NetworkHelper = class {
              static async fetchAsText(o, t, i) {
                return (await this.performFetch(o, t, i)).text();
              }
              static async fetchAsJSON(o, t, i) {
                return (await this.performFetch(o, t, i)).json();
              }
              static async fetchAsData(o, t, i) {
                return (await this.performFetch(o, t, i)).arrayBuffer();
              }
              static async performFetch(o, t, i) {
                try {
                  const d = await o.network.fetch(t, i);
                  if (!d.ok) throw new Error(`Request failed with status ${d.status}, error: ${await d.text()}`);
                  return d;
                } catch (d) {
                  throw d;
                }
              }
            });
        },
        771: (r, e, o) => {
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.CSSHelper = void 0);
          const t = o(58),
            i = o(761),
            d = o(952);
          e.CSSHelper = class {
            static tokenToCSS(c, l, a) {
              switch (c.tokenType) {
                case t.TokenType.color:
                  return this.colorTokenValueToCSS(c.value, l, a);
                case t.TokenType.border:
                  return this.borderTokenValueToCSS(c.value, l, a);
                case t.TokenType.gradient:
                  return this.gradientTokenValueToCSS(c.value, l, a);
                case t.TokenType.dimension:
                case t.TokenType.size:
                case t.TokenType.space:
                case t.TokenType.opacity:
                case t.TokenType.fontSize:
                case t.TokenType.lineHeight:
                case t.TokenType.letterSpacing:
                case t.TokenType.paragraphSpacing:
                case t.TokenType.borderWidth:
                case t.TokenType.radius:
                case t.TokenType.duration:
                case t.TokenType.zIndex:
                  return this.dimensionTokenValueToCSS(c.value, l, a);
                case t.TokenType.shadow:
                  return this.shadowTokenValueToCSS(c.value, l, a);
                case t.TokenType.fontWeight:
                case t.TokenType.fontFamily:
                case t.TokenType.productCopy:
                case t.TokenType.string:
                  return this.stringTokenValueToCSS(c.value, l, a);
                case t.TokenType.textCase:
                case t.TokenType.textDecoration:
                case t.TokenType.visibility:
                  return this.optionTokenValueToCSS(c.value, l, a);
                case t.TokenType.blur:
                  return this.blurTokenValueToCSS(c.value, l, a);
                case t.TokenType.typography:
                  return this.typographyTokenValueToCSS(c.value, l, a);
                default:
                  throw new t.UnreachableCaseError(c.tokenType, 'Unsupported token type for transformation to CSS:');
              }
            }
            static colorTokenValueToCSS(c, l, a) {
              return d.ColorHelper.formattedColorOrVariableName(c, l, a);
            }
            static borderTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              if (u) return a.tokenToVariableRef(u);
              const m = this.dimensionTokenValueToCSS(c.width, l, a),
                g = this.borderStyleToCSS(c.style),
                b = this.colorTokenValueToCSS(c.color, l, a);
              return this.borderPositionToCSS(c.position), `${m} ${g} ${b}`;
            }
            static gradientTokenValueToCSS(c, l, a) {
              return c.map((u) => this.gradientLayerToCSS(u, l, a)).join(', ');
            }
            static gradientLayerToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              if (u) return a.tokenToVariableRef(u);
              let m = '';
              switch (c.type) {
                case t.GradientType.linear:
                  m = 'linear-gradient(0deg, ';
                  break;
                case t.GradientType.radial:
                  m = 'radial-gradient(circle, ';
                  break;
                case t.GradientType.angular:
                  m = 'conic-gradient(';
                  break;
                default:
                  m = 'linear-gradient(0deg, ';
              }
              return `${m}${c.stops.map((g) => `${this.colorTokenValueToCSS(g.color, l, a)} ${d.ColorHelper.roundToDecimals(100 * g.position, a.decimals)}%`).join(', ')})`;
            }
            static dimensionTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              return u
                ? a.tokenToVariableRef(u)
                : `${d.ColorHelper.roundToDecimals(c.measure, a.decimals)}${this.unitToCSS(c.unit)}`;
            }
            static shadowTokenValueToCSS(c, l, a) {
              return c.map((u) => this.shadowLayerToCSS(u, l, a)).join(', ');
            }
            static shadowLayerToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              return u
                ? a.tokenToVariableRef(u)
                : `${c.type === t.ShadowType.inner ? 'inset ' : ''}${c.x}px ${c.y}px ${c.radius}px ${c.spread}px ${this.colorTokenValueToCSS(c.color, l, a)}`;
            }
            static stringTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              return u ? a.tokenToVariableRef(u) : `"${c.text}"`;
            }
            static optionTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              return u ? a.tokenToVariableRef(u) : `"${c.value}"`;
            }
            static blurTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              return u ? a.tokenToVariableRef(u) : `blur(${this.dimensionTokenValueToCSS(c.radius, l, a)})`;
            }
            static typographyTokenValueToCSS(c, l, a) {
              const u = (0, i.sureOptionalReference)(c.referencedTokenId, l, a.allowReferences);
              if (u) return a.tokenToVariableRef(u);
              const m = (0, i.sureOptionalReference)(c.fontFamily.referencedTokenId, l, a.allowReferences),
                g = (0, i.sureOptionalReference)(c.fontWeight.referencedTokenId, l, a.allowReferences),
                b = (0, i.sureOptionalReference)(c.textDecoration.referencedTokenId, l, a.allowReferences),
                v = (0, i.sureOptionalReference)(c.textCase.referencedTokenId, l, a.allowReferences),
                P = {
                  fontFamily: m ? a.tokenToVariableRef(m) : c.fontFamily.text,
                  fontWeight: g ? a.tokenToVariableRef(g) : c.fontWeight.text,
                  textDecoration: b
                    ? a.tokenToVariableRef(b)
                    : c.textDecoration.value === t.TextDecoration.original
                      ? this.textDecorationToCSS(c.textDecoration.value)
                      : void 0,
                  textCase: v
                    ? a.tokenToVariableRef(v)
                    : c.textCase.value === t.TextCase.original
                      ? this.textCaseToCSS(c.textCase.value)
                      : void 0,
                  caps: c.textCase.value === t.TextCase.smallCaps,
                  fontSize: this.dimensionTokenValueToCSS(c.fontSize, l, a),
                  lineHeight: c.lineHeight ? this.dimensionTokenValueToCSS(c.lineHeight, l, a) : void 0,
                },
                h = P.fontSize;
              return `${P.caps ? 'small-caps ' : ''}${g ? P.fontWeight : `"${P.fontWeight}"`} ${P.lineHeight ? `${h}/${P.lineHeight}` : h} ${m ? P.fontFamily : `"${P.fontFamily}"`}`;
            }
            static borderStyleToCSS(c) {
              switch (c) {
                case t.BorderStyle.dashed:
                  return 'dashed';
                case t.BorderStyle.dotted:
                  return 'dotted';
                case t.BorderStyle.solid:
                  return 'solid';
                case t.BorderStyle.groove:
                  return 'groove';
                default:
                  return 'solid';
              }
            }
            static borderPositionToCSS(c) {
              switch (c) {
                case t.BorderPosition.center:
                  return 'center';
                case t.BorderPosition.inside:
                  return 'inside';
                case t.BorderPosition.outside:
                default:
                  return 'outside';
              }
            }
            static unitToCSS(c) {
              switch (c) {
                case t.Unit.percent:
                  return '%';
                case t.Unit.pixels:
                  return 'px';
                case t.Unit.rem:
                  return 'rem';
                case t.Unit.raw:
                  return '';
                case t.Unit.ms:
                  return 'ms';
                default:
                  return 'px';
              }
            }
            static textCaseToCSS(c) {
              switch (c) {
                case t.TextCase.original:
                  return 'none';
                case t.TextCase.upper:
                  return 'uppercase';
                case t.TextCase.lower:
                  return 'lowercase';
                case t.TextCase.camel:
                case t.TextCase.smallCaps:
                  return 'capitalize';
              }
            }
            static textDecorationToCSS(c) {
              switch (c) {
                case t.TextDecoration.original:
                  return 'none';
                case t.TextDecoration.underline:
                  return 'underline';
                case t.TextDecoration.strikethrough:
                  return 'line-through';
              }
            }
          };
        },
        952: (r, e, o) => {
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.ColorHelper = void 0);
          const t = o(989),
            i = o(761);
          class d {
            static formattedColorOrVariableName(l, a, u) {
              let m, g, b;
              const v = (0, i.sureOptionalReference)(l.referencedTokenId, a, u.allowReferences);
              if (v) m = u.tokenToVariableRef(v);
              else {
                const P = (0, i.sureOptionalReference)(l.color.referencedTokenId, a, u.allowReferences);
                P && (g = u.tokenToVariableRef(P));
                const h = (0, i.sureOptionalReference)(l.opacity.referencedTokenId, a, u.allowReferences);
                h && (b = u.tokenToVariableRef(h));
              }
              if (m) return m;
              if (!m && !g && !b) return this.formattedColor(l, u.colorFormat, u.decimals);
              switch (u.colorFormat) {
                case t.ColorFormat.rgb:
                case t.ColorFormat.rgba:
                case t.ColorFormat.smartRgba:
                  return this.colorToRgb(
                    u.colorFormat,
                    this.normalizedIntColor(l),
                    l.opacity.measure,
                    u.decimals,
                    g,
                    b,
                  );
                default:
                  return this.formattedColor(l, u.colorFormat, u.decimals);
              }
            }
            static formattedColor(l, a, u = 3) {
              switch (a) {
                case t.ColorFormat.hex6:
                case t.ColorFormat.hex8:
                case t.ColorFormat.hashHex6:
                case t.ColorFormat.hashHex8:
                case t.ColorFormat.smartHex:
                case t.ColorFormat.smartHashHex:
                  return this.colorToHex(a, this.normalizedIntColor(l), l.opacity.measure);
                case t.ColorFormat.rgb:
                case t.ColorFormat.rgba:
                case t.ColorFormat.smartRgba:
                  return this.colorToRgb(a, this.normalizedIntColor(l), l.opacity.measure, u, null, null);
                case t.ColorFormat.hsl:
                case t.ColorFormat.hsla:
                case t.ColorFormat.smartHsla:
                  return this.colorToHsl(a, this.normalizedFractionalColor(l), l.opacity.measure, u);
                case t.ColorFormat.smartUIColor:
                  return this.colorToUIColor(this.normalizedIntColor(l), l.opacity.measure, u);
              }
            }
            static colorToRgb(l, a, u, m, g, b) {
              let v;
              return (
                (v =
                  l === t.ColorFormat.rgba || (l === t.ColorFormat.smartRgba && u < 1)
                    ? `rgba(${g || `${a.r}, ${a.g}, ${a.b}`}, ${b || this.roundToDecimals(u, m)})`
                    : `rgb(${g || `${a.r}, ${a.g}, ${a.b}`})`),
                v
              );
            }
            static colorToHex(l, a, u) {
              let m = `${this.pHex(a.r)}${this.pHex(a.g)}${this.pHex(a.b)}`;
              return (
                (l === t.ColorFormat.hex8 ||
                  l === t.ColorFormat.hashHex8 ||
                  (l === t.ColorFormat.smartHex && u < 1) ||
                  (l === t.ColorFormat.smartHashHex && u < 1)) &&
                  (m += `${this.pHex(Math.round(255 * u))}`),
                (l !== t.ColorFormat.hashHex6 && l !== t.ColorFormat.hashHex8 && l !== t.ColorFormat.smartHashHex) ||
                  (m = `#${m}`),
                m
              );
            }
            static colorToHsl(l, a, u, m) {
              const g = Math.max(a.r, a.g, a.b),
                b = Math.min(a.r, a.g, a.b);
              let v,
                P,
                h,
                D = (g + b) / 2;
              if (g === b) v = P = 0;
              else {
                const O = g - b;
                (P = D > 0.5 ? O / (2 - g - b) : O / (g + b)),
                  g === a.r
                    ? (v = (a.g - a.b) / O + (a.g < a.b ? 6 : 0))
                    : g === a.g
                      ? (v = (a.b - a.r) / O + 2)
                      : g === a.b && (v = (a.r - a.g) / O + 4),
                  (v /= 6);
              }
              return (
                (h =
                  l === t.ColorFormat.hsla || (l === t.ColorFormat.smartHsla && u < 1)
                    ? `hsla(${Math.round(360 * v)}%, ${Math.round(100 * P)}%, ${Math.round(100 * D)}%, ${this.roundToDecimals(u, m)})`
                    : `hsl(${Math.round(360 * v)}%, ${Math.round(100 * P)}%, ${Math.round(100 * D)}%)`),
                h
              );
            }
            static colorToUIColor(l, a, u = 3) {
              let m = `UIColor(rgb: 0x${this.pHex(l.r)}${this.pHex(l.g)}${this.pHex(l.b)})`;
              return a < 1 && (m += `.withAlphaComponent(${a})`), m;
            }
            static normalizedIntColor(l) {
              return { r: Math.round(l.color.r), g: Math.round(l.color.g), b: Math.round(l.color.b) };
            }
            static normalizedFractionalColor(l, a = 3) {
              return {
                r: this.roundToDecimals(l.color.r / 255, a),
                g: d.roundToDecimals(l.color.g / 255, a),
                b: d.roundToDecimals(l.color.b / 255, a),
              };
            }
            static roundToDecimals(l, a) {
              const u = Math.pow(10, a),
                m = Math.round(l * u) / u;
              return parseFloat(m.toFixed(a));
            }
            static pHex(l) {
              return l.toString(16).padStart(2, '0');
            }
          }
          e.ColorHelper = d;
        },
        453: (r, e, o) => {
          Object.defineProperty(e, '__esModule', { value: !0 }), (e.NamingHelper = void 0);
          const t = o(110),
            i = o(545);
          class d {
            static codeSafeVariableNameForToken(l, a, u, m) {
              let g = [];
              return (
                u && ((g = [...u.path]), u.isRoot || g.push(u.name)),
                g.push(l.name),
                m && m.length > 0 && g.unshift(m),
                d.codeSafeVariableName(g, a)
              );
            }
            static codeSafeVariableName(l, a) {
              let u = typeof l == 'string' ? l : l.join(' ');
              switch (((u = u.replaceAll(/[^a-zA-Z0-9_-]/g, '_')), a)) {
                case i.StringCase.camelCase:
                  u = (0, t.camelCase)(u);
                  break;
                case i.StringCase.capitalCase:
                  u = (0, t.capitalCase)(u);
                  break;
                case i.StringCase.constantCase:
                  u = (0, t.constantCase)(u);
                  break;
                case i.StringCase.dotCase:
                  u = (0, t.dotCase)(u);
                  break;
                case i.StringCase.headerCase:
                  u = (0, t.headerCase)(u);
                  break;
                case i.StringCase.noCase:
                  u = (0, t.noCase)(u);
                  break;
                case i.StringCase.paramCase:
                  u = (0, t.paramCase)(u);
                  break;
                case i.StringCase.pascalCase:
                  u = (0, t.pascalCase)(u);
                  break;
                case i.StringCase.pathCase:
                  u = (0, t.pathCase)(u);
                  break;
                case i.StringCase.sentenceCase:
                  u = (0, t.sentenceCase)(u);
                  break;
                case i.StringCase.snakeCase:
                  u = (0, t.snakeCase)(u);
              }
              return (
                a !== i.StringCase.snakeCase && a !== i.StringCase.constantCase && (u = u.replaceAll('_', '')),
                u.match(/^[^a-zA-Z]/) && (u = '_' + u),
                u
              );
            }
            static nameAsCSSVarReference(l) {
              return `var(--${l})`;
            }
            static nameAsCSSVarDeclaration(l) {
              return `--${l}`;
            }
          }
          e.NamingHelper = d;
        },
        58: (r) => {
          r.exports = Re();
        },
        110: (r) => {
          r.exports = Ke;
        },
      },
      y = {};
    function n(r) {
      var e = y[r];
      if (e !== void 0) return e.exports;
      var o = (y[r] = { exports: {} });
      return s[r](o, o.exports, n), o.exports;
    }
    var T = {};
    (() => {
      var r = T;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.ColorFormat =
          r.StringCase =
          r.Iterators =
          r.CSSHelper =
          r.FileHelper =
          r.ColorHelper =
          r.NamingHelper =
          r.NetworkHelper =
            void 0);
      var e = n(118);
      Object.defineProperty(r, 'NetworkHelper', {
        enumerable: !0,
        get: function () {
          return e.NetworkHelper;
        },
      });
      var o = n(453);
      Object.defineProperty(r, 'NamingHelper', {
        enumerable: !0,
        get: function () {
          return o.NamingHelper;
        },
      });
      var t = n(952);
      Object.defineProperty(r, 'ColorHelper', {
        enumerable: !0,
        get: function () {
          return t.ColorHelper;
        },
      });
      var i = n(617);
      Object.defineProperty(r, 'FileHelper', {
        enumerable: !0,
        get: function () {
          return i.FileHelper;
        },
      });
      var d = n(771);
      Object.defineProperty(r, 'CSSHelper', {
        enumerable: !0,
        get: function () {
          return d.CSSHelper;
        },
      });
      var c = n(639);
      Object.defineProperty(r, 'Iterators', {
        enumerable: !0,
        get: function () {
          return c.Iterators;
        },
      });
      var l = n(545);
      Object.defineProperty(r, 'StringCase', {
        enumerable: !0,
        get: function () {
          return l.StringCase;
        },
      });
      var a = n(989);
      Object.defineProperty(r, 'ColorFormat', {
        enumerable: !0,
        get: function () {
          return a.ColorFormat;
        },
      });
    })();
    var S = p;
    for (var f in T) S[f] = T[f];
    T.__esModule && Object.defineProperty(S, '__esModule', { value: !0 });
  })();
})(E);
var _ = {};
(function (p) {
  (() => {
    var s = {
        9932: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.docsImageRefToUrl = e.DocsImageRefType = void 0),
            (function (t) {
              (t.resource = 'Resource'), (t.figmaNode = 'FigmaNode');
            })(o || (e.DocsImageRefType = o = {})),
            (e.docsImageRefToUrl = function (t, i, d) {
              var c;
              if (t)
                switch (t.type) {
                  case o.resource:
                    return (c = t.resource) === null || c === void 0 ? void 0 : c.url;
                  case o.figmaNode:
                    return !t.figmaNode || !t.figmaNode.sourceId || !t.figmaNode.frameReferenceId
                      ? void 0
                      : i.resources.getFigmaFrameHostedUrl(
                          { designSystemId: d.dsId, versionId: d.versionId },
                          t.figmaNode.frameReferenceId,
                        );
                  default:
                    return;
                }
            });
        },
        5673: (r, e) => {
          var o;
          function t(i) {
            switch (i.type) {
              case o.documentationItem:
                return `@page:${i.documentationItemId}`;
              case o.pageHeading:
                return `@page:${i.documentationItemId}#${i.pageHeadingId}`;
              case o.url:
                return i.url;
              default:
                return;
            }
          }
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.linkAttributeToDocsLink = e.docsLinkToLinkAttributes = e.docsLinkToUrl = e.DocsLinkRefType = void 0),
            (function (i) {
              (i.documentationItem = 'DocumentationItem'), (i.pageHeading = 'PageHeading'), (i.url = 'Url');
            })(o || (e.DocsLinkRefType = o = {})),
            (e.docsLinkToUrl = t),
            (e.docsLinkToLinkAttributes = function (i) {
              const d = t(i);
              if (d) return { href: d, target: i.openInNewTab ? '_blank' : '_self' };
            }),
            (e.linkAttributeToDocsLink = function (i, d) {
              if (!i) return;
              const c = d === '_blank';
              if (i.startsWith('@page:')) {
                if (i.includes('#')) {
                  const [l, a] = i.replace('@page:', '').split('#');
                  return { type: o.pageHeading, documentationItemId: l, pageHeadingId: a, openInNewTab: c };
                }
                return { type: o.documentationItem, documentationItemId: i.replace('@page:', ''), openInNewTab: c };
              }
              return { type: o.url, url: i, openInNewTab: c };
            });
        },
        2657: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyPageBlockShortcut = e.DocumentationLegacyPageBlockShortcutType = void 0),
            (function (t) {
              (t.external = 'External'), (t.internal = 'Internal');
            })(o || (e.DocumentationLegacyPageBlockShortcutType = o = {})),
            (e.DocumentationLegacyPageBlockShortcut = class {
              constructor(t) {
                var i;
                t.url ? (this.type = o.external) : (this.type = o.internal),
                  (this.title = this.shortcutTitleFromModel(t, this.type)),
                  (this.description = this.shortcutDescriptionFromModel(t, this.type)),
                  (this.previewUrl = this.shortcutPreviewUrlFromModel(t)),
                  this.type === o.internal &&
                  !((i = t.documentationItemPreview) === null || i === void 0) &&
                  i.valid &&
                  t.documentationItemId
                    ? (this.internalId = t.documentationItemId)
                    : ((this.internalId = null),
                      this.type === o.external && t.url ? (this.externalUrl = t.url) : (this.externalUrl = null));
              }
              shortcutTitleFromModel(t, i) {
                var d, c, l, a, u;
                let m = null;
                return (
                  t.title && t.title.trim().length > 0
                    ? (m = t.title)
                    : i === o.internal
                      ? (m =
                          (c = (d = t.documentationItemPreview) === null || d === void 0 ? void 0 : d.title) !== null &&
                          c !== void 0
                            ? c
                            : null)
                      : i === o.external &&
                        (m =
                          (u =
                            (a = (l = t.urlPreview) === null || l === void 0 ? void 0 : l.title) !== null &&
                            a !== void 0
                              ? a
                              : t.url) !== null && u !== void 0
                            ? u
                            : null),
                  m && m.trim().length !== 0 ? m : null
                );
              }
              shortcutDescriptionFromModel(t, i) {
                var d;
                let c = null;
                return (
                  t.description && t.description.trim().length > 0
                    ? (c = t.description)
                    : i === o.external && (c = (d = t.urlPreview) === null || d === void 0 ? void 0 : d.description),
                  c && c.trim().length !== 0 ? c : null
                );
              }
              shortcutPreviewUrlFromModel(t) {
                var i, d, c, l, a;
                return (a =
                  (c =
                    (i = t.assetUrl) !== null && i !== void 0
                      ? i
                      : (d = t.asset) === null || d === void 0
                        ? void 0
                        : d.url) !== null && c !== void 0
                    ? c
                    : (l = t.urlPreview) === null || l === void 0
                      ? void 0
                      : l.thumbnailUrl) !== null && a !== void 0
                  ? a
                  : null;
              }
            });
        },
        7476: (r, e) => {
          var o, t;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.TextAlignment = e.Alignment = void 0),
            (function (i) {
              (i.left = 'Left'), (i.center = 'Center'), (i.stretch = 'Stretch');
            })(o || (e.Alignment = o = {})),
            (function (i) {
              (i.left = 'Left'), (i.center = 'Center'), (i.right = 'Right');
            })(t || (e.TextAlignment = t = {}));
        },
        8738: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.AssetFormat = void 0),
            (function (t) {
              (t.png = 'png'), (t.pdf = 'pdf'), (t.svg = 'svg');
            })(o || (e.AssetFormat = o = {}));
        },
        915: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.AssetScale = void 0),
            (function (t) {
              (t.x1 = 'x1'), (t.x2 = 'x2'), (t.x3 = 'x3'), (t.x4 = 'x4');
            })(o || (e.AssetScale = o = {}));
        },
        899: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.AssetScaleType = void 0),
            (function (t) {
              (t.aspectFill = 'AspectFill'), (t.aspectFit = 'AspectFit');
            })(o || (e.AssetScaleType = o = {}));
        },
        6192: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.BlurType = void 0),
            (function (t) {
              (t.layer = 'Layer'), (t.background = 'Background');
            })(o || (e.BlurType = o = {}));
        },
        1160: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ALL_BORDER_POSITIONS = e.BorderPosition = void 0),
            (function (t) {
              (t.inside = 'Inside'), (t.center = 'Center'), (t.outside = 'Outside');
            })(o || (e.BorderPosition = o = {})),
            (e.ALL_BORDER_POSITIONS = [o.inside, o.center, o.outside]);
        },
        4546: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ALL_BORDER_STYLES = e.BorderStyle = void 0),
            (function (t) {
              (t.dashed = 'Dashed'), (t.dotted = 'Dotted'), (t.solid = 'Solid'), (t.groove = 'Groove');
            })(o || (e.BorderStyle = o = {})),
            (e.ALL_BORDER_STYLES = [o.dashed, o.dotted, o.solid, o.groove]);
        },
        8042: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ImportWarningType = void 0),
            (function (t) {
              (t.UnsupportedFill = 'UnsupportedFill'),
                (t.UnsupportedStroke = 'UnsupportedStroke'),
                (t.UnsupportedEffect = 'UnsupportedEffect'),
                (t.StyleNotApplied = 'StyleNotApplied'),
                (t.NoPublishedStyles = 'NoPublishedStyles'),
                (t.NoPublishedComponents = 'NoPublishedComponents'),
                (t.NoPublishedAssets = 'NoPublishedAssets'),
                (t.NoVersionFound = 'NoVersionFound'),
                (t.ComponentHasNoThumbnail = 'ComponentHasNoThumbnail'),
                (t.DuplicateImportedStyleId = 'DuplicateImportedStyleId'),
                (t.DuplicateImportedStylePath = 'DuplicateImportedStylePath'),
                (t.NoPublishedElements = 'NoPublishedElements'),
                (t.NoUnpublishedStyles = 'NoUnpublishedStyles');
            })(o || (e.ImportWarningType = o = {}));
        },
        5695: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.CustomDomainErrorCode = void 0),
            (function (t) {
              (t.generalError = 'GeneralError'),
                (t.dnsNotConfigured = 'DNSNotConfigured'),
                (t.maintenance = 'Maintenance');
            })(o || (e.CustomDomainErrorCode = o = {}));
        },
        7737: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.CustomDomainState = void 0),
            (function (t) {
              (t.initial = 'Initial'),
                (t.domainSetupInProgress = 'DomainSetupInProgress'),
                (t.domainSetupFailed = 'DomainSetupFailed'),
                (t.domainSetupsSucces = 'DomainSetupSuccess'),
                (t.sslSetupInProgress = 'SSLSetupInProgress'),
                (t.sslSetupFailed = 'SSLSetupFailed'),
                (t.sslSetupSuccess = 'SSLSetupSuccess');
            })(o || (e.CustomDomainState = o = {}));
        },
        5651: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockBehaviorDataType = void 0),
            (function (t) {
              (t.item = 'Item'),
                (t.token = 'Token'),
                (t.asset = 'Asset'),
                (t.component = 'Component'),
                (t.figmaNode = 'FigmaNode'),
                (t.figmaComponent = 'FigmaComponent');
            })(o || (e.DocsBlockBehaviorDataType = o = {}));
        },
        3733: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockBehaviorSelectionType = void 0),
            (function (t) {
              (t.entity = 'Entity'), (t.group = 'Group'), (t.entityAndGroup = 'EntityAndGroup');
            })(o || (e.DocsBlockBehaviorSelectionType = o = {}));
        },
        8890: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockImagePropertyAspectRatio = void 0),
            (function (t) {
              (t.auto = 'Auto'),
                (t.square = 'Square'),
                (t.landscape = 'Landscape'),
                (t.portrait = 'Portrait'),
                (t.wide = 'Wide');
            })(o || (e.DocsBlockImagePropertyAspectRatio = o = {}));
        },
        9377: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemEntityType = void 0),
            (function (t) {
              (t.token = 'Token'),
                (t.tokenGroup = 'TokenGroup'),
                (t.asset = 'Asset'),
                (t.assetGroup = 'AssetGroup'),
                (t.component = 'Component'),
                (t.componentGroup = 'ComponentGroup');
            })(o || (e.DocsBlockItemEntityType = o = {}));
        },
        5883: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemPropertyOptionRenderingStyle = void 0),
            (function (t) {
              (t.segmentedControl = 'SegmentedControl'),
                (t.toggleButton = 'ToggleButton'),
                (t.select = 'Select'),
                (t.checkbox = 'Checkbox');
            })(o || (e.DocsBlockItemPropertyOptionRenderingStyle = o = {}));
        },
        8061: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemPropertyRichTextStyle = void 0),
            (function (t) {
              (t.title1 = 'Title1'),
                (t.title2 = 'Title2'),
                (t.title3 = 'Title3'),
                (t.title4 = 'Title4'),
                (t.title5 = 'Title5'),
                (t.quote = 'Quote'),
                (t.callout = 'Callout'),
                (t.ol = 'OL'),
                (t.ul = 'UL');
            })(o || (e.DocsBlockItemPropertyRichTextStyle = o = {}));
        },
        7479: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemPropertyTextStyle = void 0),
            (function (t) {
              (t.small = 'Small'), (t.regular = 'Regular'), (t.bold = 'Bold');
            })(o || (e.DocsBlockItemPropertyTextStyle = o = {}));
        },
        6839: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemPropertyType = void 0),
            (function (t) {
              (t.richText = 'RichText'),
                (t.multiRichText = 'MultiRichText'),
                (t.text = 'Text'),
                (t.boolean = 'Boolean'),
                (t.number = 'Number'),
                (t.singleSelect = 'SingleSelect'),
                (t.multiSelect = 'MultiSelect'),
                (t.image = 'Image'),
                (t.token = 'Token'),
                (t.tokenType = 'TokenType'),
                (t.tokenProperty = 'TokenProperty'),
                (t.component = 'Component'),
                (t.componentProperty = 'ComponentProperty'),
                (t.asset = 'Asset'),
                (t.assetProperty = 'AssetProperty'),
                (t.embedURL = 'EmbedURL'),
                (t.url = 'URL'),
                (t.markdown = 'Markdown'),
                (t.code = 'Code'),
                (t.codeSandbox = 'CodeSandbox'),
                (t.table = 'Table'),
                (t.divider = 'Divider'),
                (t.storybook = 'Storybook'),
                (t.color = 'Color'),
                (t.figmaNode = 'FigmaNode'),
                (t.figmaComponent = 'FigmaComponent');
            })(o || (e.DocsBlockItemPropertyType = o = {}));
        },
        8095: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemVariantLayoutType = void 0),
            (function (t) {
              (t.column = 'Column'), (t.row = 'Row');
            })(o || (e.DocsBlockItemVariantLayoutType = o = {}));
        },
        7291: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockItemVariantLayoutWidth = void 0),
            (function (t) {
              (t.c1 = '1'),
                (t.c2 = '2'),
                (t.c3 = '3'),
                (t.c4 = '4'),
                (t.c5 = '5'),
                (t.c6 = '6'),
                (t.c7 = '7'),
                (t.c8 = '8'),
                (t.c9 = '9'),
                (t.c10 = '10'),
                (t.c11 = '11'),
                (t.c12 = '12');
            })(o || (e.DocsBlockItemVariantLayoutWidth = o = {}));
        },
        5963: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockOptionRenderingStyle = void 0),
            (function (t) {
              (t.segmentedControl = 'SegmentedControl'),
                (t.toggleButton = 'ToggleButton'),
                (t.select = 'Select'),
                (t.checkbox = 'Checkbox');
            })(o || (e.DocsBlockOptionRenderingStyle = o = {}));
        },
        6644: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockRichTextPropertyStyle = void 0),
            (function (t) {
              (t.title1 = 'Title1'),
                (t.title2 = 'Title2'),
                (t.title3 = 'Title3'),
                (t.title4 = 'Title4'),
                (t.title5 = 'Title5'),
                (t.quote = 'Quote'),
                (t.callout = 'Callout'),
                (t.default = 'Default');
            })(o || (e.DocsBlockRichTextPropertyStyle = o = {}));
        },
        306: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsBlockTextPropertyStyle = void 0),
            (function (t) {
              (t.title1 = 'Title1'),
                (t.title2 = 'Title2'),
                (t.title3 = 'Title3'),
                (t.title4 = 'Title4'),
                (t.title5 = 'Title5'),
                (t.default = 'Default'),
                (t.defaultBold = 'DefaultBold'),
                (t.defaultSemibold = 'DefaultSemibold'),
                (t.small = 'Small'),
                (t.smallBold = 'SmallBold'),
                (t.smallSemibold = 'SmallSemibold'),
                (t.custom = 'Custom');
            })(o || (e.DocsBlockTextPropertyStyle = o = {}));
        },
        4068: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsEntityGroupBehavior = void 0),
            (function (t) {
              (t.group = 'Group'), (t.tabs = 'Tabs');
            })(o || (e.DocsEntityGroupBehavior = o = {}));
        },
        1233: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsEntityType = void 0),
            (function (t) {
              (t.group = 'Group'), (t.page = 'Page');
            })(o || (e.DocsEntityType = o = {}));
        },
        7971: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocsSectionType = void 0),
            (function (t) {
              (t.plain = 'Plain'), (t.tabs = 'Tabs');
            })(o || (e.DocsSectionType = o = {}));
        },
        5102: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyCalloutType = void 0),
            (function (t) {
              (t.info = 'Info'), (t.success = 'Success'), (t.warning = 'Warning'), (t.error = 'Error');
            })(o || (e.DocumentationLegacyCalloutType = o = {}));
        },
        2123: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyGroupBehavior = void 0),
            (function (t) {
              (t.group = 'Group'), (t.tabs = 'Tabs');
            })(o || (e.DocumentationLegacyGroupBehavior = o = {}));
        },
        9896: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyHeadingType = void 0),
            (function (t) {
              (t[(t.h1 = 1)] = 'h1'), (t[(t.h2 = 2)] = 'h2'), (t[(t.h3 = 3)] = 'h3');
            })(o || (e.DocumentationLegacyHeadingType = o = {}));
        },
        7379: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyItemType = void 0),
            (function (t) {
              (t.group = 'Group'), (t.page = 'Page');
            })(o || (e.DocumentationLegacyItemType = o = {}));
        },
        1423: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyPageAssetType = void 0),
            (function (t) {
              (t.image = 'image'), (t.figmaFrame = 'figmaFrame');
            })(o || (e.DocumentationLegacyPageAssetType = o = {}));
        },
        1601: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyPageBlockThemeType = void 0),
            (function (t) {
              (t.override = 'Override'), (t.comparison = 'Comparison');
            })(o || (e.DocumentationLegacyPageBlockThemeType = o = {}));
        },
        1846: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DocumentationLegacyPageBlockType = void 0),
            (function (t) {
              (t.text = 'Text'),
                (t.heading = 'Heading'),
                (t.code = 'Code'),
                (t.unorderedList = 'UnorderedList'),
                (t.orderedList = 'OrderedList'),
                (t.quote = 'Quote'),
                (t.callout = 'Callout'),
                (t.divider = 'Divider'),
                (t.image = 'Image'),
                (t.token = 'Token'),
                (t.tokenList = 'TokenList'),
                (t.tokenGroup = 'TokenGroup'),
                (t.shortcuts = 'Shortcuts'),
                (t.link = 'Link'),
                (t.figmaEmbed = 'FigmaEmbed'),
                (t.youtubeEmbed = 'YoutubeEmbed'),
                (t.storybookEmbed = 'StorybookEmbed'),
                (t.genericEmbed = 'Embed'),
                (t.figmaFrames = 'FigmaFrames'),
                (t.custom = 'Custom'),
                (t.renderCode = 'RenderCode'),
                (t.componentAssets = 'ComponentAssets'),
                (t.column = 'Column'),
                (t.columnItem = 'ColumnItem'),
                (t.tabs = 'Tabs'),
                (t.tabItem = 'TabItem'),
                (t.table = 'Table'),
                (t.tableCell = 'TableCell'),
                (t.tableRow = 'TableRow');
            })(o || (e.DocumentationLegacyPageBlockType = o = {}));
        },
        1255: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.FrameAlignment = void 0),
            (function (t) {
              (t.frameHeight = 'FrameHeight'), (t.center = 'Center');
            })(o || (e.FrameAlignment = o = {}));
        },
        3718: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.FrameLayout = void 0),
            (function (t) {
              (t.c8 = 'C8'),
                (t.c7 = 'C7'),
                (t.c6 = 'C6'),
                (t.c5 = 'C5'),
                (t.c4 = 'C4'),
                (t.c3 = 'C3'),
                (t.c2 = 'C2'),
                (t.c1 = 'C1'),
                (t.c175 = 'C1_75');
            })(o || (e.FrameLayout = o = {}));
        },
        1: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.GradientType = void 0),
            (function (t) {
              (t.linear = 'Linear'), (t.radial = 'Radial'), (t.angular = 'Angular');
            })(o || (e.GradientType = o = {}));
        },
        2674: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.RichTextSpanAttributeType = void 0),
            (function (t) {
              (t.bold = 'Bold'),
                (t.italic = 'Italic'),
                (t.link = 'Link'),
                (t.strikethrough = 'Strikethrough'),
                (t.code = 'Code');
            })(o || (e.RichTextSpanAttributeType = o = {}));
        },
        9125: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.ShadowType = void 0),
            (function (t) {
              (t.drop = 'Drop'), (t.inner = 'Inner');
            })(o || (e.ShadowType = o = {}));
        },
        4652: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.SourceType = void 0),
            (function (t) {
              (t.figma = 'Figma'), (t.tokenStudio = 'TokenStudio'), (t.figmaVariablesPlugin = 'FigmaVariablesPlugin');
            })(o || (e.SourceType = o = {}));
        },
        922: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.TextCase = void 0),
            (function (t) {
              (t.original = 'Original'),
                (t.upper = 'Upper'),
                (t.lower = 'Lower'),
                (t.camel = 'Camel'),
                (t.smallCaps = 'SmallCaps');
            })(o || (e.TextCase = o = {}));
        },
        7040: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.TextDecoration = void 0),
            (function (t) {
              (t.original = 'None'), (t.underline = 'Underline'), (t.strikethrough = 'Strikethrough');
            })(o || (e.TextDecoration = o = {}));
        },
        3788: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.DT_TOKEN_TYPES =
              e.tokenTypeIsReferencable =
              e.REFERENCABLE_TOKEN_TYPES =
              e.REPLACABLE_TOKEN_TYPES =
              e.tokenTypeIsNonPure =
              e.tokenTypeIsPure =
              e.PURE_TOKEN_TYPES =
              e.ALL_TOKEN_TYPES =
              e.MS_DIMENSION_TOKEN_TYPES =
              e.RAW_DIMENSION_TOKEN_TYPES =
              e.DIMENSION_TOKEN_TYPES =
              e.OPTION_TOKEN_TYPES =
              e.STRING_TOKEN_TYPES =
              e.TokenType =
                void 0),
            (function (t) {
              (t.color = 'Color'),
                (t.typography = 'Typography'),
                (t.shadow = 'Shadow'),
                (t.border = 'Border'),
                (t.gradient = 'Gradient'),
                (t.blur = 'Blur'),
                (t.radius = 'BorderRadius'),
                (t.borderWidth = 'BorderWidth'),
                (t.duration = 'Duration'),
                (t.fontSize = 'FontSize'),
                (t.dimension = 'Dimension'),
                (t.letterSpacing = 'LetterSpacing'),
                (t.lineHeight = 'LineHeight'),
                (t.opacity = 'Opacity'),
                (t.paragraphSpacing = 'ParagraphSpacing'),
                (t.size = 'Size'),
                (t.space = 'Space'),
                (t.zIndex = 'ZIndex'),
                (t.textDecoration = 'TextDecoration'),
                (t.textCase = 'TextCase'),
                (t.visibility = 'Visibility'),
                (t.fontFamily = 'FontFamily'),
                (t.fontWeight = 'FontWeight'),
                (t.string = 'String'),
                (t.productCopy = 'ProductCopy');
            })(o || (e.TokenType = o = {})),
            (e.STRING_TOKEN_TYPES = [o.string, o.productCopy, o.fontFamily, o.fontWeight]),
            (e.OPTION_TOKEN_TYPES = [o.textCase, o.textDecoration, o.visibility]),
            (e.DIMENSION_TOKEN_TYPES = [
              o.dimension,
              o.size,
              o.space,
              o.opacity,
              o.fontSize,
              o.lineHeight,
              o.letterSpacing,
              o.paragraphSpacing,
              o.borderWidth,
              o.radius,
              o.duration,
              o.zIndex,
            ]),
            (e.RAW_DIMENSION_TOKEN_TYPES = [o.opacity, o.zIndex]),
            (e.MS_DIMENSION_TOKEN_TYPES = [o.duration]),
            (e.ALL_TOKEN_TYPES = [
              ...e.DIMENSION_TOKEN_TYPES,
              ...e.STRING_TOKEN_TYPES,
              ...e.OPTION_TOKEN_TYPES,
              o.color,
              o.gradient,
              o.border,
              o.radius,
              o.shadow,
              o.typography,
              o.blur,
            ]),
            (e.PURE_TOKEN_TYPES = [...e.DIMENSION_TOKEN_TYPES, ...e.STRING_TOKEN_TYPES, ...e.OPTION_TOKEN_TYPES]),
            (e.tokenTypeIsPure = (t) => e.PURE_TOKEN_TYPES.includes(t)),
            (e.tokenTypeIsNonPure = (t) => !(0, e.tokenTypeIsPure)(t)),
            (e.REPLACABLE_TOKEN_TYPES = [
              o.color,
              ...e.DIMENSION_TOKEN_TYPES,
              ...e.STRING_TOKEN_TYPES,
              ...e.OPTION_TOKEN_TYPES,
            ]),
            (e.REFERENCABLE_TOKEN_TYPES = [
              o.color,
              ...e.DIMENSION_TOKEN_TYPES,
              o.fontFamily,
              o.fontWeight,
              o.textCase,
              o.textDecoration,
            ]),
            (e.tokenTypeIsReferencable = (t) => e.REFERENCABLE_TOKEN_TYPES.includes(t)),
            (e.DT_TOKEN_TYPES = [
              o.color,
              o.shadow,
              o.gradient,
              o.typography,
              o.border,
              ...e.DIMENSION_TOKEN_TYPES,
              o.fontFamily,
              o.fontWeight,
              ...e.OPTION_TOKEN_TYPES,
            ]);
        },
        8607: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.MS_UNITS = e.PX_UNITS = e.RAW_UNITS = e.LINE_HEIGHT_UNITS = e.SIZE_UNITS = e.Unit = void 0),
            (function (t) {
              (t.pixels = 'Pixels'), (t.percent = 'Percent'), (t.rem = 'Rem'), (t.ms = 'Ms'), (t.raw = 'Raw');
            })(o || (e.Unit = o = {})),
            (e.SIZE_UNITS = [o.pixels, o.percent, o.rem]),
            (e.LINE_HEIGHT_UNITS = [o.pixels, o.percent, o.rem, o.raw]),
            (e.RAW_UNITS = [o.raw]),
            (e.PX_UNITS = [o.pixels]),
            (e.MS_UNITS = [o.ms]);
        },
        9478: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.UserRole = void 0),
            (function (t) {
              (t.owner = 'Owner'),
                (t.admin = 'Admin'),
                (t.creator = 'Creator'),
                (t.billing = 'Billing'),
                (t.viewer = 'Viewer');
            })(o || (e.UserRole = o = {}));
        },
        6141: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.VisibilityType = void 0),
            (function (t) {
              (t.visible = 'Visible'), (t.hidden = 'Hidden');
            })(o || (e.VisibilityType = o = {}));
        },
        6298: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.WorkspaceNPMRegistryAuthType = void 0),
            (function (t) {
              (t.basic = 'Basic'), (t.bearer = 'Bearer');
            })(o || (e.WorkspaceNPMRegistryAuthType = o = {}));
        },
        7968: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.WorkspaceNPMRegistryType = void 0),
            (function (t) {
              (t.npmJS = 'NPMJS'),
                (t.gitHub = 'GitHub'),
                (t.azureDevOps = 'AzureDevOps'),
                (t.artifactory = 'Artifactory'),
                (t.custom = 'Custom');
            })(o || (e.WorkspaceNPMRegistryType = o = {}));
        },
        5503: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.WorkspaceSubscriptionPlanInterval = void 0),
            (function (t) {
              (t.yearly = 'yearly'), (t.monthly = 'monthly');
            })(o || (e.WorkspaceSubscriptionPlanInterval = o = {}));
        },
        4290: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.WorkspaceSubscriptionProductCode = void 0),
            (function (t) {
              (t.free = 'free'),
                (t.team = 'team'),
                (t.teamTest = 'team_test'),
                (t.company = 'company'),
                (t.enterprise = 'enterprise');
            })(o || (e.WorkspaceSubscriptionProductCode = o = {}));
        },
        3607: (r, e) => {
          var o;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.WorkspaceSubscriptionStatus = void 0),
            (function (t) {
              (t.active = 'active'),
                (t.gracePeriod = 'gracePeriod'),
                (t.cancelled = 'cancelled'),
                (t.suspended = 'suspended');
            })(o || (e.WorkspaceSubscriptionStatus = o = {}));
        },
        2802: (r, e) => {
          var o, t;
          Object.defineProperty(e, '__esModule', { value: !0 }),
            (e.PulsarExecutor = e.OutputFileType = void 0),
            (function (i) {
              (i.copyRemoteUrl = 'copyRemoteUrl'), (i.text = 'text'), (i.binary = 'binary');
            })(o || (e.OutputFileType = o = {})),
            (function (i) {
              (i.supernova = 'supernova'), (i.local = 'local');
            })(t || (e.PulsarExecutor = t = {}));
        },
      },
      y = {};
    function n(r) {
      var e = y[r];
      if (e !== void 0) return e.exports;
      var o = (y[r] = { exports: {} });
      return s[r](o, o.exports, n), o.exports;
    }
    var T = {};
    (() => {
      var r = T;
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.UserRole =
          r.Unit =
          r.TokenType =
          r.TextDecoration =
          r.TextCase =
          r.ShadowType =
          r.RichTextSpanAttributeType =
          r.GradientType =
          r.FrameLayout =
          r.FrameAlignment =
          r.SourceType =
          r.DocsImageRefType =
          r.DocsLinkRefType =
          r.DocsSectionType =
          r.DocsEntityType =
          r.DocsEntityGroupBehavior =
          r.DocsBlockTextPropertyStyle =
          r.DocsBlockRichTextPropertyStyle =
          r.DocsBlockOptionRenderingStyle =
          r.DocsBlockItemVariantLayoutWidth =
          r.DocsBlockItemVariantLayoutType =
          r.DocsBlockItemPropertyType =
          r.DocsBlockItemPropertyTextStyle =
          r.DocsBlockItemPropertyRichTextStyle =
          r.DocsBlockItemPropertyOptionRenderingStyle =
          r.DocsBlockItemEntityType =
          r.DocsBlockImagePropertyAspectRatio =
          r.DocsBlockBehaviorSelectionType =
          r.DocsBlockBehaviorDataType =
          r.DocumentationLegacyPageBlockShortcutType =
          r.DocumentationLegacyPageBlockThemeType =
          r.DocumentationLegacyPageBlockType =
          r.DocumentationLegacyPageAssetType =
          r.DocumentationLegacyItemType =
          r.DocumentationLegacyHeadingType =
          r.DocumentationLegacyGroupBehavior =
          r.DocumentationLegacyCalloutType =
          r.BorderStyle =
          r.BorderPosition =
          r.BlurType =
          r.AssetScaleType =
          r.AssetScale =
          r.AssetFormat =
          r.Alignment =
          r.ALL_TOKEN_TYPES =
          r.ALL_BORDER_STYLES =
          r.ALL_BORDER_POSITIONS =
          r.OPTION_TOKEN_TYPES =
          r.STRING_TOKEN_TYPES =
          r.DIMENSION_TOKEN_TYPES =
            void 0),
        (r.PulsarExecutor =
          r.OutputFileType =
          r.CustomDomainState =
          r.CustomDomainErrorCode =
          r.ImportWarningType =
          r.WorkspaceNPMRegistryType =
          r.WorkspaceNPMRegistryAuthType =
          r.WorkspaceSubscriptionStatus =
          r.WorkspaceSubscriptionProductCode =
          r.WorkspaceSubscriptionPlanInterval =
          r.VisibilityType =
            void 0);
      var e = n(3788);
      Object.defineProperty(r, 'DIMENSION_TOKEN_TYPES', {
        enumerable: !0,
        get: function () {
          return e.DIMENSION_TOKEN_TYPES;
        },
      }),
        Object.defineProperty(r, 'STRING_TOKEN_TYPES', {
          enumerable: !0,
          get: function () {
            return e.STRING_TOKEN_TYPES;
          },
        }),
        Object.defineProperty(r, 'OPTION_TOKEN_TYPES', {
          enumerable: !0,
          get: function () {
            return e.OPTION_TOKEN_TYPES;
          },
        });
      var o = n(1160);
      Object.defineProperty(r, 'ALL_BORDER_POSITIONS', {
        enumerable: !0,
        get: function () {
          return o.ALL_BORDER_POSITIONS;
        },
      });
      var t = n(4546);
      Object.defineProperty(r, 'ALL_BORDER_STYLES', {
        enumerable: !0,
        get: function () {
          return t.ALL_BORDER_STYLES;
        },
      });
      var i = n(3788);
      Object.defineProperty(r, 'ALL_TOKEN_TYPES', {
        enumerable: !0,
        get: function () {
          return i.ALL_TOKEN_TYPES;
        },
      });
      var d = n(7476);
      Object.defineProperty(r, 'Alignment', {
        enumerable: !0,
        get: function () {
          return d.Alignment;
        },
      });
      var c = n(8738);
      Object.defineProperty(r, 'AssetFormat', {
        enumerable: !0,
        get: function () {
          return c.AssetFormat;
        },
      });
      var l = n(915);
      Object.defineProperty(r, 'AssetScale', {
        enumerable: !0,
        get: function () {
          return l.AssetScale;
        },
      });
      var a = n(899);
      Object.defineProperty(r, 'AssetScaleType', {
        enumerable: !0,
        get: function () {
          return a.AssetScaleType;
        },
      });
      var u = n(6192);
      Object.defineProperty(r, 'BlurType', {
        enumerable: !0,
        get: function () {
          return u.BlurType;
        },
      });
      var m = n(1160);
      Object.defineProperty(r, 'BorderPosition', {
        enumerable: !0,
        get: function () {
          return m.BorderPosition;
        },
      });
      var g = n(4546);
      Object.defineProperty(r, 'BorderStyle', {
        enumerable: !0,
        get: function () {
          return g.BorderStyle;
        },
      });
      var b = n(5102);
      Object.defineProperty(r, 'DocumentationLegacyCalloutType', {
        enumerable: !0,
        get: function () {
          return b.DocumentationLegacyCalloutType;
        },
      });
      var v = n(2123);
      Object.defineProperty(r, 'DocumentationLegacyGroupBehavior', {
        enumerable: !0,
        get: function () {
          return v.DocumentationLegacyGroupBehavior;
        },
      });
      var P = n(9896);
      Object.defineProperty(r, 'DocumentationLegacyHeadingType', {
        enumerable: !0,
        get: function () {
          return P.DocumentationLegacyHeadingType;
        },
      });
      var h = n(7379);
      Object.defineProperty(r, 'DocumentationLegacyItemType', {
        enumerable: !0,
        get: function () {
          return h.DocumentationLegacyItemType;
        },
      });
      var D = n(1423);
      Object.defineProperty(r, 'DocumentationLegacyPageAssetType', {
        enumerable: !0,
        get: function () {
          return D.DocumentationLegacyPageAssetType;
        },
      });
      var O = n(1846);
      Object.defineProperty(r, 'DocumentationLegacyPageBlockType', {
        enumerable: !0,
        get: function () {
          return O.DocumentationLegacyPageBlockType;
        },
      });
      var B = n(1601);
      Object.defineProperty(r, 'DocumentationLegacyPageBlockThemeType', {
        enumerable: !0,
        get: function () {
          return B.DocumentationLegacyPageBlockThemeType;
        },
      });
      var R = n(2657);
      Object.defineProperty(r, 'DocumentationLegacyPageBlockShortcutType', {
        enumerable: !0,
        get: function () {
          return R.DocumentationLegacyPageBlockShortcutType;
        },
      });
      var x = n(5651);
      Object.defineProperty(r, 'DocsBlockBehaviorDataType', {
        enumerable: !0,
        get: function () {
          return x.DocsBlockBehaviorDataType;
        },
      });
      var L = n(3733);
      Object.defineProperty(r, 'DocsBlockBehaviorSelectionType', {
        enumerable: !0,
        get: function () {
          return L.DocsBlockBehaviorSelectionType;
        },
      });
      var j = n(8890);
      Object.defineProperty(r, 'DocsBlockImagePropertyAspectRatio', {
        enumerable: !0,
        get: function () {
          return j.DocsBlockImagePropertyAspectRatio;
        },
      });
      var M = n(9377);
      Object.defineProperty(r, 'DocsBlockItemEntityType', {
        enumerable: !0,
        get: function () {
          return M.DocsBlockItemEntityType;
        },
      });
      var A = n(5883);
      Object.defineProperty(r, 'DocsBlockItemPropertyOptionRenderingStyle', {
        enumerable: !0,
        get: function () {
          return A.DocsBlockItemPropertyOptionRenderingStyle;
        },
      });
      var F = n(8061);
      Object.defineProperty(r, 'DocsBlockItemPropertyRichTextStyle', {
        enumerable: !0,
        get: function () {
          return F.DocsBlockItemPropertyRichTextStyle;
        },
      });
      var w = n(7479);
      Object.defineProperty(r, 'DocsBlockItemPropertyTextStyle', {
        enumerable: !0,
        get: function () {
          return w.DocsBlockItemPropertyTextStyle;
        },
      });
      var H = n(6839);
      Object.defineProperty(r, 'DocsBlockItemPropertyType', {
        enumerable: !0,
        get: function () {
          return H.DocsBlockItemPropertyType;
        },
      });
      var U = n(8095);
      Object.defineProperty(r, 'DocsBlockItemVariantLayoutType', {
        enumerable: !0,
        get: function () {
          return U.DocsBlockItemVariantLayoutType;
        },
      });
      var W = n(7291);
      Object.defineProperty(r, 'DocsBlockItemVariantLayoutWidth', {
        enumerable: !0,
        get: function () {
          return W.DocsBlockItemVariantLayoutWidth;
        },
      });
      var Y = n(5963);
      Object.defineProperty(r, 'DocsBlockOptionRenderingStyle', {
        enumerable: !0,
        get: function () {
          return Y.DocsBlockOptionRenderingStyle;
        },
      });
      var G = n(6644);
      Object.defineProperty(r, 'DocsBlockRichTextPropertyStyle', {
        enumerable: !0,
        get: function () {
          return G.DocsBlockRichTextPropertyStyle;
        },
      });
      var V = n(306);
      Object.defineProperty(r, 'DocsBlockTextPropertyStyle', {
        enumerable: !0,
        get: function () {
          return V.DocsBlockTextPropertyStyle;
        },
      });
      var K = n(4068);
      Object.defineProperty(r, 'DocsEntityGroupBehavior', {
        enumerable: !0,
        get: function () {
          return K.DocsEntityGroupBehavior;
        },
      });
      var $ = n(1233);
      Object.defineProperty(r, 'DocsEntityType', {
        enumerable: !0,
        get: function () {
          return $.DocsEntityType;
        },
      });
      var z = n(7971);
      Object.defineProperty(r, 'DocsSectionType', {
        enumerable: !0,
        get: function () {
          return z.DocsSectionType;
        },
      });
      var q = n(5673);
      Object.defineProperty(r, 'DocsLinkRefType', {
        enumerable: !0,
        get: function () {
          return q.DocsLinkRefType;
        },
      });
      var Z = n(9932);
      Object.defineProperty(r, 'DocsImageRefType', {
        enumerable: !0,
        get: function () {
          return Z.DocsImageRefType;
        },
      });
      var J = n(4652);
      Object.defineProperty(r, 'SourceType', {
        enumerable: !0,
        get: function () {
          return J.SourceType;
        },
      });
      var Q = n(1255);
      Object.defineProperty(r, 'FrameAlignment', {
        enumerable: !0,
        get: function () {
          return Q.FrameAlignment;
        },
      });
      var X = n(3718);
      Object.defineProperty(r, 'FrameLayout', {
        enumerable: !0,
        get: function () {
          return X.FrameLayout;
        },
      });
      var ee = n(1);
      Object.defineProperty(r, 'GradientType', {
        enumerable: !0,
        get: function () {
          return ee.GradientType;
        },
      });
      var oe = n(2674);
      Object.defineProperty(r, 'RichTextSpanAttributeType', {
        enumerable: !0,
        get: function () {
          return oe.RichTextSpanAttributeType;
        },
      });
      var te = n(9125);
      Object.defineProperty(r, 'ShadowType', {
        enumerable: !0,
        get: function () {
          return te.ShadowType;
        },
      });
      var re = n(922);
      Object.defineProperty(r, 'TextCase', {
        enumerable: !0,
        get: function () {
          return re.TextCase;
        },
      });
      var ne = n(7040);
      Object.defineProperty(r, 'TextDecoration', {
        enumerable: !0,
        get: function () {
          return ne.TextDecoration;
        },
      });
      var ae = n(3788);
      Object.defineProperty(r, 'TokenType', {
        enumerable: !0,
        get: function () {
          return ae.TokenType;
        },
      });
      var ie = n(8607);
      Object.defineProperty(r, 'Unit', {
        enumerable: !0,
        get: function () {
          return ie.Unit;
        },
      });
      var ce = n(9478);
      Object.defineProperty(r, 'UserRole', {
        enumerable: !0,
        get: function () {
          return ce.UserRole;
        },
      });
      var le = n(6141);
      Object.defineProperty(r, 'VisibilityType', {
        enumerable: !0,
        get: function () {
          return le.VisibilityType;
        },
      });
      var se = n(5503);
      Object.defineProperty(r, 'WorkspaceSubscriptionPlanInterval', {
        enumerable: !0,
        get: function () {
          return se.WorkspaceSubscriptionPlanInterval;
        },
      });
      var ue = n(4290);
      Object.defineProperty(r, 'WorkspaceSubscriptionProductCode', {
        enumerable: !0,
        get: function () {
          return ue.WorkspaceSubscriptionProductCode;
        },
      });
      var pe = n(3607);
      Object.defineProperty(r, 'WorkspaceSubscriptionStatus', {
        enumerable: !0,
        get: function () {
          return pe.WorkspaceSubscriptionStatus;
        },
      });
      var de = n(6298);
      Object.defineProperty(r, 'WorkspaceNPMRegistryAuthType', {
        enumerable: !0,
        get: function () {
          return de.WorkspaceNPMRegistryAuthType;
        },
      });
      var ye = n(7968);
      Object.defineProperty(r, 'WorkspaceNPMRegistryType', {
        enumerable: !0,
        get: function () {
          return ye.WorkspaceNPMRegistryType;
        },
      });
      var Te = n(8042);
      Object.defineProperty(r, 'ImportWarningType', {
        enumerable: !0,
        get: function () {
          return Te.ImportWarningType;
        },
      });
      var me = n(5695);
      Object.defineProperty(r, 'CustomDomainErrorCode', {
        enumerable: !0,
        get: function () {
          return me.CustomDomainErrorCode;
        },
      });
      var fe = n(7737);
      Object.defineProperty(r, 'CustomDomainState', {
        enumerable: !0,
        get: function () {
          return fe.CustomDomainState;
        },
      });
      var I = n(2802);
      Object.defineProperty(r, 'OutputFileType', {
        enumerable: !0,
        get: function () {
          return I.OutputFileType;
        },
      }),
        Object.defineProperty(r, 'PulsarExecutor', {
          enumerable: !0,
          get: function () {
            return I.PulsarExecutor;
          },
        });
    })();
    var S = p;
    for (var f in T) S[f] = T[f];
    T.__esModule && Object.defineProperty(S, '__esModule', { value: !0 });
  })();
})(_);
const $e = (p) => {
    let s = 0,
      y = '';
    const n = p.split(`
`);
    for (const T of n)
      T.includes('(')
        ? ((s += 1),
          (y += `${T}
`))
        : T.includes(')')
          ? ((s -= 1),
            (y += `${'	'.repeat(s)}${T}
`))
          : T.includes(',')
            ? (y += `${'	'.repeat(s)}${T.trim()}
`)
            : (y += `${'	'.repeat(s)}${T}
`);
    return (
      (y = y.replace(
        /\n{3,}/g,
        `

`,
      )),
      y
    );
  },
  ze = (p) => ({ radius: 'radii', spacing: 'spaces' })[p] || (p.endsWith('s') ? p : `${p}s`),
  Se = (p, s, y) => {
    let n;
    return (
      y ? (n = s.find((T) => T.id === p.parentGroupId)) : (n = null),
      E.NamingHelper.codeSafeVariableNameForToken(p, E.StringCase.paramCase, n, '')
    );
  },
  qe = new Map([['breakpoint-mobile', 0]]),
  he = (p, s) => {
    const y = qe.get(p);
    return (typeof y == 'number' && typeof s == 'number') || (typeof y == 'string' && typeof s == 'string') ? y : s;
  },
  Ze = (p, s, y, n) => {
    var T, S;
    if (p.tokenType === _.TokenType.dimension) {
      const f = p,
        r = Se(f, y, n);
      let e = (T = f.value) == null ? void 0 : T.measure;
      e = he(r, e);
      const o = E.CSSHelper.unitToCSS((S = f.value) == null ? void 0 : S.unit);
      return `$${r}: ${e}${o} !default;`;
    }
    if (p.tokenType === _.TokenType.string) {
      const f = p,
        r = Se(f, y, n);
      let e = f.value.text;
      return (e = he(r, e)), `$${r}: ${e} !default;`;
    }
    return null;
  },
  Je = (p, s, y, n) =>
    p.map((T) => Ze(T, s, y, n)).filter(Boolean).join(`
`),
  Qe = (p, s, y) =>
    p.reduce((n, T) => {
      var o, t, i;
      const S = Se(T, s, y),
        f = (o = S.match(/\d+/)) == null ? void 0 : o[0],
        r = `${(i = (t = T.origin) == null ? void 0 : t.name) == null ? void 0 : i.split('/')[0].toLowerCase()}-`,
        e = S.replace(r, '');
      return (
        f
          ? (n += `${f}: $${S},
`)
          : e &&
            (n += `${e}: $${S},
`),
        n
      );
    }, ''),
  Xe = (p, s, y, n) => {
    const T = new Map();
    return (
      p.forEach((f) => {
        var e;
        const r = (e = f.origin) == null ? void 0 : e.name;
        if (r) {
          const o = r.split('/');
          o.pop();
          const t = ze(o.join('-').toLowerCase());
          T.set(t, [...(T.get(t) || []), f]);
        }
      }),
      Array.from(T.entries())
        .map(([f, r]) => {
          const e = Qe(r, y, n);
          return (
            e.trim() &&
            `$${f}: (
${e}) !default;

`
          );
        })
        .join('')
    );
  },
  eo = (p) =>
    Ne.generateDisclaimer
      ? `/* This file was generated by Supernova, don't change manually */
${p}`
      : p,
  oo = (p, s, y) =>
    p.filter((n) => {
      var T, S;
      return n.tokenType === s && ((S = (T = n.origin) == null ? void 0 : T.name) == null ? void 0 : S.includes(y));
    }),
  to = (p, s, y, n, T, S, f) => {
    let r = '',
      e = '';
    n.forEach((t) => {
      console.log(t),
        T.forEach((i) => {
          console.log(i);
          const d = oo(p, t, i);
          console.log(d),
            (r += Je(d, s, y, f)),
            (r += `

`);
          const c = Xe(d, s, y, f);
          c !== null && (e += c);
        });
    });
    let o = S ? `${r}${e}` : r;
    return (o = $e(o)), { content: eo(o) };
  },
  ro = [
    {
      fileName: '_spacing.scss',
      tokenTypes: [_.TokenType.dimension],
      groupNames: ['Spacing'],
      withCssObject: !0,
      hasParentPrefix: !1,
    },
    {
      fileName: '_radii.scss',
      tokenTypes: [_.TokenType.dimension],
      groupNames: ['Radius'],
      withCssObject: !0,
      hasParentPrefix: !1,
    },
    {
      fileName: '_borders.scss',
      tokenTypes: [_.TokenType.dimension],
      groupNames: ['Border'],
      withCssObject: !1,
      hasParentPrefix: !0,
    },
    {
      fileName: '_other.scss',
      tokenTypes: [_.TokenType.dimension, _.TokenType.string],
      groupNames: ['Grid', 'Container', 'Breakpoint'],
      withCssObject: !0,
      hasParentPrefix: !0,
    },
  ],
  no = (p, s, y) =>
    ro.map(({ fileName: n, tokenTypes: T, groupNames: S, withCssObject: f, hasParentPrefix: r }) => {
      const e = to(p, s, y, T, S, f, r);
      return { fileName: n, ...e };
    });
Pulsar.export(async (p, s) => {
  const y = { designSystemId: s.dsId, versionId: s.versionId };
  let n = await p.tokens.getTokens(y),
    T = await p.tokens.getTokenGroups(y);
  if (
    (s.brandId && ((n = n.filter((e) => e.brandId === s.brandId)), (T = T.filter((e) => e.brandId === s.brandId))),
    s.themeId)
  ) {
    const o = (await p.tokens.getTokenThemes(y)).find((t) => t.id === s.themeId);
    if (o) n = await p.tokens.computeTokensByApplyingThemes(n, [o]);
    else throw new Error('Unable to apply theme which does not exist in the system.');
  }
  const S = new Map(n.map((e) => [e.id, e])),
    f = (e, o, t) => E.FileHelper.createTextFile({ relativePath: e, fileName: o, content: t });
  return [
    ...no(n, S, T).map((e) => f('./global/', e.fileName, e.content)),
    f(
      './original-data/',
      '_original.json',
      JSON.stringify(
        n.map((e) => ({ tokenType: e.tokenType, origin: e.origin.name, name: e.name, value: e.value })),
        null,
        2,
      ),
    ),
  ];
});
const Ne = Pulsar.exportConfig();
exports.exportConfiguration = Ne;
