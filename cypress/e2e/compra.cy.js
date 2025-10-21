import HomePage from '../support/pages/HomePage';
import CadastroPage from '../support/pages/CadastroPage';
import ProdutosPage from '../support/pages/ProdutosPage';
import userData from '../fixtures/userData.json';

describe('Fluxo completo de compra', () => {
  beforeEach(() => {
    HomePage.visitar();
  });

  it('Cadastrar usuário e realizar compra', () => {
    const timestamp = new Date().getTime();
    const email = `testerqa${timestamp}@gmail.com`;

    CadastroPage.preencherFormulario('qaTesterQA', email);
    CadastroPage.completarCadastro(userData);
    CadastroPage.validarCadastroCriado();

    ProdutosPage.acessarProdutos();
    cy.get('[data-product-id="1"]').first().click();

    cy.contains('View Cart').click();
    cy.get('#product-1').should('contain.text', 'Blue Top');
    cy.get('.btn.btn-default.check_out').click();

    cy.get('.form-control').type('teste');
    cy.get('a[href*="payment"]').click();

    cy.get('[data-qa="name-on-card"]').type('QA Tester');
    cy.get('[data-qa="card-number"]').type('5366588899');
    cy.get('[data-qa="cvc"]').type('536');
    cy.get('[data-qa="expiry-month"]').type('02');
    cy.get('[data-qa="expiry-year"]').type('2027');
    cy.get('[data-qa="pay-button"]').click();

    cy.contains('b', 'Order Placed!');
  });
});
