/// <reference types="Cypress" />

describe('User can view employee details', () => {

  beforeEach(function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/employeelist',
      response: ''
    })
  })
})