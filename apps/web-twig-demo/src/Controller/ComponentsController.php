<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ComponentsController extends AbstractController
{
    #[Route('/components/{component}', name: 'component_view')]
    public function show(string $component): Response
    {
        return $this->render(sprintf('@components/%s/%s.stories.twig', $component, $component),  [ 'components' => $this->getWebTwigComponents() ]);
    }

    // TODO Refactor to abstract controller
    /**
     * @return Array<string>
     */
    private function getWebTwigComponents(): array
    {
        $spiritWebTwigBundleComponentsPath = 'spirit-web-twig-bundle/src/Resources/components';

        $directories = new \DirectoryIterator('../../' . $spiritWebTwigBundleComponentsPath);
        $components = [];

        /** @var SplFileInfo $file */
        foreach ($directories as $fileinfo) {
            // display only directories where stories exists
            if ($fileinfo->isDir() && !$fileinfo->isDot() && in_array('stories', scandir($fileinfo->getPathname()))) {
                $components[] = $fileinfo->getBasename();
            }
        }

        // sort them alphabetically
        sort($components);

        return $components;
    }
}
