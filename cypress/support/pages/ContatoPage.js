class ContatoPage {
  acessarContato() {
    cy.get('a[href*="contact"]').click();
  }

  preencherFormulario(nome, email, assunto, mensagem, arquivo) {
    cy.get('[data-qa="name"]').type(nome);
    cy.get('[data-qa="email"]').type(email);
    cy.get('[data-qa="subject"]').type(assunto);
    cy.get('[data-qa="message"]').type(mensagem);
    cy.get('input[type=file]').selectFile(arquivo);
    cy.get('[data-qa="submit-button"]').click();
  }

  validarEnvio() {
    cy.get('.status').should('be.visible')
      .and('have.text', 'Success! Your details have been submitted successfully.');
  }
}

export default new ContatoPage();
