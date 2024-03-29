import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicSwingModule } from 'ionic-swing';
import 'hammerjs';

import { IonicModule } from '@ionic/angular';

import { NamesPage } from './names.page';

const routes: Routes = [
  {
    path: '',
    component: NamesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicSwingModule
  ],
  declarations: [NamesPage]
})
export class NamesPageModule {}
