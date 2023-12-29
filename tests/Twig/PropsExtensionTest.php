<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\Twig;

use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use Mockery as m;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
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
     * @param array<string, mixed> $allowedAttributes
     * @param array<string, mixed> $expectedRenderProps
     */
    public function testShouldRenderMainProps(array $props, array $allowedAttributes, array $expectedRenderProps): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/mainProps.twig', $expectedRenderProps)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderMainProps($environment, $props, $allowedAttributes);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<int|string, array<string, string>|int|string|null>>>
     */
    public function renderMainPropsDataProvider(): array
    {
        return [
            'empty props' => [
                [],
                [],
                [
                    'transferringAttributes' => [],
                    'id' => null,
                ],
            ],
            'id property' => [
                [
                    'id' => 1,
                ],
                [],
                [
                    'transferringAttributes' => [],
                    'id' => 1,
                ],
            ],
            'data properties' => [
                [
                    'data-id' => 'testDataId',
                ],
                [],
                [
                    'transferringAttributes' => [
                        'data-id' => 'testDataId',
                    ],
                    'id' => null,
                ],
            ],
            'data properties & id' => [
                [
                    'data-id' => 'testDataId',
                    'id' => 'testId',
                ],
                [],
                [
                    'transferringAttributes' => [
                        'data-id' => 'testDataId',
                    ],
                    'id' => 'testId',
                ],
            ],
            'filter only allowed attributes' => [
                [
                    'test-id' => 'testDataId',
                    'aria-label' => 'testAria',
                    'data-label' => 'testData',
                    'id' => 'testId',
                    'name' => 'testName',
                ],
                ['name'],
                [
                    'transferringAttributes' => [
                        'aria-label' => 'testAria',
                        'data-label' => 'testData',
                        'name' => 'testName',
                    ],
                    'id' => 'testId',
                ],
            ],
            'filter only allowed attributes and skip null values' => [
                [
                    'test-id' => 'testDataId',
                    'aria-label' => 'testAria',
                    'data-label' => 'testData',
                    'id' => 'testId',
                    'name' => null,
                ],
                ['name'],
                [
                    'transferringAttributes' => [
                        'aria-label' => 'testAria',
                        'data-label' => 'testData',
                    ],
                    'id' => 'testId',
                ],
            ],
            'skip empty transferring attributes' => [
                [
                    'test-id' => 'testDataId',
                    'aria-label' => '',
                    'data-label' => 'testData',
                    'id' => 'testId',
                ],
                [],
                [
                    'transferringAttributes' => [
                        'data-label' => 'testData',
                    ],
                    'id' => 'testId',
                ],
            ],
        ];
    }

    /**
     * @dataProvider renderInputPropsDataProvider
     * @param array<string, mixed> $props
     * @param array<string, mixed> $allowedAttributes
     * @param array<string, mixed> $inputProps
     * @param array<string, mixed> $expectedRenderProps
     */
    public function testShouldRenderInputProps(array $props, array $allowedAttributes, array $inputProps, array $expectedRenderProps): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/inputProps.twig', $expectedRenderProps)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderInputProps($environment, $props, $allowedAttributes, $inputProps);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<int|string, array<string, string>|string|null>>>
     */
    public function renderInputPropsDataProvider(): array
    {
        return [
            'empty props' => [[], [], [], [
                'transferringAttributes' => [],
            ]],
            'filter only allowed attributes' => [[
                'test-id' => 'testDataId',
                'min' => '1',
                'max' => '6',
                'autocomplete' => 'on',
                'placeholder' => 'Your name',
            ], ['autocomplete', 'placeholder'], [], [
                'transferringAttributes' => [
                    'min' => '1',
                    'max' => '6',
                    'autocomplete' => 'on',
                    'placeholder' => 'Your name',
                ],
            ]],
            'filter only allowed attributes and skip null values' => [[
                'test-id' => 'testDataId',
                'min' => '1',
                'max' => '6',
                'autocomplete' => 'on',
                'placeholder' => null,
            ], ['autocomplete', 'placeholder'], [], [
                'transferringAttributes' => [
                    'min' => '1',
                    'max' => '6',
                    'autocomplete' => 'on',
                ],
            ]],
            'pass down input props' => [[], [], [
                'data-test' => 'test-id',
                'autocomplete' => 'on',
            ], [
                'transferringAttributes' => [
                    'data-test' => 'test-id',
                    'autocomplete' => 'on',
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

    /**
     * @dataProvider renderStylePropDataProvider
     * @param array<string> $props
     * @param array<string, mixed> $expectedRenderStyle
     */
    public function testShouldRenderStyleProp(array $props, array $expectedRenderStyle): void
    {
        $expectedResponse = '';
        $environment = m::mock(Environment::class);

        $environment->shouldReceive('render')
            ->once()
            ->with('@partials/styleProp.twig', $expectedRenderStyle)
            ->andReturn($expectedResponse);

        $renderResponse = $this->propsExtension->renderStyleProp($environment, $props);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<int|string, array<string, string>|string>>>
     */
    public function renderStylePropDataProvider(): array
    {
        return [
            'empty props' => [[], [
                'style' => '',
            ]],
            'one style' => [[
                'style' => 'position: absolute;',
            ], [
                'style' => 'position: absolute;',
            ]],
            'filter only style' => [[
                'style' => 'position: absolute; color: red;',
                'class' => 'test-class',
            ], [
                'style' => 'position: absolute; color: red;',
            ]],
        ];
    }

    /**
     * @dataProvider useStylePropDataProvider
     * @param array<string> $props
     * @param array<string, mixed> $expectedResponse
     */
    public function testShouldUseStyleProp(array $props, array $expectedResponse): void
    {
        $renderResponse = $this->propsExtension->useStyleProps($props);

        $this->assertSame($expectedResponse, $renderResponse);
    }

    /**
     * @return array<string, array<int, array<int|string, array<string, string>|string|null>>>
     */
    public function useStylePropDataProvider(): array
    {
        return [
            'empty props' => [[], [
                'className' => null,
                'style' => null,
            ]],
            'with UNSAFE_style' => [[
                'UNSAFE_style' => 'position: absolute;',
            ], [
                'className' => null,
                'style' => 'position: absolute;',
            ]],
            'with UNSAFE_className' => [[
                'UNSAFE_className' => 'test-class',
            ], [
                'className' => 'test-class',
                'style' => null,
            ]],
            'with both' => [[
                'UNSAFE_className' => 'test-class',
                'UNSAFE_style' => 'position: absolute;',
            ], [
                'className' => 'test-class',
                'style' => 'position: absolute;',
            ]],
            'filter only supported' => [[
                'UNSAFE_style' => 'position: absolute;',
                'data-test' => 'test-data',
            ], [
                'className' => null,
                'style' => 'position: absolute;',
            ]],
            'simple spacing style prop' => [[
                'margin' => 'space-100',
            ], [
                'className' => 'm-100',
                'style' => null,
            ]],
            'complex spacing style prop' => [[
                'marginX' => [
                    'mobile' => 'space-100',
                    'tablet' => 'auto',
                    'desktop' => 'space-200',
                ],
            ], [
                'className' => 'mx-100 mx-tablet-auto mx-desktop-200',
                'style' => null,
            ]],
            'skipping breakpoint with spacing style prop' => [[
                'marginX' => [
                    'mobile' => 'space-100',
                    'desktop' => 'auto',
                ],
            ], [
                'className' => 'mx-100 mx-desktop-auto',
                'style' => null,
            ]],
            'all spacing style props' => [[
                'margin' => 'space-100',
                'marginTop' => 'space-200',
                'marginRight' => 'space-300',
                'marginBottom' => 'space-400',
                'marginLeft' => 'space-500',
                'marginX' => 'space-600',
                'marginY' => 'space-700',
            ], [
                'className' => 'm-100 mt-200 mr-300 mb-400 ml-500 mx-600 my-700',
                'style' => null,
            ]],
            'both spacing and UNSAFE_style' => [[
                'margin' => 'space-100',
                'UNSAFE_style' => 'position: absolute;',
            ], [
                'className' => 'm-100',
                'style' => 'position: absolute;',
            ]],
            'both spacing and UNSAFE_className' => [[
                'margin' => 'space-100',
                'UNSAFE_className' => 'm-500',
            ], [
                'className' => 'm-500 m-100',
                'style' => null,
            ]],
        ];
    }
}
