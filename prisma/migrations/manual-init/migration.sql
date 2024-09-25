CREATE TABLE IF NOT EXISTS `Play` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255),
  `title_en` VARCHAR(255),
  `subtitle1` VARCHAR(255),
  `subtitle1_en` VARCHAR(255),
  `subtitle2` VARCHAR(255),
  `subtitle2_en` VARCHAR(255),
  `subtitle3` VARCHAR(255),
  `subtitle3_en` VARCHAR(255),

  -- Positionen und deren Namen
  `position1` TEXT,
  `position1_name` TEXT,
  `position1_en` TEXT,
  `position1_name_en` TEXT,

  `position2` TEXT,
  `position2_name` TEXT,
  `position2_en` TEXT,
  `position2_name_en` TEXT,

  `position3` TEXT,
  `position3_name` TEXT,
  `position3_en` TEXT,
  `position3_name_en` TEXT,

  `position4` TEXT,
  `position4_name` TEXT,
  `position4_en` TEXT,
  `position4_name_en` TEXT,

  `position5` TEXT,
  `position5_name` TEXT,
  `position5_en` TEXT,
  `position5_name_en` TEXT,

  `position6` TEXT,
  `position6_name` TEXT,
  `position6_en` TEXT,
  `position6_name_en` TEXT,

  `position7` TEXT,
  `position7_name` TEXT,
  `position7_en` TEXT,
  `position7_name_en` TEXT,

  `position8` TEXT,
  `position8_name` TEXT,
  `position8_en` TEXT,
  `position8_name_en` TEXT,

  `position9` TEXT,
  `position9_name` TEXT,
  `position9_en` TEXT,
  `position9_name_en` TEXT,

  `position10` TEXT,
  `position10_name` TEXT,
  `position10_en` TEXT,
  `position10_name_en` TEXT,

  `position11` TEXT,
  `position11_name` TEXT,
  `position11_en` TEXT,
  `position11_name_en` TEXT,

  `position12` TEXT,
  `position12_name` TEXT,
  `position12_en` TEXT,
  `position12_name_en` TEXT,

  `position13` TEXT,
  `position13_name` TEXT,
  `position13_en` TEXT,
  `position13_name_en` TEXT,

  `position14` TEXT,
  `position14_name` TEXT,
  `position14_en` TEXT,
  `position14_name_en` TEXT,

  `position15` TEXT,
  `position15_name` TEXT,
  `position15_en` TEXT,
  `position15_name_en` TEXT,

  `position16` TEXT,
  `position16_name` TEXT,
  `position16_en` TEXT,
  `position16_name_en` TEXT,

  `position17` TEXT,
  `position17_name` TEXT,
  `position17_en` TEXT,
  `position17_name_en` TEXT,

  `position18` TEXT,
  `position18_name` TEXT,
  `position18_en` TEXT,
  `position18_name_en` TEXT,

  `position19` TEXT,
  `position19_name` TEXT,
  `position19_en` TEXT,
  `position19_name_en` TEXT,

  `position20` TEXT,
  `position20_name` TEXT,
  `position20_en` TEXT,
  `position20_name_en` TEXT,

  -- Positionen 21 bis 30
  `position21` TEXT,
  `position21_name` TEXT,
  `position21_en` TEXT,
  `position21_name_en` TEXT,

  `position22` TEXT,
  `position22_name` TEXT,
  `position22_en` TEXT,
  `position22_name_en` TEXT,

  `position23` TEXT,
  `position23_name` TEXT,
  `position23_en` TEXT,
  `position23_name_en` TEXT,

  `position24` TEXT,
  `position24_name` TEXT,
  `position24_en` TEXT,
  `position24_name_en` TEXT,

  `position25` TEXT,
  `position25_name` TEXT,
  `position25_en` TEXT,
  `position25_name_en` TEXT,

  `position26` TEXT,
  `position26_name` TEXT,
  `position26_en` TEXT,
  `position26_name_en` TEXT,

  `position27` TEXT,
  `position27_name` TEXT,
  `position27_en` TEXT,
  `position27_name_en` TEXT,

  `position28` TEXT,
  `position28_name` TEXT,
  `position28_en` TEXT,
  `position28_name_en` TEXT,

  `position29` TEXT,
  `position29_name` TEXT,
  `position29_en` TEXT,
  `position29_name_en` TEXT,

  `position30` TEXT,
  `position30_name` TEXT,
  `position30_en` TEXT,
  `position30_name_en` TEXT,

  -- Beschreibungen und zusätzliche Felder
  `descriptionleft1` TEXT,
  `descriptionleft1_en` TEXT,
  `descriptionleft2` TEXT,
  `descriptionleft2_en` TEXT,
  `descriptionleft3` TEXT,
  `descriptionleft3_en` TEXT,
  `descriptionleft4` TEXT,
  `descriptionleft4_en` TEXT,

  `textright1` TEXT,
  `textright1_en` TEXT,
  `textright2` TEXT,
  `textright2_en` TEXT,
  `textright3` TEXT,
  `textright3_en` TEXT,
  `textright4` TEXT,
  `textright4_en` TEXT,

  -- Bilder und Credits
  `topImage1` TEXT,
  `topImage2` TEXT,
  `topImage3` TEXT,
  `imageUrl` TEXT,
  `imageUrl1` TEXT,
  `imageUrl2` TEXT,
  `imageUrl3` TEXT,
  `imageUrl4` TEXT,
  `imageUrl5` TEXT,
  `imageUrl6` TEXT,
  `imageUrl7` TEXT,
  `imageUrl8` TEXT,
  `imageUrl9` TEXT,
  `imageUrl10` TEXT,
  `imageCredit1` TEXT,
  `imageCredit2` TEXT,
  `imageCredit3` TEXT,
  `imageCredit4` TEXT,
  `imageCredit5` TEXT,
  `imageCredit6` TEXT,
  `imageCredit7` TEXT,
  `imageCredit8` TEXT,
  `imageCredit9` TEXT,
  `imageCredit10` TEXT,

  -- Mobile Images
  `mobileImageUrl1` TEXT,
  `mobileImageUrl2` TEXT,
  `mobileImageUrl3` TEXT,
  `mobileImageUrl4` TEXT,
  `mobileImageUrl5` TEXT,
  `mobileImageCredit1` TEXT,
  `mobileImageCredit2` TEXT,
  `mobileImageCredit3` TEXT,
  `mobileImageCredit4` TEXT,
  `mobileImageCredit5` TEXT,

  -- Video und Logo
  `videoUrl1` TEXT,
  `videoCredit1` TEXT,
  `logo1` TEXT,
  `logo2` TEXT,
  `logo3` TEXT,

  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
