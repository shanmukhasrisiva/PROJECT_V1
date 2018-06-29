import { SettingsPage } from './../pages/settings/settings';
import { PendingPage } from './../pages/pending/pending';
import { PendingDetailPage } from './../pages/pending-detail/pending-detail';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashBoardPage } from './../pages/dash-board/dash-board';
import { HomePage } from '../pages/home/home';
import {TimesheetPage} from '../pages/timesheet/timesheet';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  @ViewChild(Nav) nav: Nav;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public auth: AuthServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    //this.auth.afAuth.authState
    //.subscribe(
     // user => {
      //  if (user) {
       //   this.rootPage = HomePage;
       /// } else {
         // this.rootPage = LoginPage;
       // }
      //},
     // () => {
     //   this.rootPage = LoginPage;
      //}
    //);
  }

  
  
  gotoHome(){
this.nav.setRoot(HomePage);

  }
  gotoDash() {
    this.nav.push(DashBoardPage);

  }
  gotoPend() {
    this.nav.push(PendingPage);

  }
  gotoSettings() {
    this.nav.push(SettingsPage);

  }
  gotoTimesheet() {
    this.nav.push(TimesheetPage)
  }
}

