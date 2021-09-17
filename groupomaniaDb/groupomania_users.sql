-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_register_date` datetime NOT NULL,
  `is_admin` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `pseudo` (`pseudo`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (12,'Test45','Test45','Test45','test45@gmail.com','$2b$10$xhelfEraakeAtQlwrbWgQOwLrBDaO5U5s4wMYoQIpLJpNyGSuG0Jq','2021-06-23 11:33:51',1),(20,'test','test','test','test@gmail.com','$2b$10$.TXczG.4a7YJS1tKhJJcae0d3DotK5Yd.X0YwfNV.kKMQWowCfkGC','2021-09-16 18:47:54',0),(22,'test2','test2','test2','test2@gmail.com','$2b$10$ZuQVNzAvyhTJZl8IGR/RnuOsgdif0JmKWi9HjkFuGPaFD/V0pC4Om','2021-09-16 22:57:40',0),(23,'test3','test3','test3','test3@gmail.com','$2b$10$Brp/BGIu1bYX5N0C3HIpnuIqaW42HVJPSM3oXpMXNzAnOby9NzYOm','2021-09-16 22:58:06',0),(25,'test1','test1','test1','test1@gmail.com','$2b$10$XMwPf6409IvFx0Iy8gnyYe456VSNlMxGqKOTL7Ad0GASQJHZ.KchS','2021-09-16 22:59:30',0),(26,'fze','tzetzet','teztze','tzet@fzeaf.co','$2b$10$MpHX8NERz5WJGPvjj74BV.OhEpKYyD/qYt3mret6uFwMel2WWHrVG','2021-09-17 11:16:42',0),(28,'testcinq','testcinq','testcinq','test5@gmail.com','$2b$10$pjUgABktWrBsH4ImJtHFHekVXsLtedr4FylU6XLlm3ANRz/mVIxda','2021-09-17 11:21:23',0),(29,'testsix','testsix','testsix','testsix@gmail.com','$2b$10$m0xLP1Tfp3yUsj3AhDUEt.HwKL4oGROqU3YLTMwf607bFZbOZkwbC','2021-09-17 11:23:53',0),(30,'testsept','testsept','testsept','testsept@gmail.com','$2b$10$VHCiPfcS/bTzk3BoxWQU7uzFeHpIqCxvpONoPRBF4oRtIb5ttxTMi','2021-09-17 11:24:38',0),(31,'testhuit','testhuit','testhuit','testhuit@gmail.com','$2b$10$3ZDKh62qHp5H4V50mdPxVuemai44a4IhxibQKgYbeNFv8iPGsgNgO','2021-09-17 11:27:33',0),(32,'testneuf','testneuf','testneuf','testneuf@gmail.com','$2b$10$EMgrk/r8jOe4GUq.rVZHK.CuaRozxJ.XVDxLySXxJC2/DkKnY8ic.','2021-09-17 11:28:34',0),(33,'testdix','testdix','testdix','testdix@gmail.com','$2b$10$N/wGswIn0ouRnNLSJLOqDe0lNrxhPndFMSlVS5otvync3qs2tpcDu','2021-09-17 14:28:50',0),(34,'testonze','testonze','testonze','testonze@gmail.com','$2b$10$ynbhBgutdpCqX8eTJoY50e4zbVwUC9EIwYVtTdtVg.yKC1VFnQlB.','2021-09-17 14:32:21',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-17 15:57:45
