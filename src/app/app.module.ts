import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FeedsPageModule } from '../pages/feeds/feeds.module';
import { HttpModule } from '@angular/http';
import { IntroPageModule } from '../pages/intro/intro.module';
import { MovieProvider } from '../providers/movie/movie';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';
import { CartolaProvider } from '../providers/cartola/cartola';
import { AtletasPageModule } from '../pages/atletas/atletas.module';
import { CameraPageModule } from '../pages/camera/camera.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FeedsPageModule,
    IntroPageModule,
    HttpModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule,
    AtletasPageModule,
    CameraPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],

  //AQUI SÃO ADICIONADOSOS PROVIDERS GLOBAIS
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    CartolaProvider
  ]
})
export class AppModule {}
