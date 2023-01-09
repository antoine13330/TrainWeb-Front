import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPageComponent } from './formation.component';

describe('FormationPageComponent', () => {
  let component: FormationPageComponent;
  let fixture: ComponentFixture<FormationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
