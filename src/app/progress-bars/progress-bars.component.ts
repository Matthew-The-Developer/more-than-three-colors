import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bars',
  standalone: true,
  imports: [
    MatProgressBarModule
  ],
  templateUrl: './progress-bars.component.html',
  styleUrl: './progress-bars.component.scss'
})
export class ProgressBarsComponent {

}
