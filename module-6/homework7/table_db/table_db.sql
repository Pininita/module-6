-- artist table

CREATE TABLE IF NOT EXISTS artists (
	artist_id SERIAL PRIMARY KEY,
	name VARCHAR(250) NOT NULL,
	bio TEXT NOT NULL,
	photoUrl VARCHAR(255)
);

INSERT INTO artists (artist_id, name, bio, photoUrl) VALUES
(1,'The Beatles', 'The Beatles were an English rock band formed in Liverpool.', 'https://picsum.photos/id/1015/400/400'),
(2,'Adele', 'Adele is an English singer-songwriter known for her soulful voice.', 'https://picsum.photos/id/1016/400/400');

-- songs table 

CREATE TABLE IF NOT EXISTS songs (
	song_id SERIAL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	artist_id INTEGER,
	FOREIGN KEY (artist_id) REFERENCES artists(artist_id),
	releaseYear INTEGER NOT NULL, 
	duration INTEGER NOT NULL,
	coverUrl VARCHAR(255)
);

INSERT INTO songs (song_id, title, artist_id, releaseYear, duration, coverUrl) VALUES
(1, 'Hey Jude', 1, 1968, 431, 'https://picsum.photos/id/1018/400/400'),
(2, 'Let It Be', 1, 1970, 243, 'https://picsum.photos/id/1020/400/400'),
(3, 'Rolling in the Deep', 2, 2010, 228, 'https://picsum.photos/id/1021/400/400'),
(4, 'Someone Like You', 2, 2011, 284, 'https://picsum.photos/id/1022/400/400'),
(5, 'Hello', 2, 2015, 295, 'https://picsum.photos/id/1023/400/400');
