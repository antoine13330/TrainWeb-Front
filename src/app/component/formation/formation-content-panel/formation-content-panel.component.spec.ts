import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationContentPanelComponent } from './formation-content-panel.component';

describe('FormationContentPanelComponent', () => {
  let component: FormationContentPanelComponent;
  let fixture: ComponentFixture<FormationContentPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationContentPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationContentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
