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
});
