import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';      
import { Firebase } from '@ionic-native/firebase';
import { Crashlytics } from '@ionic-native/fabric';
import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider,
    Geolocation,
    Firebase,
    Crashlytics
  ]
})
export class AppModule { }
