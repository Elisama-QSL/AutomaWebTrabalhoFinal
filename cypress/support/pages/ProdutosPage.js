class ProdutosPage {
  acessarProdutos() {
    cy.get('a[href*=products]').first().click();
     
  }

  pesquisarProduto(produto) {
    cy.get('#search_product').type(produto);
    cy.get('#submit_search').click();
  }

  validarProdutoEncontrado(nomeProduto) {
    cy.get('.single-products').should('contain.text', nomeProduto);
  }

  abrirProduto(id) {
    cy.get(`a[href="/product_details/${id}"]`).click();
  }

  validarDetalhesProduto(nome, categoria, preco, quantidade, condicao, marca) {
    cy.get('.product-information').should('contain.text', nome);
    cy.get('.product-information').should('contain.text', categoria);
    cy.get('.product-information').should('contain.text', preco);
    cy.get('input#quantity').should('have.value', quantidade);
    cy.get('.product-information').should('contain.text', condicao);
    cy.get('.product-information').should('contain.text', marca);

  }
}

export default new ProdutosPage();
