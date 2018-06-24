import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScoursePage } from './scourse';

@NgModule({
  declarations: [
    ScoursePage,
  ],
  imports: [
    IonicPageModule.forChild(ScoursePage),
  ],
})
export class ScoursePageModule {}
