import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the CartolaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartolaProvider {
  //ADICIONAMOS AS VARIAVEIS DE TRATAMENTO DE CORS
  //A INFORMAÇÃO ABAIXO FOI ADICIONADA NO ARQUIVO  C:\Users\JEAN-NOTE\Desktop\app\Ionic-3-version-basicFeed\BasicFeeds\ionic.config.json
  basePath = "/cartolaapi";
  
  //ADICIONAMO O PARAMETRO _platform PARA FAZER O TRATAMENTO
  constructor(public http: Http, private _platform: Platform) {
    console.log('Hello CartolaProvider Provider');

    //VERIFICA SE ESTA USANDO O CORDOVA E NESSE CASO USA UMA OUTRA URL 
    //PARA NÃO DAR PROBLEMAS DE CORS
    if(this._platform.is("cordova")){
      this.basePath = "https://api.cartolafc.globo.com"
    }
  }


  public Atletas(){
    return this.http.get(this.basePath + "/atletas/mercado");
  }

}
