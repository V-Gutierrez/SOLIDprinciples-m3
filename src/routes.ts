import { Router } from 'express';
import { createUserController } from './UseCases/CreateUser/index';

const router = Router();

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { router };
