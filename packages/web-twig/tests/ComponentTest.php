<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Factory\TwigFactory;
use Lmc\SpiritWebTwigBundle\Helper\TwigHelper;
use PHPUnit\Framework\TestCase;
use Twig\Environment;

final class ComponentTest extends TestCase
{
    private const FIXTURES_SOURCES = __DIR__ . '/test-templates';

    protected Environment $twig;

    public function setUp(): void
    {
        $this->twig = TwigHelper::setup(self::FIXTURES_SOURCES, 'ui-component');
    }

    public function testShouldRenderSimpleComponent(): void
    {
        $html = $this->twig->render('test_simple_component.twig');
        $html = $this->removeWhitespace($html);

        $this->assertEquals(
            <<<HTML
<button
    class="Button Button--primary"
    type="button"
>Demo button</button>
HTML,
            $html
        );
    }

    public function testShouldRenderComponentWithArguments(): void
    {
        $html = $this->twig->render('test_arguments.twig');
        $html = $this->removeWhitespace($html);

        $this->assertEquals(<<<HTML
<button
    class="Button Button--primary"
    type="button"
><span>Demo button</span></button>
HTML, $html);
    }

    public function testShouldRenderWithArgumentWithoutValue(): void
    {
        $html = $this->twig->render('test_argument_without_value.twig');
        $html = $this->removeWhitespace($html);

        $this->assertEquals(
            <<<HTML
<button
    class="Button Button--secondary Button--block"
    type="button"
>Demo button without argument value</button>
HTML,
            $html
        );
    }

    public function testShouldRenderComponentWithHtmlTags(): void
    {
        $html = $this->twig->render('test_component_with_html_tags.twig');
        $html = $this->removeWhitespace($html);

        $this->assertEquals(
            <<<HTML
<form>
<button
    class="Button Button--primary"
    type="submit"
>Submit</button>
</form>
HTML,
            $html
        );
    }

    /**
     * @dataProvider renderExtendsComponentsDataProvider
     */
    public function testShouldRenderExtendsComponents(string $prefix, string $testTemplate): void
    {
        $this->twig = TwigHelper::setup(self::FIXTURES_SOURCES, 'ui-component', $prefix, [__DIR__ . '/test-extends-components']);
        $html = $this->twig->render(sprintf('%s.twig', $testTemplate));
        $html = $this->removeWhitespace($html);

        $this->assertEquals(
            <<<HTML
<button
    class="jobs-Button jobs-Button--primary   jobs-Button--small"
    type="button"
>Primary buttom</button>
HTML,
            $html
        );
    }

    /**
     * @return array<string, array<string>>
     */
    public function renderExtendsComponentsDataProvider(): array
    {
        return [
            'test extend component button with prefix in pure imp' => [
                'jobs-', 'test_extends_component_pure',
            ],
            'test extend component button with prefix in html imp' => [
                'jobs-', 'test_extends_component_html',
            ],
        ];
    }

    public function testShouldRenderComponentWithCamelCaseName(): void
    {
        $html = $this->twig->render('test_component_camel_case_name.twig');
        $html = $this->removeWhitespace($html);

        $this->assertEquals(
            <<<HTML
<a
    class="Button Button--primary"
    href="#"
>Link Button</a>
HTML,
            $html
        );
    }

    /**
     * @see: https://stackoverflow.com/questions/709669/how-do-i-remove-blank-lines-from-text-in-php
     *
     * @param string|array<string>|null $html
     */
    private function removeWhitespace($html): ?string
    {
        $cleanedSpaceBetweenAttrs = $html ? preg_replace('/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/', "\n", $html) : null;
        $trimmedHtml = $cleanedSpaceBetweenAttrs && ! is_array($cleanedSpaceBetweenAttrs) ? trim($cleanedSpaceBetweenAttrs) : null;

        return $trimmedHtml;
    }
}
