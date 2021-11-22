import { Router } from "express"
import { createUserController } from "../modules/account/useCases/createUser";
import { listUserController } from "../modules/account/useCases/listUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
  return createUserController.handle(request, response);
});

usersRoutes.get("/", (request, response) => {
  return listUserController.handle(request, response);
})

export { usersRoutes }