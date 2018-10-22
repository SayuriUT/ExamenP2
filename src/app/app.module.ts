import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Disco1BiografiaPage } from '../pages/disco1-biografia/disco1-biografia';
import { Disco1CancionesPage } from '../pages/disco1-canciones/disco1-canciones';
import { Disco1ImagenPage } from '../pages/disco1-imagen/disco1-imagen';
import { Disco1OpinionPage } from '../pages/disco1-opinion/disco1-opinion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Disco1BiografiaPage,
    Disco1CancionesPage,
    Disco1ImagenPage,
    Disco1OpinionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Disco1BiografiaPage,
    Disco1CancionesPage,
    Disco1ImagenPage,
    Disco1OpinionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
