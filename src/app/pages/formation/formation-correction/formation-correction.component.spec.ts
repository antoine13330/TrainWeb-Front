import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCorrectionPageComponent } from './formation-correction.component';

describe('FormationCorrectionPageComponent', () => {
  let component: FormationCorrectionPageComponent;
  let fixture: ComponentFixture<FormationCorrectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationCorrectionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationCorrectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
