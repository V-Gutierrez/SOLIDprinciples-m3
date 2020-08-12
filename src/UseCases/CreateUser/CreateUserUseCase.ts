import { IUserRepository } from '../../Repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../Entities/User';
import { IMailProvider } from '../../Providers/IMailProvider';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository /* Automaticamente se torna uma propriedade da classe por causa do "private" */,
    private mailProvider: IMailProvider
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Staff',
        email: 'Staff@vg.com',
      },
      subject: 'Bem vindo a plataforma !!!',
      body:
        '<p>Seja bem vindo, você já pode logar em nossa plataforma :D:D:D:D</p>',
    });
  }
}
