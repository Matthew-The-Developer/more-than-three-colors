import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-progress-spinners',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
  ],
  templateUrl: './progress-spinners.component.html',
  styleUrl: './progress-spinners.component.scss'
})
export class ProgressSpinnersComponent {

}
