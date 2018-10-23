import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disco5CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disco5-canciones',
  templateUrl: 'disco5-canciones.html',
})
export class Disco5CancionesPage {

  CancionesD5 = [
    'Super trouper (4:13)',
    'The winner takes it all (4:55)',
    'On and on and on (3:41)',
    'Andante, andante (4:38)',
    'Me and I (3:56)',
    'Happy New Year (4:37)',
    'Our last summer (4:58)',
    'The piper (4:40)',
    'Lay all your love on me (4:33)',
    'The way old friends do (2:53)'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disco5CancionesPage');
  }

}
