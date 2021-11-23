import AppError from "../../../../error/AppError";
import { IUsersRepository } from "../../../account/repositories/IUsersRepository";
import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  title: string;
  content: string;
  userEmail: string;
}

class CreatePostUseCase {
  constructor(
    private postsRepository: IPostsRepository,
    private usersRepository: IUsersRepository
    ) {}

  execute({ title, content, userEmail }: IRequest): void {
    if (userEmail) {
      const userAlreadyExists = this.usersRepository.findByEmail(userEmail);
      if (!userAlreadyExists) {
        throw new AppError("User already exists");
      }
    }
    this.postsRepository.create({ title, content, userEmail });
  }
}

export { CreatePostUseCase }