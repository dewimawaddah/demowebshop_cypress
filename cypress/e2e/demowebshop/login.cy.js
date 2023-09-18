import LoginPage from "../../support/pageObject/loginPage.cy";

describe("template spec", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("demowebshop_url"));
  });

  it("success login", () => {
    const login = new LoginPage();
    login.visitLoginPage();
    cy.fixture("success_login.json").then((user) => {
      login.assertURL();
      login.inputEmail(user.email);
      login.inputPassword(user.password);
      login.clickButtonLogin();
      login.assertLoginSuccess(user.email);
      login.clickButtonLogout();
    });
  });

  it("failed login", () => {
    const login = new LoginPage();
    login.visitLoginPage();
    cy.fixture("failed_login.json").then((user) => {
      user.fail_login.forEach((datauser) => {
        login.assertURL();
        login.inputEmail(datauser.email);
        login.inputPassword(datauser.password);
        login.clickButtonLogin();
        cy.wait(1000);
        login.assertLoginFailed(datauser.errorLocator, datauser.errorMessage);
      });
    });
  });
});
