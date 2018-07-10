import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the PendingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending-detail',
  templateUrl: 'pending-detail.html',
})
export class PendingDetailPage {
  public id:' ';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingDetailPage');
  }
prom(){
  const alert = this.alertCtrl.create({
    title: 'Alert!',
    subTitle: 'The Password has been sent to your registered email id',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.setRoot(LoginPage);



}

}
