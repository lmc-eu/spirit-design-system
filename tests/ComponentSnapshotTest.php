<?php

declare(strict_types=1);

namespace Lmc\SpiritWebTwigBundle;

use Lmc\SpiritWebTwigBundle\Compiler\ComponentLexer;
use Lmc\SpiritWebTwigBundle\DependencyInjection\CompilerPass\OverrideServiceCompilerPass;
use Lmc\SpiritWebTwigBundle\DependencyInjection\SpiritWebTwigExtension;
use PHPUnit\Framework\TestCase;
use Spatie\Snapshots\MatchesSnapshots;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

final class ComponentsSnapshotTest extends TestCase
{
    use MatchesSnapshots;

    protected Environment $twig;

    private const SNAPSHOT_SOURCES = __DIR__ . '/components-fixtures';

    protected function setupTwig(?string $prefix = null): Environment
    {
        $alias = 'spirit';
        $loader = new FilesystemLoader(self::SNAPSHOT_SOURCES);
        $loader->addPath(SpiritWebTwigExtension::DEFAULT_COMPONENTS_PATH, SpiritWebTwigExtension::DEFAULT_PATH_ALIAS);

        $twig = new Environment($loader, [
            'cache' => false,
        ]);

        if ($prefix) {
            $twig->addGlobal(OverrideServiceCompilerPass::GLOBAL_PREFIX_TWIG_VARIABLE, $prefix);
        }

        $twig->setLoader($loader);
        $twig->setLexer(new ComponentLexer($twig, [], $alias));

        return $twig;
    }

    public function setUp(): void
    {
        $this->twig = $this->setupTwig();
    }

    /**
     * @dataProvider snapshotComponentsDataProvider
     */
    public function testShouldSnapshotComponents(string $template): void
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
            $dataToProvide[(string) $fileName] = [(string) $fileName];
        }

        return $dataToProvide;
    }
}
