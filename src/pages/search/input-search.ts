import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Subscription } from 'rxjs';
import { Airport } from '../../models/airport';
import { RestProvider } from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'input-search',
  templateUrl: 'input-search.html',
  providers: [RestProvider]
})


export class SearchPage {

  airports: Airport[];
  airport: Airport;
  airportsSubscription: Subscription;
  airportsArray: any[];
  errorMessage: string;
  passengersCant: string;
  ticketClass: string;
  simpleColumns: any[];
  @ViewChild('airportComponent') airportComponent: IonicSelectableComponent;

  constructor(public navCtrl: NavController, public rest: RestProvider, private toastCtrl: ToastController) {
    this.airportsArray = [];
    let x = this.generateCant();
    this.simpleColumns = [
      {
        name: 'col1',
        options: x
      }
    ];

    // var kvArray = [{ key: 1, value: 10 },
    // { key: 2, value: 20 },
    // { key: 3, value: 30 }];

    // var reformattedArray = kvArray.map(String);
    // console.log(reformattedArray);
  }

  generateCant() {
    let cant: any[] = [];
    for (let index = 1; index < 100; index++) {
      let element = { text: '' + index, value: '' + index };
      cant.push(element);
    }
    return cant;
  }

  ionViewDidEnter() {
  }

  buttonClick() {
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'cant: ' + this.passengersCant + ' ticket: ' + this.ticketClass,
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  //---------------------------------------selectable serach

  itemTimeLineClick(itemClicked) {
    this.airportsArray.splice(this.airportsArray.findIndex(v => v.code === itemClicked.code), 1);
  }

  filterData(airports: Airport[], text: string) {
    return airports.filter(airport => {
      return airport.code.toLowerCase().indexOf(text) !== -1 ||
        airport.name.toLowerCase().indexOf(text) !== -1 ||
        airport.location.toString().toLowerCase().indexOf(text) !== -1;
    });
  }

  searchData(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();


    // Close any running subscription.
    if (this.airportsSubscription) {
      this.airportsSubscription.unsubscribe();
    }

    if (!text) {
      // Close any running subscription.
      if (this.airportsSubscription) {
        this.airportsSubscription.unsubscribe();
      }

      event.component.items = [];
      event.component.endSearch();
      return;
    }

    this.airportsSubscription = this.rest.getAirports().subscribe(airports => {

      // Subscription will be closed when unsubscribed manually.
      if (this.airportsSubscription.closed) {
        return;
      }
      event.component.items = this.filterData(airports, text);
      event.component.endSearch();
    }, error => this.errorMessage = <any>error);

  }

  onChangeSelect(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    this.airportsArray.push(event.value);
    this.airportComponent.clear();

  }

  onClose(event: { component: IonicSelectableComponent }) {
  }

}
