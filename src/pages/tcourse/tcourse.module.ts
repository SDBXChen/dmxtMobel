import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TcoursePage } from './tcourse';

@NgModule({
  declarations: [
    TcoursePage,
  ],
  imports: [
    IonicPageModule.forChild(TcoursePage),
  ],
})
export class TcoursePageModule {}
