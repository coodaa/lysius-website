-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: w01b5574.kasserver.com    Database: d0410862
-- ------------------------------------------------------
-- Server version	5.5.5-10.5.27-MariaDB-ubu2004-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `About`
--

DROP TABLE IF EXISTS `About`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `About` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `textField1` text DEFAULT NULL,
  `textField1_en` text DEFAULT NULL,
  `textField2` text DEFAULT NULL,
  `textField2_en` text DEFAULT NULL,
  `textField3` text DEFAULT NULL,
  `textField3_en` text DEFAULT NULL,
  `textField4` text DEFAULT NULL,
  `textField4_en` text DEFAULT NULL,
  `textField5` text DEFAULT NULL,
  `textField5_en` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `About`
--

LOCK TABLES `About` WRITE;
/*!40000 ALTER TABLE `About` DISABLE KEYS */;
INSERT INTO `About` VALUES (1,'Der gemeinnützige Verein Lysius verbindet eine Initiative von KünstlerInnen und ForscherInnen an der Schnittstelle von Musik, Theater, Gesellschaft und Politik. Ziel des Vereins ist die interdisziplinäre, transnationale Verbindung und Förderung von Kunst und Fortschritt im Sinne der Völkerverständigung. Lysius e.V. ist als gemeinnütziger Verein beim Amtsgericht Berlin Charlottenburg unter der Registernummer VR37856B eingetragen.','Lysius connects an initiative of artists and researchers at the intersection of music, theater, society and politics. The Associations aim is to strengthen art, society and progress in the spirit of transnational understanding of the people by interweaving performance cultures. Lysius e. V. is registered as a non-profit organization at the district court of Berlin Charlottenburg, its registration number is VR37856B. ','','',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `About` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_de` varchar(255) DEFAULT NULL,
  `position_en` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
INSERT INTO `Contact` VALUES (1,'Telefon','Telephone','+49 (0)176 8044 1754'),(2,'Email','Email','production@lysius.org'),(3,'Presse','Press ','presse@lysius.org'),(5,'Adresse','Adress','Lenaustrasse 3-4,\r\n12047 Berlin'),(6,'U-Bahn','Underground/train','Hermannplatz U8, U7, Bus 265, 171, N7, N8 ');
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Legal`
--

DROP TABLE IF EXISTS `Legal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Legal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL,
  `content` text DEFAULT NULL,
  `content_en` text DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Legal`
--

LOCK TABLES `Legal` WRITE;
/*!40000 ALTER TABLE `Legal` DISABLE KEYS */;
INSERT INTO `Legal` VALUES (1,'Datenschutz','Datenschutzerklärung für Lysius e.V.\r\n1. Einleitung\r\nDer Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Datenschutzerklärung erläutert, welche personenbezogenen Daten wir erheben und wie wir diese verwenden.\r\n\r\n2. Verantwortliche Stelle\r\nVerantwortliche Stelle für die Datenverarbeitung ist Lysius e.V. [Adresse des Vereins].\r\n\r\n3. Erhebung und Verarbeitung personenbezogener Daten\r\nWir erheben und verarbeiten personenbezogene Daten nur, soweit dies für die Bereitstellung unserer Website oder die Teilnahme an unseren Veranstaltungen erforderlich ist.\r\n\r\n4. Ihre Rechte\r\nSie haben das Recht, jederzeit Auskunft über Ihre bei uns gespeicherten Daten zu erhalten sowie deren Berichtigung oder Löschung zu verlangen.\r\n\r\n5. Schlussbestimmungen\r\nDiese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden. Änderungen werden auf unserer Website veröffentlicht.','Privacy Policy for Lysius e.V.\r\n\r\n1. Introduction\r\nProtecting your personal data is important to us. This privacy policy explains which personal data we collect and how we use it.\r\n\r\n2. Responsible Entity\r\nThe entity responsible for data processing is Lysius e.V. [Association\'s address].\r\n\r\n3. Collection and Processing of Personal Data\r\nWe collect and process personal data only to the extent necessary for providing our website or for participation in our events.\r\n\r\n4. Your Rights\r\nYou have the right to request information about your stored data at any time and to request the correction or deletion of this data.\r\n\r\n5. Final Provisions\r\nThis privacy policy may be updated from time to time. Changes will be published on our website.','2024-09-05 12:35:28'),(2,'Impressum','Angaben gemäß § 5 TMG:\r\n\r\nLysius e.V.\r\nStraße, Hausnummer\r\nPLZ, Ort\r\nDeutschland\r\n\r\nVertreten durch:\r\nVorstand: [Name des Vorstands], [Position]\r\nE-Mail: [E-Mail-Adresse des Vorstands]\r\n\r\nKontakt:\r\nTelefon: [Telefonnummer]\r\nE-Mail: [E-Mail-Adresse des Vereins]\r\nWebsite: [URL der Website]\r\n\r\nVereinsregister:\r\nEingetragen im Vereinsregister des Amtsgerichts [Name des Amtsgerichts]\r\nRegisternummer: [Registernummer]\r\n\r\nVerantwortlich für den Inhalt nach § 55 Abs. 2 RStV:\r\n[Name des Verantwortlichen]\r\nStraße, Hausnummer\r\nPLZ, Ort\r\nDeutschland\r\n\r\nHaftungsausschluss:\r\nTrotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.\r\n\r\nUrheberrecht:\r\nDie durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.\r\n\r\n','Information according to §5 TMG:\r\n\r\nLysius e.V.\r\nStreet, House number\r\nZIP code, City\r\nGermany\r\n\r\nRepresented by:\r\nBoard: [Name of the board], [Position]\r\nEmail: [Board\'s email address]\r\n\r\nContact:\r\nPhone: [Phone number]\r\nEmail: [Association\'s email address]\r\nWebsite: [URL of the website]\r\n\r\nAssociation register:\r\nRegistered at the local court [Name of the court]\r\nRegistration number: [Registration number]\r\n\r\nResponsible for content according to Â§ 55 Abs. 2 RStV:\r\n[Name of the responsible person]\r\nStreet, House number\r\nZIP code, City\r\nGermany\r\n\r\nDisclaimer:\r\nDespite careful control of the content, we assume no liability for the content of external links. The content of linked pages is the sole responsibility of their operators.\r\n\r\nCopyright:\r\nThe content and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator.','2024-09-05 13:01:04');
/*!40000 ALTER TABLE `Legal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Members`
--

DROP TABLE IF EXISTS `Members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position_de` varchar(255) DEFAULT NULL,
  `position_en` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Members`
--

LOCK TABLES `Members` WRITE;
/*!40000 ALTER TABLE `Members` DISABLE KEYS */;
INSERT INTO `Members` VALUES (1,'Leitung','Director','Fabiane Kemmann'),(2,'Stellvertretende Leitung','Vice director','Angela Haardt'),(3,'Musikalische Leitung','Musical director','Peter Aidu'),(5,'Schauspiel','Acting department','Margarita Breitkreiz'),(6,'Dramaturgie','Dramaturgie','Satchel Reemtsma'),(7,'Design','Design','Leonard Nikita Neumann'),(18,'Programmierung','Coding','Florian Schneider');
/*!40000 ALTER TABLE `Members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `News`
--

DROP TABLE IF EXISTS `News`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `News` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news_de` text DEFAULT NULL,
  `news_en` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `News`
--

LOCK TABLES `News` WRITE;
/*!40000 ALTER TABLE `News` DISABLE KEYS */;
INSERT INTO `News` VALUES (1,'+++ Syntax in Space upcoming +++','+++ Syntax in Space upcoming +++');
/*!40000 ALTER TABLE `News` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Play`
--

DROP TABLE IF EXISTS `Play`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Play` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `title_en` varchar(100) DEFAULT NULL,
  `subtitle1` varchar(100) DEFAULT NULL,
  `subtitle1_en` varchar(100) DEFAULT NULL,
  `subtitle2` varchar(100) DEFAULT NULL,
  `subtitle2_en` varchar(100) DEFAULT NULL,
  `subtitle3` varchar(100) DEFAULT NULL,
  `subtitle3_en` varchar(100) DEFAULT NULL,
  `position1` varchar(120) DEFAULT NULL,
  `position1_name` varchar(120) DEFAULT NULL,
  `position1_en` varchar(120) DEFAULT NULL,
  `position1_name_en` varchar(120) DEFAULT NULL,
  `position2` varchar(120) DEFAULT NULL,
  `position2_name` varchar(120) DEFAULT NULL,
  `position2_en` varchar(120) DEFAULT NULL,
  `position2_name_en` varchar(120) DEFAULT NULL,
  `position3` varchar(120) DEFAULT NULL,
  `position3_name` varchar(120) DEFAULT NULL,
  `position3_en` varchar(120) DEFAULT NULL,
  `position3_name_en` varchar(120) DEFAULT NULL,
  `position4` varchar(120) DEFAULT NULL,
  `position4_name` varchar(120) DEFAULT NULL,
  `position4_en` varchar(120) DEFAULT NULL,
  `position4_name_en` varchar(120) DEFAULT NULL,
  `position5` varchar(120) DEFAULT NULL,
  `position5_name` varchar(120) DEFAULT NULL,
  `position5_en` varchar(120) DEFAULT NULL,
  `position5_name_en` varchar(120) DEFAULT NULL,
  `position6` varchar(120) DEFAULT NULL,
  `position6_name` varchar(120) DEFAULT NULL,
  `position6_en` varchar(120) DEFAULT NULL,
  `position6_name_en` varchar(120) DEFAULT NULL,
  `position7` varchar(120) DEFAULT NULL,
  `position7_name` varchar(120) DEFAULT NULL,
  `position7_en` varchar(120) DEFAULT NULL,
  `position7_name_en` varchar(120) DEFAULT NULL,
  `position8` varchar(120) DEFAULT NULL,
  `position8_name` varchar(120) DEFAULT NULL,
  `position8_en` varchar(120) DEFAULT NULL,
  `position8_name_en` varchar(120) DEFAULT NULL,
  `position9` varchar(120) DEFAULT NULL,
  `position9_name` varchar(120) DEFAULT NULL,
  `position9_en` varchar(120) DEFAULT NULL,
  `position9_name_en` varchar(120) DEFAULT NULL,
  `position10` varchar(120) DEFAULT NULL,
  `position10_name` varchar(120) DEFAULT NULL,
  `position10_en` varchar(120) DEFAULT NULL,
  `position10_name_en` varchar(120) DEFAULT NULL,
  `position11` varchar(120) DEFAULT NULL,
  `position11_name` varchar(120) DEFAULT NULL,
  `position11_en` varchar(120) DEFAULT NULL,
  `position11_name_en` varchar(120) DEFAULT NULL,
  `position12` varchar(120) DEFAULT NULL,
  `position12_name` varchar(120) DEFAULT NULL,
  `position12_en` varchar(120) DEFAULT NULL,
  `position12_name_en` varchar(120) DEFAULT NULL,
  `position13` varchar(120) DEFAULT NULL,
  `position13_name` varchar(120) DEFAULT NULL,
  `position13_en` varchar(120) DEFAULT NULL,
  `position13_name_en` varchar(120) DEFAULT NULL,
  `position14` varchar(120) DEFAULT NULL,
  `position14_name` varchar(120) DEFAULT NULL,
  `position14_en` varchar(120) DEFAULT NULL,
  `position14_name_en` varchar(120) DEFAULT NULL,
  `position15` varchar(120) DEFAULT NULL,
  `position15_name` varchar(120) DEFAULT NULL,
  `position15_en` varchar(120) DEFAULT NULL,
  `position15_name_en` varchar(120) DEFAULT NULL,
  `position16` varchar(120) DEFAULT NULL,
  `position16_name` varchar(120) DEFAULT NULL,
  `position16_en` varchar(120) DEFAULT NULL,
  `position16_name_en` varchar(120) DEFAULT NULL,
  `position17` varchar(120) DEFAULT NULL,
  `position17_name` varchar(120) DEFAULT NULL,
  `position17_en` varchar(120) DEFAULT NULL,
  `position17_name_en` varchar(120) DEFAULT NULL,
  `position18` varchar(120) DEFAULT NULL,
  `position18_name` varchar(120) DEFAULT NULL,
  `position18_en` varchar(120) DEFAULT NULL,
  `position18_name_en` varchar(120) DEFAULT NULL,
  `position19` varchar(120) DEFAULT NULL,
  `position19_name` varchar(120) DEFAULT NULL,
  `position19_en` varchar(120) DEFAULT NULL,
  `position19_name_en` varchar(120) DEFAULT NULL,
  `position20` varchar(120) DEFAULT NULL,
  `position20_name` varchar(120) DEFAULT NULL,
  `position20_en` varchar(120) DEFAULT NULL,
  `position20_name_en` varchar(120) DEFAULT NULL,
  `position21` varchar(120) DEFAULT NULL,
  `position21_name` varchar(120) DEFAULT NULL,
  `position21_en` varchar(120) DEFAULT NULL,
  `position21_name_en` varchar(120) DEFAULT NULL,
  `position22` varchar(120) DEFAULT NULL,
  `position22_name` varchar(120) DEFAULT NULL,
  `position22_en` varchar(120) DEFAULT NULL,
  `position22_name_en` varchar(120) DEFAULT NULL,
  `position23` varchar(120) DEFAULT NULL,
  `position23_name` varchar(120) DEFAULT NULL,
  `position23_en` varchar(120) DEFAULT NULL,
  `position23_name_en` varchar(120) DEFAULT NULL,
  `position24` varchar(120) DEFAULT NULL,
  `position24_name` varchar(120) DEFAULT NULL,
  `position24_en` varchar(120) DEFAULT NULL,
  `position24_name_en` varchar(120) DEFAULT NULL,
  `position25` varchar(120) DEFAULT NULL,
  `position25_name` varchar(120) DEFAULT NULL,
  `position25_en` varchar(120) DEFAULT NULL,
  `position25_name_en` varchar(120) DEFAULT NULL,
  `position26` varchar(120) DEFAULT NULL,
  `position26_name` varchar(120) DEFAULT NULL,
  `position26_en` varchar(120) DEFAULT NULL,
  `position26_name_en` varchar(120) DEFAULT NULL,
  `position27` varchar(120) DEFAULT NULL,
  `position27_name` varchar(120) DEFAULT NULL,
  `position27_en` varchar(120) DEFAULT NULL,
  `position27_name_en` varchar(120) DEFAULT NULL,
  `position28` varchar(120) DEFAULT NULL,
  `position28_name` varchar(120) DEFAULT NULL,
  `position28_en` varchar(120) DEFAULT NULL,
  `position28_name_en` varchar(120) DEFAULT NULL,
  `position29` varchar(120) DEFAULT NULL,
  `position29_name` varchar(120) DEFAULT NULL,
  `position29_en` varchar(120) DEFAULT NULL,
  `position29_name_en` varchar(120) DEFAULT NULL,
  `position30` varchar(120) DEFAULT NULL,
  `position30_name` varchar(120) DEFAULT NULL,
  `position30_en` varchar(120) DEFAULT NULL,
  `position30_name_en` varchar(120) DEFAULT NULL,
  `descriptionleft1` text DEFAULT NULL,
  `descriptionleft1_en` text DEFAULT NULL,
  `descriptionleft2` text DEFAULT NULL,
  `descriptionleft2_en` text DEFAULT NULL,
  `descriptionleft3` text DEFAULT NULL,
  `descriptionleft3_en` text DEFAULT NULL,
  `descriptionleft4` text DEFAULT NULL,
  `descriptionleft4_en` text DEFAULT NULL,
  `textright1` text DEFAULT NULL,
  `textright1_en` text DEFAULT NULL,
  `textright2` text DEFAULT NULL,
  `textright2_en` text DEFAULT NULL,
  `textright3` text DEFAULT NULL,
  `textright3_en` text DEFAULT NULL,
  `textright4` text DEFAULT NULL,
  `textright4_en` text DEFAULT NULL,
  `topImage1` text DEFAULT NULL,
  `topImage2` text DEFAULT NULL,
  `topImage3` text DEFAULT NULL,
  `topImage4` text DEFAULT NULL,
  `topImage5` text DEFAULT NULL,
  `topImage6` text DEFAULT NULL,
  `imageUrl1` text DEFAULT NULL,
  `imageUrl2` text DEFAULT NULL,
  `imageUrl3` text DEFAULT NULL,
  `imageUrl4` text DEFAULT NULL,
  `imageUrl5` text DEFAULT NULL,
  `imageUrl6` text DEFAULT NULL,
  `imageUrl7` text DEFAULT NULL,
  `imageUrl8` text DEFAULT NULL,
  `imageUrl9` text DEFAULT NULL,
  `imageUrl10` text DEFAULT NULL,
  `imageCredit1_de` text DEFAULT NULL,
  `imageCredit1_en` text DEFAULT NULL,
  `imageCredit2_de` text DEFAULT NULL,
  `imageCredit2_en` text DEFAULT NULL,
  `imageCredit3_de` text DEFAULT NULL,
  `imageCredit3_en` text DEFAULT NULL,
  `imageCredit4_de` text DEFAULT NULL,
  `imageCredit4_en` text DEFAULT NULL,
  `imageCredit5_de` text DEFAULT NULL,
  `imageCredit5_en` text DEFAULT NULL,
  `imageCredit6_de` text DEFAULT NULL,
  `imageCredit6_en` text DEFAULT NULL,
  `imageCredit7_de` text DEFAULT NULL,
  `imageCredit7_en` text DEFAULT NULL,
  `imageCredit8_de` text DEFAULT NULL,
  `imageCredit8_en` text DEFAULT NULL,
  `imageCredit9_de` text DEFAULT NULL,
  `imageCredit9_en` text DEFAULT NULL,
  `imageCredit10_de` text DEFAULT NULL,
  `imageCredit10_en` text DEFAULT NULL,
  `topMobileImage1` text DEFAULT NULL,
  `topMobileImage2` text DEFAULT NULL,
  `topMobileImage3` text DEFAULT NULL,
  `topMobileImage4` text DEFAULT NULL,
  `topMobileImage5` text DEFAULT NULL,
  `topMobileImage6` text DEFAULT NULL,
  `videoUrl1` text DEFAULT NULL,
  `videoCredit1` text DEFAULT NULL,
  `logo1` text DEFAULT NULL,
  `logo2` text DEFAULT NULL,
  `logo3` text DEFAULT NULL,
  `logo4` text DEFAULT NULL,
  `logo5` text DEFAULT NULL,
  `logo6` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topMobileImage1` (`topMobileImage1`(768)),
  KEY `topMobileImage1_2` (`topMobileImage1`(768))
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Play`
--

LOCK TABLES `Play` WRITE;
/*!40000 ALTER TABLE `Play` DISABLE KEYS */;
INSERT INTO `Play` VALUES (3,'SYNTAX IN SPACE - FILM','SYNTAX IN SPACE - FILM','Kurzfilm','Short','','','','','','','','','','','','','Regie','Fabiane Kemmann','Director','Fabiane Kemmann','Produktion','Fabiane Kemmann, Michael Donath','Producer','Fabiane Kemmann, Michael Donath','Mit','Lutz Förster, Pierre Geagea, Alexandra Aidu','Starring','Lutz Förster, Pierre Geagea, Alexandra Aidu','Musik','Nico van Wersch','Music','Nico van Wersch','Kamera, Postproduktion','Aleko Gotscheff','Camera, Postproduction','Aleko Gotscheff','Text','Heiner Müller, Fabiane Kemmann, Franz Kafka','Text','Heiner Müller, Fabiane Kemmann, Franz Kafka','','','','','Kostüm ','Nina Kroschinske','Costume','Nina Kroschinske','Bühne','Christian Kleemann','Stagedesign','Christian Kleemann','Untertitel','Ann Cotten','Subtitel','Ann Cotten','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,'\r\n','\r\n','','','','','','','Im Bruchteil einer Sekunde, kurz vor seinem Tod, sieht SYNTAX IN SPACE’s Protagonist sein Leben wie einen Traum vor sich. Er sitzt im Backstage des Theaters einer verlassenen Stadt. Da erblickt er sich selbst, wie er als Kind in Rüstung, Harnisch und Visier auf sich zugeht. In dem Augenblick, in dem er sein Gesicht sieht, gibt er sich der Begegnung hin. Er geht in den Raum seiner inneren Landschaft und seiner Erinnerung; er sieht sich als jungen Mann in der Nähe einer Frau. Weiter in die verlassene Stadt wandernd stößt er auf die Geschichte seines Landes. Als er sich fragt: „Warum wachst du?“, spürt er ihre Verbindung zur Gegenwart und wacht auf mit der Gewissheit: „Einer muss wachen.“\r\n\r\nIn SYNTAX IN SPACE verschmelzen verschiedene Welten und ihre einzigartigen Sprachen zu einem Ganzen – durch die Kraft des gesprochenen und gebärdeten Worts, die Kraft von Körpersprache im Raum und die Kraft des Films. Gemeinsam formen sie das stille Enigma luzider Träume, das widersprüchliche Erleben der inneren Landschaft, durch die der von Lutz Förster verkörperte Protagonist in Gedanken wandert. In der Compagnie von Pina Bausch tanzte Förster über 40 Jahre ein Solo in Gebärdensprache und zum ersten Mal seit seinem Verlassen der Compagnie 2016 kehrt er für SYNTAX IN SPACE zu auf Gebärdensprache basierenden Künsten zurück – in Begegnung mit dem gehörlosen Tänzer Pierre Geagea und der jungen Tänzerin Alexandra Aidu. Gleichzeitig spricht er von der Wanderung des Protagonisten in den Worten von Heiner Müller, Franz Kafka und Fabiane Kemmann. Sie gliedern den Film in drei Akte, zu einem in Schichten komponierten Soundtrack von Nico van Wersch, gedreht in der nahe Berlin gelegenen, ehemals größten sowjetischen Militäranlage außerhalb der Sowjetunion, die heute verlassen ist.','SYNTAX IN SPACE\'s protagonist, in a split second close to his death, sees his life with his inner eye like a dream. Sitting in the backstage area of the theater in an abandoned city, he watches his own self as a child, in armor, carapace, and visor, walking towards himself. As he sees his face, he gradually surrenders to the encounter with his inner landscape. He begins to walk into the space of this lucid dream, his memories; he sees himself as a young man in the vicinity of a woman. Wandering further into the abandoned city, he comes across his country’s history. Asking himself, „Why do you wake?“ he senses its connection to the present and wakes up to the certainty, „Someone has to wake.“ \r\n\r\nIn SYNTAX IN SPACE disparate worlds and their unique languages coalesce into one, through the power of the spoken as well as the signed word, the power of the language of the body in space, and the power of film. Together they forge the silent enigma of the language of dreams and the contradictory experience of the inner landscape that the protagonist, played by Lutz Förster, wanders in his mind. For over 40 years, Förster performed a solo in sign language in the Company of Pina Bausch, and after leaving it in 2016, he first returns to the arts of signed expression for SYNTAX IN SPACE in an encounter with the deaf dancer Pierre Geagea and the young dancer Alexandra Aidu. Simultaneously, he depicts the protagonists wanderings in the spoken words of Heiner Müller, Franz Kafka, and Fabiane Kemmann. They structure the film in three acts that are set to a soundtrack by Nico van Wersch, composed in layers of music and located near Berlin in the formerly largest Soviet military facility outside the Soviet Union, now abandoned.\r\n','','','',NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732288585/sis_short_topimage_01_ydz9zn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732288590/sis_short_topimage_02_viygmh.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732288589/sis_short_topimage_03_td296i.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732288587/sis_short_topimage_04_exwkq0.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732288587/sis_short_topimage_05_noyxo8.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732288592/sis_short_topimage_06_gggqkx.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293713/sis_short_image_url_01_yjtgr9.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293723/sis_short_image_url_02_byphqv.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293712/sis_short_image_url_03_exksxb.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1734542837/landingpage_kafka_III_max_head_rphnj0.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293715/sis_short_image_url_05_pxsxes.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293717/sis_short_image_url_06_lv281e.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293722/sis_short_image_url_07_rlzscb.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293720/sis_short_image_url_08_foctyc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293718/sis_short_image_url_09_w0rotc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732293725/sis_short_image_url_10_r0vdsw.jpg','Syntax in Space - Lutz Förster','Syntax in Space - Lutz Förster','Syntax in Space - Alexandra Aidu, Pierre Geagea','Syntax in Space - Alexandra Aidu, Pierre Geagea','Syntax in Space - Pierre Geagea','Syntax in Space - Pierre Geagea','Syntax in Space - Alexandra Aidu','Syntax in Space - Alexandra Aidu','Syntax in Space - Lutz Förster, Pierre Geagea','Syntax in Space - Lutz Förster, Pierre Geagea','Syntax in Space - Alexandra Aidu','Syntax in Space - Alexandra Aidu','Syntax in Space - Lutz Förster','Syntax in Space - Lutz Förster','Syntax in Space - Lutz Förster, Pierre Geagea, Alexandra Aidu','Syntax in Space - Lutz Förster, Pierre Geagea, Alexandra Aidu','Syntax in Space - Lutz Förster, Pierre Geagea, Alexandra Aidu','Syntax in Space - Lutz Förster, Pierre Geagea, Alexandra Aidu','Syntax in Space - Lutz Förster','Syntax in Space - Lutz Förster','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294200/sis_short_mobile_topimage_04_mcezcn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294204/sis_short_mobile_topimage_02_iameea.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294202/sis_short_mobile_topimage_03_we7dqe.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294206/sis_short_mobile_topimage_01_qweteq.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294199/sis_short_mobile_topimage_05_lz3irn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732294198/sis_short_mobile_topimage_06_iezm6f.jpg','','','https://res.cloudinary.com/dhkulbiok/image/upload/v1726823496/purple-foerderer-2021-logo-senatsverwaltung-kultur-europa-300x200_hzyvaa.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1726826933/241649588_4050262508434157_6628268476070537717_n_jthrbf.png','','','',''),(5,'SYNTAX IN SPACE - APP','SYNTAX IN SPACE - APP','Audiovisuelle App','Audiovisual App','Digitale Kunst','Digital Art','','','Nach einem originalen Konzept von','Michael Donath','After an original concept of ','Michael Donath','Künstlerische Leitung','Michael Donath, Fabiane Kemmann','Artistic direction','Michael Donath, Fabiane Kemmann','','','','','Regie','Fabiane Kemmann','Director','Fabiane Kemmann','Musik','Nico van Wersch','Music','Nico van Wersch','Kamera, Postproduktion','Aleko Gotscheff','Camera, Postproduction','Aleko Gotscheff','Mit','Lutz Förster, Pierre Geagea, Alexandra Aidu','Dancers sign dance/poetry','Lutz Förster, Pierre Geagea, Alexandra Aidu','Text','Heiner Müller, Fabiane Kemmann, Franz Kafka','Text','Heiner Müller, Fabiane Kemmann, Franz Kafka','Übersetzung','Ann Cotten','Translation','Ann Cotten','Grafik','Arno Waschk','Graphics','Arno Waschk','Choreografie','Pierre Geagea, Anna Seymour','Choreography','Pierre Geagea, Anna Seymour','Bühnenbild','Christian Kleemann','Set design','Christian Kleemann','Kostüm','Nina Kroschinske','Costume','Nina Kroschinske','Leitung Design ','Michael Donath','Graphic direction','Michael Donath','Programmierung','Benny Lichtner','Coding','Benny Lichtner','Logo, Typographie','Leonard Nikita Neumann','Logo, Typography','Leonard Nikita Neumann','Zusätzlicher Support','Gerd Sälhoff','Additional Support','Gerd Sälhoff','Tonmischung','Reimund Hornich','Sound Mixing','Reimund Hornich','Dramaturgische Beratung','Anja Quickert','Dramaturgy consultant','Anja Quickert','Besonderer Dank gilt ','Harriet McKenzie-Donovan, Nesrine Kamel, Zoe McWhinnie','Special thanks to ','Harriet McKenzie-Donovan, Nesrine Kamel, Zoe McWhinnie','','','','','','',NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,'\r\n','\r\n','','','','','','','Wie in einen dunklen Wald zu gehen ist es, diese App zu betreten; klirrende, kontrastreiche Schönheit und Quader mehrerer Schichten von Arbeiten, die sich mit jeder Bewegung zueinander und im Verhältnis zurm Userni verschieben, wie Bäume eben, wenn man geht. Instinktiv, wie man Eiszapfen abbricht und abschleckt, bewegt man sich, bewegt die Squares, und wenn sich zwei übereinanderlegen: ein Jackpot, gar nicht gesucht. Hände, wechselnd, Körper, Licht, und Zeit: ein Wald, der sich einem ins Gedächtnis pflanzt, wie um später erkannt zu werden. \r\n\r\nAnn Cotten','To enter this app is like entering a forest; beauty full of contrast, rich, exciting sound, rectanglular tiles of many layers of work, moving in relation to each other and to the user, just like trees do as one passes through. Instinctively, like one breaks off and licks icicles, one moves through this scintillating woods, moving oneself and moving the squares, the windows into a process. When two make a match, it is like an unsought jackpot. Hands, changing, bodies, light, and time: a forest that plants itself into one\'s mind as if for later recognition.\r\n\r\nAnn Cotten','','','',NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1731611314/90_hqkjxq.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484959/02_Syntax_in_Space_Overlap_q4uw2n.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611418/Bildschirmfoto_2024-10-03_um_14.02.17_ivyctt.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484958/04_Syntax_in_Space_Grid-View-Partially-Compketed_2_pkyo1d.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611838/Bildschirmfoto_2024-02-23_um_11.03.46_e9hv3t.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611453/Bildschirmfoto_2024-10-03_um_13.34.49_k3sswt.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611314/90_hqkjxq.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611418/Bildschirmfoto_2024-10-03_um_14.02.17_ivyctt.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484959/02_Syntax_in_Space_Overlap_q4uw2n.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611725/Bildschirmfoto_2024-02-18_um_18.00.49_qawdsv.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484958/04_Syntax_in_Space_Grid-View-Partially-Compketed_2_pkyo1d.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611838/Bildschirmfoto_2024-02-23_um_11.03.46_e9hv3t.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611444/Bildschirmfoto_2024-10-03_um_13.47.06_bca45d.png','','https://res.cloudinary.com/dhkulbiok/image/upload/v1731612035/Bildschirmfoto_2024-10-03_um_13.35.15_kohgtm.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611453/Bildschirmfoto_2024-10-03_um_13.34.49_k3sswt.png\r\n','Syntax in Space - Level I - Finde passende Fragmente ','Syntax in Space - Level I - Find matching Fragments','Syntax in Space - Lutz Förster in Traumwald von Heiner Müller','Syntax in Space - Lutz Förster performs Dream Forest by Heiner Müller','Syntax in Space - Alexandra Aidu in Hieroglyphe von Fabiane Kemmann','Syntax in Space - Alexandra Aidu performs Hieroglyphe by Fabiane Kemmann','Syntax in Space - Pierre Geagea in Nachts von Franz Kafka','Syntax in Space - Pierre Geagea performs At Night by Franz Kafka','Syntax in Space - Level 2 - Fragmente aus Nachts von Franz Kafka','Syntax in Space - Level 2 - Fragments of At night by Franz Kafka','Syntax in Space - Lutz Förster in Traumwald von Heiner Müller','Syntax in Space - Lutz Förster performs Traumwald by Heiner Müller','Syntax in Space - Lutz Förster performs Traumwald by Heiner Müller','Syntax in Space - Lutz Förster performs Traumwald by Heiner Müller','Syntax in Space - Fragmente des Kurzfilms zu Nachts von Franz Kafka ','Syntax in Space - Fragments of the shortfilm At night by Franz Kafka ','Syntax in Space - Fragmente des Kurzfilms Traumwald von Heiner Müller ','Syntax in Space - Fragments of the shortfilm Dream forest by Heiner Müller ',NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1731611314/90_hqkjxq.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611474/Bildschirmfoto_2024-10-03_um_13.48.27_f0totl.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484959/02_Syntax_in_Space_Overlap_q4uw2n.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611725/Bildschirmfoto_2024-02-18_um_18.00.49_qawdsv.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1731484958/04_Syntax_in_Space_Grid-View-Partially-Compketed_2_pkyo1d.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731611453/Bildschirmfoto_2024-10-03_um_13.34.49_k3sswt.png','','','https://res.cloudinary.com/dhkulbiok/image/upload/v1726823496/purple-foerderer-2021-logo-senatsverwaltung-kultur-europa-300x200_hzyvaa.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1726826933/241649588_4050262508434157_6628268476070537717_n_jthrbf.png','','','',''),(6,'EISLER / PROKOLL II','EISLER / PROKOLL II','Berliner Philharmonie ','Berlin Philharmonic','','','','','Regie','Fabiane Kemmann','Director','Fabiane Kemmann','Musikalische Leitung, Klavier','Peter Aidu','Musical Director, Piano','Peter Aidu','Dirigentin','Ekaterina Antonenko','Conductor','Ekaterina Antonenko','Mit','Almut Zilcher, Margarita Breitkreiz, Artemis Chalkidou, Thomas Dannemann, Edwin Cotten, Nils Bohrmann','Starring','Almut Zilcher, Margarita Breitkreiz, Artemis Chalkidou, Thomas Dannemann, Edwin Cotten, Nils Bohrmann','Orchester','Persimfans, Massnahme-Orchester Volksbühne 2008','Orchestra','Persimfans, Orchestra The decision from Volksbühne 2008','Chöre','Synagogal Ensemble Berlin, Intrada Moskau, Refugio Chor, Lysius Chor, Erich Fried Chor, Gebärdenchor','Choirs','Synagogal Ensemble Berlin, Intrada Moscow, Refugio Chor, Lysius Chor, Erich Fried Chor, Gebärdenchor','Texte','Alexander Blok, Wladimir Mayakowski, Bertolt Brecht, Victor Serge u.a.','Text','Alexander Blok, Vladimir Mayakovsky, Bertolt Brecht, Victor Serge a.o.','Übersetzung','Fabiane Kemmann','Translation','Fabiane Kemmann','Musikalische Textbearbeitung','Arno Waschk','Musical Text Editing','Arno Waschk ','Dramaturgie','Satchel Reemtsma','Dramaturgy','Satchel Reemtsma','Produktionsleitung ','Isabel Aguirre','Production Manager ','Isabel Aguirre','Projektmanagment','Daria Leduck, Tatjana Shepatowa\r\n','Project Manager','Daria Leduck, Tatjana Shepatowa','Assistenz','Leonard Beck, Anastasiia Sidorkina, Polina Efimova','Assistants','Leonard Beck, Anastasiia Sidorkina, Polina Efimova',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'\r\n','',NULL,NULL,NULL,NULL,NULL,NULL,'Im Zentrum sechs SchauspielerInnene und ein Großer Gemischter Chor in griechischer Theatertradition, aus dem Synagogal Ensemble Berlin, dem \"besten jungen Chorensemble Moskaus Intrada\" und 150 Laien-ChoristInnen. Hinzu kommt das weltweit erste Symphonie-Orchester ohne Dirigent Persimfans, das \"klassische Musik aufleben lässt, als sei sie Rock\'n Roll\" (SWR3) und ein internationales InstrumentalistInnen Ensemble. Sie bringen den Klang beider Städte auf die Bühne.','At the center a large choir in the Greek theatrical tradition - professional singers from \"Moscows best young choral ensemble Intrada\" as well as the Synagogal Ensemble Berlin and an ensemble of about 150 laymen choristers. With Persimfans, the world\'s first symphony orchestra without a conductor, that \"plays classical music as if it was Rock and Roll\" (SWR3), with instrumentalists from both cities and 6 actors, they stage the sound of both cities.','„Kemmann ist es gelungen, die verschiedenen Aspekte der beiden Kantatenwerke deutlich heraus zu arbeiten und dennoch einen imposanten, den Werken angemessenen Gesamteindruck entstehen zu lassen. Die Widersprüche werden nicht eingeebnet, es wird nach Offenem gesucht, nach Abweisung alles Fertigen, alles versteinernden Denkens.“ Klaus Völker, Fabiane Kemmanns Maßnahme in der Berliner Philharmonie, Eisler Mitteilungen Nr. 73, 2022 \r\n','\"Kemmann has succeeded in clearly working out the various aspects of the two cantata works while still creating an imposing overall impression appropriate to the works. The contradictions are not levelled, the search is for the open, for a rejection of all that is finished, all that petrifies thought.“ Klaus Völker, Fabiane Kemmann\'s The Decision at the Berlin Philharmonic Hall, Eisler Mitteilungen No. 73, 2022\r\n','\"Die fast religiöse Überhöhung der Revolution und die Vorführung einer revolutionären Logik, die die Opfer in den eigenen Reihen gebiert, funktionieren kontrapunktisch. Kemmann und Aidu lassen »Pfad des Oktober« und »Die Maßnahme« an einem Abend zeigen - als ein Ganzes, das seine beiden Seiten kennt. So viel Dialektik muss sein bei der Revolutionsbetrachtung im 21. Jahrhundert. Was sie hier zusammenbringen, ist ein künstlerisches Wagnis. Die Arbeit von Fabiane Kemmann zeigt vor allem eins: dass Theater und Geschichte Erfahrungsprozesse sind, dass uns der erste Schritt beim zweiten helfen kann, wenn wir uns erinnern wollen.\" Erik Zielke, Der Chor der Geschichte, Neues Deutschland 2022 \r\n\r\n\r\n','\"The almost religious exaltation of the revolution and the demonstration of a revolutionary logic that gives birth to victims in its own ranks function in counterpoint. Kemmann and Aidu have Prokolls \"Path of October\" and Eislers \"The Decision\" shown on one evening - as a whole that knows its two sides. So much dialectics is necessary when looking at revolution in the 21st century. What they bring together here is an artistic venture. Fabiane Kemmann\'s work shows one thing above all: that theatre and history are processes of experience, that the first step can help us with the second if we want to remember.\" Erik Zielke, The Chorus of History, Neues Deutschland 2022',NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732100549/Spielplan_Philharmonie_Berlin_30.01.2022_Kopie_et9gdb.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732096219/_michael_donath_12_Kopie_oqnadt.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732098137/a_s__michael_donath_70_Kopie_kwtkjd.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790134/_michael_donath_proben_81_2_Kopie_zbbk70.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732097945/margarita_s__michael_donath_71_Kopie_nim5ot.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790132/_michael_donath_94a_w2guw2.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725834208/_michael_donath_02_hzlhla.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732103963/_michael_donath_15_Kopie_i92c8h.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790134/_michael_donath_11_jwbsic.jpg\r\n','https://res.cloudinary.com/dhkulbiok/image/upload/v1732102621/_michael_donath_12_Kopie_mrptm1.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731759727/margarita_s__michael_donath_71_Kopie_tzrfmg.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790134/_michael_donath_proben_81_2_Kopie_zbbk70.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731759726/a_s__michael_donath_70_Kopie_kmveun.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1727172887/_michael_donath_94a_tsf2jv.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1727172901/_michael_donath_92_ukkiud.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732103441/_michael_donath_97_Kopie_j2awen.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1731790138/_michael_donath_02_wgsyzg.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790134/_michael_donath_11_jwbsic.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790138/a_s__michael_donath_70_Kopie_ennee2.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731759727/margarita_s__michael_donath_71_Kopie_tzrfmg.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790134/_michael_donath_proben_81_2_Kopie_zbbk70.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731790139/_michael_donath_92_f4jmr6.jpg',NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1727176171/B_SEN_KuEu_Logo_uxypeu.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727176817/153520_original_xirqqc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1727177951/images_mdq7qr.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727176258/eisler-stiftung-logo-1024x582_je1rrn.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727176287/CVB_Logo_2018_1c_schwarz_ui8ta6.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1726826933/241649588_4050262508434157_6628268476070537717_n_jthrbf.png'),(7,'EISLER / PROKOLL I','EISLER / PROKOLL I','Gleichzeitig live in Berlin und Moskau','Live simultanously in Berlin and Moscow','','','','','Regie','Fabiane Kemmann','Director','Fabiane Kemmann','Musikalische Leitung','Peter Aidu','Musical Director','Peter Aidu','Dirigentin','Ekaterina Antonenko, Andrej Kotow','Conductor','Ekaterina Antonenko, Andrey Kotov','Mit','Almut Zilcher, Margarita Breitkreiz, David Bennent, James Kryshak, Ekaterina Migizko','Starring','Almut Zilcher, Margarita Breitkreiz, David Bennent, James Kryshak, Ekaterina Migizko','Klavier','Peter Aidu, Fjodor Armirow','Piano','Peter Aidu, Fjodor Amirow','Chöre','Synagogal Ensemble Berlin, Ensemble Sirin Moskau, Lysius Chor, Refugio Chor, Erich Fried Chor, Gebärdenchor Dreamers Act','Choirs','Synagogal Ensemble Berlin, Ensemble Sirin Moscow, Lysius Choir, Refugio Choir, Erich Fried Chor, Gebärdenchor Dreamers A','Texte','Alexander Blok, Wladimir Mayakowski, Bertolt Brecht, Sergej Tretjakow u.a.','Text','Alexander Blok, Vladimir Mayakovsky, Bertolt Brecht a.o.','Übersetzung','Fabiane Kemmann','Translation','Fabiane Kemmann','Musikalische Textbearbeitung','Arno Waschk','Musical Text Editing','Arno Waschk ','Dramaturgie','Satchel Reemtsma','Dramaturgy','Satchel Reemtsma','Produktionsleitung ','Isabel Aguirre, Tatjana Shepatowa','Production Manager ','Isabel Aguirre, Tatjana Shepatowa','Projektmanagment','Daria Leduck, Tatjana Shepatowa\r\n','Project Manager','Daria Leduck, Tatjana Shepatowa','Assistenz','Daniela Kiesewetter, Denis Merkulow','Assistants','Daniela Kiesewetter, Denis Merkulow',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'Die Bühnenräume zweier Theater in Berlin und Moskau öffnen sich ins jeweils andere Land - zu einer \"zweiländrigen Bühne\": mehr als 200 ChoristInnen, SchauspielerInnen und MusikerInnen treten via Livestream in Berlin und Moskau gleichzeitig auf. Sie bringen ein Kaleidoskop von Stimmen der russischen und deutschen Avantgarden der 1920er Jahre auf die Bühne und hinterfragen die Texte kritisch neu.','Two theatres in Berlin and Moscow open their stages spaces up to the other country. Thus more than 200 choristers, actors and musicians perform via livestream simultanously in Berlin and Moscow. They stage a kaleidoscope of voices from the Russian and German avant-gardes of the 1920s and critically re-examin the texts. ','“Es waren besonders zwei Aspekte, die ich sehr bemerkenswert fand. Zum einen der so massive Einsatz von Chören in zwei Städten – zusammen mit den Schauspielerinnen –, der ja nicht allein das Kollektive der Handlung meint und trägt, sondern auch den grausamen Inhalt verfremdet. Dies ist eine Linie, die mit Andrzej Wirths New Yorker Inszenierung von 1970 begann – der mit jungen Tänzerinnen einen ganz ähnlichen Effekt der ästhetischen Spannung (gegen den ideologischen Inhalt) damals entdeckte. Das war hier noch mehr auf der musikalischen Ebene der Chöre zu erleben. Zum anderen war die Konfrontation mit den Texten aus dem „Pfad des Oktober“ etwas Neuartiges – ein Kaleidoskop russischer Stimmen, die zum Teil das Chaos heraufziehen sahen, wenn auch in ihrer Zeit immer noch mit Hoffnung.“  Thomas Irmer, ecibs Magazin der Internationalen Brecht Gesellschaft, 2023','‘There were two aspects that I found very remarkable about this performance. Firstly, the massive use of choirs in two cities - together with the actors - which not only signifies and emphasizes the collective nature of the plot, but also estranges the cruel content. This is a line that began with Andrzej Wirth\'s New York production from 1970 - who discovered a very similar effect of aesthetic tension (against the ideological content) with young dancers at that time. Here this could be experienced on the musical level of the choirs. On the other hand, the confrontation with ‘Path of October’ was something new - a kaleidoscope of Russian voices, some of which saw chaos approaching, albeit still with hope in their time.’  Thomas Irmer, Ecibs Magazin of International Brecht Society, 2023\r\n',NULL,NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725821529/Interview_2021_qbddfu.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725824708/Eisler_Prokoll_Moskau_ZIM_Totale_s_w_vdxqxi.jpg\r\n','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821675/DieMassnahme2021_P3790121bn_csypke.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1734019091/Bildschirmfoto_2023-03-06_um_18.45.39_Kopie_hxchwf.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821683/DieMassnahme2021_P3780993bn_o9pdkt.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725827004/Bildschirmfoto_2024-09-08_um_22.21.42_meldeu.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1725824708/Eisler_Prokoll_Moskau_ZIM_Totale_s_w_vdxqxi.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821703/269079688_2702254806749503_3998544874004095598_n_gbghap.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821675/DieMassnahme2021_P3790121bn_csypke.jpg\r\n','https://res.cloudinary.com/dhkulbiok/image/upload/v1734019091/Bildschirmfoto_2023-03-06_um_18.45.39_Kopie_hxchwf.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821683/DieMassnahme2021_P3780993bn_o9pdkt.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725827004/Bildschirmfoto_2024-09-08_um_22.21.42_meldeu.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821682/DieMassnahme2021_P3790373bn_1_kpwzka.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725822241/_michael_donath_64_t42qyj.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725824435/_michael_donath_04_asg0qs.jpg',NULL,'','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725824708/Eisler_Prokoll_Moskau_ZIM_Totale_s_w_vdxqxi.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1734019091/Bildschirmfoto_2023-03-06_um_18.45.39_Kopie_hxchwf.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725821683/DieMassnahme2021_P3780993bn_o9pdkt.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725827004/Bildschirmfoto_2024-09-08_um_22.21.42_meldeu.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1725822241/_michael_donath_64_t42qyj.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725824435/_michael_donath_04_asg0qs.jpg',NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728652231/FondsDaKu_Logo_sw_q5pto9.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732352501/Bildschirmfoto_2024-11-23_um_09.59.15_jj3xrd.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727177951/images_mdq7qr.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1728652363/Deutschlandjahr_in_Russland_oozfgo.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1728652437/images_fy95rj.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727176287/CVB_Logo_2018_1c_schwarz_ui8ta6.jpg'),(8,'ВЫСШАЯ МЕРА','ВЫСШАЯ МЕРА','Höchstmaß - Bertolt Brecht, Hanns Eisler, Sergej Tretiakow','Highest Measure - Bertolt Brecht, Hanns Eisler, Sergej Tretiakow','Weltpremiere','World premiere','Meyerhold Zentrum Moskau','Meyerhold Zentrum Moscow','Regie, Produktion','Fabiane Kemmann','Director','Fabiane Kemmann','Musikalische Leitung, Klavier','Peter Aidu','Musical Director, piano','Peter Aidu','Dirigent','Andrej Kotow','Conductor','Andrey Kotov','Mit','Ekaterina Migizko, Fjodor\r\nLewin, Anastasiia Lebedewa, Jana Gladkich, Philip Gurewitsch,\r\nPawel Woronschzow','Starring','Ekaterina Migizko, Fjodor\r\nLewin, Anastasiia Lebedewa, Jana Gladkich, Philip Gurewitsch,\r\nPawel Woronschzow','Chor','Gebärdenchor Dreamers Actors, Ensemble Komon, Chor Moskauer Institut für Technische Physik, Kinderchor Scharlachrote Seg','Choir','Sign Language Choir Dreamers Acotrs, Ensemble Komon, Choir Institut for  Technical Physiks, Childrenschoir Scarlet Sails','Dramaturgie','Elena Kowalskaja','Dramaturg','Elena Kowalskaja','Bühne','Fabiane Kemmann','Stage','Fabiane Kemmann','Licht','Max Berukow','Light ','Max Berukov','Beratung','Wladimir Koljazin, Olga Fedjanina\r\n','Consultant','Vladimir Koljazin, Olga Fedjanina','Projekt Managment','Tatjana Schepatowa','Proketmanagment','Tatjana Schepatova','Assistenz','Denis Merkulow','Assistant','Denis Merkulov',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'\"Im überwältigend  markerschütternden Finale bedauern Sie, dass das Meyerhold Zentrum nicht das Bolschoi-Theater ist, wo es ein dickes Booklet und ein komplettes Libretto gäbe, was im Theater nicht üblich ist. Dann könnte die gesamte Kantaten-Performance, wie in der Oper, nach der Vorstellung mit dem inneren Auge noch einmal betrachtet und vor allem mit dem inneren Ohr gehört werden, so außerordentlich ist sie. Es ist sehr leicht, sich „Высшая мера“ buchstäblich in dieser Inszenierung auf der neuen Kammerbühne des Bolschoi (ehemals Pokrowski-Theater) vorzustellen, mit seiner geradezu geometrischen Ähnlichkeit, Schwärze und dem Chor auf den Balkonen über dem Publikum. Gleichwohl ist es immer noch gut, dass das ZIM nicht das Bolschoi ist, sonst wäre der Weg „Высшая мераs\" zur russischen Bühne, so sieht es wohl aus, noch ein Jahrhundert länger gewesen.\" Julia Bederowa, Wir hörten den Fall, Kommersant 2018	 ','In the overwhelmingly marrow-shaking finale, you regret that the Meyerhold Centre is not the Bolshoi Theatre, where there would be a thick booklet and a complete libretto, which is not usual in the theatre. Then, as in opera, the whole cantata performance could be watched again with the inner eye after the performance and, above all, heard with the inner ear, so extraordinary is it. It is very easy to imagine \"Высшая мера\" literally in this production on the Bolshoi\'s (formerly Pokrovsky Theatre\'s) new chamber stage, with its almost geometric resemblance, blackness and the choir on the balconies above the audience. Nevertheless, it is still a good thing that ZIM is not the Bolshoi, otherwise \"Высшая мераs\" path to the Russian stage would have been, it seems, another century longer. Julia Bederova, We Heard the Fall, Kommersant 2018','\"Es ist ein kolossales Werk, wenn auch nicht allzu lang, es sind Songs, es ist eine Arbeit über den Betrachter, ein Versuch, ihn einzubeziehen, es sind große Chöre, Massenkörper, die oben stehen und tragische Ereignisse kommentieren. Die ganze Show ist ein Bericht an den Chor, der ihr höchstes Gericht und Teil ihres Über-Ich ist, das sind schöne, plastische Gebilde. Die Performance ist sehr schön, plastisch ausdrucksstark, faszinierend, existentiell und fast schrecklich - sie weckt viele Gefühle. Diese Geschichte  taucht uns in eine Zeitmaschine ein. Und das ist natürlich eine  ewige, dem  Menschen innewohnende Frage, aber da sie von jeder Generation neu gelöst werden muss, ist es eine weitere Frage, die uns Brechts Spiel vor Augen stellt: Ist es möglich, zumindest über eine andere Option nachzudenken?\" Elena Fanailowna, Высшая мера, Radio Svoboda 2018','It\'s a colossal work, though not too long, it\'s songs, it\'s a work about the viewer, it\'s an attempt to involve him, it\'s big choruses, mass bodies standing above and commenting on tragic events. The whole show is a report to the choir, which is their supreme court and part of their superego, these are beautiful, sculptural entities. The performance is very beautiful, vividly expressive, fascinating, existential and almost horrific - it evokes many feelings. This story immerses us in the time machine. And this is, of course, an eternal question inherent in man, but since it has to be solved anew in every historical phase, it is another question that Brecht\'s play puts before us. Is it possible to at least think about another option? Elena Fanailovna, Высшая мера, Radio Liberty 2018','\"Es ist ein Theater, in dem Drama, Komödie und Tragödie bis zum Skelett, bis zum Kern ausgetrocknet werden, in dem die Rolle des antiken Terrains von der objektiven Realität gespielt wird - in dem jeder Held mit einer ganzen Reihe von Fragen konfrontiert wird, auf die es keine richtigen Antworten gibt. Oder besser gesagt, jede Antwort führt zwangsläufig zu Tragödie und Tod. Der einzige Weg, am Leben zu bleiben, ist, weiter zu fragen. Die Fragen, die gestellt werden, betreffen sehr grundlegende, elementare Dinge - das Recht auf Leben, das Recht auf Fehler, das Recht auf eine unabhängige Entscheidung. Die größte Schwierigkeit, die das Theater des 20. Jahrhunderts mit diesem Stück hatte, ist die Unfähigkeit - und die mangelnde Bereitschaft -, jede Vorstellung zu beginnen, ohne ein vorbereitetes Spickzettel mit der Antwort in der Tasche zu haben. Brechts Theater war jedoch nie ein Konsenstheater. Dies ist ein Stück, das Ihnen idealerweise noch mehr Fragen stellt - denn, wenn ich mich recht erinnere, ist die Fähigkeit hier weiter zu fragen gleichbedeutend mit der Fähigkeit zu überleben.\" theater.dot, Olga Fedianina, 2018, Das Festival ‚Heimat der Avantgarde‘ im ZIM','It is a theatre in which drama, comedy and tragedy are drained to the skeleton, to the core, in which the role of ancient terrain is played by objective reality - in which each hero is confronted with a whole series of questions to which there are no right answers. Or rather, every answer inevitably leads to tragedy and death. The only way to stay alive is to keep asking. The questions being asked are about very basic, elementary things - the right to life, the right to make mistakes, the right to make an independent decision. The greatest difficulty 20th century theatre has had with this play is its inability - and unwillingness - to begin any performance without a prepared cheat sheet of the answer in its pocket. Brecht\'s theatre, however, was never a consensus theatre. This is a play that ideally asks you even more questions - because, if I remember correctly, the ability to keep asking here is tantamount to the ability to survive. Olga Fedianina, The Festival \'Home of the Avantgarde\' at ZIM, Theater.dot 2018',NULL,'For the premiere at the Meyerhold Centre, director Fabiane Kemmann drew on Russian-German actors, including artists from the famous Volksbühne Theatre. The choral groups on the balconies commented on the action like the ancient Greek choruses of ancient tragedy. Spectators who recited the text, including quotes from Lenin, according to an unnotated score (before the performance in the foyer, Peter Aidu held a mini-rehearsal), with revolutionary leaflets handed to them by the agitators, judged on an equal footing with the chorus. As in reality, each of them had a choice - to join the masses, to chant the phrase \"We agree with you\" or to watch the massacre in silence.  Nadezhda Travina, Brave, Comrade, into the Fight, The free 2018','https://res.cloudinary.com/dhkulbiok/image/upload/v1725879113/Plakat_Meyerhold_Zentrum_Ma%C3%9Fnahme_2016_mxoomu.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/P2210508a_drxkea.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732466239/P2220899a_yxpq7s.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731693562/P2240396bn_pqqtmn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732464924/P2220414a_dlbmld.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104719/49546688_2199501980368619_7970914703817834496_n_znpnj3.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104718/51243170_348308312441302_4822133368617435136_n_us7jtx.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/P2210508a_drxkea.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732466236/P2240003a_dlkyfl.jpg\r\n','https://res.cloudinary.com/dhkulbiok/image/upload/v1725879109/P2230021_annppo.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/4_ftvlk2.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1728305886/P2240374bn_h297pc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731693562/P2240396bn_pqqtmn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732464924/P2220414a_dlbmld.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1728404070/landingpage_09_q6fbcz.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104719/49546688_2199501980368619_7970914703817834496_n_znpnj3.jpg','Высшая мера - Ekaterina Migizko  Foto Giampiero Assumma','Высшая мера - Ekaterina Migizko  Photo Giampiero Assumma',NULL,'',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725104718/51243170_348308312441302_4822133368617435136_n_us7jtx.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/P2210508a_drxkea.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732466239/P2220899a_yxpq7s.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1731693562/P2240396bn_pqqtmn.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1734019918/DieMassnahme2021_P3790125col_mbewyu.jpg\r\n\r\n','https://res.cloudinary.com/dhkulbiok/image/upload/v1725104719/49546688_2199501980368619_7970914703817834496_n_znpnj3.jpg','https://youtu.be/uxh3w4xTgSs?si=vLrwrmneN-3HfFy0','Высшая мера, Meyerhold Zentrum Moskau 2018','https://res.cloudinary.com/dhkulbiok/image/upload/v1728653110/e444ec84-cfab-4beb-a3cb-7fc5e4f5de0a_muk6d5.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1732352501/Bildschirmfoto_2024-11-23_um_09.59.15_jj3xrd.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1728652437/images_fy95rj.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1732352607/153520_original_qvrzhs_phy7wh.jpg',NULL,NULL),(9,'DIE MASSNAHME','THE DECISION','Bertolt Brecht, Hanns Eisler','Bertolt Brecht, Hanns Eisler','Berliner Philharmonie ','Berlin Philharmonic','Erste Wiederaufführung in der originalen Form mit 300 SängerInnen ','First staging in the original form with 300 singers ','Regie','Fabiane Kemmann','Director','Fabiane Kemmann','Künstlerische Begleitung','Barbara Nicolier','Artistic Consultant','Barbara Nicolier','Musikalische Leitung','Marcus Crome','Musical Director','Markus Crome','Mit','Margarita Breitkreiz, Bernd Grawert, Ole Lagerpusch, Matthias Rheinheimer','Starring','Margarita Breitkreiz, Bernd Grawert, Ole Lagerpusch, Matthias Rheinheimer','Sopran','Winnie Böwe','Soprano','Winnie Böwe','Chor','300 Berliner SängerInnen ','Choir','300 singers from Berlin','Orchester','Volksbühnenorchester Maßnahme 2008','Orchestra','Orchestra of The Decision at Volksbühne in 2008',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,'Wer hätte jedoch gedacht, dass „Die Maßnahme“ einmal zurückkehren würde an ihren Aufführungsursprung, zumindest viruell. Der war nämlich im Dezember 1930 die alte Philharmonie. Die gibt es zwar nicht mehr, aber um so schöner, dass dieses hochpoetische, den Hoffnungen der Oktoberrevolution in Russland entsprungene Lehrstück nun im Kammermusiksaal des Hans Scharoun-Baus aufs Würdigste wiederholt worden ist. Mit einer geballten Ladung an Chören aus allen Ecken der Hauptstadt, an die 300 engagierten Laiensängerinnen und Sänger, mit einem nicht minder engagierten Bläserensemble plus Klavier, Pauken, und Schlagzeug, mit der so bewährten wie exzellenten Eisler-Interpretin Winnie Böwe und einem Agigatoren-Quartett aus jungen Schauspielern, die mit den Chören und Instrumentalisten das Lehrstück in den Rang der Tragödie führten. Der Kammermusiksaal platzte aus den Nähten. Die szenische Leitung und Projektleitung hatte Fabiane Kemmann inne. Ein kühnes Projekt. Trotz mancher technischer Abstriche durften die Hörer in der Berliner Philharmonie eine Tragödie von Shakespearescher Größe erleben. Stefan Amzoll, Mitgefühl? Ein Fehler, Neues Deutschland 2016','But who would have thought that \"The decision\" would one day return to its place of performance, at least virally. That was the old Philharmonic Hall in December 1930. The old Philharmonic Hall no longer exists, but it\'s all the more wonderful that this highly poetic didactic piece, born of the hopes of the October Revolution in Russia, has now been repeated in the most dignified manner in the Chamber Music Hall of the Hans Scharoun Building. With a concentrated load of choirs from all corners of the capital, about 300 committed amateur singers, with a no less committed wind ensemble plus piano, timpani and percussion, with the proven and excellent Eisler interpreter Winnie Böwe and an Agigators quartet of young actors who, together with the choirs and instrumentalists, took the Lehrstück to the level of tragedy. The chamber music hall was bursting at the seams. Fabiane Kemmann was the scenic director and project manager. A keen project. Despite some technical shortcomings, the audience in the Berlin Philharmonie experienced a tragedy of Shakespearean magnitude. Stefan Amzoll, Compassion? A mistake, Neues Deutschland 2016 ','Die Musik Eislers besitzt ihre eigene Ästhetik, die nichts mit romantischer Schönheit zu tun hat. Aber eines hat sie jetzt schon erreicht: die Herzen und Köpfe zu öffnen für eine heute immer noch aktuelle Botschaft: Ändere die Welt, sie braucht es. Heino Rindler, Brechts Lehrstück als Konzert, Deutschlandfunk Kultur 2016','Eisler\'s music has its own aesthetic, which has nothing to do with romantic beauty. But it has already achieved one thing: to open hearts and minds to a message that is still relevant today: change the world, it needs it. Heino\r\nRindler, Brecht\'s Lehrstück als Konzert, Deutschlandfunk Kultur 2016\r\n','In Eislers Musik schlagen dazu immer wieder Bachs Passionen durch. Starker Tobak, den erst die Nazis verboten und nach dem Krieg Brecht selbst. Eislers Kunst gewinnt noch immer eine staunenswerte Gegenwart. Dass es dem Autor letztendlich nicht gelang sein eigenes Stück auszulöschen, ist ein befreiendes Signal dieser Wiederaufführung. Ulrich Amling, Ausgelöscht und auferstanden, Tagesspiegel 2016','In Eisler\'s music, Bach\'s Passions repeatedly come through. Strong stuff that was first banned by the Nazis and then by Brecht himself after the war. Eisler\'s art still acquires an astonishing presence. The fact that the author ultimately did not succeed in erasing his own play is a liberating signal of this revival. Ulrich Amling, Ausgelöscht und auferstanden, Tagesspiegel 2016','Die vier Agitatoren waren mit Margarita Breitkreiz, Bernd Grawert, Ole Lagerpusch und Matthias Rheinsheimer erstklassig besetzt. Ihr Spiel im Spiel („Stellt dar, wie es geschah!“) zitierte durchaus gewitzt verschiedene Darstellungsstile des Brecht- Theaters, das vom betont improvisatorischen „vom Zettel ablesen“ und „Handlungen nur andeuten“ über engagiertes und satirisches Agitprop-Spiel bis zu verfremdeten Dialogen mit versetzten Echo-Effekten reichte. Brechts biblische Sprache der Maßnahme kam dabei mit voller Wucht zur Geltung. Selbst noch in den Ansagen der Szenentitel durch Reiner Steinweg und Reinis Vidulejs wurden interessante Zwischentöne getroffen. Peter Deeg, Die Maßnahme mit 300 Stimmen in Berlin, Eisler Mitteilungen 2016','The four agitators were first-class in Margarita Breitkreuz, Bernd Grawert, Ole Lagerpusch and Matthias Rheinsheimer. Their play-within-a-play (\"Act it out as it happened!\") cited various performance styles of Brecht\'s theatre, ranging from the emphatically improvisatory \"reading from a piece of paper\" and \"only hinting at actions\" to committed and satirical agitprop play and alienated dialogue with offset echo effects. Brecht\'s biblical language of action came into its own with full force. Even in the announcements of the scene titles by Reiner Steinweg and Reinis Vidulejs, interesting nuances were struck. Peter Deeg, The Decision with almost 300 voices in Berlin, Eisler Mitteilungen 2016','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801721/IMG_7842_Kopie_wn0lsj.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801455/04.2016_DieMa%C3%9Fnahme_P8300434_1_zolsti.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732801137/Bildschirmfoto_2021-06-07_um_22.10.14_Kopie_kglw83.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797890/04.2016_DieMa%C3%9Fnahme_P8300350_cip52v.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732801992/3_Kopie_ohne_Schwarz_wrrqvq.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801414/29064131_10204586267053883_816170530924844459_o_f9w92q.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801721/IMG_7842_Kopie_wn0lsj.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801455/04.2016_DieMa%C3%9Fnahme_P8300434_1_zolsti.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797831/04.2016_DieMa%C3%9Fnahme_P8290950_pb2bfp.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801736/04.2016.DieMa%C3%9FnahmeWEB_P8300353print_td_hwfeyj.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1727193879/04.2016.DieMa%C3%9FnahmeWEB_P8300408print_td_zaq3mc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797890/04.2016_DieMa%C3%9Fnahme_P8300350_cip52v.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797867/Bildschirmfoto_2021-06-07_um_22.10.39_g0njku.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797823/3_g1ezvp.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1725801414/29064131_10204586267053883_816170530924844459_o_f9w92q.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797860/2_j9h9bh.png',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404907/IMG_7842_Kopie_u1h30o.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797937/04.2016_DieMa%C3%9Fnahme_P8300436_q38c4j.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797867/Bildschirmfoto_2021-06-07_um_22.10.39_g0njku.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1727193879/04.2016.DieMa%C3%9FnahmeWEB_P8300408print_td_zaq3mc.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797890/04.2016_DieMa%C3%9Fnahme_P8300350_cip52v.jpg','https://res.cloudinary.com/dhkulbiok/image/upload/v1732797860/2_j9h9bh.png','https://youtu.be/xQz50-ez5vw?si=5Y6oUY_Nk0p9iWuP','Die Maßnahme, Lehrstück von Bertolt Brecht, Hanns Eisler Opus 20, Philharmonie Berlin 2016','https://res.cloudinary.com/dhkulbiok/image/upload/v1727177951/images_mdq7qr.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1728653788/bagw_lddjve.png','https://res.cloudinary.com/dhkulbiok/image/upload/v1732352607/153520_original_qvrzhs_phy7wh.jpg',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Play` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('fbd580ce-355d-41e7-a56b-077d4169db29','66b140569be0800e7209428df887c8f7b3ce90ac1e618bd5e2d614bffd318736','2024-07-30 16:18:25.733','manual-init','',NULL,'2024-07-30 16:18:25.733',0);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `landingpageimg`
--

DROP TABLE IF EXISTS `landingpageimg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `landingpageimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `mobileImageUrl` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `landingpageimg`
--

LOCK TABLES `landingpageimg` WRITE;
/*!40000 ALTER TABLE `landingpageimg` DISABLE KEYS */;
INSERT INTO `landingpageimg` VALUES (1,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404078/landingpage_03_q0ghtv.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404078/landingpage_03_q0ghtv.jpg',NULL),(2,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404079/landingpage_02_fgmjpj.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725801455/04.2016_DieMa%C3%9Fnahme_P8300434_1_zolsti.jpg',NULL),(3,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732351287/P2240318col_aocz18.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734543834/mobile_peter_bjosxg.jpg',NULL),(4,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404907/IMG_7842_Kopie_u1h30o.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/P2210508a_drxkea.jpg',NULL),(5,'https://res.cloudinary.com/dhkulbiok/image/upload/v1731693562/P2240396bn_pqqtmn.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1731693562/P2240396bn_pqqtmn.jpg',NULL),(6,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725104717/P2210508a_drxkea.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732294199/sis_short_mobile_topimage_05_lz3irn.jpg',NULL),(7,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725879113/Plakat_Meyerhold_Zentrum_Ma%C3%9Fnahme_2016_mxoomu.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725879113/Plakat_Meyerhold_Zentrum_Ma%C3%9Fnahme_2016_mxoomu.jpg',NULL),(8,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725821683/DieMassnahme2021_P3780993bn_o9pdkt.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725821683/DieMassnahme2021_P3780993bn_o9pdkt.jpg',NULL),(9,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725821682/DieMassnahme2021_P3790373bn_1_kpwzka.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725801721/IMG_7842_Kopie_wn0lsj.jpg',NULL),(10,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725801455/04.2016_DieMa%C3%9Fnahme_P8300434_1_zolsti.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732466239/P2220899a_yxpq7s.jpg',NULL),(11,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734541764/landingpage_kafka_VI_byvtaj.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734541764/landingpage_kafka_VI_byvtaj.jpg',NULL),(12,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725822361/02_Syntax_in_Space_Overlap_tsgvvi.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725822361/02_Syntax_in_Space_Overlap_tsgvvi.jpg',NULL),(13,'https://res.cloudinary.com/dhkulbiok/image/upload/v1725822379/01_Syntax_in_Space_Playing-Filed_ap0cx3.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1732351287/P2240318col_aocz18.jpg',NULL),(14,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734540306/landingpage_kafka_VII_vdkcaz.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734540306/landingpage_kafka_VII_vdkcaz.jpg',NULL),(16,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404070/landingpage_09_q6fbcz.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1728404070/landingpage_09_q6fbcz.jpg',NULL),(37,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734542837/landingpage_kafka_III_max_head_rphnj0.jpg','Bild 1',NULL,'https://res.cloudinary.com/dhkulbiok/image/upload/v1734542837/landingpage_kafka_III_max_head_rphnj0.jpg',NULL);
/*!40000 ALTER TABLE `landingpageimg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `details` text NOT NULL,
  `details_en` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
INSERT INTO `newsletter` VALUES (1,'\r\n','','2024-10-06 10:59:26');
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-19 13:17:36
