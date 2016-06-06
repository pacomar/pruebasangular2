import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { RouteParams } from '@angular/router-deprecated';

@Component({
  selector: 'character',
  templateUrl: 'app/character/character.component.html',
  styleUrls: ['app/character/character.component.css']
})
export class CharacterComponent {
  user: FirebaseAuthState;
  character: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire,
    private routeParams: RouteParams) {
    this.af.auth.subscribe(auth => this.user = auth);
    this.character = af.database.object('/characters/' + this.user.uid + "/" + this.routeParams.get('id') );
    this.character.subscribe(snapshot => this.character = snapshot);
  }
  save(newAlias: string, newAvatar: string) {
    this.character.update({ alias: newAlias, avatar: newAvatar });
  }
}
