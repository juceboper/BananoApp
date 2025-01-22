import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent {
}
