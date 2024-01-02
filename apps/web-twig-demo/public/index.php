<?php

use App\Kernel;

require_once dirname(__DIR__).'/vendor/autoload_runtime.php';

return function (array $context) {
    $kernel = new Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']);
    $kernel->boot();

    if (isset($_GET['HIDE_TOOLBAR'])) {
        if ($kernel->getContainer()->has('profiler')) {
            $kernel->getContainer()->get('profiler')->disable();
        }
    }

    return $kernel;
};
