INSERT INTO author (name, nationality)
VALUES
('Brian Tracy','Canadian'),
('Daniel Goleman','American'),
('T. Harv Eker','Canadian');

SELECT * FROM author;

INSERT INTO publisher (name, country)
VALUES
('Ediciones Obelisco','Spain'),
('Editorial Kairós','Spain'),
('Editorial Sirio','Spain');

SELECT * FROM publisher;

INSERT INTO book (title, genre, publication_year, publisher_id)
VALUES
('Si lo crees, lo creas', 'self help', 2018, 1),
('La inteligencia emocional', 'self help', 1995, 2),
('Los secretos de la mente millonaria', 'self help', 2005, 3);

SELECT * FROM book;

INSERT INTO book_author (book_id, author_id)
VALUES
(1,1),
(2,2),
(3,3);

SELECT * FROM book_author;