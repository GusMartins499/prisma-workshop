import { Request, Response } from "express";
import { ListPostByIdUseCase } from "./ListPostByIdUseCase";

class ListPostByIdController {
  constructor(private listPostByIdUseCase: ListPostByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const post = await this.listPostByIdUseCase.execute({ id })

    return response.json(post);
  }
}

export { ListPostByIdController }