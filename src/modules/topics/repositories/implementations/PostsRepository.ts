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

  async findById(id: string): Promise<Post> {
    const post = await this.prismaPosts.findUnique({
      where: {
        id
      }
    })

    return post;
  }

  async incrementView(id: string): Promise<void> {
    await this.prismaPosts.update({
      where: {
        id
      },
      data: {
        viewCount: {
          increment: 1
        }
      }
    })
  }

  async publishPost(id: string): Promise<void> {
    await this.prismaPosts.update({
      where: {
        id
      },
      data: {
        published: true
      }
    })
  }
}

export { PostsRepository }