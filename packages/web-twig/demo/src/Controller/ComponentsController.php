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
        return $this->render(sprintf('@components/%s/%s.stories.twig', $component, $component));
    }
}
