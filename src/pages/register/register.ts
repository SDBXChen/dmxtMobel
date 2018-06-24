import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterService} from "../../providers/register.service";
import {Http} from "@angular/http";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  flag:any='学生';
  registerUserS={
    password:'',
    nickname:'',
    phoneNumber:'',
    identify:'',
    name:'',
    yard:'',
    major:'',
    stdnum:'',
    school:'',
    layer:''
  };
  registerUserT={
    password:'',
    nickname:'',
    phoneNumber:'',
    identify:'',
    name:'',
    yard:'',
    teanum:'',
    school:''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,private registerService:RegisterService,private http:Http) {
  }
  @ViewChild('registerSlides') registerSlides:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.registerSlides.lockSwipes(true);

  }
  next(){
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.registerSlides.lockSwipes(true);
   // console.log(this.registerUserS.nickname);

  }
  previous() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slidePrev()
    this.registerSlides.lockSwipes(true);
  }

  returnSignin(){
    this.registerUserS.identify=this.flag;
    this.registerUserT.identify=this.flag;
    console.log(this.flag);
    this.registerUserT.nickname=this.registerUserS.nickname;
    this.registerUserT.password=this.registerUserS.password;
    this.registerUserT.phoneNumber=this.registerUserS.phoneNumber;
    if(this.flag=='学生') {
      //console.log(this.registerUserS);
     this.registerService.registerS(this.registerUserS).then(result=>{
      });
     this.navCtrl.push(LoginPage);
    }
    else {
      //console.log(this.registerUserT);
      console.log('22222');
      this.registerService.registerT(this.registerUserT).then(result=>{
        this.navCtrl.push(LoginPage);
      });
    }

  }

}
