import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { NamesService } from './names.service';

import { TestDataService } from '../../../test/test-data.service';

describe('NamesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NamesService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: NamesService = TestBed.get(NamesService);
    expect(service).toBeTruthy();
  });

  describe('getNames function', () => {
    it('should fetch data', () => {
      const service: NamesService = TestBed.get(NamesService);

      service
        .getNames()
        .subscribe(names => expect(names.length).toBe(TestDataService.namesData.length));

      const req = httpTestingController.expectOne('api/names');
      expect(req.request.method).toEqual('GET');
      req.flush(TestDataService.namesData);
    });
  });
});
