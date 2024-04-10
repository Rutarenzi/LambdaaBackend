import CategoryRepository from "../repositories/CategoryRepository";
import { CategoryCreationProps,CategoryProps } from "../database/models/category";

class CategoryService {

    static CategoryCreate=async(data:any)=>{
        const { 
            categoryName,
            imageCat,
            description
        } = data.body;
       const Category : CategoryCreationProps ={
          categoryName,
          imageCat,
          description,
          status: 'active'
       }
       return await CategoryRepository.CategoryCreate(Category)
    }
    static CategoryUpdate=async(data:any)=>{
        const { 
            categoryName,
            imageCat,
            description,
            status
        } = data.body;
        const { id } = data.params
        console.log(data.params)
        const categary :CategoryProps= {
            id:Number(id),
            categoryName,
            imageCat,
            description,
            status
        }
        return await CategoryRepository.CategoryUpdate(categary)

    }
    static CategoryAll=async()=>{
        return await CategoryRepository.CategoryAll();
       }
    static CategoryGetOne=async(data:any)=>{
        return await CategoryRepository.CategoryGetOne(Number(data.params.id))
    }


}

export default CategoryService;