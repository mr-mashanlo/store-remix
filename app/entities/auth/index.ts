import { getCurrentUser, refresh, signIn, signOut, signUp } from './api/api';
import { AuthSchema } from './model/schema';
import { AuthType } from './model/type';
import { validateAuthData } from './model/validator';

export {
  getCurrentUser,
  refresh,
  signIn,
  signOut,
  signUp,
  validateAuthData
};

export {
  AuthSchema,
  type AuthType
};