import { Post } from "../../../topics/model/Post";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
  posts?: Post[];
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository){}

  execute({ name, email, posts }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email);
    
    if(!userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, email, posts });
  }
}

export { CreateUserUseCase }