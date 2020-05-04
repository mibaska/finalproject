DROP DATABASE IF EXISTS villagers_db;
CREATE DATABASE villagers_db;

USE villagers_db;

CREATE TABLE villagers (
	villager_name varchar(255) NOT NULL,
  villager_species varchar(255) NOT NULL,
  villager_personality varchar(255) NOT NULL,
  villager_birthday datetime NOT NULL,
  villager_style_aleph varchar(255) NOT NULL,
  villager_style_beth varchar(255),
  id INTEGER NOT NULL,
  PRIMARY KEY (id)
);