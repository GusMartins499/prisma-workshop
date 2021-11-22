import { UsersRepository } from "../../../account/repositories/implementations/UsersRepository";
import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postsRepository = new PostsRepository();
const usersRepository = new UsersRepository()
const createPostUseCase = new CreatePostUseCase(postsRepository,usersRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostController }