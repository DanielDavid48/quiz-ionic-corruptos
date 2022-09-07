import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tela1Page } from './tela1.page';

const routes: Routes = [
  {
    path: '',
    component: Tela1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tela1PageRoutingModule {}
