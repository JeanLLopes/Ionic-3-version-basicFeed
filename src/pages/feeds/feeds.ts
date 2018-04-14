import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
  providers: [
    MovieProvider
  ]
})
export class FeedsPage {
  //DEFINI UMA VARIAVEL DE TESTES
  public nomeUsuario : string = "JeanLopes";

  public listaFiles = new Array<any>();


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvide: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');

    //PRA MOSTRAR NA PAGINA NOS DEVEMOS COLOCAR A FUNÇÃO AQUI
    //this.SomaDeValor();
    //this.SomaValoreComParametros(10, 20)
    this.movieProvide.GetMovies().subscribe(
        data => {
          const response = (data as any);
          const objetoRetorno = JSON.parse(response._body);
          this.listaFiles = objetoRetorno.results;

          console.log(objetoRetorno);
        },
        error => {
          console.log(error)
        })
  }

  //CRIANDO UMA FUNÇÃO NO TYPESCRIPT PARA O IONIC
  //public somaDeValor():any{}
  public SomaDeValor():void{
    alert("Minha função funcionou " + this.nomeUsuario)
  }

  public SomaValoreComParametros(num1: number, num2:number){
    console.log(num1 + num2);
  }

}
