import { MailTrapMailProvider } from '../../Providers/Implementations/MailtrapMailProvider';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from '../../Repositories/Implementations/PostgresUsersRepo';

const mailtrapProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  PostgresUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
