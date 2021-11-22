import { IPostsRepository } from "../../repositories/IPostsRepository";

interface IRequest {
  id: string;
}

class IncrementViewUseCase {
  constructor(private postsRepository: IPostsRepository) {}
  execute({ id }: IRequest): void {
    const postAlreadyExists = this.postsRepository.findById(id);

    if(!postAlreadyExists) {
      throw new Error("Post does not exist");
    }

    this.postsRepository.incrementView(id);
  }
}

export { IncrementViewUseCase }