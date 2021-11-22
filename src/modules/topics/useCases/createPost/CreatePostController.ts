import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostController {
  constructor(private createPostUseCase: CreatePostUseCase) {}

  execute(request: Request, response: Response) : Response {
    const { title, content, userEmail } = request.body;

    this.createPostUseCase.execute({ title, content, userEmail });

    return response.status(201).send();
  }
}

export { CreatePostController }