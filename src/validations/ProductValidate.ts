import { Request,Response,NextFunction } from "express";
import Joi from "joi";
import {ProductCreationProps } from "../database/models/product"



const ProductSchema:Joi.ObjectSchema<ProductCreationProps>=Joi.object({
   name:Joi.string().required(),
   image:Joi.string().required(),
   country:Joi.string().required(),
   categoryId:Joi.number().required(),
   description:Joi.string().required(),
   tag: Joi.string().required()
})
const ProductSchemaupdate:Joi.ObjectSchema<ProductCreationProps>=Joi.object({
    name:Joi.string().required(),
   image:Joi.string().required(),
   country:Joi.string().required(),
   categoryId:Joi.number().required(),
   description:Joi.string().required(),
   tag: Joi.string().required(),
   status: Joi.string().required()
 })

const ProductValidate =(req:Request,res:Response,next:NextFunction)=>{
  
    const {error}:{error:any} =ProductSchema.validate(req.body,{abortEarly:false})
    if(error){
        return res.status(400).json({
            status: 400,
            error: error.details.map(
                (detail:any) => detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
            ),
        });
    }
  next();
}
const ProductValidateUpdate =(req:Request,res:Response,next:NextFunction)=>{
  
    const {error}:{error:any} =ProductSchemaupdate.validate(req.body,{abortEarly:false})
    if(error){
        return res.status(400).json({
            status: 400,
            error: error.details.map(
                (detail:any) => detail.message.replace(/[^a-zA-Z0-9 ]/g, "")
            ),
        });
    }
  next();
}

export { ProductValidate, ProductValidateUpdate};