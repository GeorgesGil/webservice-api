CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(180) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL,
  `updated_at` timestamp NOT NULL
)