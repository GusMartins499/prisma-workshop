import "dotenv/config";
import express from 'express';

import { usersRoutes } from "./routes/users.routes";
import { postsRoutes } from "./routes/posts.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

app.listen(3333, () => console.log("🚀 Server running"))