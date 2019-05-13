<?php

$state_code = $_POST['state_code'];

$cities = [
    "ua-kv" => [
        [
            "code" => "kv",
            "city"=> "Kiev"
        ],
        [
            "code" => "v",
            "city"=> "Iev"
        ]
    ],
    "ua-lv" => [
        [
            "code" => "lv",
            "city"=> "Lviv"
        ],
        [
            "code" => "v",
            "city"=> "Viv"
        ]
    ],
    "uk-sc" => [
        [
            "code" => "sc",
            "city"=> "Scotland"
        ],
        [
            "code" => "c",
            "city"=> "Cotland"
        ]
    ],
    "uk-wl" => [
        [
            "code" => "wl",
            "city"=> "Wales"
        ],
        [
            "code" => "l",
            "city"=> "Ales"
        ]
    ],
    "us-wa" => [
        [
            "code" => "wa",
            "city"=> "Washington"
        ],
        [
            "code" => "a",
            "city"=> "Ashington"
        ]
    ],
    "us-il" => [
        [
            "code" => "il",
            "city"=> "Illinois"
        ],
        [
            "code" => "l",
            "city"=> "Llinois"
        ]
    ]
];

echo json_encode($cities[$state_code]);