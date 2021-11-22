import { Router } from "express";
import { createPostController } from "../modules/topics/useCases/createPost";
import { incrementViewController } from "../modules/topics/useCases/incrementView";
import { listPostController } from "../modules/topics/useCases/listPost";
import { publishPostController } from "../modules/topics/useCases/publishPost";

const postsRoutes = Router();

postsRoutes.post("/", (request, response) => {
  return createPostController.execute(request, response);
});

postsRoutes.get("/", (request, response) => {
  return listPostController.handle(request, response);
});

postsRoutes.patch("/:id/views", (request, response) => {
  return incrementViewController.handle(request, response);
});

postsRoutes.patch("/:id/publish", (request, response) => {
  return publishPostController.handle(request, response);
});

export { postsRoutes }