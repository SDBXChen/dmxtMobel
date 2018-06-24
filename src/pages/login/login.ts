import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {SpersonPage} from "../sperson/sperson";
import {RegisterPage} from "../register/register";
import {LoginService} from "../../providers/login.service";
import { HttpModule} from "@angular/http";
import {TspersonPage} from "../tsperson/tsperson";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginService,HttpModule],
})
export class LoginPage {
  private username: string='';
  private password: string='';
  logintype:any=0;
  currentdata:any;
  currentdata2:object;

  constructor(public navCtrl: NavController, public navParams: NavParams,private loginService: LoginService,private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  tologin()
  {
    if(this.username=='')
    {
      let toast = this.toastCtrl.create({
        message:'用户名不能为空',
        duration:3000
      });
      toast.present();
    }


    this.loginService.login(this.username, this.password,this.logintype).then(result => {
      console.log(result);//打印返回的数据
      console.log(result.data);
      this.currentdata=JSON.parse(result.data);
     /* this.currentdata2=JSON.parse(this.currentdata);*/
      console.log(this.currentdata['check']);
      if(this.currentdata['check']){
        console.log(this.currentdata['rolename']);
        if(this.currentdata['rolename']=='学生') {
          this.navCtrl.push(SpersonPage, {'persondata': this.currentdata});
        }
        else {

         this.navCtrl.push(TspersonPage, {'persondata': this.currentdata});
        }
      }
        else{
        let toast = this.toastCtrl.create({
          message:'账号密码错误',
          duration:3000
        });
        toast.present();
        }



    });
  /*  .subscribe(data=>{
      console.log(data);
    })*/

  }
  toregister(){
    this.navCtrl.push(RegisterPage);
  }

}
