import { LucidUserRepository } from "App/Repositories/lucid/user-repository";
import { RegisterUseCase } from "App/UseCases/User/register";

export function RegisterFactory(): RegisterUseCase {
  const userRepository = new LucidUserRepository();
  const useCase = new RegisterUseCase(userRepository);

  return useCase;
}
