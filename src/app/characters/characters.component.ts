import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Component({
	selector: 'characters',
	templateUrl: 'app/characters/characters.component.html',
	styleUrls: ['app/characters/characters.component.css']
})

export class CharactersComponent {
	user: FirebaseAuthState;
	characters: FirebaseListObservable<any[]>;
	constructor(public af: AngularFire) {
		this.af.auth.subscribe(auth => this.user = auth);
		this.characters = af.database.list('/characters/' + this.user.uid);
	}
}
