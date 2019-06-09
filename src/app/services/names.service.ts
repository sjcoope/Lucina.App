import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NameInfo } from './model/name-info';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  Names: NameInfo[] = [
    { id: 1, name: 'Simon', img: 'assets/img/photo.png' },
    { id: 2, name: 'Claire', img: 'assets/img/photo.png' },
    { id: 3, name: 'Geoff', img: 'assets/img/photo.png' },
    { id: 4, name: 'Delia', img: 'assets/img/photo.png' },
    { id: 5, name: 'Debora', img: 'assets/img/photo.png' }
  ];

  constructor() {}

  public names: Observable<NameInfo[]>;

  rejectName(nameInfo: NameInfo) {
    console.log('rejectName');
  }

  acceptName(nameInfo: NameInfo) {
    console.log('acceptName');
  }
}
