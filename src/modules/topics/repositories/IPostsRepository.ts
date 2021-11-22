import { Post } from "../model/Post";

export interface ICreatePostDTO {
  title: string;
  content: string;
  userEmail: string;
}

export interface IPostsRepository {
  create({ title, content, userEmail }): Promise<void>;
  list(): Promise<Post[]>;
  findById(id: string): Promise<Post>;
  incrementView(id: string): Promise<void>;
  publishPost(id: string): Promise<void>;
}