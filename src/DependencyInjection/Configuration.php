<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('spirit_web_twig');
        $rootNode = $treeBuilder->getRootNode();

        $rootNode
            ->children()
            ->scalarNode('path')
            ->defaultValue('%kernel.project_dir%/templates/components')
            ->end()
            ->scalarNode('path_alias')
            ->defaultValue('ui-components')
            ->end()
            ->end();

        return $treeBuilder;
    }
}
