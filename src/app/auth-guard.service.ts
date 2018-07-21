import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    try {
      if (localStorage.getItem('isAuthanticated') === 'true'
        && localStorage.getItem('token') != null) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }

    } catch (err) {
      console.log(err);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
