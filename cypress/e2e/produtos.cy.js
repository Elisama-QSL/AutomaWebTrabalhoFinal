import HomePage from '../support/pages/HomePage';
import ProdutosPage from '../support/pages/ProdutosPage';

describe('Verificação de Produtos', () => {
  beforeEach(() => {
    HomePage.visitar();
  });

  it('Verificar detalhes de um produto', () => {
    ProdutosPage.acessarProdutos();
    ProdutosPage.abrirProduto(1);
    ProdutosPage.validarDetalhesProduto('Blue Top', 'Category: Women > Tops', 'Rs. 500', 1, 'New', 'Polo');
  });

  it('Pesquisar produto', () => {
    ProdutosPage.acessarProdutos();
    ProdutosPage.pesquisarProduto('Sleeveless Dress');
    ProdutosPage.validarProdutoEncontrado('Rs. 1000');
  });
});
