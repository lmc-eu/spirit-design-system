<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/')]
    public function index(): Response
    {
        return $this->render('default.html.twig', [ 'components' => $this->getWebTwigComponents() ]);
    }

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
