import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
    private userSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  constructor(private authenticator: AuthenticatorService) {
    this.authenticator.subscribe((state) => {
      const isAuthenticated = state.authStatus === 'authenticated';
      this.loggedIn.next(isAuthenticated); // Actualiza el estado
    });
  }

  logout() {
    this.authenticator.signOut();
    this.loggedIn.next(false); // Cambia el estado al cerrar sesión
  }

  getUser() {
    return this.userSubject.asObservable();
  }
}
