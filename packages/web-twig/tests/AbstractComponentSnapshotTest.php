<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Helper\TwigHelper;
use PHPUnit\Framework\TestCase;
use ReflectionClass;
use Spatie\Snapshots\MatchesSnapshots;
use Twig\Environment;

abstract class AbstractComponentSnapshotTest extends TestCase
{
    use MatchesSnapshots;

    protected const FIXTURES_DIR = '__fixtures__';

    protected Environment $twig;

    protected function setUp(): void
    {
        $this->twig = TwigHelper::setup($this->getSnapshotSources(), 'spirit');
    }

    /**
     * @dataProvider snapshotComponentsDataProvider
     */
    public function test(string $template): void
    {
        $html = $this->twig->render($template);

        $html = $this->formatHtml($html);

        $this->assertMatchesHtmlSnapshot($html);
    }

    /**
     * @return array<string, array<string>>
     */
    public function snapshotComponentsDataProvider(): array
    {
        $scanDirArray = scandir($this->getSnapshotSources());

        assert(is_array($scanDirArray));

        $scannedDirectory = array_diff($scanDirArray, ['..', '.']);
        $dataToProvide = [];

        foreach ($scannedDirectory as $fileName) {
            if (!is_dir($this->getSnapshotSources() . '/' . $fileName)) {
                $dataToProvide[(string) $fileName] = [(string) $fileName];
            }
        }

        return $dataToProvide;
    }

    protected function getSnapshotSources(): string
    {
        $reflector = new ReflectionClass(static::class);
        $filename = $reflector->getFileName();

        return ($filename ? dirname($filename) : '') . DIRECTORY_SEPARATOR . static::FIXTURES_DIR;
    }

    protected function getSnapshotId(): string
    {
        return $this->dataName() . '.snap';
    }

    protected function formatHtml(string $html): string
    {
        // Specify configuration
        $config = [
            'indent' => true,
            'output-xhtml' => true,
            'vertical-space' => true,
            'wrap' => 120,
        ];

        // Tidy
        $tidy = new \tidy();
        $tidy->parseString($html, $config, 'utf8');
        $tidy->cleanRepair();

        // Output
        return $tidy->root()->value;
    }
}
