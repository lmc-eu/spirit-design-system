<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection\CompilerPass;

use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Lmc\TwigXBundle\Compiler\ComponentLexer;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
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
        /** @var string $pathAlias */
        $pathAlias = $container->getParameter(SpiritWebTwigExtension::PARAMETER_PATH_ALIAS);
        $isLexer = $container->getParameter(SpiritWebTwigExtension::PARAMETER_HTML_SYNTAX_LEXER);
        $classPrefix = $container->getParameter(SpiritWebTwigExtension::PARAMETER_SPIRIT_CSS_CLASS_PREFIX);
        /** @var array<string> $iconsPaths */
        $iconsPaths = $container->getParameter(SpiritWebTwigExtension::PARAMETER_ICONS_PATHS);
        /** @var string $iconsPathAlias */
        $iconsPathAlias = $container->getParameter(SpiritWebTwigExtension::PARAMETER_ICONS_PATH_ALIAS);

        $this->addGlobPath($twigLoaderDefinition, SpiritWebTwigExtension::DEFAULT_PARTIALS_PATH, SpiritWebTwigExtension::DEFAULT_PARTIALS_ALIAS);

        foreach ($paths as $path) {
            $this->addGlobPath($twigLoaderDefinition, $path, $pathAlias);

            if ($path === SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH || $path === SpiritWebTwigExtension::DEFAULT_TWIG_COMPONENTS_PATH) {
                $this->addGlobPath($twigLoaderDefinition, $path, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS);
            }
        }

        foreach ($iconsPaths as $iconPath) {
            $this->addGlobPath($twigLoaderDefinition, $iconPath, $iconsPathAlias);
        }

        $twigDefinition->addMethodCall('addGlobal', [self::GLOBAL_PREFIX_TWIG_VARIABLE, $classPrefix]);

        if ($isLexer) {
            $twigDefinition->addMethodCall('setLexer', [new Reference(ComponentLexer::class)]);
        }
    }

    private function addGlobPath(Definition $twigLoaderDefinition, string $path, string $alias): void
    {
        if ($paths = glob($path, GLOB_ONLYDIR)) {
            foreach ($paths as $path) {
                $twigLoaderDefinition->addMethodCall('addPath', [$path, $alias]);
            }
        }
    }
}
