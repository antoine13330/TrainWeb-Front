import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationCreatePageComponent } from './formation-create.component';

describe('FormationCreatePageComponent', () => {
  let component: FormationCreatePageComponent;
  let fixture: ComponentFixture<FormationCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationCreatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
