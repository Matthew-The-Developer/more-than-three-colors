import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-badges',
  standalone: true,
  imports: [
    MatBadgeModule,
    MaterialColorDirective,
  ],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent {

}
