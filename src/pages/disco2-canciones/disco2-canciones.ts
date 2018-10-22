import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disco2CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disco2-canciones',
  templateUrl: 'disco2-canciones.html',
})
export class Disco2CancionesPage {

  CancionesD2 = [
    'Jenny was a friend of mine (4:04)',
    'Mr. Brightside (3:42)',
    'Smile like you mean it (3:54)',
    'Somebody told me (3:17)',
    'All this things that I have done(5:01)' ,
    'Andy, you are a star (3:14)',
    'On top (4:18)',
    'Change your mind (3:10)',
    'Believe me Natalie (5:06)',
    'Midnight Show (4:02)',
    'Everything will be alright (4:02)'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disco2CancionesPage');
  }

}
