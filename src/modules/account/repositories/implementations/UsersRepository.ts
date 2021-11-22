import { prismaClient } from "../../../../prisma";
import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private prismaUsers;
  
  constructor() {
    this.prismaUsers = prismaClient.user;
  }

  async list(): Promise<User[]> {
    const users = await this.prismaUsers.findMany({
      include: {
        posts: true
      }
    });
    return users;
  }

  async create({ name, email, posts }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {name, email, posts});
    await this.prismaUsers.create({
      data: user
    })
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prismaUsers.findUnique({
      where: {
        email
      }
    })

    return user;
  }
}

export { UsersRepository }