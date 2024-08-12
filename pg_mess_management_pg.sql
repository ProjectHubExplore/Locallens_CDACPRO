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
-- Table structure for table `pg`
--

DROP TABLE IF EXISTS `pg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pg` (
  `pg_id` int NOT NULL AUTO_INCREMENT,
  `booked_count` int DEFAULT NULL,
  `created_on` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_full` bit(1) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `pg_name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `room_count` int DEFAULT NULL,
  `updated_on` datetime(6) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`pg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pg`
--

LOCK TABLES `pg` WRITE;
/*!40000 ALTER TABLE `pg` DISABLE KEYS */;
INSERT INTO `pg` VALUES (1,1,'2024-08-09 02:11:33.551224','Pg for Boys & Girls','https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1656311303/Website/CMS-Uploads/ih4lwmrmojyblkebkgnm.jpg',_binary '\0','Shivaji nagar','Santa Pg',4500,8,'2024-08-12 16:26:24.980039',2),(2,2,'2024-08-09 02:12:33.263965','Pg for Boys','https://www.bing.com/images/blob?bcid=rx7k4-HYAV8Hhw',_binary '','gokhale nagar','Satwik Pg',5000,2,'2024-08-12 16:23:14.231505',2),(3,2,'2024-08-09 02:18:43.110116','Pg for Boys & Girls','https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/f_auto,q_auto/v1656311303/Website/CMS-Uploads/ih4lwmrmojyblkebkgnm.jpg',_binary '','shivaji nagar','Santa Pg',5000,2,'2024-08-09 02:22:19.341963',1),(4,0,'2024-08-12 02:07:27.907212','Girls Pg','https://th.bing.com/th/id/OIP.AYGS48kdAmh_M2evny-ZIgHaFj?pid=ImgDet&w=192&h=144&c=7&dpr=1.3',_binary '\0','Gokhale Nagar','Amayra Girls Hostel',6000,4,'2024-08-12 02:07:27.907212',1);
/*!40000 ALTER TABLE `pg` ENABLE KEYS */;
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
