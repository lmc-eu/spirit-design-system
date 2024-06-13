<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Helper;

use Lmc\SpiritWebTwigBundle\DependencyInjection\CompilerPass\OverrideServiceCompilerPass;
use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Lmc\SpiritWebTwigBundle\Twig\PropsExtension;
use Lmc\SpiritWebTwigBundle\Twig\SvgExtension;
use Lmc\TwigXBundle\Compiler\ComponentLexer;
use Symfony\Component\HttpKernel\Log\Logger;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class TwigHelper
{
    /**
     * @param array<string> $extendedComponentsPath
     */
    public static function setup(
        string $defaultTemplatePath,
        string $defaultAlias,
        ?string $prefix = null,
        array $extendedComponentsPath = [],
    ): Environment {
        $loader = new FilesystemLoader($defaultTemplatePath);
        $paths = array_merge(
            $extendedComponentsPath,
            [
                SpiritWebTwigExtension::DEFAULT_TWIG_COMPONENTS_PATH,
                SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH,
                __DIR__ . '/../../docs/components',
                __DIR__ . '/../../docs/twig-components',
            ],
        );

        foreach ($paths as $path) {
            $loader->addPath($path, $defaultAlias);
        }

        $loader->addPath(SpiritWebTwigExtension::DEFAULT_PARTIALS_PATH, SpiritWebTwigExtension::DEFAULT_PARTIALS_ALIAS);
        $loader->addPath(SpiritWebTwigExtension::DEFAULT_TWIG_COMPONENTS_PATH, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS);
        $loader->addPath(SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS);

        // Reference to a filesystem in Docker, please see packages/web-twig/docker/docker-compose.yml
        $loader->addPath(__DIR__ . '/../../static/', SpiritWebTwigExtension::DEFAULT_ICONS_ALIAS);

        $twig = new Environment($loader, [
            'cache' => false,
        ]);

        $propsExtension = new PropsExtension();
        $twig->addExtension($propsExtension);

        $svgExtension = new SvgExtension(new Logger());
        $twig->addExtension($svgExtension);

        if ($prefix) {
            $twig->addGlobal(OverrideServiceCompilerPass::GLOBAL_PREFIX_TWIG_VARIABLE, $prefix);
        }

        $twig->setLoader($loader);
        $twig->setLexer(new ComponentLexer($twig, [], $defaultAlias));

        return $twig;
    }
}
