import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component04',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component04.component.html',
  styleUrl: './component04.component.css'
})
export class Component04Component {
  names:string[] = ["Marcos", "João", "Pedro", "Felipe"];
}
