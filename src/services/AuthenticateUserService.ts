import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare} from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user = await usersRepositories.findOne({
            email
        });

        if(!user){
            throw new Error("Email ou Password incorrect!")
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath){
            throw new Error("Email ou Password incorrect!")
        }

        const token = sign({
            email: user.email
        }, "6425dbf9cd648e1e4d33c4340d3373d", {
            subject: user.id,
            expiresIn: "1d"
        })

        return token;       




    }

}
export { AuthenticateUserService}