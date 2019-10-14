import { italic } from "ansi-colors"

describe('Display list of employees', () => {
})

it('when user visits the page',() => {
  cy.visit('http://localhost:3000')
  cy.get('section[name="header"]')
    .should('contain', 'Employee list')
})