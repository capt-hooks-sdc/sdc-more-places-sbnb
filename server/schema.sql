-- Run psql -d [target_db_name] -U [user/owner_name] < [/path/to]schema.sql

CREATE SCHEMA recommend;
CREATE TABLE pics (
    id INT PRIMARY KEY,
    picURL text
);

CREATE TABLE places (
    id INT PRIMARY KEY,
    descrip text,
    picURL INT,
    numRating INT,
    roomType text,
    numBeds INT,
    price NUMERIC
);

CREATE TABLE toDos (
    id INT PRIMARY KEY,
    descript text,
    picURL INT,
    numRating INT,
    rating INT,
    price NUMERIC
);

ALTER TABLE places ADD FOREIGN KEY (picURL) REFERENCES pics;
ALTER TABLE toDos ADD FOREIGN KEY (picURL) REFERENCES pics;
