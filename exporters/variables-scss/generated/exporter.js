function Ee(p) {
  if (p.__esModule) return p;
  var s = p.default;
  if (typeof s == "function") {
    var T = function n() {
      return this instanceof n ? Reflect.construct(s, arguments, this.constructor) : s.apply(this, arguments);
    };
    T.prototype = s.prototype;
  } else T = {};
  return Object.defineProperty(T, "__esModule", { value: !0 }), Object.keys(p).forEach(function(n) {
    var f = Object.getOwnPropertyDescriptor(p, n);
    Object.defineProperty(T, n, f.get ? f : {
      enumerable: !0,
      get: function() {
        return p[n];
      }
    });
  }), T;
}
var D = {}, fe = {}, Se;
function Be() {
  return Se || (Se = 1, function(p) {
    (() => {
      var s = { 275: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsImageRefType = void 0, (e = o.DocsImageRefType || (o.DocsImageRefType = {})).upload = "Upload", e.asset = "Asset", e.figmaFrame = "FigmaFrame";
      }, 2695: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsLinkRefType = void 0, (e = o.DocsLinkRefType || (o.DocsLinkRefType = {})).page = "Page", e.pageHeading = "pageHeading", e.group = "Group", e.url = "url";
      }, 3476: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockShortcut = o.DocumentationLegacyPageBlockShortcutType = void 0, function(t) {
          t.external = "External", t.internal = "Internal";
        }(e = o.DocumentationLegacyPageBlockShortcutType || (o.DocumentationLegacyPageBlockShortcutType = {})), o.DocumentationLegacyPageBlockShortcut = class {
          constructor(t) {
            var l;
            t.url ? this.type = e.external : this.type = e.internal, this.title = this.shortcutTitleFromModel(t, this.type), this.description = this.shortcutDescriptionFromModel(t, this.type), this.previewUrl = this.shortcutPreviewUrlFromModel(t), this.type === e.internal && (!((l = t.documentationItemPreview) === null || l === void 0) && l.valid) && t.documentationItemId ? this.internalId = t.documentationItemId : (this.internalId = null, this.type === e.external && t.url ? this.externalUrl = t.url : this.externalUrl = null);
          }
          shortcutTitleFromModel(t, l) {
            var d, c, i, a, u;
            let y = null;
            return t.title && t.title.trim().length > 0 ? y = t.title : l === e.internal ? y = (c = (d = t.documentationItemPreview) === null || d === void 0 ? void 0 : d.title) !== null && c !== void 0 ? c : null : l === e.external && (y = (u = (a = (i = t.urlPreview) === null || i === void 0 ? void 0 : i.title) !== null && a !== void 0 ? a : t.url) !== null && u !== void 0 ? u : null), y && y.trim().length !== 0 ? y : null;
          }
          shortcutDescriptionFromModel(t, l) {
            var d;
            let c = null;
            return t.description && t.description.trim().length > 0 ? c = t.description : l === e.external && (c = (d = t.urlPreview) === null || d === void 0 ? void 0 : d.description), c && c.trim().length !== 0 ? c : null;
          }
          shortcutPreviewUrlFromModel(t) {
            var l, d, c, i, a;
            return (a = (c = (l = t.assetUrl) !== null && l !== void 0 ? l : (d = t.asset) === null || d === void 0 ? void 0 : d.url) !== null && c !== void 0 ? c : (i = t.urlPreview) === null || i === void 0 ? void 0 : i.thumbnailUrl) !== null && a !== void 0 ? a : null;
          }
        };
      }, 4222: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.Alignment = void 0, (e = o.Alignment || (o.Alignment = {})).left = "Left", e.center = "Center", e.stretch = "Stretch";
      }, 1334: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetFormat = void 0, (e = o.AssetFormat || (o.AssetFormat = {})).png = "png", e.pdf = "pdf", e.svg = "svg";
      }, 1940: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetScale = void 0, (e = o.AssetScale || (o.AssetScale = {})).x1 = "x1", e.x2 = "x2", e.x3 = "x3", e.x4 = "x4";
      }, 959: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetScaleType = void 0, (e = o.AssetScaleType || (o.AssetScaleType = {})).aspectFill = "AspectFill", e.aspectFit = "AspectFit";
      }, 9257: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.BlurType = void 0, (e = o.BlurType || (o.BlurType = {})).layer = "Layer", e.background = "Background";
      }, 6675: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.ALL_BORDER_POSITIONS = o.BorderPosition = void 0, function(t) {
          t.inside = "Inside", t.center = "Center", t.outside = "Outside";
        }(e = o.BorderPosition || (o.BorderPosition = {})), o.ALL_BORDER_POSITIONS = [e.inside, e.center, e.outside];
      }, 6701: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.ALL_BORDER_STYLES = o.BorderStyle = void 0, function(t) {
          t.dashed = "Dashed", t.dotted = "Dotted", t.solid = "Solid", t.groove = "Groove";
        }(e = o.BorderStyle || (o.BorderStyle = {})), o.ALL_BORDER_STYLES = [e.dashed, e.dotted, e.solid, e.groove];
      }, 829: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.ImportWarningType = void 0, (e = o.ImportWarningType || (o.ImportWarningType = {})).UnsupportedFill = "UnsupportedFill", e.UnsupportedStroke = "UnsupportedStroke", e.UnsupportedEffect = "UnsupportedEffect", e.StyleNotApplied = "StyleNotApplied", e.NoPublishedStyles = "NoPublishedStyles", e.NoPublishedComponents = "NoPublishedComponents", e.NoPublishedAssets = "NoPublishedAssets", e.NoVersionFound = "NoVersionFound", e.ComponentHasNoThumbnail = "ComponentHasNoThumbnail", e.DuplicateImportedStyleId = "DuplicateImportedStyleId", e.DuplicateImportedStylePath = "DuplicateImportedStylePath", e.NoPublishedElements = "NoPublishedElements";
      }, 3611: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.CustomDomainErrorCode = void 0, (e = o.CustomDomainErrorCode || (o.CustomDomainErrorCode = {})).generalError = "GeneralError", e.dnsNotConfigured = "DNSNotConfigured", e.maintenance = "Maintenance";
      }, 6530: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.CustomDomainState = void 0, (e = o.CustomDomainState || (o.CustomDomainState = {})).initial = "Initial", e.domainSetupInProgress = "DomainSetupInProgress", e.domainSetupFailed = "DomainSetupFailed", e.domainSetupsSucces = "DomainSetupSuccess", e.sslSetupInProgress = "SSLSetupInProgress", e.sslSetupFailed = "SSLSetupFailed", e.sslSetupSuccess = "SSLSetupSuccess";
      }, 4934: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockBehaviorDataType = void 0, (e = o.DocsBlockBehaviorDataType || (o.DocsBlockBehaviorDataType = {})).item = "Item", e.token = "Token", e.asset = "Asset", e.component = "Component";
      }, 8081: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockBehaviorSelectionType = void 0, (e = o.DocsBlockBehaviorSelectionType || (o.DocsBlockBehaviorSelectionType = {})).entity = "Entity", e.group = "Group", e.entityAndGroup = "EntityAndGroup";
      }, 9534: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockImagePropertyAspectRatio = void 0, (e = o.DocsBlockImagePropertyAspectRatio || (o.DocsBlockImagePropertyAspectRatio = {})).square = "Square", e.landscape = "Landscape", e.portrait = "Portrait", e.wide = "Wide";
      }, 1043: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemEntityType = void 0, (e = o.DocsBlockItemEntityType || (o.DocsBlockItemEntityType = {})).token = "Token", e.tokenGroup = "TokenGroup", e.asset = "Asset", e.assetGroup = "AssetGroup", e.component = "Component", e.componentGroup = "ComponentGroup";
      }, 3947: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyOptionRenderingStyle = void 0, (e = o.DocsBlockItemPropertyOptionRenderingStyle || (o.DocsBlockItemPropertyOptionRenderingStyle = {})).segmentedControl = "SegmentedControl", e.toggleButton = "ToggleButton", e.select = "Select", e.checkbox = "Checkbox";
      }, 4742: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyRichTextStyle = void 0, (e = o.DocsBlockItemPropertyRichTextStyle || (o.DocsBlockItemPropertyRichTextStyle = {})).title1 = "Title1", e.title2 = "Title2", e.title3 = "Title3", e.title4 = "Title4", e.title5 = "Title5", e.quote = "Quote", e.callout = "Callout", e.ol = "OL", e.ul = "UL";
      }, 7825: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyTextStyle = void 0, (e = o.DocsBlockItemPropertyTextStyle || (o.DocsBlockItemPropertyTextStyle = {})).small = "Small", e.regular = "Regular", e.bold = "Bold";
      }, 6751: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyType = void 0, (e = o.DocsBlockItemPropertyType || (o.DocsBlockItemPropertyType = {})).richText = "RichText", e.text = "Text", e.boolean = "Boolean", e.number = "Number", e.singleSelect = "SingleSelect", e.multiSelect = "MultiSelect", e.image = "Image", e.token = "Token", e.tokenType = "TokenType", e.tokenProperty = "TokenProperty", e.component = "Component", e.componentProperty = "ComponentProperty", e.asset = "Asset", e.assetProperty = "AssetProperty", e.page = "Page", e.pageProperty = "PageProperty", e.embedURL = "EmbedURL", e.embedFrame = "EmbedFrame", e.markdown = "Markdown", e.code = "Code", e.codeSandbox = "CodeSandbox", e.table = "Table", e.divider = "Divider", e.storybook = "Storybook";
      }, 6777: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemVariantLayoutType = void 0, (e = o.DocsBlockItemVariantLayoutType || (o.DocsBlockItemVariantLayoutType = {})).column = "Column", e.row = "Row";
      }, 9279: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemVariantLayoutWidth = void 0, (e = o.DocsBlockItemVariantLayoutWidth || (o.DocsBlockItemVariantLayoutWidth = {})).c1 = "1", e.c2 = "2", e.c3 = "3", e.c4 = "4", e.c5 = "5", e.c6 = "6", e.c7 = "7", e.c8 = "8", e.c9 = "9", e.c10 = "10", e.c11 = "11", e.c12 = "12";
      }, 5271: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockOptionRenderingStyle = void 0, (e = o.DocsBlockOptionRenderingStyle || (o.DocsBlockOptionRenderingStyle = {})).segmentedControl = "SegmentedControl", e.toggleButton = "ToggleButton", e.select = "Select", e.checkbox = "Checkbox";
      }, 3274: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockRichTextPropertyStyle = void 0, (e = o.DocsBlockRichTextPropertyStyle || (o.DocsBlockRichTextPropertyStyle = {})).title1 = "Title1", e.title2 = "Title2", e.title3 = "Title3", e.title4 = "Title4", e.title5 = "Title5", e.quote = "Quote", e.callout = "Callout", e.ol = "OL", e.ul = "UL", e.default = "Default";
      }, 6001: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockTextPropertyStyle = void 0, (e = o.DocsBlockTextPropertyStyle || (o.DocsBlockTextPropertyStyle = {})).title1 = "Title1", e.title2 = "Title2", e.title3 = "Title3", e.title4 = "Title4", e.title5 = "Title5", e.default = "Default", e.defaultBold = "DefaultBold", e.defaultSemibold = "DefaultSemibold", e.small = "Small", e.smallBold = "SmallBold", e.smallSemibold = "SmallSemibold";
      }, 1755: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsEntityGroupBehavior = void 0, (e = o.DocsEntityGroupBehavior || (o.DocsEntityGroupBehavior = {})).group = "Group", e.tabs = "Tabs";
      }, 8240: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsEntityType = void 0, (e = o.DocsEntityType || (o.DocsEntityType = {})).group = "Group", e.page = "Page";
      }, 4142: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsSectionType = void 0, (e = o.DocsSectionType || (o.DocsSectionType = {})).plain = "Plain", e.tabs = "Tabs";
      }, 4782: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyCalloutType = void 0, (e = o.DocumentationLegacyCalloutType || (o.DocumentationLegacyCalloutType = {})).info = "Info", e.success = "Success", e.warning = "Warning", e.error = "Error";
      }, 8549: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyGroupBehavior = void 0, (e = o.DocumentationLegacyGroupBehavior || (o.DocumentationLegacyGroupBehavior = {})).group = "Group", e.tabs = "Tabs";
      }, 1931: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyHeadingType = void 0, (e = o.DocumentationLegacyHeadingType || (o.DocumentationLegacyHeadingType = {}))[e.h1 = 1] = "h1", e[e.h2 = 2] = "h2", e[e.h3 = 3] = "h3";
      }, 5359: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyItemType = void 0, (e = o.DocumentationLegacyItemType || (o.DocumentationLegacyItemType = {})).group = "Group", e.page = "Page";
      }, 9437: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageAssetType = void 0, (e = o.DocumentationLegacyPageAssetType || (o.DocumentationLegacyPageAssetType = {})).image = "image", e.figmaFrame = "figmaFrame";
      }, 4649: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockThemeType = void 0, (e = o.DocumentationLegacyPageBlockThemeType || (o.DocumentationLegacyPageBlockThemeType = {})).override = "Override", e.comparison = "Comparison";
      }, 8560: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockType = void 0, (e = o.DocumentationLegacyPageBlockType || (o.DocumentationLegacyPageBlockType = {})).text = "Text", e.heading = "Heading", e.code = "Code", e.unorderedList = "UnorderedList", e.orderedList = "OrderedList", e.quote = "Quote", e.callout = "Callout", e.divider = "Divider", e.image = "Image", e.token = "Token", e.tokenList = "TokenList", e.tokenGroup = "TokenGroup", e.shortcuts = "Shortcuts", e.link = "Link", e.figmaEmbed = "FigmaEmbed", e.youtubeEmbed = "YoutubeEmbed", e.storybookEmbed = "StorybookEmbed", e.genericEmbed = "Embed", e.figmaFrames = "FigmaFrames", e.custom = "Custom", e.renderCode = "RenderCode", e.componentAssets = "ComponentAssets", e.column = "Column", e.columnItem = "ColumnItem", e.tabs = "Tabs", e.tabItem = "TabItem", e.table = "Table", e.tableCell = "TableCell", e.tableRow = "TableRow";
      }, 4914: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.FrameAlignment = void 0, (e = o.FrameAlignment || (o.FrameAlignment = {})).frameHeight = "FrameHeight", e.center = "Center";
      }, 5986: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.FrameLayout = void 0, (e = o.FrameLayout || (o.FrameLayout = {})).c8 = "C8", e.c7 = "C7", e.c6 = "C6", e.c5 = "C5", e.c4 = "C4", e.c3 = "C3", e.c2 = "C2", e.c1 = "C1", e.c175 = "C1_75";
      }, 4667: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.GradientType = void 0, (e = o.GradientType || (o.GradientType = {})).linear = "Linear", e.radial = "Radial", e.angular = "Angular";
      }, 4336: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.RichTextSpanAttributeType = void 0, (e = o.RichTextSpanAttributeType || (o.RichTextSpanAttributeType = {})).bold = "Bold", e.italic = "Italic", e.link = "Link", e.strikethrough = "Strikethrough", e.code = "Code";
      }, 5467: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.ShadowType = void 0, (e = o.ShadowType || (o.ShadowType = {})).drop = "Drop", e.inner = "Inner";
      }, 1694: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.SourceType = void 0, (e = o.SourceType || (o.SourceType = {})).figma = "Figma", e.tokenStudio = "TokenStudio";
      }, 2047: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.TextCase = void 0, (e = o.TextCase || (o.TextCase = {})).original = "Original", e.upper = "Upper", e.lower = "Lower", e.camel = "Camel", e.smallCaps = "SmallCaps";
      }, 5780: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.TextDecoration = void 0, (e = o.TextDecoration || (o.TextDecoration = {})).original = "None", e.underline = "Underline", e.strikethrough = "Strikethrough";
      }, 1256: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.DT_TOKEN_TYPES = o.tokenTypeIsReferencable = o.REFERENCABLE_TOKEN_TYPES = o.REPLACABLE_TOKEN_TYPES = o.tokenTypeIsNonPure = o.tokenTypeIsPure = o.PURE_TOKEN_TYPES = o.ALL_TOKEN_TYPES = o.MS_DIMENSION_TOKEN_TYPES = o.RAW_DIMENSION_TOKEN_TYPES = o.DIMENSION_TOKEN_TYPES = o.OPTION_TOKEN_TYPES = o.STRING_TOKEN_TYPES = o.TokenType = void 0, function(t) {
          t.color = "Color", t.typography = "Typography", t.dimension = "Dimension", t.size = "Size", t.space = "Space", t.opacity = "Opacity", t.fontSize = "FontSize", t.lineHeight = "LineHeight", t.letterSpacing = "LetterSpacing", t.paragraphSpacing = "ParagraphSpacing", t.borderWidth = "BorderWidth", t.radius = "BorderRadius", t.duration = "Duration", t.zIndex = "ZIndex", t.shadow = "Shadow", t.border = "Border", t.gradient = "Gradient", t.string = "String", t.productCopy = "ProductCopy", t.fontFamily = "FontFamily", t.fontWeight = "FontWeight", t.textCase = "TextCase", t.textDecoration = "TextDecoration", t.visibility = "Visibility", t.blur = "Blur";
        }(e = o.TokenType || (o.TokenType = {})), o.STRING_TOKEN_TYPES = [e.string, e.productCopy, e.fontFamily, e.fontWeight], o.OPTION_TOKEN_TYPES = [e.textCase, e.textDecoration, e.visibility], o.DIMENSION_TOKEN_TYPES = [e.dimension, e.size, e.space, e.opacity, e.fontSize, e.lineHeight, e.letterSpacing, e.paragraphSpacing, e.borderWidth, e.radius, e.duration, e.zIndex], o.RAW_DIMENSION_TOKEN_TYPES = [e.opacity, e.zIndex], o.MS_DIMENSION_TOKEN_TYPES = [e.duration], o.ALL_TOKEN_TYPES = [...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES, e.color, e.gradient, e.border, e.radius, e.shadow, e.typography, e.blur], o.PURE_TOKEN_TYPES = [...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES], o.tokenTypeIsPure = (t) => o.PURE_TOKEN_TYPES.includes(t), o.tokenTypeIsNonPure = (t) => !(0, o.tokenTypeIsPure)(t), o.REPLACABLE_TOKEN_TYPES = [e.color, ...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES], o.REFERENCABLE_TOKEN_TYPES = [e.color, ...o.DIMENSION_TOKEN_TYPES, e.fontFamily, e.fontWeight, e.textCase, e.textDecoration], o.tokenTypeIsReferencable = (t) => o.REFERENCABLE_TOKEN_TYPES.includes(t), o.DT_TOKEN_TYPES = [e.color, e.shadow, e.gradient, e.typography, e.border, ...o.DIMENSION_TOKEN_TYPES, e.fontFamily, e.fontWeight, ...o.OPTION_TOKEN_TYPES];
      }, 5389: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.MS_UNITS = o.PX_UNITS = o.RAW_UNITS = o.LINE_HEIGHT_UNITS = o.SIZE_UNITS = o.Unit = void 0, function(t) {
          t.pixels = "Pixels", t.percent = "Percent", t.rem = "Rem", t.ms = "Ms", t.raw = "Raw";
        }(e = o.Unit || (o.Unit = {})), o.SIZE_UNITS = [e.pixels, e.percent, e.rem], o.LINE_HEIGHT_UNITS = [e.pixels, e.percent, e.rem, e.raw], o.RAW_UNITS = [e.raw], o.PX_UNITS = [e.pixels], o.MS_UNITS = [e.ms];
      }, 2916: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.UserRole = void 0, (e = o.UserRole || (o.UserRole = {})).owner = "Owner", e.admin = "Admin", e.creator = "Creator", e.viewer = "Viewer", e.billing = "Billing";
      }, 6398: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.VisibilityType = void 0, (e = o.VisibilityType || (o.VisibilityType = {})).visible = "Visible", e.hidden = "Hidden";
      }, 4838: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceNPMRegistryAuthType = void 0, (e = o.WorkspaceNPMRegistryAuthType || (o.WorkspaceNPMRegistryAuthType = {})).basic = "Basic", e.bearer = "Bearer";
      }, 2015: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceNPMRegistryType = void 0, (e = o.WorkspaceNPMRegistryType || (o.WorkspaceNPMRegistryType = {})).npmJS = "NPMJS", e.gitHub = "GitHub", e.azureDevOps = "AzureDevOps", e.artifactory = "Artifactory", e.custom = "Custom";
      }, 4357: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionPlanInterval = void 0, (e = o.WorkspaceSubscriptionPlanInterval || (o.WorkspaceSubscriptionPlanInterval = {})).yearly = "yearly", e.monthly = "monthly";
      }, 743: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionProductCode = void 0, (e = o.WorkspaceSubscriptionProductCode || (o.WorkspaceSubscriptionProductCode = {})).free = "free", e.team = "team", e.teamTest = "team_test", e.company = "company", e.enterprise = "enterprise";
      }, 5841: (r, o) => {
        var e;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionStatus = void 0, (e = o.WorkspaceSubscriptionStatus || (o.WorkspaceSubscriptionStatus = {})).active = "active", e.gracePeriod = "gracePeriod", e.cancelled = "cancelled", e.suspended = "suspended";
      }, 3803: (r, o) => {
        var e, t;
        Object.defineProperty(o, "__esModule", { value: !0 }), o.PulsarExecutor = o.OutputFileType = void 0, (t = o.OutputFileType || (o.OutputFileType = {})).copyRemoteUrl = "copyRemoteUrl", t.text = "text", t.binary = "binary", (e = o.PulsarExecutor || (o.PulsarExecutor = {})).supernova = "supernova", e.local = "local";
      } }, T = {};
      function n(r) {
        var o = T[r];
        if (o !== void 0) return o.exports;
        var e = T[r] = { exports: {} };
        return s[r](e, e.exports, n), e.exports;
      }
      var f = {};
      (() => {
        var r = f;
        Object.defineProperty(r, "__esModule", { value: !0 }), r.UserRole = r.Unit = r.TokenType = r.TextDecoration = r.TextCase = r.ShadowType = r.RichTextSpanAttributeType = r.GradientType = r.FrameLayout = r.FrameAlignment = r.SourceType = r.DocsImageRefType = r.DocsLinkRefType = r.DocsSectionType = r.DocsEntityType = r.DocsEntityGroupBehavior = r.DocsBlockTextPropertyStyle = r.DocsBlockRichTextPropertyStyle = r.DocsBlockOptionRenderingStyle = r.DocsBlockItemVariantLayoutWidth = r.DocsBlockItemVariantLayoutType = r.DocsBlockItemPropertyType = r.DocsBlockItemPropertyTextStyle = r.DocsBlockItemPropertyRichTextStyle = r.DocsBlockItemPropertyOptionRenderingStyle = r.DocsBlockItemEntityType = r.DocsBlockImagePropertyAspectRatio = r.DocsBlockBehaviorSelectionType = r.DocsBlockBehaviorDataType = r.DocumentationLegacyPageBlockShortcutType = r.DocumentationLegacyPageBlockThemeType = r.DocumentationLegacyPageBlockType = r.DocumentationLegacyPageAssetType = r.DocumentationLegacyItemType = r.DocumentationLegacyHeadingType = r.DocumentationLegacyGroupBehavior = r.DocumentationLegacyCalloutType = r.BorderStyle = r.BorderPosition = r.BlurType = r.AssetScaleType = r.AssetScale = r.AssetFormat = r.Alignment = r.ALL_TOKEN_TYPES = r.ALL_BORDER_STYLES = r.ALL_BORDER_POSITIONS = r.OPTION_TOKEN_TYPES = r.STRING_TOKEN_TYPES = r.DIMENSION_TOKEN_TYPES = void 0, r.PulsarExecutor = r.OutputFileType = r.CustomDomainState = r.CustomDomainErrorCode = r.ImportWarningType = r.WorkspaceNPMRegistryType = r.WorkspaceNPMRegistryAuthType = r.WorkspaceSubscriptionStatus = r.WorkspaceSubscriptionProductCode = r.WorkspaceSubscriptionPlanInterval = r.VisibilityType = void 0;
        var o = n(1256);
        Object.defineProperty(r, "DIMENSION_TOKEN_TYPES", { enumerable: !0, get: function() {
          return o.DIMENSION_TOKEN_TYPES;
        } }), Object.defineProperty(r, "STRING_TOKEN_TYPES", { enumerable: !0, get: function() {
          return o.STRING_TOKEN_TYPES;
        } }), Object.defineProperty(r, "OPTION_TOKEN_TYPES", { enumerable: !0, get: function() {
          return o.OPTION_TOKEN_TYPES;
        } });
        var e = n(6675);
        Object.defineProperty(r, "ALL_BORDER_POSITIONS", { enumerable: !0, get: function() {
          return e.ALL_BORDER_POSITIONS;
        } });
        var t = n(6701);
        Object.defineProperty(r, "ALL_BORDER_STYLES", { enumerable: !0, get: function() {
          return t.ALL_BORDER_STYLES;
        } });
        var l = n(1256);
        Object.defineProperty(r, "ALL_TOKEN_TYPES", { enumerable: !0, get: function() {
          return l.ALL_TOKEN_TYPES;
        } });
        var d = n(4222);
        Object.defineProperty(r, "Alignment", { enumerable: !0, get: function() {
          return d.Alignment;
        } });
        var c = n(1334);
        Object.defineProperty(r, "AssetFormat", { enumerable: !0, get: function() {
          return c.AssetFormat;
        } });
        var i = n(1940);
        Object.defineProperty(r, "AssetScale", { enumerable: !0, get: function() {
          return i.AssetScale;
        } });
        var a = n(959);
        Object.defineProperty(r, "AssetScaleType", { enumerable: !0, get: function() {
          return a.AssetScaleType;
        } });
        var u = n(9257);
        Object.defineProperty(r, "BlurType", { enumerable: !0, get: function() {
          return u.BlurType;
        } });
        var y = n(6675);
        Object.defineProperty(r, "BorderPosition", { enumerable: !0, get: function() {
          return y.BorderPosition;
        } });
        var m = n(6701);
        Object.defineProperty(r, "BorderStyle", { enumerable: !0, get: function() {
          return m.BorderStyle;
        } });
        var g = n(4782);
        Object.defineProperty(r, "DocumentationLegacyCalloutType", { enumerable: !0, get: function() {
          return g.DocumentationLegacyCalloutType;
        } });
        var S = n(8549);
        Object.defineProperty(r, "DocumentationLegacyGroupBehavior", { enumerable: !0, get: function() {
          return S.DocumentationLegacyGroupBehavior;
        } });
        var v = n(1931);
        Object.defineProperty(r, "DocumentationLegacyHeadingType", { enumerable: !0, get: function() {
          return v.DocumentationLegacyHeadingType;
        } });
        var h = n(5359);
        Object.defineProperty(r, "DocumentationLegacyItemType", { enumerable: !0, get: function() {
          return h.DocumentationLegacyItemType;
        } });
        var O = n(9437);
        Object.defineProperty(r, "DocumentationLegacyPageAssetType", { enumerable: !0, get: function() {
          return O.DocumentationLegacyPageAssetType;
        } });
        var _ = n(8560);
        Object.defineProperty(r, "DocumentationLegacyPageBlockType", { enumerable: !0, get: function() {
          return _.DocumentationLegacyPageBlockType;
        } });
        var B = n(4649);
        Object.defineProperty(r, "DocumentationLegacyPageBlockThemeType", { enumerable: !0, get: function() {
          return B.DocumentationLegacyPageBlockThemeType;
        } });
        var N = n(3476);
        Object.defineProperty(r, "DocumentationLegacyPageBlockShortcutType", { enumerable: !0, get: function() {
          return N.DocumentationLegacyPageBlockShortcutType;
        } });
        var R = n(4934);
        Object.defineProperty(r, "DocsBlockBehaviorDataType", { enumerable: !0, get: function() {
          return R.DocsBlockBehaviorDataType;
        } });
        var L = n(8081);
        Object.defineProperty(r, "DocsBlockBehaviorSelectionType", { enumerable: !0, get: function() {
          return L.DocsBlockBehaviorSelectionType;
        } });
        var x = n(9534);
        Object.defineProperty(r, "DocsBlockImagePropertyAspectRatio", { enumerable: !0, get: function() {
          return x.DocsBlockImagePropertyAspectRatio;
        } });
        var j = n(1043);
        Object.defineProperty(r, "DocsBlockItemEntityType", { enumerable: !0, get: function() {
          return j.DocsBlockItemEntityType;
        } });
        var M = n(3947);
        Object.defineProperty(r, "DocsBlockItemPropertyOptionRenderingStyle", { enumerable: !0, get: function() {
          return M.DocsBlockItemPropertyOptionRenderingStyle;
        } });
        var A = n(4742);
        Object.defineProperty(r, "DocsBlockItemPropertyRichTextStyle", { enumerable: !0, get: function() {
          return A.DocsBlockItemPropertyRichTextStyle;
        } });
        var F = n(7825);
        Object.defineProperty(r, "DocsBlockItemPropertyTextStyle", { enumerable: !0, get: function() {
          return F.DocsBlockItemPropertyTextStyle;
        } });
        var w = n(6751);
        Object.defineProperty(r, "DocsBlockItemPropertyType", { enumerable: !0, get: function() {
          return w.DocsBlockItemPropertyType;
        } });
        var H = n(6777);
        Object.defineProperty(r, "DocsBlockItemVariantLayoutType", { enumerable: !0, get: function() {
          return H.DocsBlockItemVariantLayoutType;
        } });
        var U = n(9279);
        Object.defineProperty(r, "DocsBlockItemVariantLayoutWidth", { enumerable: !0, get: function() {
          return U.DocsBlockItemVariantLayoutWidth;
        } });
        var W = n(5271);
        Object.defineProperty(r, "DocsBlockOptionRenderingStyle", { enumerable: !0, get: function() {
          return W.DocsBlockOptionRenderingStyle;
        } });
        var Y = n(3274);
        Object.defineProperty(r, "DocsBlockRichTextPropertyStyle", { enumerable: !0, get: function() {
          return Y.DocsBlockRichTextPropertyStyle;
        } });
        var G = n(6001);
        Object.defineProperty(r, "DocsBlockTextPropertyStyle", { enumerable: !0, get: function() {
          return G.DocsBlockTextPropertyStyle;
        } });
        var V = n(1755);
        Object.defineProperty(r, "DocsEntityGroupBehavior", { enumerable: !0, get: function() {
          return V.DocsEntityGroupBehavior;
        } });
        var K = n(8240);
        Object.defineProperty(r, "DocsEntityType", { enumerable: !0, get: function() {
          return K.DocsEntityType;
        } });
        var $ = n(4142);
        Object.defineProperty(r, "DocsSectionType", { enumerable: !0, get: function() {
          return $.DocsSectionType;
        } });
        var z = n(2695);
        Object.defineProperty(r, "DocsLinkRefType", { enumerable: !0, get: function() {
          return z.DocsLinkRefType;
        } });
        var q = n(275);
        Object.defineProperty(r, "DocsImageRefType", { enumerable: !0, get: function() {
          return q.DocsImageRefType;
        } });
        var Z = n(1694);
        Object.defineProperty(r, "SourceType", { enumerable: !0, get: function() {
          return Z.SourceType;
        } });
        var J = n(4914);
        Object.defineProperty(r, "FrameAlignment", { enumerable: !0, get: function() {
          return J.FrameAlignment;
        } });
        var Q = n(5986);
        Object.defineProperty(r, "FrameLayout", { enumerable: !0, get: function() {
          return Q.FrameLayout;
        } });
        var X = n(4667);
        Object.defineProperty(r, "GradientType", { enumerable: !0, get: function() {
          return X.GradientType;
        } });
        var ee = n(4336);
        Object.defineProperty(r, "RichTextSpanAttributeType", { enumerable: !0, get: function() {
          return ee.RichTextSpanAttributeType;
        } });
        var oe = n(5467);
        Object.defineProperty(r, "ShadowType", { enumerable: !0, get: function() {
          return oe.ShadowType;
        } });
        var te = n(2047);
        Object.defineProperty(r, "TextCase", { enumerable: !0, get: function() {
          return te.TextCase;
        } });
        var re = n(5780);
        Object.defineProperty(r, "TextDecoration", { enumerable: !0, get: function() {
          return re.TextDecoration;
        } });
        var ne = n(1256);
        Object.defineProperty(r, "TokenType", { enumerable: !0, get: function() {
          return ne.TokenType;
        } });
        var ae = n(5389);
        Object.defineProperty(r, "Unit", { enumerable: !0, get: function() {
          return ae.Unit;
        } });
        var ie = n(2916);
        Object.defineProperty(r, "UserRole", { enumerable: !0, get: function() {
          return ie.UserRole;
        } });
        var ce = n(6398);
        Object.defineProperty(r, "VisibilityType", { enumerable: !0, get: function() {
          return ce.VisibilityType;
        } });
        var le = n(4357);
        Object.defineProperty(r, "WorkspaceSubscriptionPlanInterval", { enumerable: !0, get: function() {
          return le.WorkspaceSubscriptionPlanInterval;
        } });
        var ue = n(743);
        Object.defineProperty(r, "WorkspaceSubscriptionProductCode", { enumerable: !0, get: function() {
          return ue.WorkspaceSubscriptionProductCode;
        } });
        var se = n(5841);
        Object.defineProperty(r, "WorkspaceSubscriptionStatus", { enumerable: !0, get: function() {
          return se.WorkspaceSubscriptionStatus;
        } });
        var pe = n(4838);
        Object.defineProperty(r, "WorkspaceNPMRegistryAuthType", { enumerable: !0, get: function() {
          return pe.WorkspaceNPMRegistryAuthType;
        } });
        var de = n(2015);
        Object.defineProperty(r, "WorkspaceNPMRegistryType", { enumerable: !0, get: function() {
          return de.WorkspaceNPMRegistryType;
        } });
        var ye = n(829);
        Object.defineProperty(r, "ImportWarningType", { enumerable: !0, get: function() {
          return ye.ImportWarningType;
        } });
        var Te = n(3611);
        Object.defineProperty(r, "CustomDomainErrorCode", { enumerable: !0, get: function() {
          return Te.CustomDomainErrorCode;
        } });
        var me = n(6530);
        Object.defineProperty(r, "CustomDomainState", { enumerable: !0, get: function() {
          return me.CustomDomainState;
        } });
        var I = n(3803);
        Object.defineProperty(r, "OutputFileType", { enumerable: !0, get: function() {
          return I.OutputFileType;
        } }), Object.defineProperty(r, "PulsarExecutor", { enumerable: !0, get: function() {
          return I.PulsarExecutor;
        } });
      })();
      var b = p;
      for (var P in f) b[P] = f[P];
      f.__esModule && Object.defineProperty(b, "__esModule", { value: !0 });
    })();
  }(fe)), fe;
}
var k = function() {
  return k = Object.assign || function(s) {
    for (var T, n = 1, f = arguments.length; n < f; n++) {
      T = arguments[n];
      for (var b in T) Object.prototype.hasOwnProperty.call(T, b) && (s[b] = T[b]);
    }
    return s;
  }, k.apply(this, arguments);
};
function Ne(p) {
  return p.toLowerCase();
}
var Re = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], Le = /[^A-Z0-9]+/gi;
function C(p, s) {
  s === void 0 && (s = {});
  for (var T = s.splitRegexp, n = T === void 0 ? Re : T, f = s.stripRegexp, b = f === void 0 ? Le : f, P = s.transform, r = P === void 0 ? Ne : P, o = s.delimiter, e = o === void 0 ? " " : o, t = ve(ve(p, n, "$1\0$2"), b, "\0"), l = 0, d = t.length; t.charAt(l) === "\0"; )
    l++;
  for (; t.charAt(d - 1) === "\0"; )
    d--;
  return t.slice(l, d).split("\0").map(r).join(e);
}
function ve(p, s, T) {
  return s instanceof RegExp ? p.replace(s, T) : s.reduce(function(n, f) {
    return n.replace(f, T);
  }, p);
}
function ge(p, s) {
  var T = p.charAt(0), n = p.substr(1).toLowerCase();
  return s > 0 && T >= "0" && T <= "9" ? "_" + T + n : "" + T.toUpperCase() + n;
}
function Pe(p) {
  return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase();
}
function he(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: "", transform: ge }, s));
}
function ke(p, s) {
  return s === 0 ? p.toLowerCase() : ge(p, s);
}
function xe(p, s) {
  return s === 0 ? p.toLowerCase() : Pe(p);
}
function je(p, s) {
  return s === void 0 && (s = {}), he(p, k({ transform: ke }, s));
}
function _e(p) {
  return p.charAt(0).toUpperCase() + p.substr(1);
}
function Oe(p) {
  return _e(p.toLowerCase());
}
function De(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: " ", transform: Oe }, s));
}
function Me(p) {
  return p.toUpperCase();
}
function Ae(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: "_", transform: Me }, s));
}
function E(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: "." }, s));
}
function Fe(p, s) {
  return s === void 0 && (s = {}), De(p, k({ delimiter: "-" }, s));
}
function we(p, s) {
  return s === void 0 && (s = {}), E(p, k({ delimiter: "-" }, s));
}
function He(p, s) {
  return s === void 0 && (s = {}), E(p, k({ delimiter: "/" }, s));
}
function Ce(p, s) {
  var T = p.toLowerCase();
  return s === 0 ? _e(T) : T;
}
function Ue(p, s) {
  return s === void 0 && (s = {}), C(p, k({ delimiter: " ", transform: Ce }, s));
}
function We(p, s) {
  return s === void 0 && (s = {}), E(p, k({ delimiter: "_" }, s));
}
const Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  camelCase: je,
  camelCaseTransform: ke,
  camelCaseTransformMerge: xe,
  capitalCase: De,
  capitalCaseTransform: Oe,
  constantCase: Ae,
  dotCase: E,
  headerCase: Fe,
  noCase: C,
  paramCase: we,
  pascalCase: he,
  pascalCaseTransform: ge,
  pascalCaseTransformMerge: Pe,
  pathCase: He,
  sentenceCase: Ue,
  sentenceCaseTransform: Ce,
  snakeCase: We
}, Symbol.toStringTag, { value: "Module" })), Ge = /* @__PURE__ */ Ee(Ye);
(function(p) {
  (() => {
    var s = { 639: (r, o, e) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.Iterators = void 0;
      const t = e(58);
      o.Iterators = class {
        static allTokenTypes() {
          return [t.TokenType.color, t.TokenType.typography, t.TokenType.dimension, t.TokenType.size, t.TokenType.space, t.TokenType.opacity, t.TokenType.fontSize, t.TokenType.lineHeight, t.TokenType.letterSpacing, t.TokenType.paragraphSpacing, t.TokenType.borderWidth, t.TokenType.radius, t.TokenType.duration, t.TokenType.zIndex, t.TokenType.shadow, t.TokenType.border, t.TokenType.gradient, t.TokenType.string, t.TokenType.productCopy, t.TokenType.fontFamily, t.TokenType.fontWeight, t.TokenType.textCase, t.TokenType.textDecoration, t.TokenType.visibility, t.TokenType.blur];
        }
        static allDimensionTokenTypes() {
          return [t.TokenType.dimension, t.TokenType.size, t.TokenType.space, t.TokenType.opacity, t.TokenType.fontSize, t.TokenType.lineHeight, t.TokenType.letterSpacing, t.TokenType.paragraphSpacing, t.TokenType.borderWidth, t.TokenType.radius, t.TokenType.duration, t.TokenType.zIndex];
        }
        static allStringTokenTypes() {
          return [t.TokenType.string, t.TokenType.productCopy, t.TokenType.fontFamily, t.TokenType.fontWeight];
        }
        static allOptionTokenTypes() {
          return [t.TokenType.textCase, t.TokenType.textDecoration, t.TokenType.visibility];
        }
      };
    }, 989: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ColorFormat = void 0, (e = o.ColorFormat || (o.ColorFormat = {})).rgb = "rgb", e.rgba = "rgba", e.smartRgba = "smartRgba", e.hex6 = "hex6", e.hex8 = "hex8", e.hashHex6 = "hashHex6", e.hashHex8 = "hashHex8", e.smartHashHex = "smartHashHex", e.smartHex = "smartHex", e.hsl = "hsl", e.hsla = "hsla", e.smartHsla = "smartHsla", e.smartUIColor = "smartUIColor";
    }, 545: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.StringCase = void 0, (e = o.StringCase || (o.StringCase = {})).camelCase = "camelCase", e.capitalCase = "capitalCase", e.constantCase = "constantCase", e.dotCase = "dotCase", e.headerCase = "headerCase", e.noCase = "noCase", e.paramCase = "paramCase", e.pascalCase = "pascalCase", e.pathCase = "pathCase", e.sentenceCase = "sentenceCase", e.snakeCase = "snakeCase";
    }, 617: (r, o, e) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.FileHelper = void 0;
      const t = e(58);
      o.FileHelper = class {
        static createCopyRemoteFile({ relativePath: l, fileName: d, url: c }) {
          return { path: l, name: d, type: t.OutputFileType.copyRemoteUrl, url: c };
        }
        static createTextFile({ relativePath: l, fileName: d, content: c }) {
          return { path: l, name: d, type: t.OutputFileType.text, content: c };
        }
        static createBinaryFile({ relativePath: l, fileName: d, data: c }) {
          return { path: l, name: d, type: t.OutputFileType.binary, data: c };
        }
      };
    }, 761: (r, o) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.sureOptionalReference = void 0, o.sureOptionalReference = function(e, t, l = !0) {
        if (!e || !l) return null;
        const d = t.get(e);
        if (!d) throw new Error(`Trying to retrieve unknown referenced token ${e}`);
        return d;
      };
    }, 118: (r, o) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.NetworkHelper = void 0, o.NetworkHelper = class {
        static async fetchAsText(e, t, l) {
          return (await this.performFetch(e, t, l)).text();
        }
        static async fetchAsJSON(e, t, l) {
          return (await this.performFetch(e, t, l)).json();
        }
        static async fetchAsData(e, t, l) {
          return (await this.performFetch(e, t, l)).arrayBuffer();
        }
        static async performFetch(e, t, l) {
          try {
            const d = await e.network.fetch(t, l);
            if (!d.ok) throw new Error(`Request failed with status ${d.status}, error: ${await d.text()}`);
            return d;
          } catch (d) {
            throw d;
          }
        }
      };
    }, 771: (r, o, e) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.CSSHelper = void 0;
      const t = e(58), l = e(761), d = e(952);
      o.CSSHelper = class {
        static tokenToCSS(c, i, a) {
          switch (c.tokenType) {
            case t.TokenType.color:
              return this.colorTokenValueToCSS(c.value, i, a);
            case t.TokenType.border:
              return this.borderTokenValueToCSS(c.value, i, a);
            case t.TokenType.gradient:
              return this.gradientTokenValueToCSS(c.value, i, a);
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
              return this.dimensionTokenValueToCSS(c.value, i, a);
            case t.TokenType.shadow:
              return this.shadowTokenValueToCSS(c.value, i, a);
            case t.TokenType.fontWeight:
            case t.TokenType.fontFamily:
            case t.TokenType.productCopy:
            case t.TokenType.string:
              return this.stringTokenValueToCSS(c.value, i, a);
            case t.TokenType.textCase:
            case t.TokenType.textDecoration:
            case t.TokenType.visibility:
              return this.optionTokenValueToCSS(c.value, i, a);
            case t.TokenType.blur:
              return this.blurTokenValueToCSS(c.value, i, a);
            case t.TokenType.typography:
              return this.typographyTokenValueToCSS(c.value, i, a);
            default:
              throw new t.UnreachableCaseError(c.tokenType, "Unsupported token type for transformation to CSS:");
          }
        }
        static colorTokenValueToCSS(c, i, a) {
          return d.ColorHelper.formattedColorOrVariableName(c, i, a);
        }
        static borderTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          if (u) return a.tokenToVariableRef(u);
          const y = this.dimensionTokenValueToCSS(c.width, i, a), m = this.borderStyleToCSS(c.style), g = this.colorTokenValueToCSS(c.color, i, a);
          return this.borderPositionToCSS(c.position), `${y} ${m} ${g}`;
        }
        static gradientTokenValueToCSS(c, i, a) {
          return c.map((u) => this.gradientLayerToCSS(u, i, a)).join(", ");
        }
        static gradientLayerToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          if (u) return a.tokenToVariableRef(u);
          let y = "";
          switch (c.type) {
            case t.GradientType.linear:
              y = "linear-gradient(0deg, ";
              break;
            case t.GradientType.radial:
              y = "radial-gradient(circle, ";
              break;
            case t.GradientType.angular:
              y = "conic-gradient(";
              break;
            default:
              y = "linear-gradient(0deg, ";
          }
          return `${y}${c.stops.map((m) => `${this.colorTokenValueToCSS(m.color, i, a)} ${d.ColorHelper.roundToDecimals(100 * m.position, a.decimals)}%`).join(", ")})`;
        }
        static dimensionTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          return u ? a.tokenToVariableRef(u) : `${d.ColorHelper.roundToDecimals(c.measure, a.decimals)}${this.unitToCSS(c.unit)}`;
        }
        static shadowTokenValueToCSS(c, i, a) {
          return c.map((u) => this.shadowLayerToCSS(u, i, a)).join(", ");
        }
        static shadowLayerToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          return u ? a.tokenToVariableRef(u) : `${c.type === t.ShadowType.inner ? "inset " : ""}${c.x}px ${c.y}px ${c.radius}px ${c.spread}px ${this.colorTokenValueToCSS(c.color, i, a)}`;
        }
        static stringTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          return u ? a.tokenToVariableRef(u) : `"${c.text}"`;
        }
        static optionTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          return u ? a.tokenToVariableRef(u) : `"${c.value}"`;
        }
        static blurTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          return u ? a.tokenToVariableRef(u) : `blur(${this.dimensionTokenValueToCSS(c.radius, i, a)})`;
        }
        static typographyTokenValueToCSS(c, i, a) {
          const u = (0, l.sureOptionalReference)(c.referencedTokenId, i, a.allowReferences);
          if (u) return a.tokenToVariableRef(u);
          const y = (0, l.sureOptionalReference)(c.fontFamily.referencedTokenId, i, a.allowReferences), m = (0, l.sureOptionalReference)(c.fontWeight.referencedTokenId, i, a.allowReferences), g = (0, l.sureOptionalReference)(c.textDecoration.referencedTokenId, i, a.allowReferences), S = (0, l.sureOptionalReference)(c.textCase.referencedTokenId, i, a.allowReferences), v = { fontFamily: y ? a.tokenToVariableRef(y) : c.fontFamily.text, fontWeight: m ? a.tokenToVariableRef(m) : c.fontWeight.text, textDecoration: g ? a.tokenToVariableRef(g) : c.textDecoration.value === t.TextDecoration.original ? this.textDecorationToCSS(c.textDecoration.value) : void 0, textCase: S ? a.tokenToVariableRef(S) : c.textCase.value === t.TextCase.original ? this.textCaseToCSS(c.textCase.value) : void 0, caps: c.textCase.value === t.TextCase.smallCaps, fontSize: this.dimensionTokenValueToCSS(c.fontSize, i, a), lineHeight: c.lineHeight ? this.dimensionTokenValueToCSS(c.lineHeight, i, a) : void 0 }, h = v.fontSize;
          return `${v.caps ? "small-caps " : ""}${m ? v.fontWeight : `"${v.fontWeight}"`} ${v.lineHeight ? `${h}/${v.lineHeight}` : h} ${y ? v.fontFamily : `"${v.fontFamily}"`}`;
        }
        static borderStyleToCSS(c) {
          switch (c) {
            case t.BorderStyle.dashed:
              return "dashed";
            case t.BorderStyle.dotted:
              return "dotted";
            case t.BorderStyle.solid:
              return "solid";
            case t.BorderStyle.groove:
              return "groove";
            default:
              return "solid";
          }
        }
        static borderPositionToCSS(c) {
          switch (c) {
            case t.BorderPosition.center:
              return "center";
            case t.BorderPosition.inside:
              return "inside";
            case t.BorderPosition.outside:
            default:
              return "outside";
          }
        }
        static unitToCSS(c) {
          switch (c) {
            case t.Unit.percent:
              return "%";
            case t.Unit.pixels:
              return "px";
            case t.Unit.rem:
              return "rem";
            case t.Unit.raw:
              return "";
            case t.Unit.ms:
              return "ms";
            default:
              return "px";
          }
        }
        static textCaseToCSS(c) {
          switch (c) {
            case t.TextCase.original:
              return "none";
            case t.TextCase.upper:
              return "uppercase";
            case t.TextCase.lower:
              return "lowercase";
            case t.TextCase.camel:
            case t.TextCase.smallCaps:
              return "capitalize";
          }
        }
        static textDecorationToCSS(c) {
          switch (c) {
            case t.TextDecoration.original:
              return "none";
            case t.TextDecoration.underline:
              return "underline";
            case t.TextDecoration.strikethrough:
              return "line-through";
          }
        }
      };
    }, 952: (r, o, e) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ColorHelper = void 0;
      const t = e(989), l = e(761);
      class d {
        static formattedColorOrVariableName(i, a, u) {
          let y, m, g;
          const S = (0, l.sureOptionalReference)(i.referencedTokenId, a, u.allowReferences);
          if (S) y = u.tokenToVariableRef(S);
          else {
            const v = (0, l.sureOptionalReference)(i.color.referencedTokenId, a, u.allowReferences);
            v && (m = u.tokenToVariableRef(v));
            const h = (0, l.sureOptionalReference)(i.opacity.referencedTokenId, a, u.allowReferences);
            h && (g = u.tokenToVariableRef(h));
          }
          if (y) return y;
          if (!y && !m && !g) return this.formattedColor(i, u.colorFormat, u.decimals);
          switch (u.colorFormat) {
            case t.ColorFormat.rgb:
            case t.ColorFormat.rgba:
            case t.ColorFormat.smartRgba:
              return this.colorToRgb(u.colorFormat, this.normalizedIntColor(i), i.opacity.measure, u.decimals, m, g);
            default:
              return this.formattedColor(i, u.colorFormat, u.decimals);
          }
        }
        static formattedColor(i, a, u = 3) {
          switch (a) {
            case t.ColorFormat.hex6:
            case t.ColorFormat.hex8:
            case t.ColorFormat.hashHex6:
            case t.ColorFormat.hashHex8:
            case t.ColorFormat.smartHex:
            case t.ColorFormat.smartHashHex:
              return this.colorToHex(a, this.normalizedIntColor(i), i.opacity.measure);
            case t.ColorFormat.rgb:
            case t.ColorFormat.rgba:
            case t.ColorFormat.smartRgba:
              return this.colorToRgb(a, this.normalizedIntColor(i), i.opacity.measure, u, null, null);
            case t.ColorFormat.hsl:
            case t.ColorFormat.hsla:
            case t.ColorFormat.smartHsla:
              return this.colorToHsl(a, this.normalizedFractionalColor(i), i.opacity.measure, u);
            case t.ColorFormat.smartUIColor:
              return this.colorToUIColor(this.normalizedIntColor(i), i.opacity.measure, u);
          }
        }
        static colorToRgb(i, a, u, y, m, g) {
          let S;
          return S = i === t.ColorFormat.rgba || i === t.ColorFormat.smartRgba && u < 1 ? `rgba(${m || `${a.r}, ${a.g}, ${a.b}`}, ${g || this.roundToDecimals(u, y)})` : `rgb(${m || `${a.r}, ${a.g}, ${a.b}`})`, S;
        }
        static colorToHex(i, a, u) {
          let y = `${this.pHex(a.r)}${this.pHex(a.g)}${this.pHex(a.b)}`;
          return (i === t.ColorFormat.hex8 || i === t.ColorFormat.hashHex8 || i === t.ColorFormat.smartHex && u < 1 || i === t.ColorFormat.smartHashHex && u < 1) && (y += `${this.pHex(Math.round(255 * u))}`), i !== t.ColorFormat.hashHex6 && i !== t.ColorFormat.hashHex8 && i !== t.ColorFormat.smartHashHex || (y = `#${y}`), y;
        }
        static colorToHsl(i, a, u, y) {
          const m = Math.max(a.r, a.g, a.b), g = Math.min(a.r, a.g, a.b);
          let S, v, h, O = (m + g) / 2;
          if (m === g) S = v = 0;
          else {
            const _ = m - g;
            v = O > 0.5 ? _ / (2 - m - g) : _ / (m + g), m === a.r ? S = (a.g - a.b) / _ + (a.g < a.b ? 6 : 0) : m === a.g ? S = (a.b - a.r) / _ + 2 : m === a.b && (S = (a.r - a.g) / _ + 4), S /= 6;
          }
          return h = i === t.ColorFormat.hsla || i === t.ColorFormat.smartHsla && u < 1 ? `hsla(${Math.round(360 * S)}%, ${Math.round(100 * v)}%, ${Math.round(100 * O)}%, ${this.roundToDecimals(u, y)})` : `hsl(${Math.round(360 * S)}%, ${Math.round(100 * v)}%, ${Math.round(100 * O)}%)`, h;
        }
        static colorToUIColor(i, a, u = 3) {
          let y = `UIColor(rgb: 0x${this.pHex(i.r)}${this.pHex(i.g)}${this.pHex(i.b)})`;
          return a < 1 && (y += `.withAlphaComponent(${a})`), y;
        }
        static normalizedIntColor(i) {
          return { r: Math.round(i.color.r), g: Math.round(i.color.g), b: Math.round(i.color.b) };
        }
        static normalizedFractionalColor(i, a = 3) {
          return { r: this.roundToDecimals(i.color.r / 255, a), g: d.roundToDecimals(i.color.g / 255, a), b: d.roundToDecimals(i.color.b / 255, a) };
        }
        static roundToDecimals(i, a) {
          const u = Math.pow(10, a), y = Math.round(i * u) / u;
          return parseFloat(y.toFixed(a));
        }
        static pHex(i) {
          return i.toString(16).padStart(2, "0");
        }
      }
      o.ColorHelper = d;
    }, 453: (r, o, e) => {
      Object.defineProperty(o, "__esModule", { value: !0 }), o.NamingHelper = void 0;
      const t = e(110), l = e(545);
      class d {
        static codeSafeVariableNameForToken(i, a, u, y) {
          let m = [];
          return u && (m = [...u.path], u.isRoot || m.push(u.name)), m.push(i.name), y && y.length > 0 && m.unshift(y), d.codeSafeVariableName(m, a);
        }
        static codeSafeVariableName(i, a) {
          let u = typeof i == "string" ? i : i.join(" ");
          switch (u = u.replaceAll(/[^a-zA-Z0-9_-]/g, "_"), a) {
            case l.StringCase.camelCase:
              u = (0, t.camelCase)(u);
              break;
            case l.StringCase.capitalCase:
              u = (0, t.capitalCase)(u);
              break;
            case l.StringCase.constantCase:
              u = (0, t.constantCase)(u);
              break;
            case l.StringCase.dotCase:
              u = (0, t.dotCase)(u);
              break;
            case l.StringCase.headerCase:
              u = (0, t.headerCase)(u);
              break;
            case l.StringCase.noCase:
              u = (0, t.noCase)(u);
              break;
            case l.StringCase.paramCase:
              u = (0, t.paramCase)(u);
              break;
            case l.StringCase.pascalCase:
              u = (0, t.pascalCase)(u);
              break;
            case l.StringCase.pathCase:
              u = (0, t.pathCase)(u);
              break;
            case l.StringCase.sentenceCase:
              u = (0, t.sentenceCase)(u);
              break;
            case l.StringCase.snakeCase:
              u = (0, t.snakeCase)(u);
          }
          return a !== l.StringCase.snakeCase && a !== l.StringCase.constantCase && (u = u.replaceAll("_", "")), u.match(/^[^a-zA-Z]/) && (u = "_" + u), u;
        }
        static nameAsCSSVarReference(i) {
          return `var(--${i})`;
        }
        static nameAsCSSVarDeclaration(i) {
          return `--${i}`;
        }
      }
      o.NamingHelper = d;
    }, 58: (r) => {
      r.exports = Be();
    }, 110: (r) => {
      r.exports = Ge;
    } }, T = {};
    function n(r) {
      var o = T[r];
      if (o !== void 0) return o.exports;
      var e = T[r] = { exports: {} };
      return s[r](e, e.exports, n), e.exports;
    }
    var f = {};
    (() => {
      var r = f;
      Object.defineProperty(r, "__esModule", { value: !0 }), r.ColorFormat = r.StringCase = r.Iterators = r.CSSHelper = r.FileHelper = r.ColorHelper = r.NamingHelper = r.NetworkHelper = void 0;
      var o = n(118);
      Object.defineProperty(r, "NetworkHelper", { enumerable: !0, get: function() {
        return o.NetworkHelper;
      } });
      var e = n(453);
      Object.defineProperty(r, "NamingHelper", { enumerable: !0, get: function() {
        return e.NamingHelper;
      } });
      var t = n(952);
      Object.defineProperty(r, "ColorHelper", { enumerable: !0, get: function() {
        return t.ColorHelper;
      } });
      var l = n(617);
      Object.defineProperty(r, "FileHelper", { enumerable: !0, get: function() {
        return l.FileHelper;
      } });
      var d = n(771);
      Object.defineProperty(r, "CSSHelper", { enumerable: !0, get: function() {
        return d.CSSHelper;
      } });
      var c = n(639);
      Object.defineProperty(r, "Iterators", { enumerable: !0, get: function() {
        return c.Iterators;
      } });
      var i = n(545);
      Object.defineProperty(r, "StringCase", { enumerable: !0, get: function() {
        return i.StringCase;
      } });
      var a = n(989);
      Object.defineProperty(r, "ColorFormat", { enumerable: !0, get: function() {
        return a.ColorFormat;
      } });
    })();
    var b = p;
    for (var P in f) b[P] = f[P];
    f.__esModule && Object.defineProperty(b, "__esModule", { value: !0 });
  })();
})(D);
var Ie = {};
(function(p) {
  (() => {
    var s = { 9932: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.docsImageRefToUrl = o.DocsImageRefType = void 0, function(t) {
        t.resource = "Resource", t.figmaNode = "FigmaNode";
      }(e || (o.DocsImageRefType = e = {})), o.docsImageRefToUrl = function(t, l, d) {
        var c;
        if (t) switch (t.type) {
          case e.resource:
            return (c = t.resource) === null || c === void 0 ? void 0 : c.url;
          case e.figmaNode:
            return !t.figmaNode || !t.figmaNode.sourceId || !t.figmaNode.frameReferenceId ? void 0 : l.resources.getFigmaFrameHostedUrl({ designSystemId: d.dsId, versionId: d.versionId }, t.figmaNode.frameReferenceId);
          default:
            return;
        }
      };
    }, 5673: (r, o) => {
      var e;
      function t(l) {
        switch (l.type) {
          case e.documentationItem:
            return `@page:${l.documentationItemId}`;
          case e.pageHeading:
            return `@page:${l.documentationItemId}#${l.pageHeadingId}`;
          case e.url:
            return l.url;
          default:
            return;
        }
      }
      Object.defineProperty(o, "__esModule", { value: !0 }), o.linkAttributeToDocsLink = o.docsLinkToLinkAttributes = o.docsLinkToUrl = o.DocsLinkRefType = void 0, function(l) {
        l.documentationItem = "DocumentationItem", l.pageHeading = "PageHeading", l.url = "Url";
      }(e || (o.DocsLinkRefType = e = {})), o.docsLinkToUrl = t, o.docsLinkToLinkAttributes = function(l) {
        const d = t(l);
        if (d) return { href: d, target: l.openInNewTab ? "_blank" : "_self" };
      }, o.linkAttributeToDocsLink = function(l, d) {
        if (!l) return;
        const c = d === "_blank";
        if (l.startsWith("@page:")) {
          if (l.includes("#")) {
            const [i, a] = l.replace("@page:", "").split("#");
            return { type: e.pageHeading, documentationItemId: i, pageHeadingId: a, openInNewTab: c };
          }
          return { type: e.documentationItem, documentationItemId: l.replace("@page:", ""), openInNewTab: c };
        }
        return { type: e.url, url: l, openInNewTab: c };
      };
    }, 2657: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockShortcut = o.DocumentationLegacyPageBlockShortcutType = void 0, function(t) {
        t.external = "External", t.internal = "Internal";
      }(e || (o.DocumentationLegacyPageBlockShortcutType = e = {})), o.DocumentationLegacyPageBlockShortcut = class {
        constructor(t) {
          var l;
          t.url ? this.type = e.external : this.type = e.internal, this.title = this.shortcutTitleFromModel(t, this.type), this.description = this.shortcutDescriptionFromModel(t, this.type), this.previewUrl = this.shortcutPreviewUrlFromModel(t), this.type === e.internal && (!((l = t.documentationItemPreview) === null || l === void 0) && l.valid) && t.documentationItemId ? this.internalId = t.documentationItemId : (this.internalId = null, this.type === e.external && t.url ? this.externalUrl = t.url : this.externalUrl = null);
        }
        shortcutTitleFromModel(t, l) {
          var d, c, i, a, u;
          let y = null;
          return t.title && t.title.trim().length > 0 ? y = t.title : l === e.internal ? y = (c = (d = t.documentationItemPreview) === null || d === void 0 ? void 0 : d.title) !== null && c !== void 0 ? c : null : l === e.external && (y = (u = (a = (i = t.urlPreview) === null || i === void 0 ? void 0 : i.title) !== null && a !== void 0 ? a : t.url) !== null && u !== void 0 ? u : null), y && y.trim().length !== 0 ? y : null;
        }
        shortcutDescriptionFromModel(t, l) {
          var d;
          let c = null;
          return t.description && t.description.trim().length > 0 ? c = t.description : l === e.external && (c = (d = t.urlPreview) === null || d === void 0 ? void 0 : d.description), c && c.trim().length !== 0 ? c : null;
        }
        shortcutPreviewUrlFromModel(t) {
          var l, d, c, i, a;
          return (a = (c = (l = t.assetUrl) !== null && l !== void 0 ? l : (d = t.asset) === null || d === void 0 ? void 0 : d.url) !== null && c !== void 0 ? c : (i = t.urlPreview) === null || i === void 0 ? void 0 : i.thumbnailUrl) !== null && a !== void 0 ? a : null;
        }
      };
    }, 7476: (r, o) => {
      var e, t;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.TextAlignment = o.Alignment = void 0, function(l) {
        l.left = "Left", l.center = "Center", l.stretch = "Stretch";
      }(e || (o.Alignment = e = {})), function(l) {
        l.left = "Left", l.center = "Center", l.right = "Right";
      }(t || (o.TextAlignment = t = {}));
    }, 8738: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetFormat = void 0, function(t) {
        t.png = "png", t.pdf = "pdf", t.svg = "svg";
      }(e || (o.AssetFormat = e = {}));
    }, 915: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetScale = void 0, function(t) {
        t.x1 = "x1", t.x2 = "x2", t.x3 = "x3", t.x4 = "x4";
      }(e || (o.AssetScale = e = {}));
    }, 899: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.AssetScaleType = void 0, function(t) {
        t.aspectFill = "AspectFill", t.aspectFit = "AspectFit";
      }(e || (o.AssetScaleType = e = {}));
    }, 6192: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.BlurType = void 0, function(t) {
        t.layer = "Layer", t.background = "Background";
      }(e || (o.BlurType = e = {}));
    }, 1160: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ALL_BORDER_POSITIONS = o.BorderPosition = void 0, function(t) {
        t.inside = "Inside", t.center = "Center", t.outside = "Outside";
      }(e || (o.BorderPosition = e = {})), o.ALL_BORDER_POSITIONS = [e.inside, e.center, e.outside];
    }, 4546: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ALL_BORDER_STYLES = o.BorderStyle = void 0, function(t) {
        t.dashed = "Dashed", t.dotted = "Dotted", t.solid = "Solid", t.groove = "Groove";
      }(e || (o.BorderStyle = e = {})), o.ALL_BORDER_STYLES = [e.dashed, e.dotted, e.solid, e.groove];
    }, 8042: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ImportWarningType = void 0, function(t) {
        t.UnsupportedFill = "UnsupportedFill", t.UnsupportedStroke = "UnsupportedStroke", t.UnsupportedEffect = "UnsupportedEffect", t.StyleNotApplied = "StyleNotApplied", t.NoPublishedStyles = "NoPublishedStyles", t.NoPublishedComponents = "NoPublishedComponents", t.NoPublishedAssets = "NoPublishedAssets", t.NoVersionFound = "NoVersionFound", t.ComponentHasNoThumbnail = "ComponentHasNoThumbnail", t.DuplicateImportedStyleId = "DuplicateImportedStyleId", t.DuplicateImportedStylePath = "DuplicateImportedStylePath", t.NoPublishedElements = "NoPublishedElements", t.NoUnpublishedStyles = "NoUnpublishedStyles";
      }(e || (o.ImportWarningType = e = {}));
    }, 5695: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.CustomDomainErrorCode = void 0, function(t) {
        t.generalError = "GeneralError", t.dnsNotConfigured = "DNSNotConfigured", t.maintenance = "Maintenance";
      }(e || (o.CustomDomainErrorCode = e = {}));
    }, 7737: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.CustomDomainState = void 0, function(t) {
        t.initial = "Initial", t.domainSetupInProgress = "DomainSetupInProgress", t.domainSetupFailed = "DomainSetupFailed", t.domainSetupsSucces = "DomainSetupSuccess", t.sslSetupInProgress = "SSLSetupInProgress", t.sslSetupFailed = "SSLSetupFailed", t.sslSetupSuccess = "SSLSetupSuccess";
      }(e || (o.CustomDomainState = e = {}));
    }, 5651: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockBehaviorDataType = void 0, function(t) {
        t.item = "Item", t.token = "Token", t.asset = "Asset", t.component = "Component", t.figmaNode = "FigmaNode", t.figmaComponent = "FigmaComponent";
      }(e || (o.DocsBlockBehaviorDataType = e = {}));
    }, 3733: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockBehaviorSelectionType = void 0, function(t) {
        t.entity = "Entity", t.group = "Group", t.entityAndGroup = "EntityAndGroup";
      }(e || (o.DocsBlockBehaviorSelectionType = e = {}));
    }, 8890: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockImagePropertyAspectRatio = void 0, function(t) {
        t.auto = "Auto", t.square = "Square", t.landscape = "Landscape", t.portrait = "Portrait", t.wide = "Wide";
      }(e || (o.DocsBlockImagePropertyAspectRatio = e = {}));
    }, 9377: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemEntityType = void 0, function(t) {
        t.token = "Token", t.tokenGroup = "TokenGroup", t.asset = "Asset", t.assetGroup = "AssetGroup", t.component = "Component", t.componentGroup = "ComponentGroup";
      }(e || (o.DocsBlockItemEntityType = e = {}));
    }, 5883: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyOptionRenderingStyle = void 0, function(t) {
        t.segmentedControl = "SegmentedControl", t.toggleButton = "ToggleButton", t.select = "Select", t.checkbox = "Checkbox";
      }(e || (o.DocsBlockItemPropertyOptionRenderingStyle = e = {}));
    }, 8061: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyRichTextStyle = void 0, function(t) {
        t.title1 = "Title1", t.title2 = "Title2", t.title3 = "Title3", t.title4 = "Title4", t.title5 = "Title5", t.quote = "Quote", t.callout = "Callout", t.ol = "OL", t.ul = "UL";
      }(e || (o.DocsBlockItemPropertyRichTextStyle = e = {}));
    }, 7479: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyTextStyle = void 0, function(t) {
        t.small = "Small", t.regular = "Regular", t.bold = "Bold";
      }(e || (o.DocsBlockItemPropertyTextStyle = e = {}));
    }, 6839: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemPropertyType = void 0, function(t) {
        t.richText = "RichText", t.multiRichText = "MultiRichText", t.text = "Text", t.boolean = "Boolean", t.number = "Number", t.singleSelect = "SingleSelect", t.multiSelect = "MultiSelect", t.image = "Image", t.token = "Token", t.tokenType = "TokenType", t.tokenProperty = "TokenProperty", t.component = "Component", t.componentProperty = "ComponentProperty", t.asset = "Asset", t.assetProperty = "AssetProperty", t.embedURL = "EmbedURL", t.url = "URL", t.markdown = "Markdown", t.code = "Code", t.codeSandbox = "CodeSandbox", t.table = "Table", t.divider = "Divider", t.storybook = "Storybook", t.color = "Color", t.figmaNode = "FigmaNode", t.figmaComponent = "FigmaComponent";
      }(e || (o.DocsBlockItemPropertyType = e = {}));
    }, 8095: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemVariantLayoutType = void 0, function(t) {
        t.column = "Column", t.row = "Row";
      }(e || (o.DocsBlockItemVariantLayoutType = e = {}));
    }, 7291: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockItemVariantLayoutWidth = void 0, function(t) {
        t.c1 = "1", t.c2 = "2", t.c3 = "3", t.c4 = "4", t.c5 = "5", t.c6 = "6", t.c7 = "7", t.c8 = "8", t.c9 = "9", t.c10 = "10", t.c11 = "11", t.c12 = "12";
      }(e || (o.DocsBlockItemVariantLayoutWidth = e = {}));
    }, 5963: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockOptionRenderingStyle = void 0, function(t) {
        t.segmentedControl = "SegmentedControl", t.toggleButton = "ToggleButton", t.select = "Select", t.checkbox = "Checkbox";
      }(e || (o.DocsBlockOptionRenderingStyle = e = {}));
    }, 6644: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockRichTextPropertyStyle = void 0, function(t) {
        t.title1 = "Title1", t.title2 = "Title2", t.title3 = "Title3", t.title4 = "Title4", t.title5 = "Title5", t.quote = "Quote", t.callout = "Callout", t.default = "Default";
      }(e || (o.DocsBlockRichTextPropertyStyle = e = {}));
    }, 306: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsBlockTextPropertyStyle = void 0, function(t) {
        t.title1 = "Title1", t.title2 = "Title2", t.title3 = "Title3", t.title4 = "Title4", t.title5 = "Title5", t.default = "Default", t.defaultBold = "DefaultBold", t.defaultSemibold = "DefaultSemibold", t.small = "Small", t.smallBold = "SmallBold", t.smallSemibold = "SmallSemibold", t.custom = "Custom";
      }(e || (o.DocsBlockTextPropertyStyle = e = {}));
    }, 4068: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsEntityGroupBehavior = void 0, function(t) {
        t.group = "Group", t.tabs = "Tabs";
      }(e || (o.DocsEntityGroupBehavior = e = {}));
    }, 1233: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsEntityType = void 0, function(t) {
        t.group = "Group", t.page = "Page";
      }(e || (o.DocsEntityType = e = {}));
    }, 7971: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocsSectionType = void 0, function(t) {
        t.plain = "Plain", t.tabs = "Tabs";
      }(e || (o.DocsSectionType = e = {}));
    }, 5102: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyCalloutType = void 0, function(t) {
        t.info = "Info", t.success = "Success", t.warning = "Warning", t.error = "Error";
      }(e || (o.DocumentationLegacyCalloutType = e = {}));
    }, 2123: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyGroupBehavior = void 0, function(t) {
        t.group = "Group", t.tabs = "Tabs";
      }(e || (o.DocumentationLegacyGroupBehavior = e = {}));
    }, 9896: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyHeadingType = void 0, function(t) {
        t[t.h1 = 1] = "h1", t[t.h2 = 2] = "h2", t[t.h3 = 3] = "h3";
      }(e || (o.DocumentationLegacyHeadingType = e = {}));
    }, 7379: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyItemType = void 0, function(t) {
        t.group = "Group", t.page = "Page";
      }(e || (o.DocumentationLegacyItemType = e = {}));
    }, 1423: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageAssetType = void 0, function(t) {
        t.image = "image", t.figmaFrame = "figmaFrame";
      }(e || (o.DocumentationLegacyPageAssetType = e = {}));
    }, 1601: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockThemeType = void 0, function(t) {
        t.override = "Override", t.comparison = "Comparison";
      }(e || (o.DocumentationLegacyPageBlockThemeType = e = {}));
    }, 1846: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DocumentationLegacyPageBlockType = void 0, function(t) {
        t.text = "Text", t.heading = "Heading", t.code = "Code", t.unorderedList = "UnorderedList", t.orderedList = "OrderedList", t.quote = "Quote", t.callout = "Callout", t.divider = "Divider", t.image = "Image", t.token = "Token", t.tokenList = "TokenList", t.tokenGroup = "TokenGroup", t.shortcuts = "Shortcuts", t.link = "Link", t.figmaEmbed = "FigmaEmbed", t.youtubeEmbed = "YoutubeEmbed", t.storybookEmbed = "StorybookEmbed", t.genericEmbed = "Embed", t.figmaFrames = "FigmaFrames", t.custom = "Custom", t.renderCode = "RenderCode", t.componentAssets = "ComponentAssets", t.column = "Column", t.columnItem = "ColumnItem", t.tabs = "Tabs", t.tabItem = "TabItem", t.table = "Table", t.tableCell = "TableCell", t.tableRow = "TableRow";
      }(e || (o.DocumentationLegacyPageBlockType = e = {}));
    }, 1255: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.FrameAlignment = void 0, function(t) {
        t.frameHeight = "FrameHeight", t.center = "Center";
      }(e || (o.FrameAlignment = e = {}));
    }, 3718: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.FrameLayout = void 0, function(t) {
        t.c8 = "C8", t.c7 = "C7", t.c6 = "C6", t.c5 = "C5", t.c4 = "C4", t.c3 = "C3", t.c2 = "C2", t.c1 = "C1", t.c175 = "C1_75";
      }(e || (o.FrameLayout = e = {}));
    }, 1: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.GradientType = void 0, function(t) {
        t.linear = "Linear", t.radial = "Radial", t.angular = "Angular";
      }(e || (o.GradientType = e = {}));
    }, 2674: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.RichTextSpanAttributeType = void 0, function(t) {
        t.bold = "Bold", t.italic = "Italic", t.link = "Link", t.strikethrough = "Strikethrough", t.code = "Code";
      }(e || (o.RichTextSpanAttributeType = e = {}));
    }, 9125: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.ShadowType = void 0, function(t) {
        t.drop = "Drop", t.inner = "Inner";
      }(e || (o.ShadowType = e = {}));
    }, 4652: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.SourceType = void 0, function(t) {
        t.figma = "Figma", t.tokenStudio = "TokenStudio", t.figmaVariablesPlugin = "FigmaVariablesPlugin";
      }(e || (o.SourceType = e = {}));
    }, 922: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.TextCase = void 0, function(t) {
        t.original = "Original", t.upper = "Upper", t.lower = "Lower", t.camel = "Camel", t.smallCaps = "SmallCaps";
      }(e || (o.TextCase = e = {}));
    }, 7040: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.TextDecoration = void 0, function(t) {
        t.original = "None", t.underline = "Underline", t.strikethrough = "Strikethrough";
      }(e || (o.TextDecoration = e = {}));
    }, 3788: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.DT_TOKEN_TYPES = o.tokenTypeIsReferencable = o.REFERENCABLE_TOKEN_TYPES = o.REPLACABLE_TOKEN_TYPES = o.tokenTypeIsNonPure = o.tokenTypeIsPure = o.PURE_TOKEN_TYPES = o.ALL_TOKEN_TYPES = o.MS_DIMENSION_TOKEN_TYPES = o.RAW_DIMENSION_TOKEN_TYPES = o.DIMENSION_TOKEN_TYPES = o.OPTION_TOKEN_TYPES = o.STRING_TOKEN_TYPES = o.TokenType = void 0, function(t) {
        t.color = "Color", t.typography = "Typography", t.shadow = "Shadow", t.border = "Border", t.gradient = "Gradient", t.blur = "Blur", t.radius = "BorderRadius", t.borderWidth = "BorderWidth", t.duration = "Duration", t.fontSize = "FontSize", t.dimension = "Dimension", t.letterSpacing = "LetterSpacing", t.lineHeight = "LineHeight", t.opacity = "Opacity", t.paragraphSpacing = "ParagraphSpacing", t.size = "Size", t.space = "Space", t.zIndex = "ZIndex", t.textDecoration = "TextDecoration", t.textCase = "TextCase", t.visibility = "Visibility", t.fontFamily = "FontFamily", t.fontWeight = "FontWeight", t.string = "String", t.productCopy = "ProductCopy";
      }(e || (o.TokenType = e = {})), o.STRING_TOKEN_TYPES = [e.string, e.productCopy, e.fontFamily, e.fontWeight], o.OPTION_TOKEN_TYPES = [e.textCase, e.textDecoration, e.visibility], o.DIMENSION_TOKEN_TYPES = [e.dimension, e.size, e.space, e.opacity, e.fontSize, e.lineHeight, e.letterSpacing, e.paragraphSpacing, e.borderWidth, e.radius, e.duration, e.zIndex], o.RAW_DIMENSION_TOKEN_TYPES = [e.opacity, e.zIndex], o.MS_DIMENSION_TOKEN_TYPES = [e.duration], o.ALL_TOKEN_TYPES = [...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES, e.color, e.gradient, e.border, e.radius, e.shadow, e.typography, e.blur], o.PURE_TOKEN_TYPES = [...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES], o.tokenTypeIsPure = (t) => o.PURE_TOKEN_TYPES.includes(t), o.tokenTypeIsNonPure = (t) => !(0, o.tokenTypeIsPure)(t), o.REPLACABLE_TOKEN_TYPES = [e.color, ...o.DIMENSION_TOKEN_TYPES, ...o.STRING_TOKEN_TYPES, ...o.OPTION_TOKEN_TYPES], o.REFERENCABLE_TOKEN_TYPES = [e.color, ...o.DIMENSION_TOKEN_TYPES, e.fontFamily, e.fontWeight, e.textCase, e.textDecoration], o.tokenTypeIsReferencable = (t) => o.REFERENCABLE_TOKEN_TYPES.includes(t), o.DT_TOKEN_TYPES = [e.color, e.shadow, e.gradient, e.typography, e.border, ...o.DIMENSION_TOKEN_TYPES, e.fontFamily, e.fontWeight, ...o.OPTION_TOKEN_TYPES];
    }, 8607: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.MS_UNITS = o.PX_UNITS = o.RAW_UNITS = o.LINE_HEIGHT_UNITS = o.SIZE_UNITS = o.Unit = void 0, function(t) {
        t.pixels = "Pixels", t.percent = "Percent", t.rem = "Rem", t.ms = "Ms", t.raw = "Raw";
      }(e || (o.Unit = e = {})), o.SIZE_UNITS = [e.pixels, e.percent, e.rem], o.LINE_HEIGHT_UNITS = [e.pixels, e.percent, e.rem, e.raw], o.RAW_UNITS = [e.raw], o.PX_UNITS = [e.pixels], o.MS_UNITS = [e.ms];
    }, 9478: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.UserRole = void 0, function(t) {
        t.owner = "Owner", t.admin = "Admin", t.creator = "Creator", t.billing = "Billing", t.viewer = "Viewer";
      }(e || (o.UserRole = e = {}));
    }, 6141: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.VisibilityType = void 0, function(t) {
        t.visible = "Visible", t.hidden = "Hidden";
      }(e || (o.VisibilityType = e = {}));
    }, 6298: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceNPMRegistryAuthType = void 0, function(t) {
        t.basic = "Basic", t.bearer = "Bearer";
      }(e || (o.WorkspaceNPMRegistryAuthType = e = {}));
    }, 7968: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceNPMRegistryType = void 0, function(t) {
        t.npmJS = "NPMJS", t.gitHub = "GitHub", t.azureDevOps = "AzureDevOps", t.artifactory = "Artifactory", t.custom = "Custom";
      }(e || (o.WorkspaceNPMRegistryType = e = {}));
    }, 5503: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionPlanInterval = void 0, function(t) {
        t.yearly = "yearly", t.monthly = "monthly";
      }(e || (o.WorkspaceSubscriptionPlanInterval = e = {}));
    }, 4290: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionProductCode = void 0, function(t) {
        t.free = "free", t.team = "team", t.teamTest = "team_test", t.company = "company", t.enterprise = "enterprise";
      }(e || (o.WorkspaceSubscriptionProductCode = e = {}));
    }, 3607: (r, o) => {
      var e;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.WorkspaceSubscriptionStatus = void 0, function(t) {
        t.active = "active", t.gracePeriod = "gracePeriod", t.cancelled = "cancelled", t.suspended = "suspended";
      }(e || (o.WorkspaceSubscriptionStatus = e = {}));
    }, 2802: (r, o) => {
      var e, t;
      Object.defineProperty(o, "__esModule", { value: !0 }), o.PulsarExecutor = o.OutputFileType = void 0, function(l) {
        l.copyRemoteUrl = "copyRemoteUrl", l.text = "text", l.binary = "binary";
      }(e || (o.OutputFileType = e = {})), function(l) {
        l.supernova = "supernova", l.local = "local";
      }(t || (o.PulsarExecutor = t = {}));
    } }, T = {};
    function n(r) {
      var o = T[r];
      if (o !== void 0) return o.exports;
      var e = T[r] = { exports: {} };
      return s[r](e, e.exports, n), e.exports;
    }
    var f = {};
    (() => {
      var r = f;
      Object.defineProperty(r, "__esModule", { value: !0 }), r.UserRole = r.Unit = r.TokenType = r.TextDecoration = r.TextCase = r.ShadowType = r.RichTextSpanAttributeType = r.GradientType = r.FrameLayout = r.FrameAlignment = r.SourceType = r.DocsImageRefType = r.DocsLinkRefType = r.DocsSectionType = r.DocsEntityType = r.DocsEntityGroupBehavior = r.DocsBlockTextPropertyStyle = r.DocsBlockRichTextPropertyStyle = r.DocsBlockOptionRenderingStyle = r.DocsBlockItemVariantLayoutWidth = r.DocsBlockItemVariantLayoutType = r.DocsBlockItemPropertyType = r.DocsBlockItemPropertyTextStyle = r.DocsBlockItemPropertyRichTextStyle = r.DocsBlockItemPropertyOptionRenderingStyle = r.DocsBlockItemEntityType = r.DocsBlockImagePropertyAspectRatio = r.DocsBlockBehaviorSelectionType = r.DocsBlockBehaviorDataType = r.DocumentationLegacyPageBlockShortcutType = r.DocumentationLegacyPageBlockThemeType = r.DocumentationLegacyPageBlockType = r.DocumentationLegacyPageAssetType = r.DocumentationLegacyItemType = r.DocumentationLegacyHeadingType = r.DocumentationLegacyGroupBehavior = r.DocumentationLegacyCalloutType = r.BorderStyle = r.BorderPosition = r.BlurType = r.AssetScaleType = r.AssetScale = r.AssetFormat = r.Alignment = r.ALL_TOKEN_TYPES = r.ALL_BORDER_STYLES = r.ALL_BORDER_POSITIONS = r.OPTION_TOKEN_TYPES = r.STRING_TOKEN_TYPES = r.DIMENSION_TOKEN_TYPES = void 0, r.PulsarExecutor = r.OutputFileType = r.CustomDomainState = r.CustomDomainErrorCode = r.ImportWarningType = r.WorkspaceNPMRegistryType = r.WorkspaceNPMRegistryAuthType = r.WorkspaceSubscriptionStatus = r.WorkspaceSubscriptionProductCode = r.WorkspaceSubscriptionPlanInterval = r.VisibilityType = void 0;
      var o = n(3788);
      Object.defineProperty(r, "DIMENSION_TOKEN_TYPES", { enumerable: !0, get: function() {
        return o.DIMENSION_TOKEN_TYPES;
      } }), Object.defineProperty(r, "STRING_TOKEN_TYPES", { enumerable: !0, get: function() {
        return o.STRING_TOKEN_TYPES;
      } }), Object.defineProperty(r, "OPTION_TOKEN_TYPES", { enumerable: !0, get: function() {
        return o.OPTION_TOKEN_TYPES;
      } });
      var e = n(1160);
      Object.defineProperty(r, "ALL_BORDER_POSITIONS", { enumerable: !0, get: function() {
        return e.ALL_BORDER_POSITIONS;
      } });
      var t = n(4546);
      Object.defineProperty(r, "ALL_BORDER_STYLES", { enumerable: !0, get: function() {
        return t.ALL_BORDER_STYLES;
      } });
      var l = n(3788);
      Object.defineProperty(r, "ALL_TOKEN_TYPES", { enumerable: !0, get: function() {
        return l.ALL_TOKEN_TYPES;
      } });
      var d = n(7476);
      Object.defineProperty(r, "Alignment", { enumerable: !0, get: function() {
        return d.Alignment;
      } });
      var c = n(8738);
      Object.defineProperty(r, "AssetFormat", { enumerable: !0, get: function() {
        return c.AssetFormat;
      } });
      var i = n(915);
      Object.defineProperty(r, "AssetScale", { enumerable: !0, get: function() {
        return i.AssetScale;
      } });
      var a = n(899);
      Object.defineProperty(r, "AssetScaleType", { enumerable: !0, get: function() {
        return a.AssetScaleType;
      } });
      var u = n(6192);
      Object.defineProperty(r, "BlurType", { enumerable: !0, get: function() {
        return u.BlurType;
      } });
      var y = n(1160);
      Object.defineProperty(r, "BorderPosition", { enumerable: !0, get: function() {
        return y.BorderPosition;
      } });
      var m = n(4546);
      Object.defineProperty(r, "BorderStyle", { enumerable: !0, get: function() {
        return m.BorderStyle;
      } });
      var g = n(5102);
      Object.defineProperty(r, "DocumentationLegacyCalloutType", { enumerable: !0, get: function() {
        return g.DocumentationLegacyCalloutType;
      } });
      var S = n(2123);
      Object.defineProperty(r, "DocumentationLegacyGroupBehavior", { enumerable: !0, get: function() {
        return S.DocumentationLegacyGroupBehavior;
      } });
      var v = n(9896);
      Object.defineProperty(r, "DocumentationLegacyHeadingType", { enumerable: !0, get: function() {
        return v.DocumentationLegacyHeadingType;
      } });
      var h = n(7379);
      Object.defineProperty(r, "DocumentationLegacyItemType", { enumerable: !0, get: function() {
        return h.DocumentationLegacyItemType;
      } });
      var O = n(1423);
      Object.defineProperty(r, "DocumentationLegacyPageAssetType", { enumerable: !0, get: function() {
        return O.DocumentationLegacyPageAssetType;
      } });
      var _ = n(1846);
      Object.defineProperty(r, "DocumentationLegacyPageBlockType", { enumerable: !0, get: function() {
        return _.DocumentationLegacyPageBlockType;
      } });
      var B = n(1601);
      Object.defineProperty(r, "DocumentationLegacyPageBlockThemeType", { enumerable: !0, get: function() {
        return B.DocumentationLegacyPageBlockThemeType;
      } });
      var N = n(2657);
      Object.defineProperty(r, "DocumentationLegacyPageBlockShortcutType", { enumerable: !0, get: function() {
        return N.DocumentationLegacyPageBlockShortcutType;
      } });
      var R = n(5651);
      Object.defineProperty(r, "DocsBlockBehaviorDataType", { enumerable: !0, get: function() {
        return R.DocsBlockBehaviorDataType;
      } });
      var L = n(3733);
      Object.defineProperty(r, "DocsBlockBehaviorSelectionType", { enumerable: !0, get: function() {
        return L.DocsBlockBehaviorSelectionType;
      } });
      var x = n(8890);
      Object.defineProperty(r, "DocsBlockImagePropertyAspectRatio", { enumerable: !0, get: function() {
        return x.DocsBlockImagePropertyAspectRatio;
      } });
      var j = n(9377);
      Object.defineProperty(r, "DocsBlockItemEntityType", { enumerable: !0, get: function() {
        return j.DocsBlockItemEntityType;
      } });
      var M = n(5883);
      Object.defineProperty(r, "DocsBlockItemPropertyOptionRenderingStyle", { enumerable: !0, get: function() {
        return M.DocsBlockItemPropertyOptionRenderingStyle;
      } });
      var A = n(8061);
      Object.defineProperty(r, "DocsBlockItemPropertyRichTextStyle", { enumerable: !0, get: function() {
        return A.DocsBlockItemPropertyRichTextStyle;
      } });
      var F = n(7479);
      Object.defineProperty(r, "DocsBlockItemPropertyTextStyle", { enumerable: !0, get: function() {
        return F.DocsBlockItemPropertyTextStyle;
      } });
      var w = n(6839);
      Object.defineProperty(r, "DocsBlockItemPropertyType", { enumerable: !0, get: function() {
        return w.DocsBlockItemPropertyType;
      } });
      var H = n(8095);
      Object.defineProperty(r, "DocsBlockItemVariantLayoutType", { enumerable: !0, get: function() {
        return H.DocsBlockItemVariantLayoutType;
      } });
      var U = n(7291);
      Object.defineProperty(r, "DocsBlockItemVariantLayoutWidth", { enumerable: !0, get: function() {
        return U.DocsBlockItemVariantLayoutWidth;
      } });
      var W = n(5963);
      Object.defineProperty(r, "DocsBlockOptionRenderingStyle", { enumerable: !0, get: function() {
        return W.DocsBlockOptionRenderingStyle;
      } });
      var Y = n(6644);
      Object.defineProperty(r, "DocsBlockRichTextPropertyStyle", { enumerable: !0, get: function() {
        return Y.DocsBlockRichTextPropertyStyle;
      } });
      var G = n(306);
      Object.defineProperty(r, "DocsBlockTextPropertyStyle", { enumerable: !0, get: function() {
        return G.DocsBlockTextPropertyStyle;
      } });
      var V = n(4068);
      Object.defineProperty(r, "DocsEntityGroupBehavior", { enumerable: !0, get: function() {
        return V.DocsEntityGroupBehavior;
      } });
      var K = n(1233);
      Object.defineProperty(r, "DocsEntityType", { enumerable: !0, get: function() {
        return K.DocsEntityType;
      } });
      var $ = n(7971);
      Object.defineProperty(r, "DocsSectionType", { enumerable: !0, get: function() {
        return $.DocsSectionType;
      } });
      var z = n(5673);
      Object.defineProperty(r, "DocsLinkRefType", { enumerable: !0, get: function() {
        return z.DocsLinkRefType;
      } });
      var q = n(9932);
      Object.defineProperty(r, "DocsImageRefType", { enumerable: !0, get: function() {
        return q.DocsImageRefType;
      } });
      var Z = n(4652);
      Object.defineProperty(r, "SourceType", { enumerable: !0, get: function() {
        return Z.SourceType;
      } });
      var J = n(1255);
      Object.defineProperty(r, "FrameAlignment", { enumerable: !0, get: function() {
        return J.FrameAlignment;
      } });
      var Q = n(3718);
      Object.defineProperty(r, "FrameLayout", { enumerable: !0, get: function() {
        return Q.FrameLayout;
      } });
      var X = n(1);
      Object.defineProperty(r, "GradientType", { enumerable: !0, get: function() {
        return X.GradientType;
      } });
      var ee = n(2674);
      Object.defineProperty(r, "RichTextSpanAttributeType", { enumerable: !0, get: function() {
        return ee.RichTextSpanAttributeType;
      } });
      var oe = n(9125);
      Object.defineProperty(r, "ShadowType", { enumerable: !0, get: function() {
        return oe.ShadowType;
      } });
      var te = n(922);
      Object.defineProperty(r, "TextCase", { enumerable: !0, get: function() {
        return te.TextCase;
      } });
      var re = n(7040);
      Object.defineProperty(r, "TextDecoration", { enumerable: !0, get: function() {
        return re.TextDecoration;
      } });
      var ne = n(3788);
      Object.defineProperty(r, "TokenType", { enumerable: !0, get: function() {
        return ne.TokenType;
      } });
      var ae = n(8607);
      Object.defineProperty(r, "Unit", { enumerable: !0, get: function() {
        return ae.Unit;
      } });
      var ie = n(9478);
      Object.defineProperty(r, "UserRole", { enumerable: !0, get: function() {
        return ie.UserRole;
      } });
      var ce = n(6141);
      Object.defineProperty(r, "VisibilityType", { enumerable: !0, get: function() {
        return ce.VisibilityType;
      } });
      var le = n(5503);
      Object.defineProperty(r, "WorkspaceSubscriptionPlanInterval", { enumerable: !0, get: function() {
        return le.WorkspaceSubscriptionPlanInterval;
      } });
      var ue = n(4290);
      Object.defineProperty(r, "WorkspaceSubscriptionProductCode", { enumerable: !0, get: function() {
        return ue.WorkspaceSubscriptionProductCode;
      } });
      var se = n(3607);
      Object.defineProperty(r, "WorkspaceSubscriptionStatus", { enumerable: !0, get: function() {
        return se.WorkspaceSubscriptionStatus;
      } });
      var pe = n(6298);
      Object.defineProperty(r, "WorkspaceNPMRegistryAuthType", { enumerable: !0, get: function() {
        return pe.WorkspaceNPMRegistryAuthType;
      } });
      var de = n(7968);
      Object.defineProperty(r, "WorkspaceNPMRegistryType", { enumerable: !0, get: function() {
        return de.WorkspaceNPMRegistryType;
      } });
      var ye = n(8042);
      Object.defineProperty(r, "ImportWarningType", { enumerable: !0, get: function() {
        return ye.ImportWarningType;
      } });
      var Te = n(5695);
      Object.defineProperty(r, "CustomDomainErrorCode", { enumerable: !0, get: function() {
        return Te.CustomDomainErrorCode;
      } });
      var me = n(7737);
      Object.defineProperty(r, "CustomDomainState", { enumerable: !0, get: function() {
        return me.CustomDomainState;
      } });
      var I = n(2802);
      Object.defineProperty(r, "OutputFileType", { enumerable: !0, get: function() {
        return I.OutputFileType;
      } }), Object.defineProperty(r, "PulsarExecutor", { enumerable: !0, get: function() {
        return I.PulsarExecutor;
      } });
    })();
    var b = p;
    for (var P in f) b[P] = f[P];
    f.__esModule && Object.defineProperty(b, "__esModule", { value: !0 });
  })();
})(Ie);
function Ve(p, s, T) {
  const n = be(p, T), f = D.CSSHelper.colorTokenValueToCSS(p.value, s, {
    allowReferences: !0,
    decimals: 3,
    colorFormat: D.ColorFormat.smartHashHex,
    tokenToVariableRef: (b) => `var(--${be(b, T)})`
  });
  return `$${n}: ${f};`;
}
function be(p, s) {
  const T = s.find((n) => n.id === p.parentGroupId);
  return D.NamingHelper.codeSafeVariableNameForToken(p, D.StringCase.paramCase, T, "");
}
const Ke = (p) => p.sort((T, n) => T.name.localeCompare(n.name)).map((T) => T);
Pulsar.export(async (p, s) => {
  const T = {
    designSystemId: s.dsId,
    versionId: s.versionId
  };
  let n = await p.tokens.getTokens(T), f = await p.tokens.getTokenGroups(T);
  if (s.brandId && (n = n.filter((e) => e.brandId === s.brandId), f = f.filter((e) => e.brandId === s.brandId)), s.themeId) {
    const t = (await p.tokens.getTokenThemes(T)).find((l) => l.id === s.themeId);
    if (t)
      n = await p.tokens.computeTokensByApplyingThemes(n, [t]);
    else
      throw new Error("Unable to apply theme which doesn't exist in the system.");
  }
  const b = Ke(n), P = new Map(b.map((e) => [e.id, e]));
  let o = n.filter((e) => e.tokenType === Ie.TokenType.color).map((e) => Ve(e, P, f)).join(`
`);
  return $e.generateDisclaimer && (o = `/* This file was generated by Supernova, don't change by hand */
${o}`), [
    D.FileHelper.createTextFile({
      relativePath: "./",
      fileName: "_colors.scss",
      content: o
    }),
    D.FileHelper.createTextFile({
      relativePath: "./original-data/",
      fileName: "_colors.json",
      content: JSON.stringify(n, null, 2)
    })
  ];
});
const $e = Pulsar.exportConfig();
export {
  $e as exportConfiguration
};
