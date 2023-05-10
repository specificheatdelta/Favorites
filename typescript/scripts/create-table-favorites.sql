CREATE TABLE `favorite` (
  `id` CHAR(36) NOT NULL,
  `profileId` VARCHAR(255) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `category` TEXT NOT NULL,
  `contentId` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
