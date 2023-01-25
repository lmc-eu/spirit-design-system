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
                if (preg_match('/^(data|aria)-*/', $propName) > 0 || in_array($propName, $allowedAttributes)) {
                    if ($propValue !== '') {
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
                $transferringAttributes[$propName] = $propValue;
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
}
