import { Repository } from "typeorm";
import { EntityRepository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag>{

}

export { TagsRepositories }