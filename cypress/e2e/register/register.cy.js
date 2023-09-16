describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("demowebshop_url"));
  });

  it("success register", () => {
    cy.fixture("success_register.json").then((user) => {
      const datauser = user[0];
      cy.get(".ico-register").click();
      cy.url().should("include", "/register");
      cy.get("#gender-female").click();
      cy.regis(datauser);
      cy.clickbtn("#register-button");
      cy.validateText(".result", "Your registration completed");
    });
  });

  it.only("failed register", () => {
    cy.fixture("failed_register.json").then((user) => {
      cy.get(".ico-register").click();
      user.failed_regis.forEach((datauser) => {
        cy.url().should("include", "/register");
        cy.get("#gender-female").click();
        cy.regis(datauser);
        cy.clickbtn("#register-button");
        cy.wait(1000);
        cy.validateText(datauser.errorLocator, datauser.errorMessage);
      });
    });
  });
});
