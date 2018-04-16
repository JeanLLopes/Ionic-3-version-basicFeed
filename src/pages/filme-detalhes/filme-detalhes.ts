import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

//ADICIONAMOS O PROVIDER TAMBEM NOS PROVIDERS DA PAGINA
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
  providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {
  public filme;
  public filmeId;
  
//ADICIONAMOS O PROVIDER  MovieProvider
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams, 
      public movieProvider: MovieProvider) {
  }

  //USAMOS O ionViewDidEnter 
  ionViewDidEnter() {
    //PARA PEGAR O PARAMETRO ENVIADO
    //PEGAMOS O PARAMETRO "id"
    this.filmeId = this.navParams.get("id")
    console.log('ID filme ' + this.filmeId)
    console.log('ionViewDidLoad FilmeDetalhesPage');

    //FAZER A PESQUISA NA API
    this.movieProvider.GetMoviesDetails(this.filmeId).subscribe(
      data => {
        let retorno = (data as any)._body;
        this.filme = JSON.parse(retorno);
      }, 
      error => {
        console.log(error)
      })
  }



}
