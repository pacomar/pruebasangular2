import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PruebasAppComponent } from '../app/pruebas.component';

beforeEachProviders(() => [PruebasAppComponent]);

describe('App: Pruebas', () => {
  it('should create the app',
      inject([PruebasAppComponent], (app: PruebasAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'pruebas works!\'',
      inject([PruebasAppComponent], (app: PruebasAppComponent) => {
    expect(app.title).toEqual('pruebas works!');
  }));
});
