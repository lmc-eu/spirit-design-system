<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Compiler;

use Twig\Environment;
use Twig\Lexer;
use Twig\Source;
use Twig\TokenStream;

class ComponentLexer extends Lexer
{
    private string $twigPathAlias;

    /**
     * @param array<string, mixed> $options
     */
    public function __construct(Environment $env, array $options, string $twigPathAlias)
    {
        parent::__construct($env, $options);
        $this->twigPathAlias = $twigPathAlias;
    }

    /**
     * @param Source $source
     * @param string|null $name
     */
    public function tokenize($source, $name = null): TokenStream
    {
        assert($source instanceof Source);
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
