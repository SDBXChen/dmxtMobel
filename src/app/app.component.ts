import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from "../pages/login/login";
import {SpersonPage} from "../pages/sperson/sperson";
import {NotePage} from "../pages/note/note";
import {WelcomePage} from "../pages/welcome/welcome";
import {LocalStorageProvider} from "../providers/local-storage";

@Component({
  template:`<ion-nav [root]='root'></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  root: any = WelcomePage;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage:LocalStorageProvider) {
    this.initializeApp();
    let appConfig:any = this.storage.get('App',{
      isRun:false,
      version:'1.0.0'
    });
    if(appConfig.isRun==false){
      this.root = WelcomePage;
      appConfig.isRun = true;
      this.storage.set('App',appConfig);
    }
    else{
      this.root=LoginPage;

    }
    // used for an example of ngFor and navigation

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
