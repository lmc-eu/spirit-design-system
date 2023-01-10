<?php

  require_once('vendor/autoload.php');

  $loader = new \Twig\Loader\FilesystemLoader('./src/Resources/views');
  $twig = new \Twig\Environment($loader);

  echo $twig->render('Alert/Alert.twig');
