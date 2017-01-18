import {Component} from '@angular/core';
import {AndroidFingerprintAuth} from "ionic-native";

declare var FingerprintAuth: any;

/*
 Generated class for the TouchAndroid component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'touch-android',
  templateUrl: 'touch-android.html'
})
export class TouchAndroidComponent {


  constructor() {
    console.log('Hello TouchAndroid Component');

    var encryptConfig = {
      clientId: "myAppName",
      username: "currentUser",
      password: "currentUserPassword"
    };
    console.log('plugin', FingerprintAuth);

    FingerprintAuth.encrypt(encryptConfig, successCallback, errorCallback);

    // let alert=console.log;
    function successCallback(result) {
      alert("successCallback(): " + JSON.stringify(result));
      if (result.withFingerprint) {
        alert("Successfully encrypted credentials.");
        alert("Encrypted credentials: " + result.token);
      } else if (result.withBackup) {
        alert("Authenticated with backup password");
      }
    }

    function errorCallback(error) {
      if (error === "Cancelled") {
        alert("FingerprintAuth Dialog Cancelled!");
      } else {
        alert("FingerprintAuth Error: " + error);
      }
    }

  }

}
