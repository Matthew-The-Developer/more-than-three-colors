import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggles',
  standalone: true,
  imports: [
    MatSlideToggleModule
  ],
  templateUrl: './slide-toggles.component.html',
  styleUrl: './slide-toggles.component.scss'
})
export class SlideTogglesComponent {

}
