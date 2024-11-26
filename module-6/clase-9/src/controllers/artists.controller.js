import { Artist } from "../models/song.model.js";

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

  getArtistByName = async (req, res) => {
    try {
      const { name } = req.params.name;

      const artist = await Artist.findOne({ where: { name: name.toLowerCase() } });

      console.log(artist);

      if (!artist) {
        return res.status(404).json({ message: "artist not found" });
      }

      res.json(artist);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }

  create = async (req, res) => {
    try {
      const { releaseYear, title, genre, director } = req.body;
      console.log(req.body);

      if (!title || !genre || !releaseYear) {
        return res.status(400).json({ message: "All fields are required" });
      }

      if (isNaN(releaseYear)) {
        return res
          .status(404)
          .json({ message: "release year should be a numbers" });
      }

      const artist = await Artist.create(
        { releaseYear, title, genre, director },
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

      const { name, genre } = req.body;

      if (!name || !genre ) {
        return res.status(400).json({ message: "All fields are required" });
      }

      //const artist = await artist.update({releaseYear, title, genre}, {where: { id}})
      const artist = await Artist.findByPk(id);

      if (!artist)
        return res.status(404).json({ message: "artist not found" });

      artist.set({
        name,
        genre,
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