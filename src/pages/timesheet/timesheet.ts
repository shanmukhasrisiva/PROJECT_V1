import { WheelSelector } from '@ionic-native/wheel-selector';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

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
  Hours = {
    Count: [
      { description: '1' },
      { description: '2' },
      { description: '3' },
      { description: '4' },
      { description: '5' },
      { description: '6' },
      { description: '7' },
      { description: '8' },
      { description: '9' },
      { description: '10' }
    ]
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private selector: WheelSelector, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimesheetPage');
  }

  openPicker() {
    this.selector.show({
      title: 'Select Number of Hours',
      positiveButtonText: 'Choose',
      negativeButtonText: 'Cancel',
      items: [
        this.Hours.Count
      ]

    }).then(result => {
      let value = 'Selected ${result.description}';
      let toast=this.toastCtrl.create({
        message: value,
        duration:4000
      });
      toast.present();
    },
    err =>console.log('Error: ',err)
  );
  }

}

