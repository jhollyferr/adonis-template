import { LucidUserRepository } from "App/Repositories/lucid/user-repository";
import { ListUseCase } from "App/UseCases/User/list";

export function ListFactory(): ListUseCase {
  const userRepository = new LucidUserRepository();
  const useCase = new ListUseCase(userRepository);

  return useCase;
}
