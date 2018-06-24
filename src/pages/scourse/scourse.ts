import { Component } from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {ScourseService} from "../../providers/scourse.service";
import {SaddCoursePage} from "../sadd-course/sadd-course";

/**
 * Generated class for the ScoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scourse',
  templateUrl: 'scourse.html',
})
export class ScoursePage {
  persondata:any;
  scoursedata:any;
  classstdID={
    stdID:'',
    classID:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private scourservice:ScourseService) {
    this.persondata=navParams.get('persondata');
    //console.log(this.persondata);
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
      // console.log(result);
      this.scoursedata=JSON.parse(result.data)['result'];
      // console.log(this.scoursedata);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoursePage');
  }
  ionViewWillEnter(){
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
      // console.log(result);
      this.scoursedata=JSON.parse(result.data)['result'];
      // console.log(this.scoursedata);
    })
  }
  deletcourse(scourse){
    console.log(scourse)
    this.presentConfirm(scourse);
  }

  presentConfirm(scourse) {
    let alert = this.alertCtrl.create({
      title: '退选',
      message:'确定退选'+scourse['course']['course_name']+'课程',
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
            this.classstdID.stdID=this.persondata['ID'];
            this.classstdID.classID=scourse['course']['course_number'];
            this.scourservice.deletecourse(this.classstdID).then(result=>{
              this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
                this.scoursedata=JSON.parse(result.data)['result'];
              });
              console.log('删除成功');
            });
            /*  this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
                this.scoursedata=JSON.parse(result.data)['result'];
              });*/
            /*this.scourservice.deletecourse()*/
          }
        }
      ]
    });
    alert.present();
  }
  toSaddcourse(){
    this.navCtrl.push(SaddCoursePage,{'persondata':this.persondata});
  }


}
