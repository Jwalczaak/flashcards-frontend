import { UserEntity } from './user';

export type SignInRequest = {
  name: string;
  password: string;
};

export type SignInResponse = {
  status: string;
  token: string;
  data: { user: UserEntity };
};
