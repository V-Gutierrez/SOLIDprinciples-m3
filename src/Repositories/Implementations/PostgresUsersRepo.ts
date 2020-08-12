import { IUserRepository } from '../IUserRepository';
import { User } from '../../Entities/User';

export class PostgresUsersRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = await this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
