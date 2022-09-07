import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tela1PageRoutingModule } from './tela1-routing.module';

import { Tela1Page } from './tela1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tela1PageRoutingModule
  ],
  declarations: [Tela1Page]
})
export class Tela1PageModule {}
