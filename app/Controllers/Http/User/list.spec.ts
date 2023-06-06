import Env from "@ioc:Adonis/Core/Env";
import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";
import { signup } from "App/Helpers/Test/signup";

test.group("List E2E", (group) => {
  const prefix = Env.get("PREFIX");

  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
  });

  group.each.teardown(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("should be able to user list", async (context) => {
    const signupResponse = await signup(context, {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password: "123456",
    });

    signupResponse.assertStatus(201);

    const response = await context.client.get(`/${prefix}/users`).headers({
      Authorization: `Bearer ${signupResponse.body().token}`,
    });

    response.assertStatus(200);
  });
});
