import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  public loader;

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

    console.log('ionViewDidLoad FeedsPage');
    

    //PRA MOSTRAR NA PAGINA NOS DEVEMOS COLOCAR A FUNÇÃO AQUI
    //this.SomaDeValor();
    //this.SomaValoreComParametros(10, 20)
    this.movieProvide.GetMovies().subscribe(
        data => {
          const response = (data as any);
          console.log(data)
          const objetoRetorno = JSON.parse(response._body);
          console.log(response._body)
          this.listaFiles = objetoRetorno.results;
          console.log(objetoRetorno.results)
          console.log(objetoRetorno.results);

          //FECHA O CARREGANDO PAGINA
          this.fecharCarregando();
        },
        error => {
          //FECHA O CARREGANDO PAGINA
          this.fecharCarregando();
          console.log(error)
        })
  }

  //CRIAMOS O METODO PARA ABRIR O CARREGAR
  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  fecharCarregando(){
    this.loader.dismiss();
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
