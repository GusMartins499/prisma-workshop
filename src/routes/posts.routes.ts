import { Router } from "express";
import { createPostController } from "../modules/topics/useCases/createPost";
import { listPostController } from "../modules/topics/useCases/listPost";

const postsRoutes = Router();

postsRoutes.post("/", (request, response) => {
  return createPostController.execute(request, response);
});

postsRoutes.get("/", (request, response) => {
  return listPostController.handle(request, response);
});

export { postsRoutes }