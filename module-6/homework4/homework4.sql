-- homework 4

SELECT * FROM book;
SELECT * FROM author;
SELECT * FROM publisher;
SELECT * FROM book_author;

-- point 1

SELECT * FROM book
WHERE publisher_id IN(
	SELECT publisher_id FROM publisher
	WHERE name LIKE 'Penguin Books'
);

SELECT * FROM book
WHERE publication_year > 1950;

SELECT name FROM author
WHERE author_id IN (
	SELECT author_id FROM book_author
	WHERE book_id IN(
		SELECT book_id FROM book
		WHERE genre = 'Fantasy'
	)
);

SELECT title FROM book
WHERE book_id IN(
	SELECT book_id FROM book_author
	WHERE author_id IN(
		SELECT author_id FROM author
		WHERE name LIKE 'J.K.%'
	)
);

SELECT title FROM book
WHERE book_id IN(
	SELECT book_id FROM book_author
	WHERE author_id IN(
		SELECT author_id FROM author
		WHERE nationality = 'British'
	)
);

--point 2

SELECT * FROM book;
SELECT * FROM author;

UPDATE book
SET genre = 'Science Fiction'
WHERE title = '1984';

UPDATE author
SET nationality = 'Canadian'
WHERE name = 'Mark Twain';

--point 3

SELECT * FROM book;
SELECT * FROM author;
SELECT * FROM book_author;

DELETE FROM book_author
WHERE book_id = 2;

DELETE FROM book
WHERE Title = 'Pride and Prejudice';

--

DELETE FROM author
WHERE author_id NOT IN(
	SELECT DISTINCT author_id
	FROM book_author
);





