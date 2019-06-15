import { TestBed } from '@angular/core/testing';

import { NamesManagerService } from './names-manager.service';
import { NamesService } from './data/names.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { TestDataService } from '../../test/services/test-data.service';

describe('NamesManagerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NamesManagerService, NamesService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: NamesManagerService = TestBed.get(NamesManagerService);
    expect(service).toBeTruthy();
  });

  describe('getNewNames function', () => {
    it('should fetch expected data', () => {
      const service: NamesManagerService = TestBed.get(NamesManagerService);

      service
        .getNewNames()
        .subscribe(names => {
          expect(names).toEqual(TestDataService.namesData);
          expect(names.length).toBe(11);
        });

      // Test request and mock data.
      const req = httpTestingController.expectOne('api/names');
      expect(req.request.method).toEqual('GET');
      req.flush(TestDataService.namesData);
    });
  });

});
