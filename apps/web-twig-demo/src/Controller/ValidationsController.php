<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ValidationsController extends AbstractController
{
    #[Route('/validations')]
    public function index(): Response
    {
        return $this->render('validations.html.twig');
    }
}
