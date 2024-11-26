import express from 'express';
import sequelize from '../table_db/sequelize.js';

const router = express.Router();

router.get("/artists", async (req, res) => {
  const { limit } = req.query;

  let query = `
    SELECT * FROM artists
  `;

  limit ? (query += ` LIMIT ${limit};`) : (query += ";");
  
  try {
    const result = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/artists/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const result = await sequelize.query(
      `
      SELECT * FROM artists
      WHERE id = :id
    `,
      {
        replacements: { id },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!result?.length > 0)
      return res.status(404).json({ message: "artist not found" });
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/artists", async (req, res) => {
  try {
    const { name, bio, photourl } = req.body;
    

    if (!name || !bio || !photourl) {
      return res.status(400).json({ message: "All fields are required" });
    }


    const result = await sequelize.query(
      `
      INSERT INTO artists (name, bio, photourl)
      VALUES (:name, :bio, :photourl)
      RETURNING *;
    `,
      {
        replacements: { name, bio, photourl },
        type: sequelize.QueryTypes.INSERT,
      }
    );

    if (!result?.length > 0) {
      return res.status(404).json({ message: "something went wrong" });
    }

    res.status(201).json(result[0][0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/artists/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const { name, bio, photourl } = req.body;

    if (!name || !bio || !photourl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [artists, number] = await sequelize.query(
      `
        UPDATE artists
        SET name = :name,
            bio = :bio,
            photourl = :photourl
        WHERE id = :id
        RETURNING *;
        `,
      {
        replacements: { name, bio, photourl, id },
        type: sequelize.QueryTypes.UPDATE,
      }
    );

    if (number <= 0)
      return res.status(404).json({ message: "artist not found" });

    res.status(200).json(artists[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/artists/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const result = await sequelize.query(
      `
      DELETE FROM artists
      WHERE id = :id
      RETURNING *;
      `,
      {
        replacements: { id },
        type: sequelize.QueryTypes.DELETE,
      }
    );

    console.log(result);

    if (result.length === 0)
      return res.status(404).json({ message: "Movie not found" });

    res.json(result[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;