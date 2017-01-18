import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {NavController} from "ionic-angular";
import {initGlobal} from "../../utils"
import * as $ from "jquery";
import * as _dummy from "../../../lib/patternlock/jquery-patternlock/dist/jquery.patternlock";
/*
 Generated class for the PatternLock component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'pattern-lock',
  templateUrl: 'pattern-lock.html'
})
export class PatternLockComponent implements AfterViewInit {
  @ViewChild('container') el: ElementRef;

  ngAfterViewInit(): void {
    initGlobal(_dummy);
    let e = $(this.el.nativeElement);
    let padding = 16;
    let size = e.parent().parent().width() - padding * 2;
    let options = {
      rows: 3,
      columns: 3,
      width: size,
      height: size,
      randomizeIds: false, // this should be used to randomizeId of td //todo
      isCircle: true, // this will be required to identify if holes are of shape circle or square // todo
      showPatternLine: true,
      patternLineColor: '#333333',
      fieldName: '',
      valueSeparator: '',
      valueArray: [],
      centerCircle: true,
      lineWidth: 8,
      centerCircleSize: 20,
      drawEnd: data => {
        console.log('pattern data', data)
      },
      selectionColor: '#88a0bf',
      timeout: 4000
    };
    e.patternLock(options)
  }

  password: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello PatternLock Component');
  }

}
