import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular-Proyecto');

  logout(){
    localStorage.removeItem('userSession');
    document.getElementById('logout')!.textContent = 'Session Cerrada , Hasta Luego';
    setTimeout(() => {
      document.getElementById('logout')!.textContent = '';
    }, 5000)
  }
}
