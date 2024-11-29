import { where } from "sequelize";
import { Artist } from "../models/artists.model.js";
import { Song } from "../models/song.model.js";

export class SongController {

  getSongs = async (req, res) => {

    const { limit } = req.query;

    try {
      const songs = await Song.findAll({
        //attributes: ['releaseYear', 'id']
        limit,
      });

      res.json(songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  getSongById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const song = await Song.findOne({ where: { id } });

      console.log(song);

      if (!song) {
        return res.status(404).json({ message: "song not found" });
      }

      res.json(song);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  getSongsByArtistId = async (req, res) => {
    try {

      const artistId = parseInt(req.params.artistId)

      const artist = await Artist.findByPk(artistId)

      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }

      const songs = await Song.findAll({ where: { artistId } })

      if (songs.length === 0) {
        return res.status(404).json({ message: "No songs found for this artist" });
      }

      res.json(
        {
          artist:{
            id: artist.id,
            name: artist.name,
            bio: artist.bio,         
            songs: songs,
          }
        }
      )
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  create = async (req, res) => {
    try {
      const { title, artistId, releaseYear, duration, coverUrl } = req.body;
      console.log(req.body);

      if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const song = await Song.create(
        { title, artistId, releaseYear, duration, coverUrl },
      );

      res.status(201).json(song);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  updateSong = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const { title, artistId, releaseYear, duration, coverUrl } = req.body;

      if (!title || !artistId || !releaseYear || !duration || !coverUrl) {
        return res.status(400).json({ message: "All fields are required" });
      }

      //const song = await song.update({name, bio, photourl}, {where: { id}})
      const song = await Song.findByPk(id);

      if (!song)
        return res.status(404).json({ message: "song not found" });

      song.set({
        title,
        artistId,
        releaseYear,
        duration,
        coverUrl
      })

      await song.save();

      res.status(200).json(song);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteSong = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const result = await Song.destroy({ where: { id: id } });


      if (!result || result <= 0)
        return res.status(404).json({ message: "song not found" });

      res.json({ id: id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

};