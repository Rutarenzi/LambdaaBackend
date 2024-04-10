import User, {UserCreactionProps } 
from "../database/models/user";



class UserRepository {
 static signup = async(user:UserCreactionProps)=>{
    await User.create(user);
    return "signed up successfully"
 }
 static findUser=async(user:string)=>{
    return await User.findOne({where:{email:user}})
   }
}

export default UserRepository;
