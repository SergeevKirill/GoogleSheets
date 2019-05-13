<?php

$country_code = $_POST['country_code'];

$states = [
    "ua" => [
        [
            "code" => "ua-kv",
            "name" => "Kievska obl"
        ],
        [
            "code" => "ua-lv",
            "name" => "Lvivska obl"
        ]
    ],
    "uk" => [
        [
            "code" => "uk-sc",
            "name" => "Scotland"
        ],
        [
            "code" => "uk-wl",
            "name" => "Wales"
        ]
    ],
    "us" => [
        [
            "code" => "us-wa",
            "name" => "Washington"
        ],
        [
            "code" => "is-il",
            "name" => "Illinois"
        ]
    ]
];

echo json_encode($states[$country_code]);
    