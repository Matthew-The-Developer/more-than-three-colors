import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MaterialColorDirective } from '../shared/directives/material-color.directive';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MaterialColorDirective
  ],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {

}
