import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPracticantesComponent } from './tabla-practicantes.component';

describe('TablaPracticantesComponent', () => {
  let component: TablaPracticantesComponent;
  let fixture: ComponentFixture<TablaPracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPracticantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaPracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
