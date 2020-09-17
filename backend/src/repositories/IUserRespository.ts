import { User } from "@src/models/User";
import { ICreateUserRequestDTO } from "@src/useCases/CreateUser/ICreateUserRequestDTO";

export interface IUserRepository {
  findByEmail: (email: string) => Promise<User | undefined>
  save: (user: ICreateUserRequestDTO) => Promise<User>
}