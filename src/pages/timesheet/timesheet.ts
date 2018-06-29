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
  
color: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.color=navParams.get('data');
  }

public des=[];
public hours=[];

add = 0;

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
      this.add = this.add + parseInt(data.Hours);
      this.hours.push(data.Hours);
      
              
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

