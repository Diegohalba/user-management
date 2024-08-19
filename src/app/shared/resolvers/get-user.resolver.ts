import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UsersService } from "../services/users.service";

export const getUser = (route: ActivatedRouteSnapshot) => {
  const usersService = inject(UsersService);
  return usersService.get(route.paramMap.get('id') as string);
}
