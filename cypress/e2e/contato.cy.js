import HomePage from '../support/pages/HomePage';
import ContatoPage from '../support/pages/ContatoPage';

describe('Formulário de Contato', () => {
  beforeEach(() => {
    HomePage.visitar();
  });

  it('Enviar mensagem de contato', () => {
    ContatoPage.acessarContato();
    cy.fixture('example.json').as('arquivo');
    ContatoPage.preencherFormulario('qaTesterQA', 'qatestecase4@gmail.com', 'teste', 'teste', '@arquivo');
    ContatoPage.validarEnvio();
  });
});
