import { prismaClient } from "../../../../prisma";
import { Post } from "../../../topics/model/Post";
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
    let data;
    Object.assign(user, { name, email });
    if (posts) {
      data = {
        ...user,
        posts: {
          create: {
            ...posts
          }
        }
      }
      await this.prismaUsers.create({ data })
    } else {
      await this.prismaUsers.create({ data: user })
    }
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prismaUsers.findUnique({
      where: {
        email
      }
    })

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.prismaUsers.findUnique({
      where: {
        id
      }
    })

    return user;
  }

  async unpublishPost(id: string): Promise<Post[]> {
    const posts = await this.prismaUsers.findUnique({
      where: { id },
    })
    .posts({
      where: {
        published: false
      }
    })
    
    return posts
  }
}

export { UsersRepository }