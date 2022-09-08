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

    private const ATTR = 'attr';

    private const ATTR_CLASS = 'class';

    private const ATTR_MAIN_PROPS = 'mainProps';

    private const ATTR_SIZE = 'size';

    private const ATTR_TITLE = 'title';

    private const ATTR_ID = 'id';

    /**
     * @var array<string,SimpleXMLElement|false>
     */
    private array $cacheIcon = [];

    /**
     * @var array<string,string>
     */
    private array $cacheReusableIconContent = [];

    private const SIMPLE_XML_ROOT_DECLARATION = "<?xml version=\"1.0\"?>\n";

    private LoggerInterface $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('inlineSvg', [$this, 'getInlineSvg'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @param SimpleXMLElement|false $svgElement
     */
    private function replaceXmlDeclaration($svgElement): string
    {
        if ($svgElement instanceof SimpleXMLElement && $svgElement->asXML() !== false) {
            return str_replace(self::SIMPLE_XML_ROOT_DECLARATION, '', $svgElement->asXML());
        }

        return '';
    }

    /**
     * @param array<string, string|array<string>> $params
     */
    public function getInlineSvg(Environment $environment, string $path, array $params = [], bool $reUsage = true, bool $ignoreMissing = false): string
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
            if (! $ignoreMissing) {
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

        if (! $reUsage) {
            $svgElement = $this->makeRegularSvg($twigSource, null, $params);

            return $this->replaceXmlDeclaration($svgElement);
        }

        if (! array_key_exists($iconId, $this->cacheIcon)) {
            $this->cacheIcon[$iconId] = $this->makeRegularSvg($twigSource, $iconId, $params);

            return $this->cacheIcon[$iconId] !== false ? $this->replaceXmlDeclaration($this->cacheIcon[$iconId]) : '';
        }

        if ($this->cacheIcon[$iconId]) {
            $reusableSvg = $this->makeReusableSVG($iconId, $this->cacheIcon[$iconId]);
        }

        assert($reusableSvg instanceof  SimpleXMLElement);

        return $this->replaceXmlDeclaration($reusableSvg);
    }

    /**
     * @param array<string, string|array<string>> $params
     * @return false | SimpleXMLElement
     */
    private function makeRegularSvg(?Source $source, ?string $iconId, array $params = [])
    {
        if (! $source instanceof Source) {
            return false;
        }

        $svgString = $source->getCode();

        $hasClasses = array_key_exists(self::ATTR_CLASS, $params);
        $hasMainProps = array_key_exists(self::ATTR_MAIN_PROPS, $params);
        $hasSize = array_key_exists(self::ATTR_SIZE, $params);
        $hasTitle = array_key_exists(self::ATTR_TITLE, $params);
        $hasAttributes = array_key_exists(self::ATTR, $params);

        $svg = @simplexml_load_string($svgString);

        if ($svg !== false) {
            if ($iconId !== null) {
                $this->replaceAttribute($svg, self::ATTR_ID, $iconId);
            }

            if ($hasClasses && is_string($params[self::ATTR_CLASS])) {
                $this->replaceAttribute($svg, self::ATTR_CLASS, $params[self::ATTR_CLASS]);
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

            if ($hasAttributes && is_array($params[self::ATTR])) {
                foreach ($params[self::ATTR] as $key => $value) {
                    $this->replaceAttribute($svg, $key, $value);
                }
            }
        } else {
            $this->logger->error('Error parse svg by simplexml_load_string from {class} in path "{path}"', [
                'class' => Source::class,
                'path' => $source->getPath(),
            ]);
        }

        return $svg;
    }

    /**
     * @return false|SimpleXMLElement
     */
    private function makeReusableSVG(string $iconId, SimpleXMLElement $regularSvg)
    {
        $attributes = $regularSvg->attributes();

        $reuseSvg = simplexml_load_string('<svg></svg>');

        if ($attributes !== null && $reuseSvg instanceof SimpleXMLElement) {
            foreach ($attributes as $key => $value) {
                if ($key !== self::ATTR_ID) {
                    $reuseSvg->addAttribute((string) $key, (string) $value);
                } else {
                    $reuseSvg->addChild('use')->addAttribute('href', '#' . $iconId);
                }
            }
        }

        return $reuseSvg;
    }

    private function replaceAttribute(SimpleXMLElement $simpleXmlElement, string $attributeName, string $value): void
    {
        if (isset($simpleXmlElement->attributes()[$attributeName])) {
            $simpleXmlElement->attributes()[$attributeName] = $value;
        } else {
            $simpleXmlElement->addAttribute($attributeName, $value);
        }
    }
}
