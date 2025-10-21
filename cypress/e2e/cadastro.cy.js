import CadastroPage from '../support/pages/CadastroPage';
import userData from '../fixtures/userData.json';

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    cy.viewport('iphone-xr');
    cy.visit('/');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    const timestamp = new Date().getTime();
    const nome = 'qaTester';
    const email = `testerqa${timestamp}@gmail.com`;

    cy.get('a[href="/login"]').click();

    cy.url().should('include', '/login');
    cy.get('.signup-form h2').should('contain', 'New User Signup!');

    CadastroPage.preencherFormulario(nome, email);
    CadastroPage.completarCadastro(userData);
    CadastroPage.validarCadastroCriado();

  });
});
