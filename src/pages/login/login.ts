import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {TouchID, AndroidFingerprintAuth} from "ionic-native";

/*
 Generated class for the Login page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login'
  , templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController
    , private platform: Platform
    , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showTouchAndroid(): boolean {
    if (this.platform.is('android')) {
      AndroidFingerprintAuth.isAvailable().then(res => {
        console.log('is android touch supported', res);
        this.showTouchAndroid = () => res.isAvailable;
      }).catch(err => {
        console.error('android touch is not supported', err);
        this.showTouchAndroid = () => false;
      });
    }
    return this.platform.is('android');
  }

  showTouchIOS(): boolean {
    TouchID.isAvailable()
      .then(
        res => {
          console.log('TouchID is available!', res);
          this.showTouchIOS = () => true;
        },
        err => {
          console.log('TouchID is not available', err);
          this.showTouchIOS = () => false;
        }
      );
    return this.platform.is('ios');
  }

  showPattern(): boolean {
    return !(this.showTouchAndroid() || this.showTouchIOS());
  }
}
