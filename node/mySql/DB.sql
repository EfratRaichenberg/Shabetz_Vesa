-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shabetz_vesa
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `drive_to_volunteer`
--

DROP TABLE IF EXISTS `drive_to_volunteer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `drive_to_volunteer` (
  `Drive_to_volunteer_ID` int NOT NULL AUTO_INCREMENT,
  `Volunteer_id` int NOT NULL,
  `Date` datetime NOT NULL,
  `Hour` varchar(45) NOT NULL,
  `Drive_type` varchar(45) NOT NULL DEFAULT 'יומי',
  `Fault_status` tinyint DEFAULT '0',
  `Manager_acceptence_status` tinyint NOT NULL DEFAULT '0',
  `Volunteer_approval_status` tinyint DEFAULT '0',
  PRIMARY KEY (`Drive_to_volunteer_ID`),
  KEY `Volunteer_id` (`Volunteer_id`),
  CONSTRAINT `drive_to_volunteer_ibfk_1` FOREIGN KEY (`Volunteer_id`) REFERENCES `volunteer` (`Volunteer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `drive_to_volunteer`
--

LOCK TABLES `drive_to_volunteer` WRITE;
/*!40000 ALTER TABLE `drive_to_volunteer` DISABLE KEYS */;
/*!40000 ALTER TABLE `drive_to_volunteer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `limitations`
--

DROP TABLE IF EXISTS `limitations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `limitations` (
  `Limitations_id` int NOT NULL AUTO_INCREMENT,
  `Volunteering_options_id` int NOT NULL,
  `Date` datetime NOT NULL,
  `Beginning_hour` varchar(45) NOT NULL,
  `End_hour` varchar(45) NOT NULL,
  PRIMARY KEY (`Limitations_id`),
  KEY `Volunteering_options_id` (`Volunteering_options_id`),
  CONSTRAINT `limitations_ibfk_1` FOREIGN KEY (`Volunteering_options_id`) REFERENCES `volunteering_options` (`Volunteering_options_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `limitations`
--

LOCK TABLES `limitations` WRITE;
/*!40000 ALTER TABLE `limitations` DISABLE KEYS */;
/*!40000 ALTER TABLE `limitations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `passenger_id` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Phone_number` varchar(45) NOT NULL,
  `City` varchar(45) NOT NULL,
  `Neighborhood` varchar(45) NOT NULL,
  `Street` varchar(45) NOT NULL,
  `Hospital` varchar(45) NOT NULL,
  `Hour` varchar(45) NOT NULL,
  PRIMARY KEY (`passenger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger`
--

LOCK TABLES `passenger` WRITE;
/*!40000 ALTER TABLE `passenger` DISABLE KEYS */;
INSERT INTO `passenger` VALUES (24,'אפרת רייכנברג','0556775678','פתח תקווה','גני הדר','אור יחזקאל 1','בלינסון','16:00'),(25,'אפרת רייכנברג','0556775678','פתח תקווה','גני הדר','אור יחזקאל 1','בלינסון','16:00'),(26,'אפרת רייכנברג','0556775678','פתח תקווה','גני הדר','אור יחזקאל 1','בלינסון','16:00'),(27,' ','','','',' ','','');
/*!40000 ALTER TABLE `passenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengers_in_drive`
--

DROP TABLE IF EXISTS `passengers_in_drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengers_in_drive` (
  `Passengers_in_drive_id` int NOT NULL AUTO_INCREMENT,
  `Drive_id` int NOT NULL,
  `Passenger_id` int NOT NULL,
  `Num_passengers` int NOT NULL,
  PRIMARY KEY (`Passengers_in_drive_id`),
  KEY `Drive_id` (`Drive_id`),
  KEY `Passenger_id` (`Passenger_id`),
  CONSTRAINT `passengers_in_drive_ibfk_1` FOREIGN KEY (`Drive_id`) REFERENCES `drive_to_volunteer` (`Drive_to_volunteer_ID`),
  CONSTRAINT `passengers_in_drive_ibfk_2` FOREIGN KEY (`Passenger_id`) REFERENCES `passenger` (`passenger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers_in_drive`
--

LOCK TABLES `passengers_in_drive` WRITE;
/*!40000 ALTER TABLE `passengers_in_drive` DISABLE KEYS */;
/*!40000 ALTER TABLE `passengers_in_drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `regular_drive`
--

DROP TABLE IF EXISTS `regular_drive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regular_drive` (
  `Regular_drive_id` int NOT NULL AUTO_INCREMENT,
  `Passenger_id` int NOT NULL,
  `Day` varchar(45) NOT NULL,
  `Hour` varchar(45) NOT NULL,
  `Drive_Type` varchar(45) DEFAULT 'יומי',
  PRIMARY KEY (`Regular_drive_id`),
  KEY `Passenger_id` (`Passenger_id`),
  CONSTRAINT `regular_drive_ibfk_1` FOREIGN KEY (`Passenger_id`) REFERENCES `passenger` (`passenger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `regular_drive`
--

LOCK TABLES `regular_drive` WRITE;
/*!40000 ALTER TABLE `regular_drive` DISABLE KEYS */;
/*!40000 ALTER TABLE `regular_drive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `satisfaction`
--

DROP TABLE IF EXISTS `satisfaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `satisfaction` (
  `Satisfaction_id` int NOT NULL AUTO_INCREMENT,
  `Volunteer_id` int NOT NULL,
  `Text` longtext NOT NULL,
  `Passenger_id` int NOT NULL,
  `Date` datetime NOT NULL,
  PRIMARY KEY (`Satisfaction_id`),
  KEY `Volunteer_id` (`Volunteer_id`),
  KEY `Passenger_id` (`Passenger_id`),
  CONSTRAINT `satisfaction_ibfk_1` FOREIGN KEY (`Volunteer_id`) REFERENCES `volunteer` (`Volunteer_id`),
  CONSTRAINT `satisfaction_ibfk_2` FOREIGN KEY (`Passenger_id`) REFERENCES `passenger` (`passenger_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `satisfaction`
--

LOCK TABLES `satisfaction` WRITE;
/*!40000 ALTER TABLE `satisfaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `satisfaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_of_volunteering`
--

DROP TABLE IF EXISTS `type_of_volunteering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_of_volunteering` (
  `Type_Id` int NOT NULL AUTO_INCREMENT,
  `Description` varchar(45) NOT NULL,
  PRIMARY KEY (`Type_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_of_volunteering`
--

LOCK TABLES `type_of_volunteering` WRITE;
/*!40000 ALTER TABLE `type_of_volunteering` DISABLE KEYS */;
INSERT INTO `type_of_volunteering` VALUES (23,'hello world');
/*!40000 ALTER TABLE `type_of_volunteering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volunteer`
--

DROP TABLE IF EXISTS `volunteer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `volunteer` (
  `Volunteer_id` int NOT NULL AUTO_INCREMENT,
  `Password` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `City` varchar(45) NOT NULL,
  `Street` varchar(45) NOT NULL,
  `Phone_number` varchar(45) NOT NULL,
  `Mail` varchar(45) NOT NULL,
  `Num_places` int NOT NULL,
  `Car_leaflet` tinyint DEFAULT '0',
  `Casual_status` tinyint DEFAULT '0',
  `Approved_status` tinyint DEFAULT '0',
  PRIMARY KEY (`Volunteer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volunteer`
--

LOCK TABLES `volunteer` WRITE;
/*!40000 ALTER TABLE `volunteer` DISABLE KEYS */;
INSERT INTO `volunteer` VALUES (23,'1234','יאיר','בני ברק','רבי עקיבא','0554382376','yair@gmail.com',3,0,1,1),(34,'343556','דניאל','Petach Tikva','Trumpeldor','0523437098','Daniel@gmail.com',5,0,1,1);
/*!40000 ALTER TABLE `volunteer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `volunteering_options`
--

DROP TABLE IF EXISTS `volunteering_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `volunteering_options` (
  `Volunteering_options_id` int NOT NULL AUTO_INCREMENT,
  `Volunteer_id` int NOT NULL,
  `Day` varchar(45) NOT NULL,
  `Start_hour` varchar(45) NOT NULL,
  `End_hour` varchar(45) NOT NULL,
  `Type_volunteer_id` int NOT NULL,
  PRIMARY KEY (`Volunteering_options_id`),
  KEY `Volunteer_id` (`Volunteer_id`),
  KEY `Type_volunteer_id` (`Type_volunteer_id`),
  CONSTRAINT `volunteering_options_ibfk_1` FOREIGN KEY (`Volunteer_id`) REFERENCES `volunteer` (`Volunteer_id`),
  CONSTRAINT `volunteering_options_ibfk_2` FOREIGN KEY (`Type_volunteer_id`) REFERENCES `type_of_volunteering` (`Type_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `volunteering_options`
--

LOCK TABLES `volunteering_options` WRITE;
/*!40000 ALTER TABLE `volunteering_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `volunteering_options` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-18 13:01:38
