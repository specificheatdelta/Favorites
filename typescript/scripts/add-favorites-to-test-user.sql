-- Replace the following variable values with your actual data
SET @profileId = 'your_profile_id';
SET @contentIds = ('content_id_1', 'content_id_2', 'content_id_3', 'content_id_4', 'content_id_5');

-- Insert sample data into the `favorite` table
INSERT INTO `favorite` (`id`, `profileId`, `title`, `category`, `contentId`)
VALUES
  (UUID(), @profileId, 'Sample Favorite 1', 'category1,category2', @contentIds[0]),
  (UUID(), @profileId, 'Sample Favorite 2', 'category2,category3', @contentIds[1]),
  (UUID(), @profileId, 'Sample Favorite 3', 'category1,category3', @contentIds[2]),
  (UUID(), @profileId, 'Sample Favorite 4', 'category1,category4', @contentIds[3]),
  (UUID(), @profileId, 'Sample Favorite 5', 'category2,category4', @contentIds[4]);
