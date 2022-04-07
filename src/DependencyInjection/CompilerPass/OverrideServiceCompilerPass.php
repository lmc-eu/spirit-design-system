<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection\CompilerPass;

use Lmc\SpiritWebTwigBundle\Compiler\ComponentLexer;
use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Lmc\SpiritWebTwigBundle\Twig\PropsExtension;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class OverrideServiceCompilerPass implements CompilerPassInterface
{
    public const GLOBAL_PREFIX_TWIG_VARIABLE = '_spiritClassPrefix';

    public function process(ContainerBuilder $container): void
    {
        $twigDefinition = $container->getDefinition('twig');

        $twigLoaderDefinition = $container->findDefinition('twig.loader');

        /** @var array<string> $paths */
        $paths = $container->getParameter(SpiritWebTwigExtension::PARAMETER_PATHS);
        $pathAlias = $container->getParameter(SpiritWebTwigExtension::PARAMETER_PATH_ALIAS);
        $isLexer = $container->getParameter(SpiritWebTwigExtension::PARAMETER_HTML_SYNTAX_LEXER);
        $classPrefix = $container->getParameter(SpiritWebTwigExtension::PARAMETER_SPIRIT_CSS_CLASS_PREFIX);

        $twigLoaderDefinition->addMethodCall('addPath', [SpiritWebTwigExtension::DEFAULT_PARTIALS_PATH, SpiritWebTwigExtension::DEFAULT_PARTIALS_ALIAS]);

        foreach ($paths as $path) {
            $twigLoaderDefinition->addMethodCall('addPath', [$path, $pathAlias]);

            if ($path === SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH) {
                $twigLoaderDefinition->addMethodCall('addPath', [$path, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS]);
            }
        }

        $propsExtension = new PropsExtension();
        $twigLoaderDefinition->addMethodCall('addExtension', [$propsExtension]);

        $twigDefinition->addMethodCall('addGlobal', [self::GLOBAL_PREFIX_TWIG_VARIABLE, $classPrefix]);

        if ($isLexer) {
            $twigDefinition->addMethodCall('setLexer', [new Reference(ComponentLexer::class)]);
        }
    }
}
