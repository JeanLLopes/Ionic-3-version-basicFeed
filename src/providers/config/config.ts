import { Injectable } from '@angular/core';

//CRIAMOS UMA VARIAVEL PARA GRAVAR O NOME DA VARIAVEL DE CONFIG
let configKeyName = "config"

@Injectable()
export class ConfigProvider{
  constructor(){

  }
  
  //RECUPERA AS INFORMAÇÕES DO LOCALSTORAGE
  getConfigData():any{
    return localStorage.getItem(configKeyName)
  }

  //GRAVAR AS INFORMAÇÕES NO LOCALSTORAGE 
  setConfigData(showSlide?: boolean, nome?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    //VERIFICA SE ALGUMA DAS INFORMAÇÕES ABAIXO FORAM ENVIADAS VIA PARAMETRO
    //CASO TENHA SIDO ENVIADO VAI ADICIONAR AO config
    if(showSlide){
      config.showSlide = showSlide;
    }  
    if(name){
      config.name = name;
    }  
    if(username){
      config.username = username;
    }  
    
    localStorage.setItem(configKeyName, JSON.stringify(config))
  }
}

