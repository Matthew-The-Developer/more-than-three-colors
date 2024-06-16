import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-form-fields',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MaterialColorDirective
  ],
  templateUrl: './form-fields.component.html',
  styleUrl: './form-fields.component.scss'
})
export class FormFieldsComponent {

}
