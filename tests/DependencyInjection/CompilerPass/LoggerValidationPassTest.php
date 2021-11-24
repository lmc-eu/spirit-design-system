<?php declare(strict_types=1);

namespace Lmc\TwigComponentsBundle\DependencyInjection\CompilerPass;

use Lmc\TwigComponentsBundle\Logger\Logger;
use PHPUnit\Framework\TestCase;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;

class LoggerValidationPassTest extends TestCase
{
    /** @var LoggerValidationPass */
    private $compiler;

    protected function setUp(): void
    {
        $this->compiler = new LoggerValidationPass();
    }

    private function getContainer(bool $withParam = true, string $loggerClass = Logger::class): ContainerBuilder
    {
        $containerBuilder = new ContainerBuilder();
        if ($withParam) {
            $containerBuilder->setParameter('aerospike.logger', 'aerospike.default.logger');
        }
        $containerBuilder->setDefinition('aerospike.default.logger', new Definition($loggerClass));

        return $containerBuilder;
    }

    public function testShouldPassCompiler(): void
    {
        $this->assertNull($this->compiler->process($this->getContainer()));
    }

    public function testShouldNotPassCompiler(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        $container = $this->getContainer();
        $container->removeDefinition('aerospike.default.logger');

        $this->compiler->process($this->getContainer(true, \stdClass::class));
    }

    public function testShouldSkipPassCompiler(): void
    {
        $this->assertNull($this->compiler->process($this->getContainer(false)));
    }
}
