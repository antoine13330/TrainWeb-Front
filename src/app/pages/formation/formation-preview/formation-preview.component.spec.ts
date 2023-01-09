import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPreviewPageComponent } from './formation-preview.component';

describe('FormationPreviewPageComponent', () => {
  let component: FormationPreviewPageComponent;
  let fixture: ComponentFixture<FormationPreviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPreviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
