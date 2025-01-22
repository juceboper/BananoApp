import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodosComponent } from '../../todos/todos.component';
import outputs from '../../../../amplify_outputs.json';
import { AmplifyAuthenticatorModule, AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';

Amplify.configure(outputs);

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, TodosComponent, AmplifyAuthenticatorModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(outputs);
  }
}
