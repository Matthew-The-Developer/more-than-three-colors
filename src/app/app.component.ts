import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { ChipsComponent } from './chips/chips.component';
import { BadgesComponent } from './badges/badges.component';
import { FormFieldsComponent } from './form-fields/form-fields.component';
import { ListsComponent } from './lists/lists.component';
import { IconsComponent } from './icons/icons.component';
import { ProgressBarsComponent } from './progress-bars/progress-bars.component';
import { ProgressSpinnersComponent } from './progress-spinners/progress-spinners.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { SlideTogglesComponent } from './slide-toggles/slide-toggles.component';
import { SlidesComponent } from './slides/slides.component';
import { ToolbarsComponent } from './toolbars/toolbars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BadgesComponent,
    ButtonsComponent,
    CheckboxesComponent,
    ChipsComponent,
    FormFieldsComponent,
    IconsComponent,
    ListsComponent,
    ProgressBarsComponent,
    ProgressSpinnersComponent,
    RadioButtonsComponent,
    SlideTogglesComponent,
    SlidesComponent,
    ToolbarsComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'more-than-three-colors';
}
