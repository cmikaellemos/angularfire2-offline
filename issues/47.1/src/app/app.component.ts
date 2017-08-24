import { Component } from '@angular/core';

import {
  AngularFireOfflineDatabase,
  AfoListObservable
} from 'angularfire2-offline/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  groceries: AfoListObservable<any[]>;
  constructor(private afoDatabase: AngularFireOfflineDatabase) {
    this.groceries = this.getAllOffersOnce();
  }

  getAllOffersOnce() {
    return (<any>this.afoDatabase.list('groceries')).take(1);
  }

}