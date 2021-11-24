<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\DependencyInjection;

use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;

class AerospikeExtensionTest extends TestCase
{
    /** @var ContainerBuilder */
    private $containerBuilder;

    /** @var TwigComponentsExtension */
    private $extension;

    /** @var array */
    private $config;

    protected function setUp(): void
    {
        $this->config = [
            'sessions' => [
                'hosts' => ['127.0.0.1:3000'],
                'namespace' => 'project',
                'set' => 'cache',
                'lifetime' => 3600,
            ],
            'cache' => [
                'hosts' => ['127.0.0.1:3000'],
                'namespace' => 'project',
                'set' => 'cache',
            ],
        ];

        $this->loadExtension([$this->config]);
    }

    private function loadExtension(array $configs): void
    {
        $this->extension = new TwigComponentsExtension();
        $this->containerBuilder = new ContainerBuilder();
        $this->containerBuilder->setDefinition('aerospile.default.logger', new Definition(LoggerInterface::class));
        $this->containerBuilder->registerExtension($this->extension);

        $this->extension->load($configs, $this->containerBuilder);
    }

    public function testShouldRegisterParameters(): void
    {
        $registeredParameters = [
            'sessions',
            'cache',
        ];

        foreach ($registeredParameters as $params) {
            $this->assertTrue($this->containerBuilder->hasParameter(sprintf('aerospike.%s.hosts', $params)));
            $this->assertTrue($this->containerBuilder->hasParameter(sprintf('aerospike.%s.namespace', $params)));
            $this->assertTrue($this->containerBuilder->hasParameter(sprintf('aerospike.%s.set', $params)));
        }
    }

    public function testShouldRegisterAliases(): void
    {
        $this->assertTrue($this->containerBuilder->hasAlias('cache.adapter.aerospike'));
        $this->assertTrue($this->containerBuilder->hasAlias('doctrine.cache.provider.aerospike'));
    }

    public function testShouldRegisterOnlySessions(): void
    {
        $onlySessionConfig = array_filter($this->config, function ($v, $k) {
            return $k === 'sessions';
        }, ARRAY_FILTER_USE_BOTH);
        $this->loadExtension([$onlySessionConfig]);

        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.sessions.hosts'));
        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.sessions.namespace'));
        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.sessions.set'));
        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.sessions.lifetime'));
        $this->assertTrue($this->containerBuilder->hasDefinition('Lmc\TwigComponentsBundle\Storage\AerospikeSessionHandler'));

        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.cache.hosts'));
        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.cache.namespace'));
        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.cache.set'));
        $this->assertFalse($this->containerBuilder->hasDefinition('Lmc\TwigComponentsBundle\Cache\DoctrineCacheProvider'));
        $this->assertFalse($this->containerBuilder->hasAlias('cache.adapter.aerospike'));
        $this->assertFalse($this->containerBuilder->hasAlias('doctrine.cache.provider.aerospike'));
    }

    public function testShouldRegisterOnlyCache(): void
    {
        $onlySessionConfig = array_filter($this->config, function ($v, $k) {
            return $k === 'cache';
        }, ARRAY_FILTER_USE_BOTH);
        $this->loadExtension([$onlySessionConfig]);

        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.cache.hosts'));
        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.cache.namespace'));
        $this->assertTrue($this->containerBuilder->hasParameter('aerospike.cache.set'));
        $this->assertTrue($this->containerBuilder->hasDefinition('Lmc\TwigComponentsBundle\Cache\DoctrineCacheProvider'));
        $this->assertTrue($this->containerBuilder->hasAlias('cache.adapter.aerospike'));
        $this->assertTrue($this->containerBuilder->hasAlias('doctrine.cache.provider.aerospike'));

        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.sessions.hosts'));
        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.sessions.namespace'));
        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.sessions.set'));
        $this->assertFalse($this->containerBuilder->hasParameter('aerospike.sessions.lifetime'));
        $this->assertFalse($this->containerBuilder->hasDefinition('Lmc\TwigComponentsBundle\Storage\AerospikeSessionHandler'));
    }
}
