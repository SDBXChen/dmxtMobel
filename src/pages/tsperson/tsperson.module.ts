import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TspersonPage } from './tsperson';

@NgModule({
  declarations: [
    TspersonPage,
  ],
  imports: [
    IonicPageModule.forChild(TspersonPage),
  ],
})
export class TspersonPageModule {}
