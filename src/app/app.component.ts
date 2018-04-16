import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  //COLO ESTAMOS SETANDO AS INFORMAÇÕES NO contructor ENTÃO NAO PROCISAMOS PASSAR POR AQUI A PAGINA ROOT
  //rootPage:any = IntroPage;
  
  rootPage:any ;


  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      //ANTES DE APRESENTAR PARA O USUARIO O APP, VAMOS VERIFICAR O LOCAL STORAGE
      let config = configProvider.getConfigData();

      //AQUI NOS VAERIFICAMOS SE É A 1º VEZ QUE O USUARIO ACESSAR O APP
      //CASO SIM APRESENTA A PAGINA DE SLIDE,
      //CASO CONTRARIO VAI DIRETO PARA A PAGINA DE HOME
      if(config === null){
        this.rootPage = IntroPage;
        configProvider.setConfigData(false);
      }else{
        this.rootPage = TabsPage;
      }

      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
