<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PropsExtension extends AbstractExtension
{
    private const BREAKPOINT_MOBILE = 'mobile';
    private const CLASS_SEPARATOR = '-';
    private const CLASS_NAMES_SEPARATOR = ' ';
    private const STYLE_SPACING_AUTO = 'auto';
    public const STYLE_SPACING_PROPS = [
        'margin' => 'm',
        'marginBottom' => 'mb',
        'marginLeft' => 'ml',
        'marginRight' => 'mr',
        'marginTop' => 'mt',
        'marginX' => 'mx',
        'marginY' => 'my',
    ];
    public const VALIDATION_ATTRIBUTES = [
        'min', 'max', 'minlength', 'maxlength', 'pattern',
    ];

    public function getFunctions(): array
    {
        return [
            new TwigFunction('mainProps', [$this, 'renderMainProps'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
            new TwigFunction('inputProps', [$this, 'renderInputProps'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
            new TwigFunction('classProp', [$this, 'renderClassProp'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
            new TwigFunction('styleProp', [$this, 'renderStyleProp'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
            new TwigFunction('useStyleProps', [$this, 'useStyleProps']),
        ];
    }

    /**
     * @param array<string, mixed> $props
     * @param array<string, mixed> $allowedAttributes
     */
    public function renderMainProps(Environment $environment, array $props = [], array $allowedAttributes = []): string
    {
        $transferringAttributes = [];
        if (is_array($props)) {
            foreach ($props as $propName => $propValue) {
                if (
                    // allow data and aria attributes
                    preg_match('/^(data|aria)-*/', $propName) > 0
                    // allow event handlers attributes
                    || preg_match('/^(on)-*/', $propName) > 0
                    // allow manually specified attributes
                    || in_array($propName, $allowedAttributes, true)
                ) {
                    if ($propValue !== null && $propValue !== '') {
                        $transferringAttributes[$propName] = $propValue;
                    }
                }
            }
        }

        return $environment->render('@partials/mainProps.twig', [
            'transferringAttributes' => $transferringAttributes,
            'id' => $props['id'] ?? null,
        ]);
    }

    /**
     * @param array<string, mixed> $props
     * @param array<string, mixed> $allowedAttributes
     * @param array<string, mixed> $inputProps
     */
    public function renderInputProps(Environment $environment, array $props, array $allowedAttributes = [], array $inputProps = []): string
    {
        $transferringAttributes = [];
        foreach ($props as $propName => $propValue) {
            if (in_array($propName, self::VALIDATION_ATTRIBUTES, true) || in_array($propName, $allowedAttributes, true)) {
                if ($propValue !== null && $propValue !== '') {
                    $transferringAttributes[$propName] = $propValue;
                }
            }
        }

        $transferringAttributes = array_merge($transferringAttributes, $inputProps);

        return $environment->render('@partials/inputProps.twig', [
            'transferringAttributes' => $transferringAttributes,
        ]);
    }

    /**
     * @param array<string, mixed> $classNames
     */
    public function renderClassProp(Environment $environment, array $classNames): string
    {
        $filteredClassNames = array_values(array_filter($classNames, fn($value) => $value !== null && $value !== ''));

        return $environment->render('@partials/classProp.twig', [
            'classNames' => $filteredClassNames,
        ]);
    }

    /**
     * @param array<string, mixed> $props
     */
    public function renderStyleProp(Environment $environment, array $props): string
    {
        return $environment->render('@partials/styleProp.twig', [
            'style' => $props['style'] ?? null,
        ]);
    }

    /**
     * Converts a mixed value to a string.
     *
     * @return string value as a string.
     */
    private function getSpacingClassName(string $propName, string $propValue, ?string $breakpoint = null): string
    {
        $container = new ContainerBuilder();
        $classPrefix = $container->hasParameter(SpiritWebTwigExtension::PARAMETER_SPIRIT_CSS_CLASS_PREFIX) && is_string($container->getParameter(SpiritWebTwigExtension::PARAMETER_SPIRIT_CSS_CLASS_PREFIX))
            ? $container->getParameter(SpiritWebTwigExtension::PARAMETER_SPIRIT_CSS_CLASS_PREFIX)
            : '';
        $utilityName = self::STYLE_SPACING_PROPS[$propName];

        // Return just a number from the value if not `auto`
        $utilityValue = $propValue === self::STYLE_SPACING_AUTO ? self::STYLE_SPACING_AUTO : preg_replace('/[^0-9]/', '', $propValue);
        $infix = $breakpoint !== null && $breakpoint !== self::BREAKPOINT_MOBILE ? self::CLASS_SEPARATOR . $breakpoint : '';

        return $classPrefix . $utilityName . $infix . self::CLASS_SEPARATOR . $utilityValue;
    }

    /**
     * @param array<string, mixed> $props
     * @return array<string, mixed>
     */
    public function useStyleProps(array $props): array
    {
        $styleProps = [];
        if (array_key_exists('class', $props)) {
            trigger_error('The "class" property is not allowed. If you really need to add a CSS class, use "UNSAFE_className" instead. Learn more at https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig#escape-hatches', E_USER_WARNING);
        }
        if (array_key_exists('style', $props)) {
            trigger_error('The "style" property is not allowed. If you really need to modify the CSS style, use "UNSAFE_style" instead. Learn more at https://github.com/lmc-eu/spirit-design-system/tree/main/packages/web-twig#escape-hatches', E_USER_WARNING);
        }
        $styleProps['className'] = $props['UNSAFE_className'] ?? null;
        $styleProps['style'] = $props['UNSAFE_style'] ?? null;

        foreach ($props as $propName => $propValue) {
            if (array_key_exists($propName, self::STYLE_SPACING_PROPS)) {
                $spacingClasses = [];

                if (is_array($propValue)) {
                    foreach ($propValue as $breakpoint => $value) {
                        if (is_scalar($value)) {
                            $spacingClasses[] = $this->getSpacingClassName($propName, (string) $value, $breakpoint);
                        }
                    }
                } elseif (is_scalar($propValue)) {
                    $spacingClasses[] = $this->getSpacingClassName($propName, (string) $propValue);
                }

                if (count($spacingClasses)) {
                    $styleProps['className'] .= self::CLASS_NAMES_SEPARATOR . implode(self::CLASS_NAMES_SEPARATOR, $spacingClasses);
                }
            }
        }

        $styleProps['className'] = is_string($styleProps['className']) ? trim($styleProps['className']) : null;

        return $styleProps;
    }
}
