import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component08Component } from "./component08/component08.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component08Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
