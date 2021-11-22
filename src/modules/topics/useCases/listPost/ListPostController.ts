import { Request, Response } from "express";
import { ListPostUseCase } from "./ListPostUseCase";

class ListPostController {
  constructor(private listPostUseCase: ListPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const allPosts = await this.listPostUseCase.execute();

    return response.json(allPosts);
  }
}

export { ListPostController }