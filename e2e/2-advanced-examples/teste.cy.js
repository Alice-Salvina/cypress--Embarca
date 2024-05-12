describe('order ticket spec', () => {
  it('orders a ticket', () => {
    // Inicia a sessão
    cy.session('session', () => {
      cy.visit('/sessions/new')
      cy.get('#email').type('testeqa@embarca.ai')
      cy.get('#pass_log_id').type('Arca123')
      cy.get('form').submit()
      cy.url().should('include', '/customer/travel')
    })

    // Navega para a página home
    cy.visit('/')

    // Seleciona a origem e o destino
    cy.get('#origin_text').type('curitiba').should('have.value', 'curitiba')
    cy.get('.route_origin_text li:first').click()
    cy.get('#destination_text').type('ponta grossa').should('have.value', 'ponta grossa')
    cy.get('.route_destination_text li:first').click()

    // Seleciona a data e realiza a busca ###TESTE REALIZADO NO DIA 9####
    cy.get('#departure').click()
    cy.get('.datepicker .day').contains('24').click();
    cy.get('#search-trips-btn').click();

    // Reserva a poltrona 
      cy.contains('Reservar poltrona').first().click().then(() => {
      cy.get('.seat.available').first().click({force: true});
      cy.get('#next-button').should('be.visible').click({force: true});
    });
    
    // Espera as poltronas ficarem visíveis e seleciona a primeira
    cy.get('.seat.available').should('be.visible').first().click({ force: true })

    // Digita os dados do Cliente
    cy.get('input[placeholder="Digite seu nome"]').first().type("Alice Salvina");

    cy.get('input[placeholder="Digite o número do documento"]').eq(0).type("0000000000");
  })
})
