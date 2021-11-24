<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\Definition\Dumper\YamlReferenceDumper;

class ConfigurationTest extends TestCase
{
    public function testConfigurationDefinition(): void
    {
        $dumper = new YamlReferenceDumper();
        $reference = <<<CONFIG
aerospike:
    logger:               aerospike.default.logger
    sessions:
        hosts:                []
        namespace:            ~
        set:                  ~
        lifetime:             ~
        bigBlockThreshold:    null
    cache:
        hosts:                []
        namespace:            ~
        set:                  ~
        bigBlockThreshold:    null

CONFIG;

        $this->assertEquals($reference, $dumper->dump(new Configuration()));
    }
}
