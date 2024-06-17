import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-steppers',
  standalone: true,
  imports: [
    MatStepperModule,
    MaterialColorDirective,
  ],
  templateUrl: './steppers.component.html',
  styleUrl: './steppers.component.scss'
})
export class SteppersComponent {

}
