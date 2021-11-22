import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository){}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();
    
    return users;
  }
}

export { ListUserUseCase }