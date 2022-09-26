/* eslint-disable jest/expect-expect */
describe('Listing Exchange Info', () => {
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
  it('should navigate to the exchange Gate.io from the list', () => {
    cy.intercept(`${api}/exchanges/gate`).as('getExchangeGate')
    cy.get('#exchange-gate').within(() => {
      cy.get('*[class^=CryptoExchange_name]') //find beginning of class `CryptoExchange_name`
      .should('contain.text', 'Gate.io')
      .find('a') // find and click on Gate.io <a> tag from the div.CryptoExchange_name_***
      .click()
      // find anywhere in class with `CryptoExchange_country`
      cy.get(`*[class*='CryptoExchange_country']`).should('contain.text','📍 Location:')
      cy.get(`*[class*='CryptoExchange_url']`).should('contain.text','https://gate.io')
      cy.wait('@getExchangeGate')
      .its('response.statusCode')
      .should('eq',200)
    })
  })
  it('should navigate to the exchange Gate.io directly', () => {
    cy.intercept(`${api}/exchanges/gate`).as('getExchangeGate')
    cy.visit(`${url}/exchange/gate`)
    cy.wait('@getExchangeGate')
      .its('response.statusCode')
      .should('eq',200)

    cy.get('button').should('contain.text','← Go back')
  })
 
})