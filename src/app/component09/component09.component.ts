import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface formProps {
  name: string;
  city: string;
}
@Component({
  selector: 'app-component09',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component09.component.html',
  styleUrl: './component09.component.css'
})
export class Component09Component {
  dataForm:formProps = {name: '', city: ''};
}
