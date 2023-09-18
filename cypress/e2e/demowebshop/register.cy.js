import RegisterPage from "../../support/pageObject/registerPage.cy";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("demowebshop_url"));
  });

  it("success register with POM", () => {
    const register = new RegisterPage();
    register.visitRegisterPage();
    cy.fixture("success_register.json").then((user) => {
      register.assertURL();
      register.selectGender();
      register.inputFirstname(user.firstname);
      register.inputLastname(user.lastname);
      register.inputEmail(user.email);
      register.inputPassword(user.password);
      register.inputConfirmPassword(user.confirmPassword);
      register.clickRegisterButton();
      register.assertTextSuccess();
    });
  });

  it("failed register with POM", () => {
    const register = new RegisterPage();
    register.visitRegisterPage();
    cy.fixture("failed_register.json").then((user) => {
      user.failed_regis.forEach((datauser) => {
        register.selectGender();
        register.inputFirstname(datauser.firstname);
        register.inputLastname(datauser.lastname);
        register.inputEmail(datauser.email);
        register.inputPassword(datauser.password);
        register.inputConfirmPassword(datauser.confirmPassword);
        register.clickRegisterButton();
        cy.wait(1000);
        register.assertRegisterFailed(
          datauser.errorLocator,
          datauser.errorMessage
        );
      });
    });
  });
});
