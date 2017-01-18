import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello TouchAndroid Component');
    this.text = 'Hello World';
  }

}
