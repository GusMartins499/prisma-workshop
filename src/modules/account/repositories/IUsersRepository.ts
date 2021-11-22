import { Post } from "../../topics/model/Post";
import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
  posts?: Post[];
}

export interface IUsersRepository {
  list(): Promise<User[]>;
  create({ name, email }: ICreateUserDTO): void;
  findByEmail(email: string): Promise<User>;
}