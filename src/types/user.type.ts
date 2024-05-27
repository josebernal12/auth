import { Document } from "mongoose";

export type UserType = Document & {
  name: string;
  email: string;
  password: string
}

export type UserAuthType = Pick<UserType, 'email' | 'password'>;
