import defaultPath from "../documentation/default.path"
import User from "./User/user";
import Category from "./Category/category";
import Product from "./Product/product";
const paths ={
    ...defaultPath,
    ...User,
    ...Category,
    ...Product
}


const config ={
    swagger: '2.0',
    info: {
        version: '1.0.0',
        title: "Lambdaa backend Api Documentation",
        description: '',
    },
    basePath:'/',
    schemes: ['http','https'],
    securityDefinitions:{
        JWT: {
            type: 'apiKey',
            name: 'Authorization',
            in:'header',
        },
    },
    tags: [
        {
            name: "Lambdaa APIs Documentation"
        }
    ],
    // consumes: ['multipart/form-data'],
    // produces: ['multipart/form-data'],
    paths
}

export default config