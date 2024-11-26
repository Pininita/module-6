import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

export const Artist = sequelize.define(
  "artist",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photourl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    timestamps: false,
  }
);
