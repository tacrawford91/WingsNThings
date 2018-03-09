DROP DATABASE IF EXISTS wings_db;

CREATE DATABASE wings_db;

Use wings_db;

CREATE TABLE wings (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    wings_name VARCHAR (255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id) 
);

