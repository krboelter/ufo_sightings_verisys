
USE `test`;
DROP TABLE IF EXISTS `sightings`;

CREATE TABLE `sightings` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `sighting_date` DATE NOT NULL,
    `shape` varchar(50) NOT NULL DEFAULT '',
    `duration` INT NOT NULL DEFAULT 0,
    `comments` varchar(500) NOT NULL DEFAULT '',
    `city` varchar(50) NOT NULL DEFAULT '',
    `state` varchar(50) NOT NULL DEFAULT '',
    `latitude` varchar(50) NOT NULL DEFAULT '',
    `longitude` varchar(50) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# Dump of table Car
# ------------------------------------------------------------

DROP TABLE IF EXISTS `car`;

CREATE TABLE `car` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `make` varchar(50) NOT NULL DEFAULT '',
  `model` varchar(50) NOT NULL DEFAULT '',
  `year` int(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
