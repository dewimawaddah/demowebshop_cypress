class LoginPage {
  path = `${Cypress.env("demowebshop_url")}/login`;

  locator = {
    emailInput: "#Email",
    passwordInput: "#Password",
    loginButton: "form > .buttons > .button-1",

    assertSuccessLogin: ".header-links > ul > :nth-child(1) > .account",
    logoutButton: ".ico-logout",
  };

  visitLoginPage() {
    cy.visit(this.path);
  }

  inputEmail(email) {
    cy.input(this.locator.emailInput, email);
  }

  inputPassword(password) {
    cy.input(this.locator.passwordInput, password);
  }

  clickButtonLogin() {
    cy.get(this.locator.loginButton).click();
  }

  clickButtonLogout() {
    cy.get(this.locator.logoutButton).click();
  }

  assertLoginSuccess(email) {
    cy.validateText(this.locator.assertSuccessLogin, email);
  }

  assertURL() {
    cy.url().should("include", "/login");
  }

  assertLoginFailed(errorLocator, errorMessage) {
    cy.validateText(errorLocator, errorMessage);
  }
}

export default LoginPage;
