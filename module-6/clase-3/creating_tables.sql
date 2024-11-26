-- DML

--INSERT

INSERT INTO authors (name, birthdate)
	VALUES 
	('George Orwell', '1903-07-31'),
	('Juanito', '1993-07-31');
	



SELECT * FROM authors;

INSERT INTO books (title, publication_year, author_id)
	VALUES
	('Cien años de soledad', 1967, 12589),
	('Harry Potter I', 1997, 1),
	('Harry Potter IV', 2008, 1),
	('Juanito Aventuras', 2024, 5);

	SELECT * FROM books;


	INSERT INTO members (name)
	VALUES 
	('JUana de Arco');
	
	SELECT * FROM members;

	INSERT INTO loans 
	(books_id, member_id, loan_date, return_date)
	VALUES
	(13, 1, '2023-04-01', '2023-05-01'),
	(14, 3, '2023-04-01', '2023-07-25'),
	(15, 2, '2024-10-25', null),
	(16, 2, '2023-05-05', null);


SELECT * FROM loans;