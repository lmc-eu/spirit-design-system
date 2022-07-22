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

class BoolpropExtensionTest extends TestCase
{
    private BoolpropExtension $boolpropExtension;

    public function setUp(): void
    {
        $this->boolpropExtension = new BoolpropExtension();
    }

    /**
     * @param mixed $prop
     * @dataProvider boolpropDataProvider
     */
    public function testShouldConvertPropValueIntoBoolean($prop, bool $expectedValue): void
    {
        $convertedValue = $this->boolpropExtension->convert2Boolean($prop);

        $this->assertSame($expectedValue, $convertedValue);
    }

    /**
     * @return array<string, array<int, bool|int|string|null>>
     */
    public function boolpropDataProvider(): array
    {
        return [
            'bool true' => [true, true],
            'string true' => ['true', true],
            'number one' => [1, true],
            'number one in string' => ['1', true],
            'string `on`' => ['on', true],
            'string `yes`' => ['yes', true],
            'bool false' => [false, false],
            'string false' => ['false', false],
            'number zero' => [0, false],
            'number zero in string' => ['0', false],
            'string `off`' => ['off', false],
            'string `no`' => ['no', false],
            'some string' => ['asfdsafdsf', false],
            'empty prop' => ['', false],
            'null prop' => [null, false],
        ];
    }
}
