import { Signup, User } from "App/Dtos/User";
import { UserRepository } from "App/Repositories/user-repository";

export class RegisterUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: Signup): Promise<User> {
    const user = await this.userRepository.findBy("email", data.email);

    if (user) throw new Error();

    return await this.userRepository.create(data);
  }
}
