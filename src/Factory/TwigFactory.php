<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Factory;

use Lmc\SpiritWebTwigBundle\Compiler\ComponentLexer;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class TwigFactory
{
    private Environment $twig;

    private FilesystemLoader $loader;

    private string $path;

    private string $alias;

    public function __construct(Environment $twig, FilesystemLoader $loader, string $path, string $alias)
    {
        $this->twig = $twig;
        $this->loader = $loader;
        $this->path = $path;
        $this->alias = $alias;
    }

    public function create(): Environment
    {
        $this->loader->addPath($this->path, $this->alias);
        $this->twig->setLoader($this->loader);
        $this->twig->setLexer(new ComponentLexer($this->twig, [], $this->alias));

        return $this->twig;
    }
}
