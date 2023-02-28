<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Helper\TwigHelper;
use PHPUnit\Framework\TestCase;
use Spatie\Snapshots\MatchesSnapshots;
use Twig\Environment;

final class ComponentsSnapshotTest extends TestCase
{
    use MatchesSnapshots;

    protected Environment $twig;

    private const SNAPSHOT_SOURCES = __DIR__ . '/components-fixtures';

    public function setUp(): void
    {
        $this->twig = TwigHelper::setup(self::SNAPSHOT_SOURCES, 'spirit');
    }

    /**
     * @dataProvider snapshotComponentsDataProvider
     */
    public function test(string $template): void
    {
        $html = $this->twig->render($template);

        $this->assertMatchesHtmlSnapshot($html);
    }

    /**
     * @return array<string, array<string>>
     */
    public function snapshotComponentsDataProvider(): array
    {
        $scanDirArray = scandir(self::SNAPSHOT_SOURCES);

        assert(is_array($scanDirArray));

        $scannedDirectory = array_diff($scanDirArray, ['..', '.']);
        $dataToProvide = [];

        foreach ($scannedDirectory as $fileName) {
            if (!is_dir(self::SNAPSHOT_SOURCES . '/' . $fileName)) {
              $dataToProvide[(string) $fileName] = [(string) $fileName];
            }
        }

        return $dataToProvide;
    }
}
