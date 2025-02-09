export type UserRole = 'USER' | 'SUPERVISOR' | 'ADMIN';

export type UserEntity = {
  _id: string;
  name: string;
  surname: string;
  email: string;
  role: UserRole;
};
