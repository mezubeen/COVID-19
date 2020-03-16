import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpreadPageRoutingModule } from './spread-routing.module';

import { SpreadPage } from './spread.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpreadPageRoutingModule
  ],
  declarations: [SpreadPage]
})
export class SpreadPageModule {}
