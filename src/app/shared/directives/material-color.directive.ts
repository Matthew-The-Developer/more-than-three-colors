import { Directive, ElementRef, effect, inject, input } from '@angular/core';

const badgeClasses = ['mat-badge-primary', 'mat-badge-accent', 'mat-badge-warn'];
const defaultClasses = ['mat-primary', 'mat-accent', 'mat-warn'];

@Directive({
  selector: '[material-color]',
  standalone: true
})
export class MaterialColorDirective {
  private elementRef = inject(ElementRef);

  color = input<string>('', { alias: 'material-color' });

  constructor() {
    effect(() => {
      const color = this.color();
      
      console.log(this.elementRef.nativeElement.tagName);

      if (color) {
        if (this.elementRef.nativeElement.classList.contains('mat-badge')) {
          let replacedDefault = false;

          badgeClasses.forEach(defaultColor => {
            if (this.elementRef.nativeElement.classList.contains(defaultColor)) {
              this.elementRef.nativeElement.classList.replace(defaultColor, `mat-badge-${color}`);
              replacedDefault = true;
            }
          });

          if (!replacedDefault) {
            this.elementRef.nativeElement.classList.add(`mat-badge-${color}`);
          }
        } else {
          let replacedDefault = false;

          defaultClasses.forEach(defaultColor => {
            if (this.elementRef.nativeElement.classList.contains(defaultColor)) {
              this.elementRef.nativeElement.classList.replace(defaultColor, `mat-${color}`);
              replacedDefault = true;
            }
          });

          if (!replacedDefault) {
            this.elementRef.nativeElement.classList.add(`mat-${color}`);
          }
        }
      }
    });
  }

  
}
