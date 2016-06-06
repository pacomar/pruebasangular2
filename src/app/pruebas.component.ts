import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ItemsComponent } from './items/items.component';
import { ItemCreateComponent } from './item/item-create.component';
import { ProfileComponent } from './profile/profile.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

@Component({
	selector: 'pruebas-app',
	templateUrl: 'app/pruebas.component.html',
	styleUrls: ['app/pruebas.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS
	]
})
@RouteConfig([
	{
		path: '/items',
		name: 'Items',
		component: ItemsComponent,
		useAsDefault: true
	},
	{
		path: '/item-create',
		name: 'ItemCreate',
		component: ItemCreateComponent
	},
	{
		path: '/profile',
		name: 'Profile',
		component: ProfileComponent
	},
	{
		path: '/characters',
		name: 'Characters',
		component: CharactersComponent
	},
	{
		path: '/character/:id',
		name: 'Character',
		component: CharacterComponent
	}
		,
	{
		path: '/character-create',
		name: 'CharacterCreate',
		component: CharacterCreateComponent
	}
])
export class PruebasAppComponent {
	logued: boolean;
	constructor(public af: AngularFire) {
		this.af.auth.subscribe(auth => this.logued = auth != undefined);
	}
	login() {
		this.af.auth.login({
			provider: AuthProviders.Google,
			method: AuthMethods.Popup,
		});
	}
	logout() {
		this.af.auth.logout();
	}
	overrideLogin() {
		this.af.auth.login({
			provider: AuthProviders.Anonymous,
			method: AuthMethods.Anonymous,
		});    
	}
}
