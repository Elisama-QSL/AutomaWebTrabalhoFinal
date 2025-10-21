import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import ProdutosPage from './pages/ProdutosPage';
import ContatoPage from './pages/ContatoPage';

Cypress.Commands.add('login', (email, senha) => {
  LoginPage.acessarLogin();
  LoginPage.preencherLogin(email, senha);
  LoginPage.clicarLogin();
});

Cypress.Commands.add('cadastroCompleto', (nome, email, dados) => {
  CadastroPage.preencherFormulario(nome, email);
  CadastroPage.completarCadastro(dados);
  CadastroPage.validarCadastroCriado();
});
