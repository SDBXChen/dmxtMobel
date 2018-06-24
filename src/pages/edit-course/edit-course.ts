import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {EditcourseService} from "../../providers/editcourse.service";

/**
 * Generated class for the EditCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-course',
  templateUrl: 'edit-course.html',
})
export class EditCoursePage {
  tcourse:any='';
  persondata:any='';
  classMes={
    classname:'',
    classteacher:'',
    classtime:'',
    classlocal:'',
    classteacherID:'',
    classnum:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private editcourseservice:EditcourseService,private toastCtrl:ToastController) {
    this.tcourse=navParams.get('coursedata');
    this.persondata=navParams.get('persondata');
    console.log(this.tcourse);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditCoursePage');
  }
  ionViewWillEnter(){
    this.tcourse=this.navParams.get('coursedata');
    this.persondata=this.navParams.get('persondata');
  }
  editdata(){
    this.classMes.classname=this.tcourse['course_name'];
    this.classMes.classteacher=this.persondata['username'];
    this.classMes.classtime=this.tcourse['class_time'];
    this.classMes.classlocal=this.tcourse['class_location'];
    this.classMes.classteacherID=this.persondata['ID'];
    this.classMes.classnum=this.tcourse['course_number'];
    console.log(this.classMes);

    this.editcourseservice.editTcourse(this.classMes).then(result =>{
      console.log(result);
      this.navCtrl.pop();
    });

  }
  deletedata(){
    console.log(this.tcourse['course_number']);
     this.editcourseservice.deleteTcourse(this.tcourse['course_number']).then(result =>{
         console.log(result);
         this.navCtrl.pop();
     });

  }
}
