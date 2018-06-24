import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ScourseService} from "../../providers/scourse.service";

/**
 * Generated class for the KkalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kkalert',
  templateUrl: 'kkalert.html',
})
export class KkalertPage {
  absence:any;
  persondata:any;
  scoursedata:any;
  test;

  constructor(public navCtrl: NavController, public navParams: NavParams,private scourservice:ScourseService) {
    this.persondata=navParams.get('persondata');
    //console.log(this.persondata);
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
      // console.log(result);
      this.scoursedata=JSON.parse(result.data)['result'];
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KkalertPage');
  }
  ionViewWillEnter(){
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
      // console.log(result);
      this.scoursedata=JSON.parse(result.data)['result'];
      // console.log(this.scoursedata);
    })
  }


}
