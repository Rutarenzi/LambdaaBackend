import Product,{ProductCreationProps,ProductProps} from "../database/models/product";



class ProductRepository  {
    static ProductCreate=async(data:ProductCreationProps)=>{
       await Product.create(data);
       return "created successfull"
    }
   
    static ProductUpdate=async(data:ProductProps)=>{
        console.log(data)
      await Product.update({...data},{where:{id:data.id}})
      return "updated successfully"
    }

   static ProductAll=async()=>{
    return await Product.findAll()
   }

   static ProductGetOne=async(id:number)=>{
   return await Product.findOne({where: {id}})
   }

   
    
}

export default ProductRepository