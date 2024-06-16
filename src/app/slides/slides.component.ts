import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [
    MatSliderModule,
    MaterialColorDirective,
  ],
  templateUrl: './slides.component.html',
  styleUrl: './slides.component.scss'
})
export class SlidesComponent {

}
