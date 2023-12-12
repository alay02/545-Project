CREATE DATABASE IF NOT EXISTS TasteOfTheTown;
USE TasteOfTheTown;

CREATE TABLE IF NOT EXISTS restaurant (
    restaurant_id INT PRIMARY KEY,
    restaurant_name VARCHAR(255) NOT NULL,
    restaurant_city VARCHAR(255) NOT NULL,
    restaurant_website VARCHAR(255),
    restaurant_rating INT,
    restaurant_desc TEXT,
);

CREATE TABLE IF NOT EXISTS review (
    review_id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    review_name VARCHAR(255),
    review_rating INT,
    review_comment TEXT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurant (restaurant_id)
);

INSERT IGNORE INTO restaurant VALUES
    (1, 'Tacoria', 'hoboken', 'https://tacoria.com/location/hoboken/', 4,'
            We''re just a couple of friends from Rutgers who REALLY love Mexican 
            food, and we wanted to share our love with others back home.'),
    (2, 'Toast X Bowl', 'hoboken','https://www.toastxbowl.com/', 5, '
            Welcome to Toast x Bowl, where passion for food meets a delightful
            culinary experience. Located in the heart of Hoboken, our restaurant
            is a haven for food lovers seeking exceptional flavors and a cozy
            ambiance. Whether you''re looking for a satisfying sandwich, a
            nourishing rice bowl, or a refreshing coffee drink, our diverse menu
            is designed to tantalize your taste buds and leave you craving for
            more.'),
    (3, 'Tony Boloney''s', 'hoboken','https://www.tonyboloneys.com/locations/hoboken', 4, '
            We’ve been tossing out tradition and servin’ up delicious,
            experimental grub for over a decade.'),
    (4, 'East LA', 'hoboken','https://www.ilovemargaritas.org/', 3, ' 
            East LA Restaurant at 508 Washington Street has been an institution
            in Hoboken since 1983. Hoboken’s first Tex-Mex restaurant has been
            owned by Dave Roberts and his family for over 30 years. At East LA,
            we are committed to serving delicious, inviting food made only from
            the freshest ingredients, served in generous portions at affordable
            prices.');

INSERT IGNORE INTO review VALUES
    (1, 1, 'Shivam Patel', 4, 'I''ve been going to the one at Rutgers for years, I''m so glad they opened one in Hoboken. I always get their carne asada tacos with extra beans. I definitely recommend.'),
    (2, 2, 'Krish Nair', 5, 'Toast X Bowl is SO good!! I get myself a caramel frappe with extra whipped cream everytime I go... and I go alot! The staff is super friendly and the food is really good as well. Definitely one of my favorite spots in Hoboken')