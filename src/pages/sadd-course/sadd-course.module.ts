import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaddCoursePage } from './sadd-course';

@NgModule({
  declarations: [
    SaddCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(SaddCoursePage),
  ],
})
export class SaddCoursePageModule {}
