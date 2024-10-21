import { Component } from '@angular/core';

@Component({
  selector: 'app-component02',
  standalone: true,
  imports: [],
  templateUrl: './component02.component.html',
  styleUrl: './component02.component.css'
})
export class Component02Component {
  image:string = "assets/dog.jpeg";
  changeImage() {
    this.image === "assets/dog.jpeg" ? 
    this.image = "assets/cat.jpeg" : 
    this.image = "assets/dog.jpeg";
  }
}
