<?php

Class Stub {


    public function __construct(){

        if(empty($_GET))
            die(file_get_contents('products.json'));

        die(file_get_contents('product.json'));


    }

}

new Stub();