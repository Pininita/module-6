import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Song = sequelize.define(
  "song",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'artists', // Nombre de la tabla a la que se refiere
        key: 'id',        // Llave primaria de la tabla de referencia
      },
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverurl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);