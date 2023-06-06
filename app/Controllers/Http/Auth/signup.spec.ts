import Database from "@ioc:Adonis/Lucid/Database";
import { test } from "@japa/runner";
import { signup } from "App/Helpers/Test/signup";

test.group("Signup E2E", (group) => {
  group.each.setup(async () => {
    await Database.beginGlobalTransaction();
  });

  group.each.teardown(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("should be able to register", async (context) => {
    const response = await signup(context, {
      name: "John Doe",
      email: "john.doe@gmail.com",
      password: "123456",
    });

    response.assertStatus(201);
  });
});
