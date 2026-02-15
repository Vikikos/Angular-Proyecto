import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IUser } from './interfaces/i-user';
import { AccesibilityButton } from './accesibility-button/accesibility-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,AccesibilityButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Proyecto');

  userSession : IUser = JSON.parse(localStorage.getItem('userSession')!);

  logout(){
    localStorage.removeItem('userSession');
    document.getElementById('logout')!.textContent = 'Session Cerrada , Hasta Luego';
     window.location.reload()
  }
}
