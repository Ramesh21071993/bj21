import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { TC } from './tc/tc';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  opentc() {
    let modal = this.modalCtrl.create(TC, {});
    modal.present();
  }

}
