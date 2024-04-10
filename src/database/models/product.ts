import {  DataTypes, Model, Optional } from "sequelize";
import { sequelize } from '.';


export interface  ProductProps {
  id: Number;
  name: string;
  image: string;
  country: String;
  description: string;
  categoryId: Number;
  tag: String;
  status: String;
}

export interface ProductCreationProps 
extends Optional<ProductProps,'id'>{}

export interface ProductInstance extends 
Model<ProductProps,ProductCreationProps>,ProductProps{
    createdAt?:Date;
    updateAt?: Date;
}



const Product = sequelize.define<ProductInstance>(
    'Product',
    {
        id: {
         allowNull:false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER,
         unique: true,
        },
        name: {
         allowNull: false,
         type: DataTypes.TEXT,
         unique: false
        },
        image: {
         allowNull: false,
         type: DataTypes.TEXT,
         unique: false,
        },
        country: {
            allowNull: false,
            type: DataTypes.TEXT,
            unique: false
           },
           description: {
            allowNull: false,
            type: DataTypes.TEXT,
            unique: false
           },
        categoryId: {
         allowNull:false,
         type: DataTypes.INTEGER,
         unique: false
        },
        tag: {
         allowNull: true,
         type: DataTypes.TEXT,
         unique: false
        }, 
        status: {
         allowNull: false,
         type: DataTypes.TEXT,
         unique: false
        }  
 
     }
)


export default Product
