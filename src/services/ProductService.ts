import ProductRepository from "../repositories/ProductRepository";
import { ProductCreationProps,ProductProps } from "../database/models/product";

class ProductService {

    static ProductCreate=async(data:any)=>{
        const { 
            name,
            image,
            country,
            categoryId,
            description,
            tag
        } = data.body;
       const Product : ProductCreationProps ={
        name,
        image,
        country,
        categoryId,
        description,
        tag,
        status: 'active'
       }
       return await ProductRepository.ProductCreate(Product)
    }
    static ProductUpdate=async(data:any)=>{
        const { 
            name,
            image,
            country,
            categoryId,
            description,
            tag,
            status,
        } = data.body;
        const { id } = data.params
        console.log(data.params)
        const Product :ProductProps= {
            id: Number(id),
            name,
            image,
            country,
            categoryId,
            description,
            tag,
            status
        }
        return await ProductRepository.ProductUpdate(Product)

    }
    static ProductAll=async()=>{
        return await ProductRepository.ProductAll();
       }
    static ProductGetOne=async(data:any)=>{
        return await ProductRepository.ProductGetOne(Number(data.params.id))
    }


}

export default ProductService;