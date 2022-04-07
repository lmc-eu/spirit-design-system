<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Twig\Environment;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class PropsExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('mainProps', [$this, 'renderMainProps'], [
                'needs_environment' => true,
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @param array<string, mixed> $props
     */
    public function renderMainProps(Environment $environment, array $props): string
    {
        $dataProps = [];
        foreach ($props as $propName => $propValue) {
            if (preg_match('/data-*/', $propName) > 0) {
                $dataProps[$propName] = $propValue;
            }
        }
        return $environment->render('@partials/mainProps.twig', [
            'dataAttributes' => $dataProps,
            'id' => $props['id'] ?? null,
        ]);
    }
}
