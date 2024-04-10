import { Request,Response } from "express";
import CategoryService from "../services/CategoryService";

class CategoryController {
   static CategoryCreate = async(req: Request,res:Response)=>{
    try{
      const response = await CategoryService.CategoryCreate(req);
      return res.status(201).json({status: 201, response})
    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
   }

   static CategoryUpdate=async(req:Request,res: Response)=>{
      try{ 
        const response = await CategoryService.CategoryUpdate(req);
        return res.status(200).json({status: 200, response})

      }catch(error:any){
        return res.status(500).json({status: 500, error:error.message})
      }
   }
   static CategoryAll=async(req:Request,res: Response)=>{
    try{ 
      const response = await CategoryService.CategoryAll();
      return res.status(200).json({status: 200, response})

    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
    
 }
 static CategoryGetOne=async(req:Request,res: Response)=>{
    try{ 
      const response = await CategoryService.CategoryGetOne(req);
      return res.status(200).json({status: 200, response})

    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
}
}

export default CategoryController;