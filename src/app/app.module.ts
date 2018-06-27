import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { TimesheetPage } from './../pages/timesheet/timesheet';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from './../pages/settings/settings';
import { PendingPage } from './../pages/pending/pending';
import { PendingDetailPage } from './../pages/pending-detail/pending-detail';
import { DashBoardPage } from './../pages/dash-board/dash-board';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    PendingPage,
    PendingDetailPage,
    SettingsPage,
    DashBoardPage,
    TimesheetPage
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PendingPage,
    PendingDetailPage,
    SettingsPage,
    DashBoardPage,
    TimesheetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}