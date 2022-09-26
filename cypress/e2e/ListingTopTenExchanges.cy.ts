/* eslint-disable jest/expect-expect */
describe('Listing Top 10 Crypto Exchanges', () => {
  const url = Cypress.env('url');
  const api = Cypress.env('api')
  beforeEach(() => {
    cy.visit(url)
  })
  it('should display heading h1 Dircryptex', () => {
    cy.get('h1').should('be.visible').contains('Dircryptex')
  })
  it('should display footer powered by', () => {
    cy.get('footer').should('be.visible').contains('Powered by')
  })
  it('should list top ten crypto exchanges', () => {
    cy.intercept({url: `${api}/exchanges`}).as('getExchanges')
    
    cy.get('*[id^=exchange-]').should('have.length', 10)  // top 10 with id="exchange-{id}" 
    
    cy.wait('@getExchanges')
    .its('response.statusCode')
    .should('eq',200)
  })
})