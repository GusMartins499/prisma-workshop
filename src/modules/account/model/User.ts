import { v4 } from "uuid";
import { Post } from "../../topics/model/Post";

class User {
  id?: string;
  name: string;
  email: string;
  posts?: Post[];

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { User }