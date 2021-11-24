<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\Factory;

use Lmc\TwigComponentsBundle\Compiler\ComponentLexer;
use Mockery;
use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

final class TwigFactoryTest extends TestCase
{
    public function testShouldCreate(): void
    {
        $path = 'templates/';
        $pathAlias = 'ui-components';

        $twigFilesystemLoaderMock = Mockery::mock(FilesystemLoader::class);
        $twigFilesystemLoaderMock->shouldReceive('addPath')
            ->once()
            ->with($path, $pathAlias);

        $twigEnvironmentMock = Mockery::mock(Environment::class);
        $twigEnvironmentMock->shouldReceive('setLexer')
            ->once()
            ->withArgs([ComponentLexer::class]);

        $twigEnvironmentMock->shouldReceive('setLoader')
            ->once()
            ->with($twigFilesystemLoaderMock);

        $twigEnvironmentMock->shouldReceive('getUnaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigEnvironmentMock->shouldReceive('getBinaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigFactory = new TwigFactory($twigEnvironmentMock, $twigFilesystemLoaderMock, $path, $pathAlias);
        $twigEnvironmentInstance = $twigFactory->create();

        $this->assertInstanceOf(Environment::class, $twigEnvironmentInstance);
    }
}
