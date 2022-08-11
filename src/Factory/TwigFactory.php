<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Factory;

use Lmc\TwigXBundle\Compiler\ComponentLexer;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class TwigFactory
{
    private Environment $twig;

    private FilesystemLoader $loader;

    /**
     * @var array <number, string>
     */
    private array $paths;

    private string $alias;

    private ?string $classPrefix;

    private bool $isEnabledLexer;

    /**
     * @param array<number, string> $paths
     */
    public function __construct(
        Environment $twig,
        FilesystemLoader $loader,
        array $paths,
        string $alias,
        ?string $classPrefix,
        bool $isEnabledLexer
    ) {
        $this->twig = $twig;
        $this->loader = $loader;
        $this->paths = $paths;
        $this->alias = $alias;
        $this->classPrefix = $classPrefix;
        $this->isEnabledLexer = $isEnabledLexer;
    }

    public function create(): Environment
    {
        foreach ($this->paths as $path) {
            $this->loader->addPath($path, $this->alias);
        }
        $this->twig->setLoader($this->loader);

        $this->twig->addGlobal('_spiritClassPrefix', $this->classPrefix);

        if ($this->isEnabledLexer) {
            $this->twig->setLexer(new ComponentLexer($this->twig, [], $this->alias));
        }

        return $this->twig;
    }
}
