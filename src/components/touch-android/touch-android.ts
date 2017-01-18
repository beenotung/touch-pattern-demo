import { Component } from '@angular/core';
import {AndroidFingerprintAuth} from "ionic-native";

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


    // FingerprintAuth.encrypt(encryptConfig, successCallback, errorCallback);
    //
    // function successCallback(result) {
    //   console.log("successCallback(): " + JSON.stringify(result));
    //   if (result.withFingerprint) {
    //     console.log("Successfully encrypted credentials.");
    //     console.log("Encrypted credentials: " + result.token);
    //   } else if (result.withBackup) {
    //     console.log("Authenticated with backup password");
    //   }
    // }
    //
    // function errorCallback(error) {
    //   if (error === "Cancelled") {
    //     console.log("FingerprintAuth Dialog Cancelled!");
    //   } else {
    //     console.log("FingerprintAuth Error: " + error);
    //   }
    // }

  }

}
