<?php
$servername = 'localhost:3306'; //endereço do mysql
$username = 'test'; //usuaŕio do banco de dados
$password = 'password123'; //senha
$dbname = 'kidopi'; //database

// Criar conexão
$connection = mysqli_connect($servername, $username, $password, $dbname);

// Verificar conexão
if ($connection->connect_error) {
    die("Conexão falhou: " . $connection->connect_error);
}
?>
