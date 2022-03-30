<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Compiler\ComponentLexer;
use Lmc\SpiritWebTwigBundle\DependencyInjection\CompilerPass\OverrideServiceCompilerPass;
use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Lmc\SpiritWebTwigBundle\Factory\TwigFactory;
use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

final class ComponentTest extends TestCase
{
    protected Environment $twig;

    /**
     * @param array<string> $extendedComponentsPath
     */
    protected function setupTwig(?string $prefix = null, array $extendedComponentsPath = []): Environment
    {
        $alias = 'ui-component';
        $loader = new FilesystemLoader(__DIR__ . '/test-templates');
        $paths = array_merge($extendedComponentsPath, [SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH]);

        foreach ($paths as $path) {
            $loader->addPath($path, $alias);
        }

        $loader->addPath(SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS);

        $twig = new Environment($loader, [
            'cache' => false,
        ]);

        if ($prefix) {
            $twig->addGlobal(OverrideServiceCompilerPass::GLOBAL_PREFIX_TWIG_VARIABLE, $prefix);
        }

        $twig->setLoader($loader);
        $twig->setLexer(new ComponentLexer($twig, [], $alias));

        return $twig;
    }

    public function setUp(): void
    {
        $this->twig = $this->setupTwig();
    }

    public function testShouldRenderSimpleComponent(): void
    {
        $html = $this->twig->render('test_simple_component.twig');

        $this->assertEquals(<<<HTML
        <button class="Button Button--primary" type="button">Demo button</button>

        HTML, $html);
    }

    public function testShouldRenderComponentWithArguments(): void
    {
        $html = $this->twig->render('test_arguments.twig');

        $this->assertEquals(<<<HTML
        <button class="Button Button--primary" type="button"><span>Demo button</span></button>

        HTML, $html);
    }

    public function testShouldRenderWithArgumentWithoutValue(): void
    {
        $html = $this->twig->render('test_argument_without_value.twig');

        $this->assertEquals(<<<HTML
        <button class="Button Button--secondary Button--block" type="button">Demo button without argument value</button>

        HTML, $html);
    }

    public function testShouldRenderComponentWithHtmlTags(): void
    {
        $html = $this->twig->render('test_component_with_html_tags.twig');

        $this->assertEquals(<<<HTML
        <form>
        <button class="Button Button--primary" type="submit">Submit</button>
        </form>
        HTML, $html);
    }

    /**
     * @dataProvider renderExtendsComponentsDataProvider
     */
    public function testShouldRenderExtendsComponents(string $prefix, string $testTemplate): void
    {
        $this->twig = $this->setupTwig($prefix, [__DIR__ . '/test-extends-components']);
        $html = $this->twig->render(sprintf('%s.twig', $testTemplate));

        $this->assertEquals(<<<HTML
        <button class="jobs-Button jobs-Button--primary jobs-Button--small" type="button">Primary buttom</button>

        HTML, $html);
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

        $this->assertEquals(<<<HTML
        <a href="#" class="Button Button--primary">Link Button</a>

        HTML, $html);
    }
}
