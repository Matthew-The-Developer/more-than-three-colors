import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-radio-buttons',
  standalone: true,
  imports: [
    MatRadioModule,
    MaterialColorDirective,
  ],
  templateUrl: './radio-buttons.component.html',
  styleUrl: './radio-buttons.component.scss'
})
export class RadioButtonsComponent {

}
