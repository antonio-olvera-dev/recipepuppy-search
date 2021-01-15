import { TestBed } from '@angular/core/testing';

import { RecipepuppyService } from './recipepuppy.service';

describe('RecipepuppyService', () => {
  let service: RecipepuppyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipepuppyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
