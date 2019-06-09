import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwingStackDirective } from 'ionic-swing';

import { NamesPage } from './names.page';

describe('NamesPage', () => {
  let component: NamesPage;
  let fixture: ComponentFixture<NamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesPage, SwingStackDirective ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
