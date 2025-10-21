import HomePage from '../support/pages/HomePage';
import LoginPage from '../support/pages/LoginPage';

describe('Funcionalidade de Login', () => {
  beforeEach(() => {
    HomePage.visitar();
    LoginPage.acessarLogin();
  });

  it('Login com sucesso', () => {
    cy.login('qatestecase4@gmail.com', 'qa1234');
    LoginPage.validarLogin('qaTesteCase');
  });

  it('Login incorreto', () => {
    cy.login('qa4@gmail.com', 'qa');
    LoginPage.validarErroLogin();
  });

  it('Logout após login', () => {
    cy.login('qatestecase4@gmail.com', 'qa1234');
    LoginPage.logout();
    cy.url().should('contain', 'login');
  });
});
