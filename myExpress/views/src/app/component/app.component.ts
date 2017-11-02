import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>title</h2>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
