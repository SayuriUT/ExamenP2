import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disco1ImagenPage } from '../disco1-imagen/disco1-imagen';
import { Disco1BiografiaPage } from '../disco1-biografia/disco1-biografia';
import { Disco1CancionesPage } from '../disco1-canciones/disco1-canciones';
import { Disco1OpinionPage } from '../disco1-opinion/disco1-opinion';
import { Disco2ImagenPage } from '../disco2-imagen/disco2-imagen';
import { Disco2BiografiaPage } from '../disco2-biografia/disco2-biografia';
import { Disco2CancionesPage } from '../disco2-canciones/disco2-canciones';
import { Disco2OpinionPage } from '../disco2-opinion/disco2-opinion';
import { Disco3ImagenPage } from '../disco3-imagen/disco3-imagen';
import { Disco3BiografiaPage } from '../disco3-biografia/disco3-biografia';
import { Disco3CancionesPage } from '../disco3-canciones/disco3-canciones';
import { Disco3OpinionPage } from '../disco3-opinion/disco3-opinion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagen1=Disco1ImagenPage;
  biografia1=Disco1BiografiaPage;
  canciones1=Disco1CancionesPage;
  opinion1=Disco1OpinionPage;
  imagen2=Disco2ImagenPage;
  biografia2=Disco2BiografiaPage;
  canciones2=Disco2CancionesPage;
  opinion2=Disco2OpinionPage;
  imagen3=Disco3ImagenPage;
  biografia3=Disco3BiografiaPage;
  canciones3=Disco3CancionesPage;
  opinion3=Disco3OpinionPage;

  constructor(public navCtrl: NavController) {

  }

  
  clickImagen1(){
    this.navCtrl.push(this.imagen1)
  }
  clickBiografia1(){
    this.navCtrl.push(this.biografia1)
  }
  clickCanciones1(){
    this.navCtrl.push(this.canciones1)
  }
  clickOpinion1(){
    this.navCtrl.push(this.opinion1)
  }

  
  clickImagen2(){
    this.navCtrl.push(this.imagen2)
  }
  clickBiografia2(){
    this.navCtrl.push(this.biografia2)
  }
  clickCanciones2(){
    this.navCtrl.push(this.canciones2)
  }
  clickOpinion2(){
    this.navCtrl.push(this.opinion2)
  }


  clickImagen3(){
    this.navCtrl.push(this.imagen3)
  }
  clickBiografia3(){
    this.navCtrl.push(this.biografia3)
  }
  clickCanciones3(){
    this.navCtrl.push(this.canciones3)
  }
  clickOpinion3(){
    this.navCtrl.push(this.opinion3)
  }
}
