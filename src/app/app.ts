import { Component } from '@angular/core';
import { RouterOutlet, RouterLink,RouterModule  } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
