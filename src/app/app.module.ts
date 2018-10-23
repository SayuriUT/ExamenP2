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
import { Disco2BiografiaPage } from '../pages/disco2-biografia/disco2-biografia';
import { Disco2ImagenPage } from '../pages/disco2-imagen/disco2-imagen';
import { Disco2OpinionPage } from '../pages/disco2-opinion/disco2-opinion';
import { Disco2CancionesPage } from '../pages/disco2-canciones/disco2-canciones';
import { Disco3BiografiaPage } from '../pages/disco3-biografia/disco3-biografia';
import { Disco3CancionesPage } from '../pages/disco3-canciones/disco3-canciones';
import { Disco3ImagenPage } from '../pages/disco3-imagen/disco3-imagen';
import { Disco3OpinionPage } from '../pages/disco3-opinion/disco3-opinion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Disco1BiografiaPage,
    Disco1CancionesPage,
    Disco1ImagenPage,
    Disco1OpinionPage,
    Disco2BiografiaPage,
    Disco2CancionesPage,
    Disco2ImagenPage,
    Disco2OpinionPage,
    Disco3BiografiaPage,
    Disco3CancionesPage,
    Disco3ImagenPage,
    Disco3OpinionPage
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
    Disco1OpinionPage,
    Disco2BiografiaPage,
    Disco2CancionesPage,
    Disco2ImagenPage,
    Disco2OpinionPage,
    Disco3BiografiaPage,
    Disco3CancionesPage,
    Disco3ImagenPage,
    Disco3OpinionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
