import { InMemoryDbService } from 'angular-in-memory-web-api';
import { NameInfo } from '../../app/services/model/name-info';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const names = [
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
    return { names };
  }

  genId(names: NameInfo[]): number {
    return names.length > 0 ? Math.max(...names.map(hero => hero.id)) + 1 : 11;
  }
}
