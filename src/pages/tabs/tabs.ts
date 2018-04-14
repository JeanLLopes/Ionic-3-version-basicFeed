import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { FeedsPage } from '../feeds/feeds';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedsPage;

  constructor() {

  }
}
