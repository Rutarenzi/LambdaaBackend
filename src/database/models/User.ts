import { DataTypes, Model,Optional } from 'sequelize';
import { sequelize } from '.';

export interface UserProps {
    id: number;
    email: string;
    password: string;
}

export interface UserCreactionProps 
extends Optional<UserProps,'id'>{
}

export interface UserInstance extends 
Model<UserProps,UserCreactionProps>,UserProps{
 createdAt?:Date;
 updatedAt?: Date;
}


const User = sequelize.define<UserInstance>(
    'User',
    {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
          unique: true,
        },
        email: {
          allowNull: false,
          type: DataTypes.TEXT,
          unique: true
        },
        password:{
            allowNull: false,
            type: DataTypes.TEXT,
        }
      }
)




export default User