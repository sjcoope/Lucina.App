import { Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NameInfo } from './model/name-info';
import { NamesService } from './data/names.service';

@Injectable({
  providedIn: 'root'
})
export class NamesManagerService implements OnInit {
  private batchSize = 5; // TODO: Config
  private minimumBatchSize = 2; // TODO: Config or figure out how to pass as constructor parameters!

  private names: Observable<NameInfo>;
  private load$ = new BehaviorSubject<NameInfo | undefined>(undefined);

  constructor(private namesService: NamesService) {}

  ngOnInit() {}

  public getNewNames(): Observable<NameInfo[]> {
    return this.namesService.getNames();
  }

  rejectName(nameInfo: NameInfo) {
    console.log('rejectName');
  }

  acceptName(nameInfo: NameInfo) {
    console.log('acceptName');
  }
}
