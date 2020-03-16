import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpreadPage } from './spread.page';

const routes: Routes = [
  {
    path: '',
    component: SpreadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpreadPageRoutingModule {}
