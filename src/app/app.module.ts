import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import {PatternLockComponent} from "../components/pattern-lock/pattern-lock";
import {TouchAndroidComponent} from "../components/touch-android/touch-android";
import {TouchIosComponent} from "../components/touch-ios/touch-ios";

@NgModule({
  declarations: [
    MyApp
    , LoginPage
    , PatternLockComponent
    , TouchAndroidComponent
    , TouchIosComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
    , LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
