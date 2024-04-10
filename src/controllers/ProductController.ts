import { Request,Response } from "express";
import ProductService from "../services/ProductService";

class ProductController {
   static ProductCreate = async(req: Request,res:Response)=>{
    try{
      const response = await ProductService.ProductCreate(req);
      return res.status(201).json({status: 201, response})
    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
   }

   static ProductUpdate=async(req:Request,res: Response)=>{
      try{ 
        const response = await ProductService.ProductUpdate(req);
        return res.status(200).json({status: 200, response})

      }catch(error:any){
        return res.status(500).json({status: 500, error:error.message})
      }
   }
   static ProductAll=async(req:Request,res: Response)=>{
    try{ 
      const response = await ProductService.ProductAll();
      return res.status(200).json({status: 200, response})

    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
    
 }
 static ProductGetOne=async(req:Request,res: Response)=>{
    try{ 
      const response = await ProductService.ProductGetOne(req);
      return res.status(200).json({status: 200, response})

    }catch(error:any){
      return res.status(500).json({status: 500, error:error.message})
    }
}
}

export default ProductController;