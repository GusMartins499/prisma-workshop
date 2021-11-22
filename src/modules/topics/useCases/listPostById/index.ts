import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { ListPostByIdController } from "./ListPostByIdController";
import { ListPostByIdUseCase } from "./ListPostByIdUseCase";

const postsRepository = new PostsRepository();
const listPostByIdUseCase = new ListPostByIdUseCase(postsRepository);
const listPostByIdController = new ListPostByIdController(listPostByIdUseCase);

export { listPostByIdController }