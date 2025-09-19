-- =====================================
-- EdgeFi Database: wifirental
-- =====================================

CREATE DATABASE IF NOT EXISTS wifirental;
USE wifirental;

-- =====================================
-- Users Table
-- =====================================
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(20) UNIQUE NOT NULL,
  name VARCHAR(100),
  password_hash VARCHAR(255) NOT NULL,
  email VARCHAR(100),
  role ENUM('user','superadmin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Super Admin
INSERT INTO users (phone, name, password_hash, email, role) VALUES
('+254700000000', 'Joseph Ogwe', SHA2('Josboy@254',256), 'josephogwe8@gmail.com', 'superadmin');

-- Sample User
INSERT INTO users (phone, name, password_hash, role) VALUES
('+254700111222', 'Test User', SHA2('test123',256), 'user');

-- =====================================
-- Packages Table
-- =====================================
CREATE TABLE IF NOT EXISTS packages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(255),
  price INT NOT NULL,
  duration_hours INT DEFAULT 0,
  users_allowed INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Hourly Packages
INSERT INTO packages (name, description, price, duration_hours, users_allowed) VALUES
('2 Hours', 'Hourly Package', 10, 2, 1),
('6 Hours', 'Hourly Package', 20, 6, 1),
('12 Hours', 'Hourly Package', 30, 12, 1),
('24 Hours', 'Hourly Package', 50, 24, 1);

-- Daily Packages
INSERT INTO packages (name, description, price, duration_hours, users_allowed) VALUES
('2 Days', 'Daily Package', 80, 48, 1),
('3 Days', 'Daily Package', 100, 72, 1),
('4 Days', 'Daily Package', 150, 96, 1),
('7 Days - 2 Users', 'Weekly Package', 250, 168, 2),
('14 Days - 2 Users', 'Weekly Package', 350, 336, 2);

-- Monthly Packages
INSERT INTO packages (name, description, price, duration_hours, users_allowed) VALUES
('30 Days - 1 User', 'Monthly Package', 700, 720, 1),
('30 Days - 3 Users', 'Monthly Package', 1000, 720, 3);

-- =====================================
-- Payments Table
-- =====================================
CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  external_id VARCHAR(50),
  provider VARCHAR(50),
  amount_cents INT,
  status ENUM('pending','completed') DEFAULT 'pending',
  phone VARCHAR(20),
  plan_id INT,
  hotspot_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- Hotspot Earnings Table
-- =====================================
CREATE TABLE IF NOT EXISTS hotspot_earnings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  payment_id INT,
  hotspot_id INT,
  partner_id INT,
  amount_cents INT,
  partner_share_cents INT,
  platform_share_cents INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- Vouchers Table
-- =====================================
CREATE TABLE IF NOT EXISTS vouchers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  user_id INT NOT NULL,
  redeemed TINYINT(1) DEFAULT 0,
  valid_days INT DEFAULT 7,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample Voucher
INSERT INTO vouchers (code, user_id, redeemed, valid_days) VALUES
('TESTVOUCHER2025', 2, 0, 7);
