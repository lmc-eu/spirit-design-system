<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Helper\TwigHelper;
use PHPUnit\Framework\TestCase;
use Twig\Environment;

final class ComponentTest extends TestCase
{
    private const FIXTURES_SOURCES = __DIR__ . '/test-templates';

    protected Environment $twig;

    protected function setUp(): void
    {
        $this->twig = TwigHelper::setup(self::FIXTURES_SOURCES, 'ui-component');
    }

    /**
     * @dataProvider renderDataProvider
     */
    public function testShouldRender(string $testTemplate, ?string $prefix = null): void
    {
        if ($prefix) {
            $this->twig = TwigHelper::setup(self::FIXTURES_SOURCES, 'ui-component', $prefix, [__DIR__ . '/test-extends-components']);
        }
        $html = $this->twig->render(sprintf('%s.twig', $testTemplate));
        $html = $this->removeWhitespace($html);

        $output = $this->twig->render(sprintf('%s.html', $testTemplate));
        $output = $this->removeWhitespace($output);
        $this->assertEquals($output, $html);
    }

    /**
     * @return array<string, array<string>>
     */
    public function renderDataProvider(): array
    {
        return [
            'test simple component' => [
                'test_simple_component',
            ],
            'test component with arguments' => [
                'test_arguments',
            ],
            'test component with arguments without value' => [
                'test_argument_without_value',
            ],
            'test component with html tags' => [
                'test_component_with_html_tags',
            ],
            'test extend component button with prefix in pure imp' => [
                'test_extends_component_pure',
                'jobs-',
            ],
            'test extend component button with prefix in html imp' => [
                'test_extends_component_html',
                'jobs-',
            ],
            'text component with camelCase name' => [
                'test_component_camel_case_name',
            ],
            'text component with unsafe case name and style' => [
                'test_component_classname_style',
            ],
            'text component with unsafe case name and style and xss' => [
                'test_component_classname_style_xss',
            ],
        ];
    }

    /**
     * @see: https://stackoverflow.com/questions/709669/how-do-i-remove-blank-lines-from-text-in-php
     *
     * @param string|array<string>|null $html
     */
    private function removeWhitespace(string|array|null $html): ?string
    {
        $cleanedSpaceBetweenAttrs = $html ? preg_replace('/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/', "\n", $html) : null;
        $trimmedHtml = $cleanedSpaceBetweenAttrs && !is_array($cleanedSpaceBetweenAttrs) ? trim($cleanedSpaceBetweenAttrs) : null;

        return $trimmedHtml;
    }
}
