import { Router } from "express";
import UserController from "../../controllers/UserController";
import  UserValidate from "../../validations/AuthValidate";
import { CheckUserDoesNoExist,CheckUserExist } from "../../middlewares/CheckUser";


const UserRouter = Router();


UserRouter.post('/signup',
UserValidate,
CheckUserDoesNoExist,
 UserController.signUp
)

UserRouter.post('/login',
UserValidate,
CheckUserExist,
UserController.login
)
export default UserRouter;