import { Request, Response } from "express";
import { PublishPostUseCase } from "./PublishPostUseCase";

class PublishPostController {
  constructor(private publishPostUseCase: PublishPostUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    
    this.publishPostUseCase.execute({ id });

    return response.status(201).send();
  }
}

export { PublishPostController }