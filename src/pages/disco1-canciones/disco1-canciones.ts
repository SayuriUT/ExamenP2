import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disco1CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disco1-canciones',
  templateUrl: 'disco1-canciones.html',
})
export class Disco1CancionesPage {

  CancionesD1 = [
    'Harder to breathe (2:53)',
    'This love (3:26)',
    'Shiver (2:59)',
    'She will be loved (4:17)',
    'Tangled (3:18)',
    'The sun (4:11)',
    'Must get out (3:58)',
    'Sunday morning (4:06)',
    'Secret (4:55)',
    'Through with You (3:01)',
    'Not coming home (4:21)',
    'Sweetest goodbye (4:30)'
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disco1CancionesPage');
  }

}
