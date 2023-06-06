import { test } from "@japa/runner";
import { MemoryUserRepository } from "App/Repositories/memory/user-repository";
import { ListUseCase } from "./list";

let userRepository: MemoryUserRepository;
let sut: ListUseCase;

test.group("User List Use Case", (group) => {
  group.each.setup(() => {
    userRepository = new MemoryUserRepository();
    sut = new ListUseCase(userRepository);
  });

  test("shold be able to fetch paginated user list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await userRepository.create({
        name: `user-${index}`,
        email: `user-${index}@example.com`,
        password: "1234567890",
      });
    }

    const paginate = await sut.execute({
      page: 2,
      limit: 10,
    });

    assert.include(paginate.meta, {
      current_page: 2,
      first_page: 1,
      last_page: 3,
      per_page: 10,
      total: 22,
    });
    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 10);
  });

  test("shold be able to search item from user list", async ({ assert }) => {
    for (let index = 1; index <= 22; index++) {
      await userRepository.create({
        name: `user-${index}`,
        email: `user-${index}@example.com`,
        password: "1234567890",
      });
    }

    const paginate = await sut.execute({
      page: 1,
      limit: 10,
      search: "user-11",
    });

    assert.isArray(paginate.data);
    assert.equal(paginate.data.length, 1);
    assert.include(paginate.data[0], {
      name: "user-11",
    });
  });
});
