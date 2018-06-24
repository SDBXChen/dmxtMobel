import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {TcourseService} from "../../providers/tcourse.service";
import {LocalStorageProvider} from "../../providers/local-storage";
declare var BMap;
/**
 * Generated class for the TsigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tsignin',
  templateUrl: 'tsignin.html',
})
export class TsigninPage {
  locallongitude:any=26;
  locallatitude:any=119.13172399;
  map:any;
  point:any;
  persondata:any='';
  tcousedata:any=[];
  register_ID;
  firstdata={
    course:'',
    ID:'',
  }
  flag;
  selectflag;
  courseflag;
  registerdata=[];
  qiandao={
    course_ID:'',
    start_time:'',
    end_time:'',
    sign:'',
    lng:'',
    lat:','
  }
  date:any;
  time={
    year:0,
    month:0,
    day:0,
    hh:0,
    mm:0
  }
  checkedflag;
  constructor(public navCtrl: NavController, public navParams: NavParams,private tcourseServic:TcourseService,public loadingCtrl: LoadingController,
              private storage:LocalStorageProvider) {
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
    this.LoadingTime();
    this.persondata=this.navParams.get('persondata');
   // console.log(this.persondata['ID']);
    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.courseflag=this.storage.get('courseflag',{'ID':-1})
      if(this.courseflag.ID==-1){
        this.firstdata.course = this.tcousedata[0]['course_name'];
        this.firstdata.ID = this.tcousedata[0]['course_number'];
    }
    else{
        this.firstdata.ID =this.courseflag.ID;
      }
      this.tcourseServic.listregisterbycourse(this.firstdata.ID).then(result=>{
          this.registerdata=JSON.parse(result.data)['result'];
        //  console.log(this.registerdata);
      });
      this.checked();
    });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TsigninPage');



  }
  ionViewWillEnter(){
    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.courseflag=this.storage.get('courseflag',{'ID':-1})
      if(this.courseflag.ID==-1){
        this.firstdata.course = this.tcousedata[0]['course_name'];
        this.firstdata.ID = this.tcousedata[0]['course_number'];
      }
      else{
        this.firstdata.ID =this.courseflag.ID;
      }
      this.tcourseServic.listregisterbycourse(this.firstdata.ID).then(result=>{
        this.registerdata=JSON.parse(result.data)['result'];
        //  console.log(this.registerdata);
      });
      this.checked();
    });


  }
  LoadingTime(){
    let loading = this.loadingCtrl.create({
      content: '正在加载位置信息'
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  }
  checked(){
    this.tcourseServic.findregister(this.firstdata.ID).then(result=>{
      /*this.flag==JSON.parse(result.data)['result'];
      this.selectflag=JSON.parse(result.data)['result'];*/
      //this.register_ID=JSON.parse(result.data)['result'];
     // console.log(JSON.parse(result.data)['result']);
      if(JSON.parse(result.data)['result']==true){
       // console.log('22');
        this.flag=true;
        this.selectflag=true;
        this.register_ID=JSON.parse(result.data)['register_ID'];
        this.checkedflag=true;
        /*this.register_ID=JSON.parse(result.data)['register_ID'];*/
      }
      else{
        this.flag=false;
        this.selectflag=false;
        this.checkedflag=false;
      }

     // document.getElementById('testflag').title=JSON.parse(result.data)['result'];
    });

  }
  startsignin(){
    this.fuzhi();
    this.qiandao.course_ID=this.firstdata.ID;
    this.qiandao.lat=this.locallatitude;
    this.qiandao.lng=this.locallongitude;
    this.qiandao.start_time=this.getTime();
   // console.log(this.qiandao);
    //this.checked();
    this.tcourseServic.findregister(this.firstdata.ID).then(result=> {
      if (JSON.parse(result.data)['result'] == false){
        this.tcourseServic.addregister(this.qiandao).then(result => {
          this.storage.set('courseflag', {'ID': this.firstdata.ID});
          this.flag = true;
          this.selectflag = true;
          console.log('1111');

        });
    }
    });

    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.tcourseServic.listregisterbycourse(this.firstdata.ID).then(result=>{
        this.registerdata=JSON.parse(result.data)['result'];
        //console.log(this.registerdata);
      });
    });

  }
  endsignin(){
    this.qiandao.end_time=this.getTime();
    //console.log(this.checkedflag);
    this.tcourseServic.findregister(this.firstdata.ID).then(result=>{
      if(JSON.parse(result.data)['result']==true) {
        this.register_ID=JSON.parse(result.data)['register_ID'];
        this.tcourseServic.updataregister(this.register_ID, this.qiandao.end_time).then(result => {
          this.storage.set('courseflag', {'ID': -1});
          this.flag = false;
          this.selectflag = false;

        });
      }
    });

    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.tcourseServic.listregisterbycourse(this.firstdata.ID).then(result=>{
        this.registerdata=JSON.parse(result.data)['result'];
        //console.log(this.registerdata);
      });
    });

  }
  getTime(): string {
    this.date = new Date();
    this.time.year = this.date.getFullYear();
    this.time.month = this.date.getMonth() + 1;
    this.time.day = this.date.getDate();
    this.time.hh = this.date.getHours();
    this.time.mm = this.date.getMinutes();
    let clock = this.time.year + '-';
    if (this.time.month < 10) {
      clock += '0';
    }
    clock += this.time.month + '-';
    if (this.time.day < 10) {
      clock += '0';
    }
    clock += this.time.day + ' ';
    if (this.time.hh < 10) {
      clock += '0';
    }
    clock += this.time.hh + ':';
    if (this.time.mm < 10) {
      clock += '0';
    }
    clock += this.time.mm;
    return clock;
  }

  selectfresh(){
    this.storage.set('courseflag', {'ID': this.firstdata.ID});
    this.tcourseServic.searchTcourse(this.persondata['ID']).then(result=>{
      this.tcousedata=JSON.parse(result.data)['result'];
      this.tcourseServic.listregisterbycourse(this.firstdata.ID).then(result=>{
        this.registerdata=JSON.parse(result.data)['result'];
        //console.log(this.registerdata);
      });
    });

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
  }
  loadmap(){
    this.fuzhi();
    console.log(this.locallongitude);
    console.log(this.locallatitude);
    this.map= new BMap.Map("container");
    this.point=new BMap.Point(this.locallongitude,this.locallatitude);
    this.map.centerAndZoom(this.point,16);
  }
}
