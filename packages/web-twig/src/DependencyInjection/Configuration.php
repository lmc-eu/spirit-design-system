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
            ->arrayNode('paths')
            ->scalarPrototype()->end()
            ->end()
            ->scalarNode('paths_alias')
            ->defaultValue('spirit')
            ->end()
            ->scalarNode('spirit_css_class_prefix')
            ->defaultNull()
            ->end()
            ->scalarNode('html_syntax_lexer')
            ->defaultTrue()
            ->end()
            ->end();

        return $treeBuilder;
    }
}
