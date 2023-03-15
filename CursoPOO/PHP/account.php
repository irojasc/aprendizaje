<?php

class account {
  public $id;
  public $name;
  public $document;
  public $email;
  public $password;

  public function __construct($name, $document) {
    $this->name = $name;
    $this->document = $document;
  }
}