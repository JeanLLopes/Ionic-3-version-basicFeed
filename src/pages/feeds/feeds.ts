import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {
  //DEFINI UMA VARIAVEL DE TESTES
  public nomeUsuario : string = "JeanLopes";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');

    //PRA MOSTRAR NA PAGINA NOS DEVEMOS COLOCAR A FUNÇÃO AQUI
    this.somaDeValor()
  }

  //CRIANDO UMA FUNÇÃO NO TYPESCRIPT PARA O IONIC
  //public somaDeValor():any{}
  public somaDeValor():void{
    alert("Minha função funcionou " + this.nomeUsuario)
  }

}
