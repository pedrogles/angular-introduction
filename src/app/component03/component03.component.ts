import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component03.component.html',
  styleUrl: './component03.component.css'
})
export class Component03Component {
  isSquare:boolean = true;
  ChangeSquareDisplay() {
    this.isSquare ? this.isSquare = false : this.isSquare = true;
  }
}
