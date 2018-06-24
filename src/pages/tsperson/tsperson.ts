import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TcoursePage} from "../tcourse/tcourse";
import {TcourseService} from "../../providers/tcourse.service";
import {TleavePage} from "../tleave/tleave";
import {TsigninPage} from "../tsignin/tsignin";
import {StudentListPage} from "../student-list/student-list";
import {LoginPage} from "../login/login";

/**
 * Generated class for the TspersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tsperson',
  templateUrl: 'tsperson.html',
})
export class TspersonPage {
  persondata:any;
  tcoursedata:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private tcourseservice:TcourseService) {
    this.persondata=navParams.get('persondata');
    console.log(this.persondata['ID']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TspersonPage');
  }

  toTcourse(){
    this.tcourseservice.searchTcourse(this.persondata['ID']).then(result=>{
     this.tcoursedata=JSON.parse(result.data);
     // console.log(JSON.parse(result.data));
      this.navCtrl.push(TcoursePage,{'tcoursedata':this.tcoursedata,'persondata':this.persondata});
    });

  }
  toTleave(){
   // this.navCtrl.push(TleavePage);
  }
  toTsignin(){
    this.navCtrl.push(TsigninPage,{'persondata':this.persondata});
  }
  toStudentList(){
    this.navCtrl.push(StudentListPage,{'persondata':this.persondata});
  }
  toexit(){
    this.navCtrl.push(LoginPage);
  }
}
