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
Cypress.Commands.add("regis", (datauser) => {
  if (datauser.firstname != null) {
    cy.get("#FirstName").clear().type(datauser.firstname);
  } else {
    cy.get("#FirstName").clear();
  }
  if (datauser.lastname != null) {
    cy.get("#LastName").clear().type(datauser.lastname);
  } else {
    cy.get("#LastName").clear();
  }
  if (datauser.email != null) {
    cy.get("#Email").clear().type(datauser.email);
  } else {
    cy.get("#Email").clear();
  }
  if (datauser.password != null) {
    cy.get("#Password").clear().type(datauser.password);
  } else {
    cy.get("#Password").clear();
  }
  if (datauser.confirmPassword != null) {
    cy.get("#ConfirmPassword").clear().type(datauser.confirmPassword);
  } else {
    cy.get("#ConfirmPassword").clear();
  }
});

Cypress.Commands.add("clickbtn", (locator) => {
  cy.get(locator).should("be.visible").click();
});

Cypress.Commands.add("validateText", (locator, value) => {
  cy.get(locator).should("contain.text", value);
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
