import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if(user) {
      this.usersRepository.turnAdmin(user);
    } else {
      throw new Error("User do not exists!");
    }

    return user;
  }
}

export { TurnUserAdminUseCase };
