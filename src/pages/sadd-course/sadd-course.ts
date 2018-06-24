import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ScourseService} from "../../providers/scourse.service";
import {TcourseService} from "../../providers/tcourse.service";

/**
 * Generated class for the SaddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sadd-course',
  templateUrl: 'sadd-course.html',
})
export class SaddCoursePage {
  persondata:any;
   teacherlistdata:any=[];
   activeteacherID='';
   activeteacher:any='';
  tcousedata:any=[];
  count=0;
   classstdID={
    stdID:'',
    classID:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private scourseservice:ScourseService,
              private tcourseservice:TcourseService,private alertCtrl: AlertController) {
    this.scourseservice.teacherlist().then(result=>{
      //console.log(result);
     this.teacherlistdata=JSON.parse(result.data)['result'];
     // console.log(this.teacherlistdata)
    });
    this.persondata=navParams.get('persondata');
  //  console.log(this.persondata['ID']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SaddCoursePage');
  }
  selectTeacher(tadata){
    this.activeteacher=tadata['name'];
    this.activeteacherID=tadata['id']
   // console.log(this.activeteacherID);
    this.tcourseservice.searchTcourse(this.activeteacherID).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.count=this.tcousedata.length;
      //console.log(this.tcousedata);
    })
  }
  selectcourse(tcourse){
   //console.log(tcourse['course_number'])
    this.selectConfirm(tcourse);

  }
  selectConfirm(tcourse:any) {
    let alert = this.alertCtrl.create({
      title: '确定选课',
      message:this.activeteacher+'/'+tcourse['course_name'],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log(this.persondata['ID'])
            console.log(tcourse['course_number'])
            this.classstdID.classID=tcourse['course_number'];
              this.classstdID.stdID=this.persondata['ID'];
            this.scourseservice.addcourse(this.classstdID).then(result=>{
              this.navCtrl.pop();
            })

          }
        }
      ]
    });
    alert.present();
  }
}
