import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiveCompliments";


class ListUserReceiverComplimentsController {

    async handle(request:Request, response: Response){
        const { user_id } = request;
        const listUserReceiverComplimentsRepositories = new ListUserReceiverComplimentsService()

        const compliments = await listUserReceiverComplimentsRepositories.execute(user_id)

        return response.json(compliments);
    }

}

export { ListUserReceiverComplimentsController}
