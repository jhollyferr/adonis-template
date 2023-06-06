import Env from "@ioc:Adonis/Core/Env";
import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";
import { signup } from "App/Helpers/Test/signup";

test.group("Signin E2E", (group) => {
  const prefix = Env.get("PREFIX");

  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
  });

  group.each.teardown(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("should be able to authenticate", async (context) => {
    const signupResponse = await signup(context, {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password: "123456",
    });

    signupResponse.assertStatus(201);

    const response = await context.client
      .post(`/${prefix}/auth/signin`)
      .headers({
        Authorization: `Bearer ${signupResponse.body().token}`,
      })
      .form({
        name: "John Doe",
        email: "john.doe@gmail.com",
        password: "123456",
      });

    response.assertStatus(200);
  });
});
