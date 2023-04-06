<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelpersController extends AbstractController
{
    #[Route('/helpers')]
    public function index(): Response
    {
        return $this->render('helpers.html.twig', ['helpers' => $this->getWebTwigHelpers()]);
    }

    /**
     * @return Array<string>
     */
    private function getWebTwigHelpers(): array
    {
        $spiritWebTwigBundleHelpersPath = 'spirit-web-twig-bundle/src/Resources/helpers';

        $directories = new \DirectoryIterator('../../' . $spiritWebTwigBundleHelpersPath);
        $helpers = [];

        /** @var SplFileInfo $file */
        foreach ($directories as $fileinfo) {
            if ($fileinfo->isDir() && !$fileinfo->isDot()) {
                $helpers[] = $fileinfo->getBasename();
            }
        }

        // sort them alphabetically
        sort($helpers);

        return $helpers;
    }

    #[Route('/helpers/{helper}', name: 'helper_view')]
    public function show(string $helper): Response
    {
        return $this->render(sprintf('@helpers/%s/%s.stories.twig', $helper, $helper));
    }
}
