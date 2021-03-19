import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: any): User[] {
    const user = this.usersRepository.findById(user_id);  

    if(user) {
      if (user?.admin === true) {
        return this.usersRepository.list();
      } else {
        throw new Error("User is not an Admin");
      }
    } else {
      throw new Error("User not exists!");
    }
  }
}

export { ListAllUsersUseCase };
