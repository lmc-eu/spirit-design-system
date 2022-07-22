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
     */
    public function renderMainProps(Environment $environment, $props = []): string
    {
        $allowedAttributes = [];
        if (is_array($props)) {
            foreach ($props as $propName => $propValue) {
                if (preg_match('/^(data|aria)-*/', $propName) > 0) {
                    if ($propValue !== '') {
                        $allowedAttributes[$propName] = $propValue;
                    }
                }
            }
        }

        return $environment->render('@partials/mainProps.twig', [
            'allowedAttributes' => $allowedAttributes,
            'id' => $props['id'] ?? null,
        ]);
    }

    /**
     * @param array<string, mixed> $props
     */
    public function renderInputProps(Environment $environment, array $props): string
    {
        $allowedAttributes = [];
        foreach ($props as $propName => $propValue) {
            if (in_array($propName, self::VALIDATION_ATTRIBUTES, true)) {
                $allowedAttributes[$propName] = $propValue;
            }
        }

        return $environment->render('@partials/inputProps.twig', [
            'allowedAttributes' => $allowedAttributes,
        ]);
    }

    /**
     * @param array<string, mixed> $classNames
     */
    public function renderClassProp(Environment $environment, array $classNames): string
    {
        return $environment->render('@partials/classProp.twig', [
            'classNames' => $classNames,
        ]);
    }
}
