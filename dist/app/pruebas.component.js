"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
var router_deprecated_1 = require('@angular/router-deprecated');
var items_component_1 = require('./items/items.component');
var item_create_component_1 = require('./item/item-create.component');
var profile_component_1 = require('./profile/profile.component');
var characters_component_1 = require('./characters/characters.component');
var character_component_1 = require('./character/character.component');
var PruebasAppComponent = (function () {
    function PruebasAppComponent(af) {
        var _this = this;
        this.af = af;
        this.af.auth.subscribe(function (auth) { return _this.logued = auth != undefined; });
    }
    PruebasAppComponent.prototype.login = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup,
        });
    };
    PruebasAppComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    PruebasAppComponent.prototype.overrideLogin = function () {
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Anonymous,
            method: angularfire2_1.AuthMethods.Anonymous,
        });
    };
    PruebasAppComponent = __decorate([
        core_1.Component({
            selector: 'pruebas-app',
            templateUrl: 'app/pruebas.component.html',
            styleUrls: ['app/pruebas.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/items',
                name: 'Items',
                component: items_component_1.ItemsComponent,
                useAsDefault: true
            },
            {
                path: '/item-create',
                name: 'ItemCreate',
                component: item_create_component_1.ItemCreateComponent
            },
            {
                path: '/profile',
                name: 'Profile',
                component: profile_component_1.ProfileComponent
            },
            {
                path: '/characters',
                name: 'Characters',
                component: characters_component_1.CharactersComponent
            },
            {
                path: '/character/:id',
                name: 'Character',
                component: character_component_1.CharacterComponent
            }
        ]), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], PruebasAppComponent);
    return PruebasAppComponent;
}());
exports.PruebasAppComponent = PruebasAppComponent;
//# sourceMappingURL=pruebas.component.js.map