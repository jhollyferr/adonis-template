import Env from "@ioc:Adonis/Core/Env";
import { TestContext } from "@japa/runner";
import { User } from "App/Dtos/User";

export async function signup({ client }: TestContext, data: Partial<User>) {
  const prefix = Env.get("PREFIX");

  return await client.post(`/${prefix}/auth/signup`).form(data);
}
