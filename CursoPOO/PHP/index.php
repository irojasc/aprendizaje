<?php

require_once('car.php');
require_once('uberX.php');
require_once('account.php');

$UberX = new uberX("CVB123", new account("Andres Herrera", "AND456"), "Chevrolet", "Spark");
$UberX->printDataCar();
$car = new Car("AW456", new Account("Andres Herrera", "AMS123"));
$car->printDataCar();