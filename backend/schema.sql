
create DATABASE life_blood;
USE life_blood;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  bloodgroup VARCHAR(10) NOT NULL,
  phone BIGINT NOT NULL,
  share boolean,
  avaiability boolean
  
);

CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  patientname VARCHAR(100) NOT NULL,
  location VARCHAR(100) NOT NULL,
  bloodgroup VARCHAR(10) NOT NULL,
  phone BIGINT NOT NULL,  
);

