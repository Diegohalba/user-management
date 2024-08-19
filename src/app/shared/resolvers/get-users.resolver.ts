import { inject } from "@angular/core";
import { UsersService } from "../services/users.service";

export const getUsers = () => {
  const usersService = inject(UsersService);
  return usersService.getAll();
}
