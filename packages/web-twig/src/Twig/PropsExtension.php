<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PropsExtension extends AbstractExtension
{
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
    public function renderMainProps(Environment $environment, $props = [], $allowedAttributes = []): string
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
                    || in_array($propName, $allowedAttributes)
                ) {
                    if (! is_null($propValue) && $propValue !== '') {
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
     */
    public function renderInputProps(Environment $environment, array $props, $allowedAttributes = []): string
    {
        $transferringAttributes = [];
        foreach ($props as $propName => $propValue) {
            if (in_array($propName, self::VALIDATION_ATTRIBUTES, true) || in_array($propName, $allowedAttributes)) {
                if (! is_null($propValue) && $propValue !== '') {
                    $transferringAttributes[$propName] = $propValue;
                }
            }
        }

        return $environment->render('@partials/inputProps.twig', [
            'transferringAttributes' => $transferringAttributes,
        ]);
    }

    /**
     * @param array<string, mixed> $classNames
     */
    public function renderClassProp(Environment $environment, array $classNames): string
    {
        $filteredClassNames = array_values(array_filter($classNames, fn ($value) => ! is_null($value) && $value !== ''));

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
     * @param array<string, mixed> $props
     * @return array<string, mixed>
     */
    public function useStyleProps(array $props): array
    {
        $styleProps = [];
        if (array_key_exists('class', $props)) {
            trigger_error('The "class" property will be removed in the next major version. Use "UNSAFE_className" instead.', E_USER_DEPRECATED);
        }
        $styleProps['className'] = $props['UNSAFE_className'] ?? $props['class'] ?? null;
        $styleProps['style'] = $props['UNSAFE_style'] ?? null;

        return $styleProps;
    }
}
