<?php

declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class TwigComponentsExtensionTest extends TestCase
{
    private ContainerBuilder $containerBuilder;

    protected function setUp(): void
    {
        $config = [
            'path' => 'templates/',
            'path_alias' => 'ui-components',
        ];

        $this->loadExtension([$config]);
    }

    private function loadExtension(array $configs): void
    {
        $extension = new TwigComponentsExtension();
        $this->containerBuilder = new ContainerBuilder();
        $this->containerBuilder->registerExtension($extension);

        $extension->load($configs, $this->containerBuilder);
    }

    public function testShouldRegisterParameters(): void
    {
        $this->assertTrue($this->containerBuilder->hasParameter('twig_components.path'));
        $this->assertTrue($this->containerBuilder->hasParameter('twig_components.path_alias'));
    }
}
