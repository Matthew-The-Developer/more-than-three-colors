import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbars',
  standalone: true,
  imports: [
    MatToolbarModule,
  ],
  templateUrl: './toolbars.component.html',
  styleUrl: './toolbars.component.scss'
})
export class ToolbarsComponent {

}
