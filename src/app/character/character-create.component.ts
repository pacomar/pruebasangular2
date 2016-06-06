import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'character-create',
  templateUrl: 'app/character/character-create.component.html',
  styleUrls: ['app/character/character-create.component.css']
})

export class CharacterCreateComponent {
  characters: FirebaseListObservable<any>;
  user: FirebaseAuthState;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => this.user = auth);
    this.characters = af.database.list('/characters/' + this.user.uid );
  }
  save(newName: string, newRace: string) {
    this.characters.push({ name: newName, race: newRace, level: 1, exp: 1 });
  }
}
