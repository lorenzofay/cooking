import { Nullable } from '../types';

export type User = {
  name: string;
  email: string;
  password: string;
};

export type SessionState = {
  isLoggedIn: boolean;
  user: Nullable<User>;
};
