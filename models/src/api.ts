import {User} from "./user.model";
import {Item} from "./item.model";

export interface api {
  v1: {
    user: StandardRestInterface<User, {}>,
    item: StandardRestInterface<Item, {}>
  }
}

interface StandardRestInterface<T, K> {
  get: {
    id: string;
    queryParams?: K;
  },
  post: {
    payload: T;
  },
  put: {
    paylaod: T;
  },
  delete: {
    id: string
  }
}