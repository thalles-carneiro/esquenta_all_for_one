CREATE TABLE IF NOT EXISTS `deck` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(30) NOT NULL,
  `description` VARCHAR(200) NOT NULL,
  `attr1` VARCHAR(3) NOT NULL,
  `attr2` VARCHAR(3) NOT NULL,
  `attr3` VARCHAR(3) NOT NULL,
  `image` VARCHAR(150) NOT NULL,
  `rare` ENUM('normal', 'raro', 'muito raro') NOT NULL,
  `trunfo` BOOL NOT NULL
);