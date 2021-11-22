import { Router } from "express"
import { createUserController } from "../modules/account/useCases/createUser";
import { listUserController } from "../modules/account/useCases/listUser";
import { unpublishPostController } from "../modules/account/useCases/unpublishPost";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUserController.handle(request, response);
});

usersRoutes.get("/:id/drafts", (request, response) => {
  return unpublishPostController.handle(request, response);
});

export { usersRoutes }