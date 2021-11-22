import { Request, Response } from "express";
import { IncrementViewUseCase } from "./IncrementViewUseCase";

class IncrementViewController {
  constructor(private incrementViewUseCase: IncrementViewUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;

    this.incrementViewUseCase.execute({ id });

    return response.status(201).send();
  }
}

export { IncrementViewController }