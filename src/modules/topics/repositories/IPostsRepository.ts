import { User } from "../../account/model/User";
import { Post } from "../model/Post";

export interface ICreatePostDTO {
  title: string;
  content?: string;
  userEmail?: string;
}

export interface IPostsRepository {
  create({ title, content, userEmail }): Promise<void>;
  list(): Promise<Post[]>;
}