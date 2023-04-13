import { TestBed } from '@angular/core/testing';

import { FormationUserProgressService } from './formation-user-progress.service';

describe('FormationUserProgressService', () => {
  let service: FormationUserProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationUserProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
