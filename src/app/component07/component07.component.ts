import { Component } from '@angular/core';

@Component({
  selector: 'app-component07',
  standalone: true,
  imports: [],
  templateUrl: './component07.component.html',
  styleUrl: './component07.component.css'
})
export class Component07Component {
  media:number = 6;
  alunos:string[] = ['Pedro', 'João', 'Marcos', 'Felipe']
}
