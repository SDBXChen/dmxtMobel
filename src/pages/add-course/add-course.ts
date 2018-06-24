import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EditcourseService} from "../../providers/editcourse.service";

/**
 * Generated class for the AddCoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-course',
  templateUrl: 'add-course.html',
})
export class AddCoursePage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private editcourseservic:EditcourseService ) {
    this.persondata=navParams.get('persondata');
    console.log(this.persondata['ID']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoursePage');
  }
  save(){
    this.classMes.classteacher=this.persondata['username'];
    this.classMes.classteacherID=this.persondata['ID'];
    this.editcourseservic.addTcourse(this.classMes).then(result=>{
      this.navCtrl.pop();
    });

    console.log(this.classMes);
  }

}
