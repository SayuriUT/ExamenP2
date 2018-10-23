import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disco4CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disco4-canciones',
  templateUrl: 'disco4-canciones.html',
})
export class Disco4CancionesPage {

  CancionesD4 = [
    'Eraser (3:47)',
    'Castle on the Hill (4:21)',
    'Dive (3:58)',
    'Shape of you (3:53)',
    'Perfect (4:23)',
    'Galway girl (2:50)',
    'Happier (3:27)',
    'New man (3:09)',
    'Hearts dont break around here (4:08)',
    'What do I know (3:57)',
    'How would you feel (4:40)',
    'Supermarket flowers (3:41)'
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disco4CancionesPage');
  }

}
