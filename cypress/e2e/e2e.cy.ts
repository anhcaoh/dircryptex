/* eslint-disable jest/expect-expect */
describe('Dircryptex Listing', () => {
  beforeEach(() => {
    const url = Cypress.env('url');
    cy.visit(url)
  })
  it('should display heading h1 Dircryptex', () => {
    cy.get('h1').should('be.visible').contains('Dircryptex')
  })
  it('should display footer powered by', () => {
    cy.get('footer').should('be.visible').contains('Powered by')
  })
  it('should list top ten crypto exchanges', () => {
    cy.get('img').should('have.length', 12)  // top 10 + 2 filler  
    cy.get('.ant-card').should('have.length', 12)  // top 10 + 2 filler 
  })
})