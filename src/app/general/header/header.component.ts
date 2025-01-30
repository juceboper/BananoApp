import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Ajusta la ruta según tu estructura
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userData: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Suscríbete al estado de autenticación
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

      this.authService.getUser().subscribe((user) => {
        this.userData = user;
      });
  }

  logout() {
    this.authService.logout(); // Llama al método de logout del servicio
  }
}
