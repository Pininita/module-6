import { where } from 'sequelize';
import {sequelize} from '../db/sequelize.js'
import {Movie} from '../models/movies.Model.js'

export class MovieController {

    getMovies = async (req, res) => {
      
        
      
        try {
          const movies = await Movie.findAll()
          console.log(movies);
      
          res.json(result);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }

      getMovieByID =  async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const result = await Movie.findByPk(id);
      
          if (!movie){
            return res.status(404).json({ message: 'movie not found'})
          }
            
        } catch (error) {
          res.status(500).json({ message: "Internal server error" });
        }
      }

      create = async (req, res) => {
        try {
          const { releaseYear, title, genre } = req.body;
          console.log(req.body);
      
          if (!title || !genre || !releaseYear) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          if (isNaN(releaseYear)) {
            return res
              .status(404)
              .json({ message: "release year should be a numbers" });
          }
      
        //   const result = await sequelize.query(
        //     `
        //     INSERT INTO movies (title, genre, releaseYear)
        //     VALUES (:title, :genre, :releaseYear)
        //     RETURNING *;
        //   `,
        //     {
        //       replacements: { title, genre, releaseYear },
        //       type: sequelize.QueryTypes.INSERT,
        //     }
        //   );
        const movie = await Movie.create({releaseYear, title, genre})
      
          if (!result[0].length > 0) {
            return res.status(404).json({ message: "something went wrong" });
          }
      
          res.status(201).json(result[0][0]);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
        
        console.log(movie);
      }

      updateMovie = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const { releaseYear, title, genre } = req.body;
      
          if (!title || !genre || !releaseYear) {
            return res.status(400).json({ message: "All fields are required" });
          }
      
          const movie = await Movie.update({releaseYear, title, genre} , {where: { id }})
      
          if (!movie)
            return res.status(404).json({ message: "Movie not found" });

          movie.set({
            releaseYear, 
            title, 
            genre
          })

          await movie.save();
      
          res.status(200).json(movie);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }
      delete = async (req, res) => {
        try {
          const id = parseInt(req.params.id);
      
          const result = await Movie.destroy({where: {id : id}})
      
          console.log(result);
      
          if (!result || result <= 0)
            return res.status(404).json({ message: "Movie not found" });
      
          res.json({id : id});
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: "Internal server error" });
        }
      }

}

 