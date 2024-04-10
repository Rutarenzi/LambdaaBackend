import { Request,Response,NextFunction } from "express";
import Joi from "joi";
import { CategoryCreationProps } from "../database/models/category";



const CategorySchema:Joi.ObjectSchema<CategoryCreationProps>=Joi.object({
   categoryName:Joi.string().required(),
   imageCat:Joi.string().required(),
   description:Joi.string().required()
})
const CategorySchemaupdate:Joi.ObjectSchema<CategoryCreationProps>=Joi.object({
    categoryName:Joi.string().required(),
    imageCat:Joi.string().required(),
    description:Joi.string().required(),
    status: Joi.string().required(),
 })

const CategoryValidate =(req:Request,res:Response,next:NextFunction)=>{
  
    const {error}:{error:any} =CategorySchema.validate(req.body,{abortEarly:false})
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
const CategoryValidateUpdate =(req:Request,res:Response,next:NextFunction)=>{
  
    const {error}:{error:any} =CategorySchemaupdate.validate(req.body,{abortEarly:false})
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

export { CategoryValidate, CategoryValidateUpdate};