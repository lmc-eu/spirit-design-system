<?php

declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Compiler;

use Twig\Environment;
use Twig\Lexer;
use Twig\Source;
use Twig\TokenStream;

class ComponentLexer extends Lexer
{
    /**
     * @var string
     */
    private $twigPathAlias;

    public function __construct(Environment $env, array $options, string $twigPathAlias)
    {
        parent::__construct($env, $options);
        $this->twigPathAlias = $twigPathAlias;
    }

    public function tokenize(Source $source): TokenStream
    {
        $preparsed = $this->preparse($source->getCode());

        return parent::tokenize(
            new Source(
                $preparsed,
                $source->getName(),
                $source->getPath()
            )
        );
    }

    protected function preparse(string $value): string
    {
        return (new ComponentTagCompiler($value, $this->twigPathAlias))->compile();
    }
}
