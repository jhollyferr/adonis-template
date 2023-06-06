import { Query } from "App/Dtos/Query";
import { List, Signup, User } from "App/Dtos/User";

export interface UserRepository {
  create: (data: Signup) => Promise<User>;
  findBy: <T extends keyof User>(
    key: T,
    value: User[T]
  ) => Promise<User | null>;
  list: (query: Query) => Promise<List>;
}
