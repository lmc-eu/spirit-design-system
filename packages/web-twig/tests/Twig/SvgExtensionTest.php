<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Mockery as m;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;
use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Loader\LoaderInterface;
use Twig\Source;

class SvgExtensionTest extends TestCase
{
    private SvgExtension $svgExtension;

    /**
     * @var LoggerInterface|m\MockInterface
     */
    private LoggerInterface $loaderInterface;

    protected function setUp(): void
    {
        $this->loaderInterface = m::mock(LoggerInterface::class);
        $this->svgExtension = new SvgExtension($this->loaderInterface);
    }

    /**
     * @param array<string, string> $params
     * @dataProvider getSvgDataProvider
     */
    public function testShouldGetInlineSvg(string $filePath, string $fileResultPath, array $params = [], ?string $symbolName = ''): void
    {
        $fixturesPattern = __DIR__ . '/../fixtures/%s';
        $source = file_get_contents(sprintf($fixturesPattern, $filePath));
        $expectedSource = file_get_contents(sprintf($fixturesPattern, $fileResultPath));
        $sourceInstance = new Source((string) $source, 'name', $filePath);

        $loaderMock = m::mock(LoaderInterface::class);
        $loaderMock->shouldReceive('getSourceContext')
            ->with($filePath)
            ->once()
            ->andReturn($sourceInstance);

        $environmentMock = m::mock(Environment::class);
        $environmentMock->shouldReceive('getLoader')
            ->once()
            ->withNoArgs()
            ->andReturn($loaderMock);

        $result = $this->svgExtension->getInlineSvg($environmentMock, $filePath, $params, true, false, $symbolName);

        $this->assertXmlStringEqualsXmlString((string) $expectedSource, $result);
    }

    public function testShouldNotGetInlineSvgForLoadSource(): void
    {
        $filePath = 'test';
        $loaderMock = m::mock(LoaderInterface::class);
        $loaderMock->shouldReceive('getSourceContext')
            ->with('test.svg')
            ->once()
            ->andThrow(LoaderError::class);

        $environmentMock = m::mock(Environment::class);
        $environmentMock->shouldReceive('getLoader')
            ->once()
            ->withNoArgs()
            ->andReturn($loaderMock);

        $this->loaderInterface->shouldReceive('critical')
            ->with('Missing svg "{path}"', [
                'path' => 'test.svg',
            ])
            ->once();

        $result = $this->svgExtension->getInlineSvg($environmentMock, $filePath);

        $this->assertTrue($result === '');
    }

    public function testShouldNotGetInlineSvgForInvalidSource(): void
    {
        $filePath = 'test.svg';
        $sourceInstance = new Source('<></>', 'name', $filePath);

        $loaderMock = m::mock(LoaderInterface::class);
        $loaderMock->shouldReceive('getSourceContext')
            ->with($filePath)
            ->once()
            ->andReturn($sourceInstance);

        $environmentMock = m::mock(Environment::class);
        $environmentMock->shouldReceive('getLoader')
            ->once()
            ->withNoArgs()
            ->andReturn($loaderMock);

        // Make sure to set up your mock to expect the error log with exact arguments
        $this->loaderInterface->shouldReceive('error')
            ->with('Error parsing SVG by simplexml_load_string from {class} in path "{path}"', [
                'class' => Source::class,
                'path' => $filePath,
            ])
            ->once()
            ->andReturn();

        $result = $this->svgExtension->getInlineSvg($environmentMock, $filePath);

        $this->assertSame('', $result);
    }

    public function testShouldReuseSvg(): void
    {
        $fixturesPattern = __DIR__ . '/../fixtures/%s';
        $source = file_get_contents(sprintf($fixturesPattern, 'test.svg'));
        $expectedSource = file_get_contents(sprintf($fixturesPattern, 'test_reusable.svg'));
        $sourceInstance = new Source((string) $source, 'name', 'test.svg');

        $loaderMock = m::mock(LoaderInterface::class);
        $loaderMock->shouldReceive('getSourceContext')
            ->with('test.svg')
            ->once()
            ->andReturn($sourceInstance);

        $environmentMock = m::mock(Environment::class);
        $environmentMock->shouldReceive('getLoader')
            ->once()
            ->withNoArgs()
            ->andReturn($loaderMock);

        $this->svgExtension->getInlineSvg($environmentMock, 'test.svg', []);
        $reUseResult = $this->svgExtension->getInlineSvg($environmentMock, 'test.svg', []);

        $this->assertXmlStringEqualsXmlString((string) $expectedSource, $reUseResult);
    }

    /**
     * @return array<string, mixed>
     */
    public function getSvgDataProvider(): array
    {
        return [
            'load standard' => ['test.svg', 'test.svg', []],
            'load with class' => [
                'test.svg', 'test_with_class.svg', [
                    'class' => 'testClass',
                ],
            ],
            'load with title' => [
                'test.svg', 'test_with_title.svg', [
                    'title' => 'test',
                ],
            ],
            'load with size' => [
                'test.svg', 'test_with_size.svg', [
                    'size' => '32',
                ],
            ],
            'load with style' => [
                'test.svg', 'test_with_style.svg', [
                    'style' => 'position: absolute;',
                ],
            ],
            'load with symbol' => [
                'test.svg', 'test_with_symbol.svg', [], 'test',
            ],
        ];
    }
}
