import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ScourseService} from "../../providers/scourse.service";
import {TcourseService} from "../../providers/tcourse.service";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  persondata:any;
  scoursedata:any;
  locallongitude:any=26;
  locallatitude:any=119.13172399;
  qiandao={
    latitude:'',
    longitude:'',
    registerID:'',
    classID:'',
    stdID:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private scourservice:ScourseService,
              private tcourservice:TcourseService,public loadingCtrl: LoadingController,private toastCtrl:ToastController) {
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
    this.LoadingTime();
    this.persondata=navParams.get('persondata');
    //console.log(this.persondata)
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
    //   console.log(result);
      this.scoursedata=JSON.parse(result.data)['result'];
    //   console.log(this.scoursedata);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  ionViewWillEnter(){
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
    this.scourservice.searchScourse(this.persondata['ID']).then(result=>{
      this.scoursedata=JSON.parse(result.data)['result'];
    })
  }
  studentsignin(scourse){
    console.log(scourse['course']['course_number']);
    this.presentConfirm(scourse);

  }
  presentConfirm(scourse) {
    let alert = this.alertCtrl.create({
      title: '签到',
      message:'确定签到'+scourse['course']['course_name']+'课程',
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
            this.fuzhi();
            this.qiandao.latitude=this.locallatitude;
            this.qiandao.longitude=this.locallongitude;
            this.qiandao.classID=scourse['course']['course_number'];
            this.qiandao .stdID=this.persondata['ID'];
            this.tcourservice.findregister(scourse['course']['course_number']).then(result=>{
              console.log(JSON.parse(result.data)['result']);
              if(JSON.parse(result.data)['result']==true){
                this.qiandao.registerID=JSON.parse(result.data)['register_ID'];
                this.scourservice.updateregisterdetailmobile(this.qiandao).then(result=>{
                    console.log(result);
                    if(JSON.parse(result.data)['result']==0){
                      let toast = this.toastCtrl.create({
                        message:'签到成功',
                        duration:3000
                      });
                      toast.present();
                    }
                  if(JSON.parse(result.data)['result']==1){
                    let toast = this.toastCtrl.create({
                      message:'不在范围',
                      duration:3000
                    });
                    toast.present();
                  }
                  if(JSON.parse(result.data)['result']==2){
                    let toast = this.toastCtrl.create({
                      message:'你已签到',
                      duration:3000
                    });
                    toast.present();
                  }

                })


              }
              else{
                 console.log(JSON.parse(result.data)['result']);
                let toast = this.toastCtrl.create({
                  message:'该课程尚未开始签到',
                  duration:3000
                });
                toast.present();
              }

            });
          }
        }
      ]
    });
    alert.present();
  }
  LoadingTime(){
    let loading = this.loadingCtrl.create({
      content: '正在加载位置信息'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }


  onSuccess(position){
    document.getElementById('lng').title =position.coords.longitude.toFixed(6);
    document.getElementById('lat').title=position.coords.latitude.toFixed(6);
    console.log(document.getElementById('lat').title);
  }
  onError(error){
    console.log(error.code);
  }
  fuzhi(){
    this.locallongitude=document.getElementById('lng').title;
    this.locallatitude=document.getElementById('lat').title;
    console.log(this.locallatitude);
    console.log(this.locallongitude);
  }
}
