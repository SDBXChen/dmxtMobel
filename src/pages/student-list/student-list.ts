import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TcourseService} from "../../providers/tcourse.service";

/**
 * Generated class for the StudentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-list',
  templateUrl: 'student-list.html',
})
export class StudentListPage {
   persondata:any='';
  tcousedata:any=[];
  firstdata={
    course:'',
    ID:'',
  }
  singlecourse=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private tcourseServic:TcourseService) {
    this.persondata=this.navParams.get('persondata');
    console.log(this.persondata['ID']);
    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.firstdata.course=this.tcousedata[0]['course_name'];
      this.firstdata.ID=this.tcousedata[0]['course_number'];
      this.tcourseServic.searchScourse(this.firstdata.ID).then(result=>{
        this.singlecourse=JSON.parse(result.data)['result'];
        console.log(this.singlecourse);
      })
      //console.log(this.firstdata)
      /*this.firstcourse=this.tcousedata[0]['course_name'];*/
      //console.log(this.tcousedata.length);
      /*this.selectcourse();*/
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentListPage');
  }
  ionViewWillEnter(){
 /*   this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.firstdata.course=this.tcousedata[0]['course_name'];
      this.firstdata.ID=this.tcousedata[0]['course_number'];
      this.tcourseServic.searchScourse(this.firstdata.ID).then(result=>{
        this.singlecourse=JSON.parse(result.data)['result'];
        console.log(this.singlecourse);
      })
    });*/
  }
  selectfresh(){
    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.tcourseServic.searchScourse(this.firstdata.ID).then(result=>{
        this.singlecourse=JSON.parse(result.data)['result'];
       // console.log(this.singlecourse);
      })
    });

  }

}
