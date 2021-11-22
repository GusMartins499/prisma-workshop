import { Post } from "../../model/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";

class ListPostUseCase {
  constructor(private postsRepository: IPostsRepository) {}

  async execute(): Promise<Post[]> {
    return await this.postsRepository.list();
  }
}

export { ListPostUseCase }