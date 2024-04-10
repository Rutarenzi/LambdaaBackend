import { Response,NextFunction } from "express";
import CategoryRepository from "../repositories/CategoryRepository";

const CategoryExist=async(req:any,res:Response,next:NextFunction)=>{
    try{
        
        const id = Number(req.params.id) || req.body?.categoryId
        const category = await CategoryRepository.CategoryGetOne(id);
        
     if(category){
        return next();  
     }
     else{
        return res.status(404).json({status: 404, error: "Category does not exist"})
     }
    }catch(error: any){
        return res.status(500).json({status: 500,error: error.message})
    }
 
 } 

 export default  CategoryExist