<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

/**
 * This is the class that loads and manages your bundle configuration
 *
 * To learn more see {@link http://symfony.com/doc/current/cookbook/bundles/extension.html}
 */
class SpiritWebTwigExtension extends Extension
{
    public const PARAMETER_PATHS = 'spirit_web_twig.paths';

    public const PARAMETER_SPIRIT_CSS_CLASS_PREFIX = 'spirit_web_twig.spirit_css_class_prefix';

    public const PARAMETER_PATH_ALIAS = 'spirit_web_twig.paths_alias';

    public const PARAMETER_HTML_SYNTAX_LEXER = 'spirit_web_twig.html_syntax_lexer';

    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $loader = new Loader\YamlFileLoader($container, new FileLocator(__DIR__ . '/../Resources/config'));
        $loader->load('services.yml');

        $defaultComponentsPath = __DIR__ . '/../Resources/components';

        $container->setParameter(self::PARAMETER_PATHS, array_merge($config['paths'], [$defaultComponentsPath]));
        $container->setParameter(self::PARAMETER_SPIRIT_CSS_CLASS_PREFIX, isset($config['spirit_css_class_prefix']) ? $config['spirit_css_class_prefix'] . '-' : null);
        $container->setParameter(self::PARAMETER_PATH_ALIAS, $config['paths_alias']);
        $container->setParameter(self::PARAMETER_HTML_SYNTAX_LEXER, (bool) $config['html_syntax_lexer']);
    }
}
