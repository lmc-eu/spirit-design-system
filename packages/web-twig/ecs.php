<?php

declare(strict_types=1);

use Lmc\CodingStandard\Set\SetList;
use PhpCsFixer\Fixer\ClassNotation\ClassAttributesSeparationFixer;
use Symplify\EasyCodingStandard\Config\ECSConfig;

return ECSConfig::configure()
    ->withPaths([__DIR__ . '/src', __DIR__ . '/tests'])
    ->withRootFiles()
    ->withSets([
        SetList::ALMACAREER,
    ])
    // Specify elements separation.
    ->withConfiguredRule(
        ClassAttributesSeparationFixer::class,
        ['elements' => ['const' => 'none', 'method' => 'one', 'property' => 'none']],
    );
