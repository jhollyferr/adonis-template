import { Base } from "./Base";
import { Meta } from "./Meta";

export interface User extends Base {
  name: string;
  email: string;
  password: string;
}

export type Signup = Pick<User, "name" | "email" | "password">;

export type Signin = Pick<User, "email" | "password">;

export type List = {
  meta: Meta;
  data: User[];
};
