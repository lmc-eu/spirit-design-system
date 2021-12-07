<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Config\Definition\Dumper\YamlReferenceDumper;

class ConfigurationTest extends TestCase
{
    public function testConfigurationDefinition(): void
    {
        $dumper = new YamlReferenceDumper();
        $reference = <<<CONFIG
spirit_web_twig:
    path:                 '%kernel.project_dir%/templates/components'
    path_alias:           ui-components\n
CONFIG;

        $this->assertEquals($reference, $dumper->dump(new Configuration()));
    }
}
