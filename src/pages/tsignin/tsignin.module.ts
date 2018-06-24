import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TsigninPage } from './tsignin';

@NgModule({
  declarations: [
    TsigninPage,
  ],
  imports: [
    IonicPageModule.forChild(TsigninPage),
  ],
})
export class TsigninPageModule {}
