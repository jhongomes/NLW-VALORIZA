import { Repository } from "typeorm";
import { EntityRepository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User>{

}

export {UsersRepositories}