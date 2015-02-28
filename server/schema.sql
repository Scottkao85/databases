CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId int(10) NOT NULL auto_increment,
  username varchar(20),
  text varchar(200),
  createdAt timestamp(6),
  roomname varchar(20),
  PRIMARY KEY (objectId)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  username varchar(20) NOT NULL,
  screenname varchar(20),
  PRIMARY KEY (username)
);

CREATE TABLE rooms(
  roomname varchar(20),
  description varchar(100),
  PRIMARY KEY (roomname)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

