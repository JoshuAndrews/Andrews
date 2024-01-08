<!DOCTYPE html>
<?php

    $servidor="localhost";
    $username="root";
    $password="";
    $banco="andrewsbd";
    
    $conexao = mysqli_connect($servidor, $username, $password, $banco);

   if (mysqli_connect_errno($conexao)) {
        echo "Não foi possível conectar ao banco de {$bdBanco}";
        die();
    }
