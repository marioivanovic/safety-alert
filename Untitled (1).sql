CREATE TABLE firestations (
    id int(10) NOT NULL AUTO_INCREMENT,
    address VARCHAR(255),
    station VARCHAR(255),
  );

CREATE TABLE `users` (
  `id` int(10) primary key NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) DEFAULT NULL,
  `lastName` VARCHAR(255) DEFAULT NULL,
  `address` VARCHAR(255) DEFAULT NULL,
  `city` VARCHAR(255) DEFAULT NULL,
  `zip` VARCHAR(255) DEFAULT NULL,
  `phone` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) DEFAULT NULL
);

CREATE TABLE `alerts` (
  `id` int(10) primary key NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) DEFAULT NULL,
);

CREATE TABLE `medicalRecords` (
  `id` int(10) primary key NOT NULL AUTO_INCREMENT,
  `medications` VARCHAR(255) DEFAULT NULL,
  `allergies` VARCHAR(255) DEFAULT NULL,
  `birthdate` DATETIME(6) DEFAULT NULL
);

ALTER TABLE `medicalRecords` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

CREATE TABLE `firestations_alerts` (
  `firestations_alerts_id` uuid NOT NULL,
  `alerts_id` uuid NOT NULL,
  PRIMARY KEY (`firestations_alerts_id`, `alerts_id`)
);

ALTER TABLE `firestations_alerts` ADD FOREIGN KEY (`firestations_alerts_id`) REFERENCES `firestations` (`alerts_id`);

ALTER TABLE `firestations_alerts` ADD FOREIGN KEY (`alerts_id`) REFERENCES `alerts` (`id`);


CREATE TABLE `users_alerts` (
  `users_id` uuid NOT NULL,
  `alerts_users_id` uuid NOT NULL,
  PRIMARY KEY (`users_id`, `alerts_users_id`)
);

ALTER TABLE `users_alerts` ADD FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);

ALTER TABLE `users_alerts` ADD FOREIGN KEY (`alerts_users_id`) REFERENCES `alerts` (`users_id`);

INSERT INTO firestations (address, station)
VALUES ('1509 Culver St', '3');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Roger', 'Boyd', '1509 Culver St', 'Culver', '97451', '841-874-6513', 'jaboyd@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Felicia', 'Boyd', '1509 Culver St', 'Culver', '97451', '841-874-6544', 'jaboyd@email.com');


INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Jonanathan', 'Marrack', '29 15th St', 'Culver', '97451', '841-874-6513', 'drk@email.com');


INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Tessa', 'Carman', '834 Binoc Ave', 'Culver', '97451', '841-874-6512', 'tenz@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Peter', 'Duncan', '644 Gershwin Cir', 'Culver', '97451', '841-874-6512', 'jaboyd@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Foster', 'Shepard', '748 Townings Dr', 'Culver', '97451', '841-874-6544', 'jaboyd@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Tony', 'Cooper', '112 Steppes Pl', 'Culver', '97451', '841-874-6874', 'tcoop@ymail.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Lily', 'Cooper', '489 Manchester St', 'Culver', '97451', '841-874-9845', 'lily@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Sophia', 'Zemicks', '892 Downing Ct', 'Culver', '97451', '841-874-7878', 'soph@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Warren', 'Zemicks', '892 Downing Ct', 'Culver', '97451', '841-874-7512', 'ward@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Zach', 'Zemicks', '892 Downing Ct', 'Culver', '97451', '841-874-7512', 'zarc@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Reginold', 'Walker', '908 73rd St', 'Culver', '97451', '841-874-8547', 'reg@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Jamie', 'Peters', '908 73rd St', 'Culver', '97451', '841-874-8888', 'jpeter@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Ron', 'Peters', '112 Steppes Pl', 'Culver', '97451', '841-874-8888', 'jpeter@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Allison', 'Boyd', '112 Steppes Pl', 'Culver', '97451', '841-874-9888', 'aly@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Brian', 'Stelzer', '947 E. Rose Dr', 'Culver', '97451', '841-874-7784', 'bstel@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Shawna', 'Stelzer', '947 E. Rose Dr', 'Culver', '97451', '841-874-7784', 'ssanw@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Kendrik', 'Stelzer', '947 E. Rose Dr', 'Culver', '97451', '841-874-7784', 'bstel@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Clive', 'Ferguson', '748 Townings Dr', 'Culver', '97451', '841-874-6741', 'clivfd@email.com');

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('Eric', 'Cadigan', '951 LoneTree Rd', 'Culver', '97451', '841-874-7458', 'gramps@email.com');