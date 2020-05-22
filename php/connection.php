<?php

$bdHost = 'localhost';
$bdLogin = '...';
$bdPass = '...';
$bdName = '...';

$connect = mysqli_connect($bdHost, $bdLogin, $bdPass, $bdName);
if (!$connect) {
    echo mysqli_connect_error();
    die;
}


