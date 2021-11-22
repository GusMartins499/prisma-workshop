import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const allUsers = await this.listUserUseCase.execute();

    return response.json(allUsers);
  }
}

export { ListUserController }