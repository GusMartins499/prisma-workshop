import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { postsRoutes } from "./posts.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/posts", postsRoutes);

export { routes }