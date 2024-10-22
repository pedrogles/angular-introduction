import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// interface formProps {
//   name: string;
//   city: string;
// }
@Component({
  selector: 'app-component09',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './component09.component.html',
  styleUrl: './component09.component.css'
})
export class Component09Component {
  form = new FormGroup({
    name: new FormControl(''),
    city: new FormControl('')
  })
  // dataForm:formProps = {name: '', city: ''};
}
