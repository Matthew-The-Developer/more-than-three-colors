import { Component } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-steppers',
  standalone: true,
  imports: [
    MatStepperModule
  ],
  templateUrl: './steppers.component.html',
  styleUrl: './steppers.component.scss'
})
export class SteppersComponent {

}
