export class PruebasPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('pruebas-app h1')).getText();
  }
}
