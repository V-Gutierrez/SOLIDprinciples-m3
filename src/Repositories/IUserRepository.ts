import { User as UserType } from '../Entities/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserType>;
  save(user: UserType): Promise<void>;
}
