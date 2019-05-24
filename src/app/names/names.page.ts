import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';

import { SwingStackDirective, SwingCardDirective, StackConfig, Direction, ThrowEvent } from 'ionic-swing';

import { NameInfo } from '../services/model/name-info';
import { NamesService } from '../services/names.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.page.html',
  styleUrls: ['./names.page.scss'],
})
export class NamesPage implements OnInit {
  @ViewChild('swingStack', { read: SwingStackDirective }) swingStack: SwingStackDirective;
  @ViewChildren('swingCards', { read: SwingCardDirective }) swingCards: QueryList<SwingCardDirective>;

  cards: NameInfo[];

  constructor(private nameService: NamesService) { }

  ngOnInit() {
    this.nameService.getNames()
        .subscribe(names => this.cards = names);
  }

  onReject(event: ThrowEvent) {
    console.log('onReject', event);
  }

  onAccept(event: ThrowEvent) {
    console.log('onAccept', event);
  }

}
