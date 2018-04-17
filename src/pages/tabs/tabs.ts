import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedsPage } from '../feeds/feeds';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { AtletasPage } from '../atletas/atletas';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedsPage;
  tab5Root = ConfiguracoesPage;
  tab6Root = AtletasPage;
  tab7Root = CameraPage;

  constructor() {

  }
}
