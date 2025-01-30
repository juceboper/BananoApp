import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './auth/login/login.component';
import { InicioComponent } from './general/inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
{ path: '', component: InicioComponent },
{ path: 'todos', component: TodosComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'login', component: LoginComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
