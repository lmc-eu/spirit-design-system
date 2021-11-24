<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class TwigComponentsExtensionTest extends TestCase
{
    /** @var ContainerBuilder */
    private $containerBuilder;

    /** @var TwigComponentsExtension */
    private $extension;

    /** @var array */
    private $config;

    protected function setUp(): void
    {
        $this->config = [
            'path' => 'templates/',
            'path_alias' => 'ui-components',
        ];

        $this->loadExtension([$this->config]);
    }

    private function loadExtension(array $configs): void
    {
        $this->extension = new TwigComponentsExtension();
        $this->containerBuilder = new ContainerBuilder();
        $this->containerBuilder->registerExtension($this->extension);

        $this->extension->load($configs, $this->containerBuilder);
    }

    public function testShouldRegisterParameters(): void
    {
        $this->assertTrue($this->containerBuilder->hasParameter('twig_components.path'));
        $this->assertTrue($this->containerBuilder->hasParameter('twig_components.path_alias'));
    }
}
