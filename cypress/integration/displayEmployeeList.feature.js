describe('Display list of employees', () => {
})

it('when user visits the page', () => {
  cy.visit('http://localhost:3000')
  cy.get('section[name="main"]').within(() => {
    cy.get('li')
    .should('have.length', 5)
  })
})

