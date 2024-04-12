CREATE DATABASE kidopi;
USE kidopi;
CREATE TABLE kidopi.logData(
    id SERIAL PRIMARY KEY,
    timePost DATETIME NOT NULL,
    country VARCHAR(10) NOT NULL
);
