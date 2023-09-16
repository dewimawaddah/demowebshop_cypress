describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("demowebshop_url"));
  });

  it("success login", () => {
    cy.fixture("success_login.json").then((user) => {
      cy.get(".ico-login").click();
      cy.url().should("include", "/login");
      cy.input("#Email", user.email);
      cy.input("#Password", user.password);
      cy.clickbtn("form > .buttons > .button-1");
      cy.validateText(
        ".header-links > ul > :nth-child(1) > .account",
        user.email
      );
      cy.get(".ico-logout").click();
    });
  });

  it.only("failed login", () => {
    cy.fixture("failed_login.json").then((user) => {
      cy.get(".ico-login").click();
      user.fail_login.forEach((datauser) => {
        cy.url().should("include", "/login");
        cy.input("#Email", datauser.email);
        cy.input("#Password", datauser.password);
        cy.clickbtn("form > .buttons > .button-1");
        cy.wait(1000);
        cy.validateText(datauser.errorLocator, datauser.errorMessage);
      });
    });
  });
});
