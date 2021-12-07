<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Factory\TwigFactory;
use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

final class ComponentTest extends TestCase
{
    protected Environment $twig;

    protected function setupTwig(): Environment
    {
        $loader = new FilesystemLoader(__DIR__ . '/test-templates');

        $twig = new Environment($loader, [
            'cache' => false,
        ]);

        return (new TwigFactory($twig, $loader, __DIR__ . '/test-components', 'ui-components'))->create();
    }

    public function setUp(): void
    {
        $this->twig = $this->setupTwig();
    }

    public function testShouldRenderSimpleComponent()
    {
        $html = $this->twig->render('test_simple_component.twig');

        $this->assertEquals(<<<HTML
        <button class="lmc-Button lmc-Button--primary" type="button">Demo button</button>
        HTML, $html);
    }

    public function testShouldRenderComponentWithArguments()
    {
        $html = $this->twig->render('test_arguments.twig');

        $this->assertEquals(<<<HTML
        <button class="lmc-Button lmc-Button--primary" type="button"><span>Demo button</span></button>
        HTML, $html);
    }

    public function testShouldRenderWithArgumentWithoutValue()
    {
        $html = $this->twig->render('test_argument_without_value.twig');

        $this->assertEquals(<<<HTML
        <button class="lmc-Button lmc-Button--secondary lmc-Button--block" type="button">Demo button without argument value</button>
        HTML, $html);
    }

    public function testShouldRenderComponentWithHtmlTags()
    {
        $html = $this->twig->render('test_component_with_html_tags.twig');

        $this->assertEquals(<<<HTML
        <form>
        <button class="lmc-Button lmc-Button--primary" type="submit">Submit</button></form>
        HTML, $html);
    }
}
