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

INSERT INTO users (firstName, lastName, address, city, zip, phone, email)
VALUES ('John', 'Boyd', '1509 Culver St', 'Culver', '97451', '841-874-6512', 'jaboyd@email.com');