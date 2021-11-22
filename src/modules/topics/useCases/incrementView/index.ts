import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { IncrementViewController } from "./IncrementViewController";
import { IncrementViewUseCase } from "./IncrementViewUseCase";

const postsRepository = new PostsRepository();
const incrementViewUseCase = new IncrementViewUseCase(postsRepository);
const incrementViewController = new IncrementViewController(incrementViewUseCase);

export { incrementViewController }