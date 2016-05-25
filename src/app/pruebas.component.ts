import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { ItemsComponent } from './items/items.component';
import { ItemCreateComponent } from './item/item-create.component';

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
		component: ItemsComponent
	},
	{
		path: '/item-create',
		name: 'ItemCreate',
		component: ItemCreateComponent
	}
])
export class PruebasAppComponent {
	constructor(public af: AngularFire) {
		this.af.auth.subscribe(auth => console.log(auth));
	}
	login() {
		this.af.auth.login({
			provider: AuthProviders.Twitter,
			method: AuthMethods.Popup,
		});
	}
	overrideLogin() {
		this.af.auth.login({
			provider: AuthProviders.Anonymous,
			method: AuthMethods.Anonymous,
		});    
	}
}
