import { prismaClient } from "../../../../prisma";
import { Post } from "../../model/Post";
import { ICreatePostDTO, IPostsRepository } from "../IPostsRepository";

class PostsRepository implements IPostsRepository {
  private prismaPosts;

  constructor() {
    this.prismaPosts = prismaClient.post;
  }

  async create({ title, content, userEmail }: ICreatePostDTO): Promise<void> {
    const post = new Post();
    Object.assign(post, { title, content });
    await this.prismaPosts.create({
      data: {
        ...post,
        user: {
          connect: {
            email: userEmail
          }
        }
      }
    })
  }

  async list(): Promise<Post[]> {
    const posts = await this.prismaPosts.findMany({
      include: {
        user: false
      }
    });

    return posts;
  }
}

export { PostsRepository }