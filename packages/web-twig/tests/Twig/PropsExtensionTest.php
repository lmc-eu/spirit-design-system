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
                'dataAttributes' => [],
                'id' => null,
            ]],
            'id property' => [[
                'id' => 1,
            ], [
                'dataAttributes' => [],
                'id' => 1,
            ]],
            'data properties' => [[
                'data-id' => 'testDataId',
            ], [
                'dataAttributes' => [
                    'data-id' => 'testDataId',
                ],
                'id' => null,
            ]],
            'data properties & id' => [[
                'data-id' => 'testDataId',
                'id' => 'testId',
            ], [
                'dataAttributes' => [
                    'data-id' => 'testDataId',
                ],
                'id' => 'testId',
            ]],
            'filter only whitelist attributes' => [[
                'test-id' => 'testDataId',
                'id' => 'testId',
            ], [
                'dataAttributes' => [],
                'id' => 'testId',
            ]],
        ];
    }
}
