import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
@Component({
    selector: 'page-tc',
    templateUrl: 'tc.html'
  })
export class TC {
  
    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
    ) {
    }
  
    dismiss() {
      this.viewCtrl.dismiss();
    }
  }