import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationPreviewListComponent } from './formation-preview-list.component';

describe('FormationPreviewListComponent', () => {
  let component: FormationPreviewListComponent;
  let fixture: ComponentFixture<FormationPreviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationPreviewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
