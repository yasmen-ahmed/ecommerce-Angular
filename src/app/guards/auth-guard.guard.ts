import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('acess_token') ? true : false;
};
