
import { Router } from "express";
import ProductController from "../../controllers/ProductController";
import {ProductValidate,ProductValidateUpdate} from "../../validations/ProductValidate";
import Auth from "../../middlewares/Auth";
import ProductExist from "../../middlewares/ProductExist";
import CategoryExist from "../../middlewares/CategoryExist";

const  ProductRouter = Router();

ProductRouter.post('/',
Auth,
ProductValidate,
CategoryExist,
ProductController.ProductCreate
)
ProductRouter.put('/:id',
    Auth,
    ProductValidateUpdate,
    ProductExist,
    CategoryExist,
    ProductController.ProductUpdate
)
ProductRouter.get('/',
Auth,
ProductController.ProductAll
)
ProductRouter.get('/:id',
    Auth,
    ProductExist,
    ProductController.ProductGetOne
)

export default ProductRouter;