/// <reference types="cypress" />

import Chance from 'Chance';

const chance = new Chance();

describe('User Registration Test', () => {
  const email = chance.email()

  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(Cypress.env('register_url') + '/user/register')
  })

  it('Register for a new account', () => {
    cy.get('form[data-drupal-selector="user-register-form"]').within(() => {
      cy.get('input[data-drupal-selector="edit-mail"]').type(email)
      cy.root().submit()
    })

    cy.get('.messages--status').within(($message) => {
      expect($message).to.contain('A welcome message with further instructions has been sent to your email address.')
    })
  })
})
