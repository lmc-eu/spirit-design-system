<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        if (\method_exists(TreeBuilder::class, 'getRootNode')) {
            $treeBuilder = new TreeBuilder('spirit_web_twig');
            $rootNode = $treeBuilder->getRootNode();
        } else {
            // Symfony 3
            $treeBuilder = new TreeBuilder();
            $rootNode = $treeBuilder->root('spirit_web_twig');
        }

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
            ->scalarNode('html_syntax_lexer')
            ->defaultTrue()
            ->end()
            ->end();

        return $treeBuilder;
    }
}
