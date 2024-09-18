-- ADDING USERS
CREATE TABLE users(
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    phone_number INTEGER NOT NULL
);

INSERT INTO 
    users(name, phone_number)
VALUES
        ('Ivan', 123456789);  