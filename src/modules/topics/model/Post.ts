import { v4 } from "uuid";
import { User } from "../../account/model/User";

class Post {
  id?: string;
  title: string;
  content?: string;
  published: boolean;
  user?: User;
  userId?: String

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}

export { Post }