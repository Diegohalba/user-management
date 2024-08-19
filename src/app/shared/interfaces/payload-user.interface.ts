import { User } from "./user.interface";

export type UserPayload = Omit<User, 'id'>
