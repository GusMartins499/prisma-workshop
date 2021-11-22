import { Post } from "../../topics/model/Post";
import { User } from "../model/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
  posts?: Post[];
}

export interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): void;
  list(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  //unpublishPost(id: string): Promise<Post>;
}