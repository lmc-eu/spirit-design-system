<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Factory;

use Lmc\TwigComponentsBundle\Compiler\ComponentLexer;
use Mockery;
use PHPUnit\Framework\TestCase;
use Twig\Environment;

final class TwigFactoryTest extends TestCase
{
    public function testShouldCreate(): void
    {
        $twigEnvironmentMock = Mockery::mock(Environment::class);
        $twigEnvironmentMock->shouldReceive('setLexer')
            ->once()
            ->withArgs([ComponentLexer::class]);

        $twigEnvironmentMock->shouldReceive('getUnaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigEnvironmentMock->shouldReceive('getBinaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigFactory = new TwigFactory($twigEnvironmentMock);
        $twigExtendendEnvironmentInstance = $twigFactory->create();

        $this->assertInstanceOf(Environment::class, $twigExtendendEnvironmentInstance);
    }
}
