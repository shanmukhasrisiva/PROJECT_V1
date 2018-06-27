import { MbscModule, MbscCalendarOptions } from '@mobiscroll/angular';
import { FormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TimesheetPage } from './../timesheet/timesheet';

 /**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  calendarOneWeek: String;
  @ViewChild(Nav) nav: Nav;

//  dateobj: any;

  dateStrSettings: MbscCalendarOptions = {
    
    max: '2018-08-31',
    min: '08/01/2018'


};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

getdatee(dateObj){

this.navCtrl.push(TimesheetPage, {
  data: dateObj});

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPage');
  }

  onpagee(){
    var a=document.getElementById("ttime");


  }

}
