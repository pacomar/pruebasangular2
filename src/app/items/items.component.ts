import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'items',
  templateUrl: 'app/items/items.component.html',
  styleUrls: ['app/items/items.component.css']
})

export class ItemsComponent {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
}
