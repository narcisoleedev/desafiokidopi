<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(200);
    exit;
}

include('connection.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $country = $data["country"];
    $sql = "INSERT INTO logData (timePost, country) VALUES (NOW(), '$country')";
    $result = $connection->query($sql);
    if ($result === TRUE) {
        echo "Resultados enviados com sucesso";
    } else {
        echo $connection->error;
    }
    $connection->close();
}

?>
