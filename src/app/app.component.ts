import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component07Component } from "./component07/component07.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component07Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
