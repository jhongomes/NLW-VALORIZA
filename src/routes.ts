import {Router} from "express";
import { CreateTagsController } from "./controllers/CreateTagsController";
import { CreateUsersController } from "./controllers/CreateUsersControler";
import { ensureAdmin} from "../src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentsController } from "./controllers/CreateComplimentsController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";


const router = Router();

const  createUserController = new CreateUsersController();
const createTagsController = new CreateTagsController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()
router.post("/users", createUserController.handle)

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagsController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle)

router.post("/session", authenticateUserController.handle)
router.post("/compliments",ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receiver", ensureAuthenticated, listUserReceiverComplimentsController.handle)
router.get("/users", ensureAuthenticated, listUsersController.handle)



export { router }
