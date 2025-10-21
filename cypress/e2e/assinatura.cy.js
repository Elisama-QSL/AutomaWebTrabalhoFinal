import HomePage from '../support/pages/HomePage';

describe('Assinatura na página inicial', () => {
  beforeEach(() => {
    HomePage.visitar();
  });

  it('Verificar e realizar assinatura', () => {
    cy.get('.single-widget').should('be.visible');
    cy.get('.single-widget h2').should('have.text', 'Subscription');
    cy.get('#susbscribe_email').type('qatestecase4@gmail.com');
    cy.get('#subscribe').click();
    cy.get('.alert-success')
      .should('be.visible')
      .and('contain.text', 'You have been successfully subscribed!');
  });
});
