import { Request, Response } from "express";
import { UnpublishPostUseCase } from "./UnpublishPostUseCase";

class UnpublishPostController {
  constructor(private unpublishPostUseCase: UnpublishPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const posts = await this.unpublishPostUseCase.execute({ id });

    return response.json(posts);
  }
}

export { UnpublishPostController }
