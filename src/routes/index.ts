import { Router } from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "../documentation";
import NotFound from '../controllers/NotFound';
import UserRouter from './User';
import CategoryRouter from './Category';
import ProductRouter  from "./Product"

const routes = Router();


routes.use('/docs', swaggerUi.serve);
routes.get('/docs',swaggerUi.setup(swaggerOptions))
routes.use('/User', UserRouter);
routes.use('/Category',CategoryRouter);
routes.use('/Product',ProductRouter)
routes.get('*',NotFound);



export default routes;