import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterContentInit } from '@angular/core';

import { SwingStackDirective, SwingCardDirective, Stack, StackConfig, Direction, ThrowEvent } from 'ionic-swing';

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

  stackConfig: StackConfig;

  actionInProgress = false;
  animateReject = false;
  animateAccept = false;

  cards: NameInfo[];

  constructor(private nameService: NamesService) {
    this.stackConfig = {
      allowedDirections: [Direction.LEFT, Direction.RIGHT],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 1.55), 1);
      },
      throwOutDistance: (d) => {
          return 800;
      }
    };
  }

  ngOnInit() {
    this.nameService.getNames()
        .subscribe(names => this.cards = names);
  }

  onReject(event: ThrowEvent) {
    console.log('onReject', event);
    this.animateReject = true;
  }

  onAccept(event: ThrowEvent) {
    console.log('onAccept', event);
    this.animateAccept = true;
  }

  hasCards(): boolean {
    return this.cards.length > 0;
  }

}
