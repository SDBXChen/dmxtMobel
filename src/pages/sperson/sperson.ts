import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {NotePage} from "../note/note";
import {KkalertPage} from "../kkalert/kkalert";
import {SettingPage} from "../setting/setting";
import {TermtotalPage} from "../termtotal/termtotal";
import {SigninPage} from "../signin/signin";
import {LeavePage} from "../leave/leave";
import {ScoursePage} from "../scourse/scourse";
import {ClassMatePage} from "../class-mate/class-mate";

/**
 * Generated class for the SpersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sperson',
  templateUrl: 'sperson.html',
})
export class SpersonPage {
  persondata:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.persondata=navParams.get('persondata');
    console.log(this.persondata);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpersonPage');
  }
  toNotePage(){
    this.navCtrl.push(NotePage);
  }
  toKkalertPage()
  {
    this.navCtrl.push(KkalertPage,{'persondata':this.persondata });
  }
  toSettingPage(){
  this.navCtrl.push(SettingPage);
  }
  toTermtotalPage(){
    this.navCtrl.push(TermtotalPage);
  }
  toSiginPage(){
    this.navCtrl.push(SigninPage,{'persondata':this.persondata});
  }
  toLeavePage(){
   // this.navCtrl.push(LeavePage);
  }
  toScourse(){
    this.navCtrl.push(ScoursePage,{'persondata':this.persondata});
  }
  toclassmate(){
    this.navCtrl.push(ClassMatePage,{'persondata':this.persondata});
  }

}
