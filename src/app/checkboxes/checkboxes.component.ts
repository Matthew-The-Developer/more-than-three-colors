import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkboxes',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkboxes.component.html',
  styleUrl: './checkboxes.component.scss'
})
export class CheckboxesComponent {

}
