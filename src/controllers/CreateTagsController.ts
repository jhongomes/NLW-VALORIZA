import { Request, Response} from "express";
import {CreateTagsService} from "../services/CreateTagsService";


class CreateTagsController {
    async handle(request: Request, response: Response){
    
    const { name } = request.body;
    
    const createTagsService = new CreateTagsService();   

    const tags = await createTagsService.execute(name);

    return response.json(tags);
}

}

export { CreateTagsController }