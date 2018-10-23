import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Disco3CancionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disco3-canciones',
  templateUrl: 'disco3-canciones.html',
})
export class Disco3CancionesPage {

  CancionesD3 = [
    'Death on two legs (3:44)',
    'Lazing on a sunday afternoon (1:10)',
    'I am in love with my car (3:05)',
    'You are my best friend (2:50)',
    '39 (3:31)',
    'Sweet lady (4:04)',
    'Seaside rendezvous (2:15)',
    'The prophets song (8:21)',
    'Love of my life (3:34)',
    'Good company (3:24)',
    'Bohemian rhapsody (6:01)',
    'God save the Queen (1:12)'
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Disco3CancionesPage');
  }

}
