import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface aluno {
  name: string,
  approved: boolean
}

@Component({
  selector: 'app-component06',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component06.component.html',
  styleUrl: './component06.component.css'
})

export class Component06Component {
  alunos:aluno[] = [
    {name: 'Pedro', approved: true},
    {name: 'Marcos', approved: true},
    {name: 'Felipe', approved: false},
  ];
}
