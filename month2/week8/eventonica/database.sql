DROP DATABASE IF EXISTS eventonica;

CREATE DATABASE eventonica;

USE eventonica;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  events_attending VARCHAR(40) NULL,
  name VARCHAR(40) NOT NULL,
  location VARCHAR(40) NOT NULL
);

-- dummy data
-- no need to input user_id, auto generate 
INSERT INTO users (name, events_attending, location)
VALUES ('Maximilien Lê Jowett', 'Bon Iver', 'San Francisco');

INSERT INTO users (name, events_attending, location)
VALUES ('Jennifer Lê Jowett', 'Tash Sultana', 'Oakland');

CREATE TABLE events (
  event_id SERIAL PRIMARY KEY,
  host_name VARCHAR(45),
  date DATE NOT NULL,
  location VARCHAR(45) NULL,
  attendees VARCHAR(45)
);

-- dummy data
INSERT INTO events (host_name, date, location)
VALUES ('Tash Sultana', '2019-09-12', 'Berkeley');