<?php

declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Factory;

use Lmc\TwigComponentsBundle\Compiler\ComponentLexer;
use Twig\Environment;

class TwigFactory
{
    /**
     * @var Environment
     */
    private $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    public function create(): Environment
    {
        $this->twig->setLexer(new ComponentLexer($this->twig));

        return $this->twig;
    }
}
