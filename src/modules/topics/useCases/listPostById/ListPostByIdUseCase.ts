import { Post } from "../../model/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  id: string;
}

class ListPostByIdUseCase {
  constructor(private postsRspository: IPostsRepository) {}

  async execute({ id }: IRequest): Promise<Post> {
    const post = await this.postsRspository.findById(id);

    return post;
  }
}

export { ListPostByIdUseCase }