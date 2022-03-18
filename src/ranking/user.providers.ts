import { User } from './entities/user.entity';

export const providers = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
