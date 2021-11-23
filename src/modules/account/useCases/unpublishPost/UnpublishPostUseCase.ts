import AppError from "../../../../error/AppError";
import { Post } from "../../../topics/model/Post";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  id: string;
}

class UnpublishPostUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id }: IRequest): Promise<Post[]> {
    const userAlreadyExists = this.usersRepository.findById(id);

    if(!userAlreadyExists) {
      throw new AppError("User does not exist");
    }

    return await this.usersRepository.unpublishPost(id);
  }
}

export { UnpublishPostUseCase }