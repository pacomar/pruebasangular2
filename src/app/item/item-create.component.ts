import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'item-create',
  templateUrl: 'app/item/item-create.component.html',
  styleUrls: ['app/item/item-create.component.css']
})

export class ItemCreateComponent {
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  save(newName: string, newPriority: string) {
    this.items.push({ name: newName, priority: newPriority });
  }
}
