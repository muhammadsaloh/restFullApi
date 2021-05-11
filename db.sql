CREATE DATABASE sample_database;

CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    user_name VARCHAR(32) NOT NULL,
    user_age INT NOT NULL,
    referal_id INT NOT NULL REFERENCES referal(referal_id)
);


CREATE TABLE referal (
    referal_id BIGSERIAL NOT NULL PRIMARY KEY,
    referal_name VARCHAR(64) NOT NULL
);

INSERT INTO referal(referal_name) VALUES ('Instagram'), ('Facebook'), ('Telegram'), ("Banner"), ("Sarafan");


