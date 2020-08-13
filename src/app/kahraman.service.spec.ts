import { TestBed } from '@angular/core/testing';

import { KahramanService } from './kahraman.service';

describe('KahramanService', () => {
  let service: KahramanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KahramanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
