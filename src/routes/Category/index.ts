
import { Router } from "express";
import CategoryController from "../../controllers/CategoryController";
import {CategoryValidate,CategoryValidateUpdate} from "../../validations/CatValidate";
import Auth from "../../middlewares/Auth";
import CategoryExist from "../../middlewares/CategoryExist";

const  CategoryRouter = Router();

CategoryRouter.post('/',
Auth,
CategoryValidate,
CategoryController.CategoryCreate
)
CategoryRouter.put('/:id',
    Auth,
    CategoryValidateUpdate,
    CategoryExist,
    CategoryController.CategoryUpdate
)
CategoryRouter.get('/',
Auth,
CategoryController.CategoryAll
)
CategoryRouter.get('/:id',
    Auth,
    CategoryExist,
    CategoryController.CategoryGetOne
)

export default CategoryRouter;