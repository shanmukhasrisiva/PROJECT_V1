import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TimesheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timesheet',
  templateUrl: 'timesheet.html',
})

export class TimesheetPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

public des=[];
public hours: any;
public add: int;

add=0;
des=[" "];
hours=[" "];
  additem()
  {

    let alert = this.alertCtrl.create({
      title: 'Enter JOB and HOURS',
      inputs: [
        {
          name: 'Description',
          placeholder: 'Description'
        },
        {
          name: 'Hours',
          placeholder: 'Hours'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Add',
          handler: data => {
      this.des.push(data.Description);
      this.hours.push(data.Hours);
      //this.add+=data.hours;
              
          }
        }
      ]
    });
    alert.present();
  }







  ionViewDidLoad() {
    console.log('ionViewDidLoad TimesheetPage');
  }

  
}

