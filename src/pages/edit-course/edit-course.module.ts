import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCoursePage } from './edit-course';

@NgModule({
  declarations: [
    EditCoursePage,
  ],
  imports: [
    IonicPageModule.forChild(EditCoursePage),
  ],
})
export class EditCoursePageModule {}
