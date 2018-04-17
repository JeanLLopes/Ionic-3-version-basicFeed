import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  public loader;
  public refresher;
  public isRefreshing : boolean = false;

  //INFINITE
  public page = 1
  public infiniteScrool;

  // adicionadmo public loadingCtrl: LoadingController
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvide: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  //ALTERAMOS O NOME DA FUNÇÃO INICIAL DO IONIC PARA USAR QUANDO ENTRAMOS NA PAGINA E NAO NO "LOADER"
  //ionViewDidLoad = LOAD DA PAGINA
  //ionViewDidEnter = QUANDO ENTRA NA PAGINA
  ionViewDidEnter() {
    //APRESENTAMOS O CARREGANDO
    this.abreCarregando();
    this.CarregarFilmes();
    console.log('ionViewDidLoad FeedsPage');
  }

  //CRIAMOS O METODO PARA ABRIR O CARREGANDO
  public abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  //CRIAMOS O METODO PARA FECHAR O CARREGANDO
  public fecharCarregando(){
    this.loader.dismiss();
  }

  //metodo para dar refresher na pagina
  public doRefresh(refresher) {
    this.refresher = refresher; 
    this.isRefreshing = true; 
    this.CarregarFilmes();
    console.log('Begin async operation', refresher);
  }

  public CarregarFilmes(newPage : boolean = false){
    //PRA MOSTRAR NA PAGINA NOS DEVEMOS COLOCAR A FUNÇÃO AQUI
    //this.SomaDeValor();
    //this.SomaValoreComParametros(10, 20)
    this.movieProvide.GetMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        console.log(data)
        const objetoRetorno = JSON.parse(response._body);
        
        if(newPage){
          this.listaFiles = this.listaFiles.concat(objetoRetorno.results)
          this.infiniteScrool.complete();
        }else{
          this.listaFiles = objetoRetorno.results;
        }

        //FECHA O CARREGANDO PAGINA
        this.fecharCarregando();

        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        } 
      },
      error => {
        //FECHA O CARREGANDO PAGINA
        this.fecharCarregando();
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

  public AbrirDetalhes(filme){
    //mandamos o ID como parametro
    this.navCtrl.push(FilmeDetalhesPage, {id: filme.id})
  }

  public doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.page++;
    this.infiniteScrool = infiniteScroll;
    this.CarregarFilmes(true);
  }
}
