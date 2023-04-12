import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationDescriptionContentPanelComponent } from './formation-description-content-panel.component';

describe('FormationDescriptionContentPanelComponent', () => {
  let component: FormationDescriptionContentPanelComponent;
  let fixture: ComponentFixture<FormationDescriptionContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationDescriptionContentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationDescriptionContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
