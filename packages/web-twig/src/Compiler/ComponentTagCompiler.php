<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Compiler;

/**
 * Transforms <Tags /> to twig embed tags
 * Most parts shamelessly stolen form Laravel's ComponentTagCompiler {@link https://laravel.com/api/8.x/Illuminate/View/Compilers/ComponentTagCompiler.html}
 */
class ComponentTagCompiler
{
    protected string $source;

    private string $twigPathAlias;

    public function __construct(string $source, string $twigPathAlias)
    {
        $this->source = $source;
        $this->twigPathAlias = $twigPathAlias;
    }

    public function compile(): string
    {
        $value = $this->source;
        $value = $this->compileSelfClosingTags($value);
        $value = $this->compileOpeningTags($value);

        return $this->compileClosingTags($value);
    }

    /**
     * Compile the opening tags within the given string.
     */
    protected function compileOpeningTags(string $value): string
    {
        $pattern = "/
            <
                \s*
                ([[A-Z]\w+]*)
                (?<attributes>
                    (?:
                        \s+
                        (?:
                            (?:
                                \{\{\s*\\\$attributes(?:[^}]+?)?\s*\}\}
                            )
                            |
                            (?:
                                [\w\-:.@]+
                                (
                                    =
                                    (?:
                                        \\\"[^\\\"]*\\\"
                                        |
                                        \'[^\']*\'
                                        |
                                        [^\'\\\"=<>]+
                                    )
                                )?
                            )
                        )
                    )*
                    \s*
                )
                (?<![\/=\-])
            >
        /x";

        return preg_replace_callback(
            $pattern,
            function (array $matches) {
                $attributes = $this->getAttributesFromAttributeString($matches['attributes']);
                $name = $matches[1];

                return $this->componentStartString($name, $attributes) . '{% block content %}';
            },
            $value
        );
    }

    protected function componentStartString(string $component, string $attributes): string
    {
        return "{% embed \"@" . $this->twigPathAlias . "/" . mb_strtolower($component) . ".twig\" with { props: $attributes } %}";
    }

    /**
     * Compile the closing tags within the given string.
     */
    protected function compileClosingTags(string $value): string
    {
        return preg_replace("/<\/\s*([[A-Z]\w+]*)\s*>/", '{% endblock %}{% endembed %}', $value);
    }

    /**
     * Compile the self-closing tags within the given string.
     */
    protected function compileSelfClosingTags(string $value): string
    {
        $pattern = "/
            <
                \s*
                ([[A-Z]\w+]*)
                (?<attributes>
                    (?:
                        \s+
                        (?:
                            (?:
                                \{\{\s*\\\$attributes(?:[^}]+?)?\s*\}\}
                            )
                            |
                            (?:
                                [\w\-:.@]+
                                (
                                    =
                                    (?:
                                        \\\"[^\\\"]*\\\"
                                        |
                                        \'[^\']*\'
                                        |
                                        [^\'\\\"=<>]+
                                    )
                                )?
                            )
                        )
                    )*
                    \s*
                )
            \/>
        /x";

        return preg_replace_callback(
            $pattern,
            function (array $matches) {
                $attributes = $this->getAttributesFromAttributeString($matches['attributes']);
                $name = $matches[1];

                return $this->componentStartString($name, $attributes) . '{% endembed %}';
            },
            $value
        );
    }

    protected function getAttributesFromAttributeString(string $attributeString)
    {
        $attributeString = $this->parseAttributeBag($attributeString);

        $pattern = '/
            (?<attribute>[\w\-:.@]+)
            (
                =
                (?<value>
                    (
                        \"[^\"]+\"
                        |
                        \\\'[^\\\']+\\\'
                        |
                        [^\s>]+
                    )
                )
            )?
        /x';

        if (! preg_match_all($pattern, $attributeString, $matches, PREG_SET_ORDER)) {
            return '{}';
        }

        $attributes = [];

        foreach ($matches as $match) {
            $attribute = $match['attribute'];
            $value = $match['value'] ?? null;

            if ($value === null) {
                $value = 'true';
            }

            // enable an argument that begins with a colon
            if (\str_starts_with($attribute, ':')) {
                $attribute = str_replace(':', '', $attribute);
                $value = $this->stripQuotes($value);
            }

            $valueWithoutQuotes = $this->stripQuotes($value);

            if (\str_starts_with($valueWithoutQuotes, '{{') && (mb_strpos($valueWithoutQuotes, '}}') === mb_strlen($valueWithoutQuotes) - 2)) {
                $value = mb_substr($valueWithoutQuotes, 2, -2);
            }

            $attributes[$attribute] = $value;
        }

        $out = '{';
        foreach ($attributes as $key => $value) {
            $key = "'$key'";
            $out .= "$key: $value,";
        }

        return rtrim($out, ',') . '}';
    }

    /**
     * Strip any quotes from the given string.
     */
    public function stripQuotes(string $value): string
    {
        return \str_starts_with($value, '"') || \str_starts_with($value, '\'')
            ? mb_substr($value, 1, -1)
            : $value;
    }

    /**
     * Parse the attribute bag in a given attribute string into it's fully-qualified syntax.
     */
    protected function parseAttributeBag(string $attributeString): string
    {
        $pattern = "/
            (?:^|\s+)                                        # start of the string or whitespace between attributes
            \{\{\s*(\\\$attributes(?:[^}]+?(?<!\s))?)\s*\}\} # exact match of attributes variable being echoed
        /x";

        return preg_replace($pattern, ' :attributes="$1"', $attributeString);
    }
}
