-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: pg_mess_management
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `mess`
--

DROP TABLE IF EXISTS `mess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mess` (
  `mess_id` int NOT NULL AUTO_INCREMENT,
  `created_on` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `mess_name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `updated_on` datetime(6) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`mess_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mess`
--

LOCK TABLES `mess` WRITE;
/*!40000 ALTER TABLE `mess` DISABLE KEYS */;
INSERT INTO `mess` VALUES (1,'2024-08-09 02:25:38.406444','Veg Non-Veg Available','https://5.imimg.com/data5/SELLER/Default/2022/11/WL/RG/VJ/32970822/217663441-916250415654071-1629050920220638229-n.jpg','Shivaji nagar','Ram Mess',1500,'2024-08-09 02:25:38.406444',3),(2,'2024-08-09 02:26:26.963317','Veg Available','https://5.imimg.com/data5/SELLER/Default/2022/11/WL/RG/VJ/32970822/217663441-916250415654071-1629050920220638229-n.jpg','gokhale nagar','Laxmi Mess',1800,'2024-08-09 02:26:26.963317',3),(3,'2024-08-09 02:27:15.571411','Veg Available','https://5.imimg.com/data5/SELLER/Default/2022/11/WL/RG/VJ/32970822/217663441-916250415654071-1629050920220638229-n.jpg','gokhale nagar','Kamat Mess',1200,'2024-08-09 02:28:27.602620',2),(4,'2024-08-12 03:30:45.203831','Veg Mess','https://im.whatshot.in/img/2020/Aug/andhra-mess-cropped-1563960726-1598529049.jpg','Gokhale Nagar','Sai Mess',1800,'2024-08-12 03:53:43.845273',NULL),(5,'2024-08-12 04:09:44.077813','Pure Veg','https://imgs.mongabay.com/wp-content/uploads/sites/30/2021/06/16091130/south-indian-thali-768x512.jpeg','Model Colony','Renuka Mess',2000,'2024-08-12 04:09:44.078996',3),(6,'2024-08-12 12:57:38.273714','Nashta Center','https://s3-ap-southeast-1.amazonaws.com/img.tasteofcity.com/tasteimages/201512/image_original/218C6C120C20BF0C_pohe-4.jpg','Model Colony','Matoshri',1200,'2024-08-12 12:57:38.281384',2);
/*!40000 ALTER TABLE `mess` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-12 20:37:46
