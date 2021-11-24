<?php

declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Factory;

use Lmc\TwigComponentsBundle\Compiler\ComponentLexer;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class TwigFactory
{
    /**
     * @var Environment
     */
    private $twig;

    /**
     * @var FilesystemLoader
     */
    private $loader;

    /**
     * @var string
     */
    private $path;

    /**
     * @var string
     */
    private $alias;

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
