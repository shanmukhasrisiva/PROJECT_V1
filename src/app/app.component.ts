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
import { AuthServiceProvider } from './../providers/auth-service/auth-service';

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
    
  }

  
  
  gotoHome(){
this.nav.setRoot(HomePage);

  }
  gotoDash() {
    this.nav.setRoot(DashBoardPage);

  }
  gotoPend() {
    this.nav.setRoot(PendingPage);

  }
  gotoSettings() {
    this.nav.setRoot(SettingsPage);

  }
}

