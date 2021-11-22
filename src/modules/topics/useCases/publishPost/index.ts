import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { PublishPostController } from "./PublishPostController";
import { PublishPostUseCase } from "./PublishPostUseCase";

const postsRepository = new PostsRepository();
const publishPostUseCase = new PublishPostUseCase(postsRepository);
const publishPostController = new PublishPostController(publishPostUseCase);

export { publishPostController }