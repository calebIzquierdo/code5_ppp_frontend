import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasPracticantesComponent } from './horas-practicantes.component';

describe('HorasPracticantesComponent', () => {
  let component: HorasPracticantesComponent;
  let fixture: ComponentFixture<HorasPracticantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorasPracticantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorasPracticantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
