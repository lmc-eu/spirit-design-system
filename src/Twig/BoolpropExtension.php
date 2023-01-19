<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class BoolpropExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('boolprop', [$this, 'convert2Boolean'], [
                'is_safe' => ['html'],
            ]),
        ];
    }

    /**
     * @param mixed $prop
     */
    public function convert2Boolean($prop): bool
    {
        return filter_var($prop, FILTER_VALIDATE_BOOLEAN);
    }
}
