class CadastroPage {
  preencherFormulario(nome, email) {
    cy.contains('Signup / Login').click(); 
    cy.get('[data-qa="signup-name"]', { timeout: 15000 }).should('be.visible');
    cy.get('[data-qa="signup-name"]').type(nome);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.contains('button', 'Signup').click();
  }

  completarCadastro(dados) {
    cy.get('#id_gender2').check();
    cy.get('input#password').type(dados.senha, { log: false });
    cy.get('[data-qa=days]').select(dados.dia);
    cy.get('[data-qa=months]').select(dados.mes);
    cy.get('[data-qa=years]').select(dados.ano);

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    cy.get('#first_name').type(dados.nome);
    cy.get('#last_name').type(dados.sobrenome);
    cy.get('#company').type(dados.empresa);
    cy.get('#address1').type(dados.endereco);
    cy.get('#country').select(dados.pais);
    cy.get('#state').type(dados.estado);
    cy.get('#city').type(dados.cidade);
    cy.get('[data-qa="zipcode"]').type(dados.cep);
    cy.get('[data-qa="mobile_number"]').type(dados.telefone);

    cy.get('[data-qa="create-account"]').click();
  }

  validarCadastroCriado() {
    cy.url().should('include', 'account_created');
    cy.contains('b', 'Account Created!');
  }

  validarEmailExistente() {
    cy.get('.signup-form > form > p')
      .should('contain', 'Email Address already exist!');
  }
}

export default new CadastroPage();
