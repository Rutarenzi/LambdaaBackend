import dotenv from "dotenv";

dotenv.config()

const PORT = process.env.PORT || 3000
const Keys ={
    // DATABASE KEYS
 PORT : Number(PORT),
 NODE_ENV : process.env.NODE_ENV,
 DEV_DATABASE : process.env.DEV_DATABASE,
 DATABASE_HOST : process.env.DATABASE_HOST,
 DATABASE_USER : process.env.DATABASE_USER,
 DATABASE_PORT :process.env.DATABASE_PORT,
 DATABASE_PASSWORD : process.env.DATABASE_PASSWORD,
 JWT_SECRET : process.env.JWT_SECRET || 'helloworld',


}

export default Keys