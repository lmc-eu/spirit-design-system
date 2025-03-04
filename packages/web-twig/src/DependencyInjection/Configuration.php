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
            ->defaultValue(SpiritWebTwigExtension::DEFAULT_PATH_ALIAS)
            ->end()
            ->scalarNode('spirit_css_class_prefix')
            ->defaultNull()
            ->end()
            ->scalarNode('spirit_css_variable_prefix')
            ->defaultValue(SpiritWebTwigExtension::DEFAULT_CSS_VARIABLE_PREFIX)
            ->end()
            ->scalarNode('html_syntax_lexer')
            ->defaultTrue()
            ->end()
            ->arrayNode('icons')
            ->children()
            ->arrayNode('paths')
            ->scalarPrototype()->end()
            ->end()
            ->scalarNode('alias')
            ->defaultValue(SpiritWebTwigExtension::DEFAULT_ICONS_ALIAS)
            ->end()
            ->end()
            ->end()
            ->end();

        return $treeBuilder;
    }
}
