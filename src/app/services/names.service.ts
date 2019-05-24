import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NameInfo } from './model/name-info';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  Names: NameInfo[] = [
    { id: 1, name: 'Simon' },
    { id: 2, name: 'Claire' },
    { id: 3, name: 'Geoff' },
    { id: 4, name: 'Delia' },
    { id: 5, name: 'Debora' }
  ];

  constructor() {}

  getNames(): Observable<NameInfo[]> {
    return of(this.Names);
  }
}
