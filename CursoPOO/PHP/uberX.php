<?php
class uberX extends car{ //aqui se esta aplicando herencia
    public $brand;
    public $model;
    
    public function __construct($license, $driver, $brand, $model) {
        parent::__construct($license, $driver) //esto equivale al super de java
        $this->brand = $brand;
        $this->model = $model;
      }
}
?>