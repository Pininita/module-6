import { where } from "sequelize";
import { Artist } from "../models/artists.model.js";
import { Song } from "../models/song.model.js";

export class ArtistController {

  getArtists = async (req, res) => {

    const { limit } = req.query;

    try {
      const artist = await Artist.findAll({
        //attributes: ['releaseYear', 'id']
        limit,
      });

      res.json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }




  getArtistById = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const artist = await Artist.findOne({ where: { id } });

      console.log(artist);

      if (!artist) {
        return res.status(404).json({ message: "artist not found" });
      }

      res.json(artist);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  getSongsByArtistId = async (req, res) => {
    try {
      const artistId= parseInt(req.params.id)

      const artist = await Artist.findByPk(artistId)

      if (!artist) {
        return res.status(404).json({ message: "Artist not found" });
      }

      const songs = await Song.findAll({where: {artistId}})

      if (songs.length === 0) {
        return res.status(404).json({ message: "No songs found for this artist" });
      }
      res.json(songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  create = async (req, res) => {
    try {
      const { name, bio, photoUrl } = req.body;
      console.log(req.body);

      if (!name || !bio || !photoUrl) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const artist = await Artist.create(
        { name, bio, photoUrl },
      );

      res.status(201).json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  updateArtist = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const { name, bio, photoUrl } = req.body;

      if (!name || !bio || !photoUrl) {
        return res.status(400).json({ message: "All fields are required" });
      }

      //const artist = await artist.update({name, bio, photoUrl}, {where: { id}})
      const artist = await Artist.findByPk(id);

      if (!artist)
        return res.status(404).json({ message: "artist not found" });

      artist.set({
        name,
        bio,
        photoUrl,
      })

      await artist.save();

      res.status(200).json(artist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  deleteArtist = async (req, res) => {
    try {
      const id = parseInt(req.params.id);

      const result = await Artist.destroy({ where: { id: id } });


      if (!result || result <= 0)
        return res.status(404).json({ message: "artist not found" });

      res.json({ id: id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

};