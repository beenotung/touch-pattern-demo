import {Component} from '@angular/core';
import {TouchID} from "ionic-native";
import {AlertController} from "ionic-angular";

/*
 Generated class for the TouchIos component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'touch-ios',
  templateUrl: 'touch-ios.html'
})
export class TouchIosComponent {

  text: string;

  constructor(private alertCtrl: AlertController) {
    console.log('Hello TouchIos Component');
    this.text = 'Hello World';
    TouchID.verifyFingerprint('Scan your fingerprint please')
      .then(
        res => {
          console.log('Ok', res)
        }
        , err => {
          console.error('Error', err);
          alertCtrl.create({
            title: 'Touch Not Supported'
            , message: 'Please use pattern lock instead'
            , buttons: ['Dismiss']
          }).present();
        }
      );
  }

}
