<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IconsController extends AbstractController
{
    #[Route('/icons', name: 'icons_index')]
    public function index(): Response
    {
        return $this->render('@icons/Icons.stories.twig', [ 'icons' => $this->getWebIcons() ]);
    }

    /**
     * @return Array<string>
     */
    private function getWebIcons(): array
    {
        $spiritWebIconsPath = 'spirit-web-twig-bundle/static';

        $directories = new \DirectoryIterator('../../' . $spiritWebIconsPath);
        $icons = [];

        /** @var SplFileInfo $file */
        foreach ($directories as $fileinfo) {
            if ($fileinfo->isFile() && !$fileinfo->isDot()){
                // remove .svg from end of the string
                $icons[] = substr($fileinfo->getBasename(), 0, -4);
            }
        }

        // sort them alphabetically
        sort($icons);

        return $icons;
    }
}
