import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { SobrePage } from '../sobre/sobre';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  //ADICIONAMOS A VARIAVEL rootPAGE QUE VAI DEFINIR A PAGINA PADRÃO QUE VAI FICAR AO FUNDO DO NOSSO APP
  rootPage = PerfilPage
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  abrirPerfil(){
    //FAZEMOS UM REDIRECT
    this.navCtrl.push(PerfilPage)
  }
  abrirSobre(){
    //FAZEMOS UM REDIRECT
    this.navCtrl.push(SobrePage)
  }

}
