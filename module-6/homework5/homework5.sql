-- HOMEWORK 5	

SELECT * FROM book;
SELECT * FROM author;
SELECT * FROM publisher;
SELECT * FROM book_author;

-- POINT 1
-- Report 1

SELECT b.title AS book_title, p.name AS publisher_name
FROM book AS b
INNER JOIN publisher AS p ON b.publisher_id = p.publisher_id;

--Report 2

SELECT a.name AS author_name, b.title AS book_title
FROM author AS a
LEFT JOIN book_author AS ba ON a.author_id = ba.author_id
LEFT JOIN book AS b on ba.book_id = b.book_id;

-- Report 3

SELECT b.title AS book_title, a.name AS author_name
FROM book AS b
RIGHT JOIN book_author AS ba ON b.book_id = ba.book_id
RIGHT JOIN author AS a ON ba.author_id = a.author_id;

-- Report 4

SELECT
b.title AS book_title,
a.name AS author_name,
p.name AS publisher_name
FROM book AS b
INNER JOIN book_author AS ba ON b.book_id = ba.book_id
LEFT JOIN author AS a ON ba.author_id = a.author_id
LEFT JOIN publisher AS p ON b.publisher_id = p.publisher_id;

-- Report 5

SELECT
b.title AS book_title,
STRING_AGG(a.name, ', ') AS authors
FROM book AS b
INNER JOIN book_author AS ba ON b.book_id = ba.book_id
INNER JOIN author AS a ON ba.author_id = a.author_id
GROUP BY b.book_id
HAVING 
    COUNT(ba.author_id) > 1;