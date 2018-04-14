import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  public GoToTabsPage(){
    //CRIA UMA FUNÇÃO PARA MANDAR O CLIENTE PARA UMA NOVA CONTROLLER ( PAGINA )
    this.navCtrl.push(TabsPage)
  }

}
