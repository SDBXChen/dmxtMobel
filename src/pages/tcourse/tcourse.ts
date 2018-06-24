import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TcourseService} from "../../providers/tcourse.service";
import {EditCoursePage} from "../edit-course/edit-course";
import {AddCoursePage} from "../add-course/add-course";
import {StudentListPage} from "../student-list/student-list";

/**
 * Generated class for the TcoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tcourse',
  templateUrl: 'tcourse.html',
})
export class TcoursePage {
   tcousedata:any=[];
   persondata:any='';
   teaname:any='1';
   data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private tcourseservice:TcourseService) {
    this.persondata=navParams.get('persondata');
    this.teaname=this.persondata['username'];
    this.tcourseservice.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      // console.log(JSON.parse(result.data)););
    })


   /* this.tcousedata=navParams.get('tcoursedata')['result'];*/

  /*  console.log(this.tcousedata);
    this.teaname=this.persondata['username'];
    console.log(this.persondata['username']);*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TcoursePage');
  }
  ionViewWillEnter(){
   /* this.tcousedata=this.navParams.get('tcoursedata')['result'];
    this.persondata=this.navParams.get('persondata');
    this.teaname=this.persondata['username'];*/
    this.persondata=this.navParams.get('persondata');
    this.teaname=this.persondata['username'];
    this.tcourseservice.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      // console.log(JSON.parse(result.data)););
    })
  }
 toEditPage(coursedata:any){
    console.log(coursedata);
    this.navCtrl.push(EditCoursePage,{'coursedata':coursedata,'persondata':this.persondata});
 }
 toAddPage(){
   this.navCtrl.push(AddCoursePage,{'persondata':this.persondata});
 }



}
