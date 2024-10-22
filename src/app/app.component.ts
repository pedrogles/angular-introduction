import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component09Component } from "./component09/component09.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component09Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
