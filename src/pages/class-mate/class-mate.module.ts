import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassMatePage } from './class-mate';

@NgModule({
  declarations: [
    ClassMatePage,
  ],
  imports: [
    IonicPageModule.forChild(ClassMatePage),
  ],
})
export class ClassMatePageModule {}
