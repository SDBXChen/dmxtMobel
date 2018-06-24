import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LeavePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-leave',
  templateUrl: 'leave.html',
})
export class LeavePage {
   herelongitude:any;
   herelatitude:any;
   data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    navigator.geolocation.getCurrentPosition(this.onSuccess,this.onError);
    this.test();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeavePage');
  }
  onSuccess(position){
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
    console.log(position.coords);
 /*   this.herelatitude=position.coords.latitude;*/
    /*this.herelongitude=position.coords.longitude;*/

  }
  onError(error){
    console.log(error.code);
  }
  test(){
    this.herelatitude='Latitude:';
    console.log(this.herelongitude);
    console.log(this.herelatitude);
  }

}
