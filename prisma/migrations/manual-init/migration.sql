CREATE TABLE IF NOT EXISTS `Play` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `subtitle` VARCHAR(255),
  `subtitle_en` VARCHAR(255),
  `productionDirector` VARCHAR(255),
  `productionDirector_en` VARCHAR(255),
  `artisticSupervision` VARCHAR(255),
  `artisticSupervision_en` VARCHAR(255),
  `musicalDirector` VARCHAR(255),
  `musicalDirector_en` VARCHAR(255),
  `regie` VARCHAR(255),
  `regie_en` VARCHAR(255),
  `produktion` VARCHAR(255),
  `produktion_en` VARCHAR(255),
  `kuenstlerischeBegleitung` VARCHAR(255),
  `kuenstlerischeBegleitung_en` VARCHAR(255),
  `musikalischeLeitung` VARCHAR(255),
  `musikalischeLeitung_en` VARCHAR(255),
  `mit` VARCHAR(255),
  `mit_en` VARCHAR(255),
  `sopranistin` VARCHAR(255),
  `sopranistin_en` VARCHAR(255),
  `sopranist` VARCHAR(255),
  `sopranist_en` VARCHAR(255),
  `bass` VARCHAR(255),
  `bass_en` VARCHAR(255),
  `chor` VARCHAR(255),
  `chor_en` VARCHAR(255),
  `orchester` VARCHAR(255),
  `orchester_en` VARCHAR(255),
  `foerderung` VARCHAR(255),
  `foerderung_en` VARCHAR(255),
  `mainDescription` TEXT,
  `mainDescription_en` TEXT,
  `extraText1` TEXT,
  `extraText1_en` TEXT,
  `extraText2` TEXT,
  `extraText2_en` TEXT,
  `extraText3` TEXT,
  `extraText3_en` TEXT,
  `description` TEXT,
  `imageUrl` VARCHAR(255),
  `videoUrl` VARCHAR(255),
  `imageCredit1` VARCHAR(255),
  `imageCredit2` VARCHAR(255),
  `imageCredit3` VARCHAR(255),
  `imageCredit4` VARCHAR(255),
  `imageCredit5` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
