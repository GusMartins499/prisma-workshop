import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { UnpublishPostController } from "./UnpublishPostController";
import { UnpublishPostUseCase } from "./UnpublishPostUseCase";

const usersRepository = new UsersRepository();
const unpublishPostUseCase = new UnpublishPostUseCase(usersRepository);
const unpublishPostController = new UnpublishPostController(unpublishPostUseCase);

export { unpublishPostController }