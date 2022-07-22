<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Helper;

use Symfony\Component\DependencyInjection\Definition;

class DefinitionHelper
{
    /**
     * @param array<string> $excludeParams
     * @return array<array<string>>
     */
    public static function getMethodCalls(Definition $definition, string $method, array $excludeParams = []): array
    {
        return array_filter(
            $definition->getMethodCalls(),
            function ($call) use ($method, $excludeParams) {
                return $call[0] === $method && $call[1] !== $excludeParams;
            },
        );
    }
}
