import { Query } from "App/Dtos/Query";
import { List } from "App/Dtos/User";
import { UserRepository } from "App/Repositories/user-repository";

export class ListUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(query: Query): Promise<List> {
    return await this.userRepository.list(query);
  }
}
