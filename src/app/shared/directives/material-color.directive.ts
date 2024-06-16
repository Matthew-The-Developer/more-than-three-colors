import { Directive, ElementRef, effect, inject, input } from '@angular/core';

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
      
      if (color) {
        if (this.elementRef.nativeElement.classList.contains('mat-badge')) {
          if (this.elementRef.nativeElement.classList.contains('mat-badge-primary')) {
            this.elementRef.nativeElement.classList.replace('mat-badge-primary', `mat-badge-${color}`);
          } else if (this.elementRef.nativeElement.classList.contains('mat-badge-accent')) {
            this.elementRef.nativeElement.classList.replace('mat-badge-accent', `mat-badge-${color}`);
          } else if (this.elementRef.nativeElement.classList.contains('mat-badge-warn')) {
            this.elementRef.nativeElement.classList.replace('mat-badge-warn', `mat-badge-${color}`);
          } else {
            this.elementRef.nativeElement.classList.add(`mat-badge-${color}`);
          }
        } else {
          if (this.elementRef.nativeElement.classList.contains('mat-primary')) {
            this.elementRef.nativeElement.classList.replace('mat-primary', `mat-${color}`);
          } else if (this.elementRef.nativeElement.classList.contains('mat-accent')) {
            this.elementRef.nativeElement.classList.replace('mat-accent', `mat-${color}`);
          } else if (this.elementRef.nativeElement.classList.contains('mat-warn')) {
            this.elementRef.nativeElement.classList.replace('mat-warn', `mat-${color}`);
          } else {
            this.elementRef.nativeElement.classList.add(`mat-${color}`);
          }
        }
      }
    });
  }
}
