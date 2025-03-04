<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Factory;

use Lmc\TwigXBundle\Compiler\ComponentLexer;
use Mockery;
use PHPUnit\Framework\TestCase;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

final class TwigFactoryTest extends TestCase
{
    public function testShouldCreate(): void
    {
        $defaultPaths = ['templates/'];
        $classPrefix = null;
        $variablePrefix = 'spirit-';
        $pathAlias = 'ui-components';
        $isEnableLexer = true;

        $twigFilesystemLoaderMock = Mockery::mock(FilesystemLoader::class);
        $twigFilesystemLoaderMock->shouldReceive('addPath')
            ->once()
            ->with('templates/', $pathAlias);

        $twigEnvironmentMock = Mockery::mock(Environment::class);
        $twigEnvironmentMock->shouldReceive('setLexer')
            ->once()
            ->withArgs([ComponentLexer::class]);

        $twigEnvironmentMock->shouldReceive('setLoader')
            ->once()
            ->with($twigFilesystemLoaderMock);

        $twigEnvironmentMock->shouldReceive('addGlobal')
            ->once()
            ->with('_spiritClassPrefix', $classPrefix);

        $twigEnvironmentMock->shouldReceive('addGlobal')
            ->once()
            ->with('_spiritCSSVariablePrefix', $variablePrefix);

        $twigEnvironmentMock->shouldReceive('getUnaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigEnvironmentMock->shouldReceive('getBinaryOperators')
            ->once()
            ->withNoArgs()
            ->andReturn([]);

        $twigFactory = new TwigFactory($twigEnvironmentMock, $twigFilesystemLoaderMock, $defaultPaths, $pathAlias, $classPrefix, $isEnableLexer, $variablePrefix);
        $twigEnvironmentInstance = $twigFactory->create();

        $this->assertInstanceOf(Environment::class, $twigEnvironmentInstance);
    }

    public function testShouldCallWithCustomConfiguration(): void
    {
        $expectedPaths = ['templates/', 'test/'];
        $pathAlias = 'ui-components';
        $classPrefix = 'jobs';
        $variablePrefix = 'jobs-';
        $isEnableLexer = false;

        $twigFilesystemLoaderMock = Mockery::mock(FilesystemLoader::class);

        foreach ($expectedPaths as $expectedPath) {
            $twigFilesystemLoaderMock->shouldReceive('addPath')
                ->once()
                ->with($expectedPath, $pathAlias);
        }

        $twigEnvironmentMock = Mockery::mock(Environment::class);

        $twigEnvironmentMock->shouldNotReceive('setLexer');

        $twigEnvironmentMock->shouldReceive('addGlobal')
            ->once()
            ->with('_spiritClassPrefix', $classPrefix);

        $twigEnvironmentMock->shouldReceive('addGlobal')
            ->once()
            ->with('_spiritCSSVariablePrefix', $variablePrefix);

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

        $twigFactory = new TwigFactory($twigEnvironmentMock, $twigFilesystemLoaderMock, $expectedPaths, $pathAlias, $classPrefix, $isEnableLexer, $variablePrefix);
        $twigEnvironmentInstance = $twigFactory->create();

        $this->assertInstanceOf(Environment::class, $twigEnvironmentInstance);
    }
}
