import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnersComponent } from './progress-spinners.component';

describe('ProgressSpinnersComponent', () => {
  let component: ProgressSpinnersComponent;
  let fixture: ComponentFixture<ProgressSpinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressSpinnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgressSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
