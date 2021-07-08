import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentService";


class ListUserSendComplimentsController {

    async handle(request:Request, response: Response){
        const { user_id } = request;
        const listUserSendComplimentsRepositories = new  ListUserSendComplimentsService()

        const compliments = await listUserSendComplimentsRepositories.execute(user_id)

        return response.json(compliments);
    }

}

export { ListUserSendComplimentsController}