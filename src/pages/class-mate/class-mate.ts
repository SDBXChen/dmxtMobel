import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScourseService} from "../../providers/scourse.service";

/**
 * Generated class for the ClassMatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-class-mate',
  templateUrl: 'class-mate.html',
})
export class ClassMatePage {
  persondata:any;
  classdata={
    profession:'',
    grade:'',
    school:'',
    college:'',
  }
  classmatedata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private scourservice:ScourseService) {
    this.persondata=navParams.get('persondata');
   // console.log(this.persondata);
    this.classdata.profession=this.persondata['student']['profession'];
    this.classdata.grade=this.persondata['student']['grade'];
    this.classdata.school=this.persondata['student']['school'];
    this.classdata.college=this.persondata['student']['college'];
 //   console.log(this.classdata)
    this.scourservice.findclassmate(this.classdata).then(result=>{
      this.classmatedata=JSON.parse(result.data)['result'];
      console.log(this.classmatedata);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassMatePage');
  }

}
