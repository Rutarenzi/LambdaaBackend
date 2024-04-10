import Category,{CategoryCreationProps,CategoryProps} from "../database/models/category";



class CategoryRepository  {
    static CategoryCreate=async(data:CategoryCreationProps)=>{
       await Category.create(data);
       return "created successfull"
    }
   
    static CategoryUpdate=async(data:CategoryProps)=>{
        console.log(data)
      await Category.update({...data},{where:{id:data.id}})
      return "updated successfully"
    }

   static CategoryAll=async()=>{
    return await Category.findAll()
   }

   static CategoryGetOne=async(id:number)=>{
   return await Category.findOne({where: {id}})
   }

   
    
}

export default CategoryRepository;