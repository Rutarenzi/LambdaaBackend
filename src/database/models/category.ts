import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

export interface CategoryProps {
  id: number;
  categoryName: String;
  imageCat: String;
  description: String;
  status: String;
}

export interface CategoryCreationProps 
extends Optional<CategoryProps,'id'>{}


export interface CategoryInterface extends
Model<CategoryProps, CategoryCreationProps>, CategoryProps{
  createdAt?: Date;
  updatedAt?: Date;
}

const Category = sequelize.define<CategoryInterface>(
  'Category',
  {
    id: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
     },
     categoryName: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: false
     },
     imageCat: {
      allowNull: false,
      type: DataTypes.TEXT,
      unique: false,
     },
     description: {
         allowNull: false,
         type: DataTypes.TEXT,
         unique: false
        },
     status: {
      allowNull:false,
      type: DataTypes.TEXT,
      unique: false
     },
  }
)

export default Category