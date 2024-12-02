0. npm init -y
1. instalar sequelize y postgresql en el proyecto:
npm install sequelize pg pg-hstore
2. instalar express: npm i express
3. intalar dotenv: npm i dotenv
4. instalar nodemon: npm i --save-dev nodemon

<!-- instructions to use artist's api -->

This api we will able to create, read, update and delete, artist and songs

Place the right portal code, for example "localhost:4001/"

**ARTIST:**

**get**

- get artists: use "/artists" to get all artist.

- get artist by id: use "/artists/:id" and type a number to get and specific artist, example "artists/1 so you will get the beatles"

- get songs from artist: use "/artists/:id/songs" to get all songs from an especific artist id

- get artist by song duration: use "/artists-by-song-duration/:duration" to get artist that have the same song duration that you required or more, including the song

**post**

- post new artist: use "/artists" and at body section, below body section you will need to select "raw" and "json" type. Now you can type and add an artist

```json
{
    "name": "The Beatles",
    "bio": "The Beatles were an English rock band formed in Liverpool.",
    "photoUrl": "https://picsum.photos/id/1015/400/400"
}

```
**put**

- update artist: use "/artists/:id" and choose an artist id that you want to change or update over the body

**delete**

- delete artist: use "/artists/:id" to delete any artist

**SONGS:**

**get**

- get songs: use "/songs" to get all songs

- get song by id: use "/songs/:id" to get a specific song

- get songs from a specific artist id: use "/songs/artist/:artistId" to get all songs from specific artist

**post**

create song: use "/songs" to add a new song at body section, below body section you will need to select "raw" and "json" type. Now you can type and add a song.

```json
{
    "title": "Hello",
    "artistId": 2,
    "releaseYear": 2015,
    "duration": 295,
    "coverUrl": "https://picsum.photos/id/1023/400/400"
  }
```

**put**

- update song: use "/songs/:id" and choose a song id that you want to change or update over the body

**delete**

- delete song: use "/songs/:id" to delete any song