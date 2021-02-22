<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{

    /** @Route("/", methods={"GET"}) */
    public function index()
    {
        return $this->render("index.html.twig");
    }

    /** @Route("/", methods={"POST"}) */
    public function indexPost()
    {
        $income = $_POST["income"];

        if(is_numeric($income)) {
            return $this->redirect("/calculate/$income");
        } else {
            $this->addFlash("danger", "Please type a number without any other characters like : 1200");
            return $this->render("index.html.twig");
        }
    }

    /** @Route("/calculate/{amount}")
     * @param $amount
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function calculate($amount)
    {
        return $this->render("index.html.twig", ["amount" => $amount]);
    }

}