import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { SwingStackDirective } from 'ionic-swing';

import { NamesPage } from './names.page';
import { NamesService } from '../services/data/names.service';

// Variables
const namesData = [
  // TODO - Move somewhere else?
  { id: 11, name: 'Simon', img: 'assets/img/photo.png' },
  { id: 12, name: 'Claire', img: 'assets/img/photo.png' },
  { id: 13, name: 'Geoff', img: 'assets/img/photo.png' },
  { id: 14, name: 'Delia', img: 'assets/img/photo.png' },
  { id: 15, name: 'Debora', img: 'assets/img/photo.png' },
  { id: 16, name: 'Sandra', img: 'assets/img/photo.png' },
  { id: 17, name: 'Fiona', img: 'assets/img/photo.png' },
  { id: 18, name: 'Adrian', img: 'assets/img/photo.png' },
  { id: 19, name: 'John', img: 'assets/img/photo.png' },
  { id: 20, name: 'James', img: 'assets/img/photo.png' },
  { id: 21, name: 'Nicholas', img: 'assets/img/photo.png' }
];

describe('NamesPage', () => {
  let component: NamesPage;
  let fixture: ComponentFixture<NamesPage>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamesPage, SwingStackDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [NamesService]
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

    // Test request and mock data.
    const req = httpTestingController.expectOne('api/names');
    expect(req.request.method).toEqual('GET');
    req.flush(namesData);
  });
});
