import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NameInfo } from '../model/name-info';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  reject(nameInfo: NameInfo) {}
}
