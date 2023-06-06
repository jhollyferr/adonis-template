import { test } from "@japa/runner";
import { MemoryUserRepository } from "App/Repositories/memory/user-repository";
import { RegisterUseCase } from "./register";

let userRepository: MemoryUserRepository;
let sut: RegisterUseCase;

test.group("Register Use Case", (group) => {
  group.each.setup(() => {
    userRepository = new MemoryUserRepository();
    sut = new RegisterUseCase(userRepository);
  });

  test("should be able to register", async ({ assert }) => {
    const user = await sut.execute({
      email: "envkt@example.com",
      password: "123456",
      name: "John Doe",
    });

    assert.include(user, {
      email: "envkt@example.com",
      name: "John Doe",
    });
  });

  test("shold not be able to register with same email twice", async ({
    assert,
  }) => {
    await sut.execute({
      email: "envkt@example.com",
      password: "123456",
      name: "John Doe",
    });

    await assert.rejects(async () => {
      await sut.execute({
        email: "envkt@example.com",
        password: "123456",
        name: "John Doe",
      });
    }, Error);
  });
});
