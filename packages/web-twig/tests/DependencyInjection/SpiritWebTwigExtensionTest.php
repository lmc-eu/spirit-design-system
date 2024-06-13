<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class SpiritWebTwigExtensionTest extends TestCase
{
    private ContainerBuilder $containerBuilder;

    /**
     * @param array<int, array<string, array<int, string>|string|false>> $configs
     */
    private function loadExtension(array $configs): void
    {
        $extension = new SpiritWebTwigExtension();
        $this->containerBuilder = new ContainerBuilder();
        $this->containerBuilder->registerExtension($extension);

        $extension->load($configs, $this->containerBuilder);
    }

    public function testShouldRegisterParameters(): void
    {
        $config = [
            'paths' => ['templates/'],
            'paths_alias' => 'ui-components',
            'html_syntax_lexer' => false,
        ];

        $this->loadExtension([$config]);

        $this->assertTrue($this->containerBuilder->hasParameter('spirit_web_twig.paths'));
        $this->assertTrue($this->containerBuilder->hasParameter('spirit_web_twig.paths_alias'));
        $this->assertTrue($this->containerBuilder->hasParameter('spirit_web_twig.spirit_css_class_prefix'));
        $this->assertTrue($this->containerBuilder->hasParameter('spirit_web_twig.html_syntax_lexer'));
    }

    /**
     * @param array<string, string> $configuration
     * @dataProvider spiritClassPrefixParameterDataProvider
     */
    public function testShouldGetSpiritClassPrefixParameter(array $configuration, ?string $expectedValue): void
    {
        $this->loadExtension([$configuration]);

        $this->assertEquals($expectedValue, $this->containerBuilder->getParameter('spirit_web_twig.spirit_css_class_prefix'));
    }

    /**
     * @return array<string, mixed>
     */
    public function spiritClassPrefixParameterDataProvider(): array
    {
        return [
            'default value' => [[], null],
            'custom value' => [
                [
                    'spirit_css_class_prefix' => 'jobs',
                ], 'jobs-',
            ],
        ];
    }
}
