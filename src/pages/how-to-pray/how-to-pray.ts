import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { pray } from '../../app/model/prayer/pray/pray.model';

/**
 * Generated class for the HowToPrayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-how-to-pray',
  templateUrl: 'how-to-pray.html',
})
export class HowToPrayPage {
  praise: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.praise = pray;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HowToPrayPage');
  }

}
