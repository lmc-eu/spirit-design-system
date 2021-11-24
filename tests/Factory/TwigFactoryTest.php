<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Factory;

use Mockery;
use PHPUnit\Framework\TestCase;

final class TwigFactoryTest extends TestCase
{
    public function testShouldCreate(): void
    {
        $twigEnvironmentMock = Mockery::mock(Environmen::class);
        $aerospikeFactory = new TwigFactory($twigEnvironmentMock);
        $twigExtendendEnvironmentInstance = $aerospikeFactory->create();

        $this->assertInstanceOf(Environmen::class, $twigExtendendEnvironmentInstance);
    }
}
