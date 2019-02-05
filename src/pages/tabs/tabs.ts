import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { SearchPage } from '../search/input-search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab3Root = ContactPage;
  tab5Root = SearchPage;

  constructor() {

  }
}
