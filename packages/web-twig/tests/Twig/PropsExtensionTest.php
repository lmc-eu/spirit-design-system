<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Mockery as m;
use PHPUnit\Framework\TestCase;
use Twig\Environment;

class PropsExtensionTest extends TestCase
{
    private PropsExtension $propsExtension;

    public function setUp(): void
    {
        $this->propsExtension = new PropsExtension();
    }

    /**
     * @dataProvider renderMainPropsDataProvider
     * @param array<string, mixed> $props
     * @param array<string, mixed> $expectedRenderProps
     */
    public function testShouldRenderMainProps(array $props, array $expectedRenderProps): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/mainProps.twig', $expectedRenderProps)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderMainProps($environment, $props);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<string, array<string, string>|int|string|null>>>
     */
    public function renderMainPropsDataProvider(): array
    {
        return [
            'empty props' => [[], [
                'allowedAttributes' => [],
                'id' => null,
            ]],
            'id property' => [[
                'id' => 1,
            ], [
                'allowedAttributes' => [],
                'id' => 1,
            ]],
            'data properties' => [[
                'data-id' => 'testDataId',
            ], [
                'allowedAttributes' => [
                    'data-id' => 'testDataId',
                ],
                'id' => null,
            ]],
            'data properties & id' => [[
                'data-id' => 'testDataId',
                'id' => 'testId',
            ], [
                'allowedAttributes' => [
                    'data-id' => 'testDataId',
                ],
                'id' => 'testId',
            ]],
            'filter only allowed attributes' => [[
                'test-id' => 'testDataId',
                'aria-label' => 'testAria',
                'data-label' => 'testData',
                'id' => 'testId',
            ], [
                'allowedAttributes' => [
                    'aria-label' => 'testAria',
                    'data-label' => 'testData',
                ],
                'id' => 'testId',
            ]],
            'skip empty allowed attributes' => [[
                'test-id' => 'testDataId',
                'aria-label' => '',
                'data-label' => 'testData',
                'id' => 'testId',
            ], [
                'allowedAttributes' => [
                    'data-label' => 'testData',
                ],
                'id' => 'testId',
            ]],
        ];
    }

    /**
     * @dataProvider renderInputPropsDataProvider
     * @param array<string, mixed> $props
     * @param array<string, mixed> $expectedRenderProps
     */
    public function testShouldRenderInputProps(array $props, array $expectedRenderProps): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/inputProps.twig', $expectedRenderProps)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderInputProps($environment, $props);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<string, array<string, string>|int|string|null>>>
     */
    public function renderInputPropsDataProvider(): array
    {
        return [
            'empty props' => [[], [
                'allowedAttributes' => [],
            ]],
            'filter only allowed attributes' => [[
                'test-id' => 'testDataId',
                'min' => '1',
                'max' => '6',
            ], [
                'allowedAttributes' => [
                    'min' => '1',
                    'max' => '6',
                ],
            ]],
        ];
    }

    /**
     * @dataProvider renderClassNamesDataProvider
     * @param array<string> $classNames
     * @param array<string, mixed> $expectedRenderClass
     */
    public function testShouldRenderClassProp(array $classNames, array $expectedRenderClass): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/classProp.twig', $expectedRenderClass)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderClassProp($environment, $classNames);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<int|string, array<int, string>|string|null>>>
     */
    public function renderClassNamesDataProvider(): array
    {
        return [
            'empty props' => [[], [
                'classNames' => [],
            ]],
            'one class' => [[
                'test-class',
            ], [
                'classNames' => [
                    'test-class',
                ],
            ]],
            'multiple class names' => [[
                'test-class',
                'another-test-class',
            ], [
                'classNames' => [
                    'test-class',
                    'another-test-class',
                ],
            ]],
            'multiple class names without empty values ' => [[
                'test-class',
                null,
                'another-test-class',
                null,
            ], [
                'classNames' => [
                    'test-class',
                    'another-test-class',
                ],
            ]],
        ];
    }
}
