<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Psr\Log\LoggerInterface;
use SimpleXMLElement;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Extension\AbstractExtension;
use Twig\Source;
use Twig\TwigFunction;

class SvgExtension extends AbstractExtension
{
    private const ALLOW_EXTENSION = '.svg';
    private const ATTR_CLASS = 'class';
    private const ATTR_STYLE = 'style';
    private const ATTR_MAIN_PROPS = 'mainProps';
    private const ATTR_SIZE = 'size';
    private const ATTR_TITLE = 'title';
    private const ATTR_ID = 'id';
    private const ATTR_HEIGHT = 'height';
    private const ATTR_VIEWBOX = 'viewBox';
    private const ATTR_WIDTH = 'width';
    private const SIMPLE_XML_ROOT_DECLARATION = "<?xml version=\"1.0\"?>\n";
    private const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';

    /**
     * @var array<string,SimpleXMLElement|false>
     */
    private array $cacheIcon = [];

    /**
     * @var array<string,string>
     */
    private array $cacheReusableIconContent = [];

    public function __construct(private LoggerInterface $logger) {}

    public function getFunctions(): array
    {
        return [
            new TwigFunction('inlineSvg', [$this, 'getInlineSvg'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
        ];
    }

    private function replaceXmlDeclaration(SimpleXMLElement|false $svgElement): string
    {
        if ($svgElement instanceof SimpleXMLElement && $svgElement->asXML() !== false) {
            return str_replace(self::SIMPLE_XML_ROOT_DECLARATION, '', $svgElement->asXML());
        }

        return '';
    }

    /**
     * @param array<string, string|array<string>> $params
     */
    public function getInlineSvg(Environment $environment, string $path, array $params = [], bool $reUsage = true, bool $ignoreMissing = false, ?string $symbolName = ''): string
    {
        $loader = $environment->getLoader();
        $twigSource = null;
        $reusableSvg = null;

        $ext = mb_substr($path, -4);
        if ($ext !== self::ALLOW_EXTENSION) {
            $path .= self::ALLOW_EXTENSION;
        }

        try {
            $twigSource = $loader->getSourceContext($path);
        } catch (LoaderError $e) {
            if (!$ignoreMissing) {
                $this->logger->critical('Missing svg "{path}"', [
                    'path' => $path,
                ]);

                return '';
            }
        }

        $iconId = md5($path . serialize($params));

        if (array_key_exists($iconId, $this->cacheReusableIconContent)) {
            return $this->cacheReusableIconContent[$iconId];
        }

        if (!$reUsage) {
            $svgElement = $this->makeRegularSvg($twigSource, null, $params, $symbolName);

            return $this->replaceXmlDeclaration($svgElement);
        }

        if (!array_key_exists($iconId, $this->cacheIcon)) {
            $this->cacheIcon[$iconId] = $this->makeRegularSvg($twigSource, $iconId, $params, $symbolName);

            return $this->cacheIcon[$iconId] !== false ? $this->replaceXmlDeclaration($this->cacheIcon[$iconId]) : '';
        }

        if ($this->cacheIcon[$iconId]) {
            $reusableSvg = $this->makeReusableSVG($iconId, $this->cacheIcon[$iconId]);
        }

        assert($reusableSvg instanceof SimpleXMLElement);

        return $this->replaceXmlDeclaration($reusableSvg);
    }

    /**
     * @param array<string, string|array<string>> $params
     */
    private function makeRegularSvg(?Source $source, ?string $iconId, array $params = [], ?string $symbolName = ''): false|SimpleXMLElement
    {
        if (!$source instanceof Source) {
            return false;
        }

        $svgString = $source->getCode();
        $svg = @simplexml_load_string($svgString);

        if ($svg === false) {
            $this->logger->error('Error parsing SVG by simplexml_load_string from {class} in path "{path}"', [
                'class' => Source::class,
                'path' => $source->getPath(),
            ]);

            return false;
        }

        $this->applyAttributes($svg, $params, $iconId);

        if ($symbolName && $symbolName !== '') {
            $svgWithSymbol = new SimpleXMLElement('<svg xmlns="' . self::SVG_NAMESPACE . '"></svg>');
            $symbol = $svgWithSymbol->addChild('symbol');
            $symbol->addAttribute('id', $symbolName);

            if (isset($svg['viewBox'])) {
                $symbol->addAttribute('viewBox', (string) $svg['viewBox']);
            }

            foreach ($svg->children() as $child) {
                $this->simplexmlAppend($symbol, $child);
            }

            $svg = $svgWithSymbol;
        }

        return $svg;
    }

    /**
     * Utility function to append one SimpleXMLElement to another
     */
    private function simplexmlAppend(SimpleXMLElement $to, SimpleXMLElement $from): void
    {
        $toDom = dom_import_simplexml($to);
        $fromDom = dom_import_simplexml($from);

        if ($toDom->ownerDocument) {
            $toDom->appendChild($toDom->ownerDocument->importNode($fromDom, true));
        }
    }

    /**
     * @param array<string, string|array<string>> $params
     */
    private function applyAttributes(SimpleXMLElement $svg, array $params, ?string $iconId): void
    {
        $hasClasses = array_key_exists(self::ATTR_CLASS, $params);
        $hasStyles = array_key_exists(self::ATTR_STYLE, $params);
        $hasMainProps = array_key_exists(self::ATTR_MAIN_PROPS, $params);
        $hasSize = array_key_exists(self::ATTR_SIZE, $params);
        $hasTitle = array_key_exists(self::ATTR_TITLE, $params);

        if ($iconId !== null) {
            $this->replaceAttribute($svg, self::ATTR_ID, $iconId);
        }

        if ($hasClasses && is_string($params[self::ATTR_CLASS])) {
            $this->replaceAttribute($svg, self::ATTR_CLASS, $params[self::ATTR_CLASS]);
        }

        if ($hasStyles && is_string($params[self::ATTR_STYLE])) {
            $this->replaceAttribute($svg, self::ATTR_STYLE, $params[self::ATTR_STYLE]);
        }

        if ($hasSize && is_string($params[self::ATTR_SIZE]) && trim($params[self::ATTR_SIZE]) !== '') {
            $this->replaceAttribute($svg, 'width', $params[self::ATTR_SIZE]);
            $this->replaceAttribute($svg, 'height', $params[self::ATTR_SIZE]);
        }

        if ($hasMainProps && is_array($params[self::ATTR_MAIN_PROPS])) {
            foreach ($params[self::ATTR_MAIN_PROPS] as $propName => $propValue) {
                if (preg_match('/^(data|aria)-*/', $propName) > 0) {
                    if (trim($propValue) !== '') {
                        $this->replaceAttribute($svg, $propName, $propValue);
                    }
                }
            }
        }

        if ($hasTitle && is_string($params[self::ATTR_TITLE]) && trim($params[self::ATTR_TITLE]) !== '') {
            $svg->addChild(self::ATTR_TITLE, htmlspecialchars($params[self::ATTR_TITLE], ENT_QUOTES));
        }
    }

    private function makeReusableSVG(string $iconId, SimpleXMLElement $regularSvg): false|SimpleXMLElement
    {
        $attributes = $regularSvg->attributes();

        $reuseSvg = simplexml_load_string('<svg></svg>');

        if ($attributes !== null && $reuseSvg instanceof SimpleXMLElement) {
            foreach ($attributes as $key => $value) {
                if ($key === self::ATTR_ID) {
                    $reuseAttributes = $reuseSvg->attributes();
                    $viewBoxAttributeName = self::ATTR_VIEWBOX;
                    $heightAttributeName = self::ATTR_HEIGHT;
                    $widthAttributeName = self::ATTR_WIDTH;
                    $regularWidth = isset($regularSvg->attributes()->$widthAttributeName) ? (string) $regularSvg->attributes()->$widthAttributeName : null;
                    $regularHeight = isset($regularSvg->attributes()->$heightAttributeName) ? (string) $regularSvg->attributes()->$heightAttributeName : null;
                    $viewBoxAttributeValue = isset($regularSvg->attributes()->$viewBoxAttributeName) ? (string) $regularSvg->attributes()->$viewBoxAttributeName : null;

                    if ($regularWidth && $regularHeight) {
                        $viewBoxAttributeValue = sprintf(
                            '0 0 %s %s',
                            preg_replace('/[^0-9]/', '', $regularWidth),
                            preg_replace('/[^0-9]/', '', $regularHeight),
                        );
                    }

                    if ($viewBoxAttributeValue) {
                        if (isset($reuseAttributes->$viewBoxAttributeName)) {
                            $reuseAttributes->$viewBoxAttributeName = $viewBoxAttributeValue;
                        } else {
                            $reuseSvg->addAttribute($viewBoxAttributeName, $viewBoxAttributeValue);
                        }
                    }

                    $reuseSvgWithUseElement = $reuseSvg->addChild('use');

                    if ($reuseSvgWithUseElement instanceof SimpleXMLElement) {
                        $reuseSvgWithUseElement->addAttribute('href', '#' . $iconId);
                    }
                } elseif ($key !== self::ATTR_VIEWBOX) {
                    $reuseSvg->addAttribute((string) $key, (string) $value);
                }
            }
        }

        return $reuseSvg;
    }

    private function replaceAttribute(SimpleXMLElement $simpleXmlElement, string $attributeName, string $value): void
    {
        if (isset($simpleXmlElement->attributes()[$attributeName])) {
            // SimpleXMLElement does not accept string.
            // @see: https://github.com/phpstan/phpstan/issues/5766
            /* @phpstan-ignore-next-line */
            $simpleXmlElement->attributes()[$attributeName] = $value;
        } else {
            $simpleXmlElement->addAttribute($attributeName, $value);
        }
    }
}
