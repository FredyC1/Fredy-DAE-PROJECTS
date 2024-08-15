-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 15, 2024 at 04:25 PM
-- Server version: 8.0.35
-- PHP Version: 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `StudyAI`
--

-- --------------------------------------------------------

--
-- Table structure for table `Extra`
--

CREATE TABLE `Extra` (
  `Num` int NOT NULL,
  `Age` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `FLASHCARD`
--

CREATE TABLE `FLASHCARD` (
  `TERM` varchar(50) DEFAULT NULL,
  `DEF` varchar(50) DEFAULT NULL,
  `TITLE` varchar(50) DEFAULT NULL,
  `SUBJECT` varchar(50) DEFAULT NULL,
  `DESCRIPTION` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `FLASHCARD`
--

INSERT INTO `FLASHCARD` (`TERM`, `DEF`, `TITLE`, `SUBJECT`, `DESCRIPTION`) VALUES
('What is Fredy\'s Last name?', 'Pinky', 'Last Names', 'English', 'N/A');

-- --------------------------------------------------------

--
-- Table structure for table `LogIn`
--

CREATE TABLE `LogIn` (
  `Username` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `SignUp`
--

CREATE TABLE `SignUp` (
  `Username` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `SignUp`
--

INSERT INTO `SignUp` (`Username`, `Password`, `Email`) VALUES
('KFredy', 'EgortheSith', 'KFlock@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Extra`
--
ALTER TABLE `Extra`
  ADD PRIMARY KEY (`Num`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
