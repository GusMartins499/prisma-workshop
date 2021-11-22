import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostController } from "./ListPostController";
import { ListPostUseCase } from "./ListPostUseCase";

const postsRepository = new PostsRepository();
const listPostUseCase = new ListPostUseCase(postsRepository);
const listPostController = new ListPostController(listPostUseCase);

export { listPostController }