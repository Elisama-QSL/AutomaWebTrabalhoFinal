class LoginPage {
  acessarLogin() {
    cy.get('a[href="/login"]').click();
  }

  preencherLogin(email, senha) {
    cy.get('[data-qa="login-email"]').type(email);
    cy.get('[data-qa="login-password"]').type(senha, { log: false });
  }

  clicarLogin() {
    cy.get('[data-qa="login-button"]').click();
  }

  validarLogin(usuario) {
    cy.get('i.fa-user').parent().should('contain', usuario);
    cy.get('a[href="/logout"]').should('be.visible');
  }

  validarErroLogin() {
    cy.get('.login-form > form > p')
      .should('contain', 'Your email or password is incorrect!');
  }

  logout() {
    cy.get('a[href="/logout"]').should('be.visible').click();
  }
}

export default new LoginPage();
