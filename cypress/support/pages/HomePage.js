class HomePage {
  visitar() {
    cy.viewport('iphone-xr');
    cy.visit('/');
  }
}

export default new HomePage();
