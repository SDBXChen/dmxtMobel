import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {SpersonPage} from "../pages/sperson/sperson";
import {NotePage} from "../pages/note/note";
import {KkalertPage} from "../pages/kkalert/kkalert";
import {SettingPage} from "../pages/setting/setting";
import {TermtotalPage} from "../pages/termtotal/termtotal";
import {RegisterPage} from "../pages/register/register";
import {SigninPage} from "../pages/signin/signin";
import {LeavePage} from "../pages/leave/leave";
import {LoginService} from "../providers/login.service";
import {HttpInterceptorService} from "../providers/http-interceptor.service";
import {ConnectionBackend, Http, HttpModule, RequestOptions} from "@angular/http";
import {RegisterService} from "../providers/register.service";
import {TspersonPage} from "../pages/tsperson/tsperson";
import {TcoursePage} from "../pages/tcourse/tcourse";
import {TcourseService} from "../providers/tcourse.service";
import {EditCoursePage} from "../pages/edit-course/edit-course";
import {EditcourseService} from "../providers/editcourse.service";
import {AddCoursePage} from "../pages/add-course/add-course";
import {TleavePage} from "../pages/tleave/tleave";
import {TsigninPage} from "../pages/tsignin/tsignin";
import {StudentListPage} from "../pages/student-list/student-list";
import {ScoursePage} from "../pages/scourse/scourse";
import {ScourseService} from "../providers/scourse.service";
import {SaddCoursePage} from "../pages/sadd-course/sadd-course";
import {LocalStorageProvider} from "../providers/local-storage";
import {WelcomePage} from "../pages/welcome/welcome";
import {ClassMatePage} from "../pages/class-mate/class-mate";
import {ComponentsModule} from "../components/components.module";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SpersonPage,
    NotePage,
    KkalertPage,
    SettingPage,
    TermtotalPage,
    RegisterPage,
    SigninPage,
    LeavePage,
    TspersonPage,
    TcoursePage,
    EditCoursePage,
    AddCoursePage,
    TleavePage,
    TsigninPage,
    StudentListPage,
    ScoursePage,
    SaddCoursePage,
    WelcomePage,
    ClassMatePage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SpersonPage,
    NotePage,
    KkalertPage,
    SettingPage,
    TermtotalPage,
    RegisterPage,
    SigninPage,
    LeavePage,
    TspersonPage,
    TcoursePage,
    EditCoursePage,
    AddCoursePage,
    TleavePage,
    TsigninPage,
    StudentListPage,
    ScoursePage,
    SaddCoursePage,
    WelcomePage,
    ClassMatePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    RegisterService,
    TcourseService,
    EditcourseService,
    ScourseService,
    LocalStorageProvider,
    HttpInterceptorService,

  ]
})
export class AppModule {}
