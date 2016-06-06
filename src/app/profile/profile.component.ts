import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'profile',
  templateUrl: 'app/profile/profile.component.html',
  styleUrls: ['app/profile/profile.component.css']
})

export class ProfileComponent {
  user: FirebaseAuthState;
  user_data: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => this.user = auth);
    this.user_data = af.database.object('/users/' + this.user.uid);
    this.user_data.subscribe(snapshot => this.user_data = snapshot);
  }
  save(newAlias: string, newAvatar: string) {
    this.user_data.update({ alias: newAlias, avatar: newAvatar });
  }
}
