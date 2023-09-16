// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("clickbtn", (locator) => {
  cy.get(locator).should("be.visible").click();
});

Cypress.Commands.add("validateText", (locator, value) => {
  cy.get(locator).should("contain.text", value);
});

Cypress.Commands.add("input", (locator, value) => {
  if (value !== null) {
    cy.get(locator).clear().type(value);
  } else {
    cy.get(locator).clear();
  }
});

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
