import { TestBed, inject } from '@angular/core/testing';

import { CatlistService } from './catlist.service';

xdescribe('CatlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatlistService]
    });
  });

  it('should be created', inject([CatlistService], (service: CatlistService) => {
    expect(service).toBeTruthy();
  }));
});
