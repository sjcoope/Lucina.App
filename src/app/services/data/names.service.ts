import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NameInfo } from '../model/name-info';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  private getNamesUrl = 'api/names';

  constructor(private http: HttpClient) {}

  getNames(): Observable<NameInfo[]> {
    return this.http.get<NameInfo[]>(this.getNamesUrl);
  }
}
