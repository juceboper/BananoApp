import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from '../../todos/todos.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import outputs from '../../../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, DashboardComponent, AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    isLoggedIn: boolean = false; // Propiedad para el estado de autenticación

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);

        this.authenticator.subscribe((state) => {
          this.isLoggedIn = state.authStatus === 'authenticated'; // Cambia según el estado del usuario
        });
  }

}
