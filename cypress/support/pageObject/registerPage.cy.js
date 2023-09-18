class RegisterPage {
  path = `${Cypress.env("demowebshop_url")}/register`;

  locator = {
    genderRadioButton: "#gender-female",
    firstnameInput: "#FirstName",
    lastnameInput: "#LastName",
    emailInput: "#Email",
    passwordInput: "#Password",
    confirmPasswordInput: "#ConfirmPassword",
    registerButton: "#register-button",

    assertSuccesRegister: ".result",
  };

  visitRegisterPage() {
    cy.visit(this.path);
  }

  selectGender() {
    cy.get(this.locator.genderRadioButton).click();
  }

  inputFirstname(firstname) {
    cy.input(this.locator.firstnameInput, firstname);
  }

  inputLastname(lastname) {
    cy.input(this.locator.lastnameInput, lastname);
  }

  inputEmail(email) {
    cy.input(this.locator.emailInput, email);
  }

  inputPassword(password) {
    cy.input(this.locator.passwordInput, password);
  }

  inputConfirmPassword(confirmPassword) {
    cy.input(this.locator.confirmPasswordInput, confirmPassword);
  }

  clickRegisterButton() {
    cy.get(this.locator.registerButton).click();
  }

  assertURL() {
    cy.url().should("include", "/register");
  }

  assertTextSuccess() {
    cy.get(this.locator.assertSuccesRegister).should(
      "contain.text",
      "Your registration completed"
    );
  }

  assertRegisterFailed(errorLocator, errorMessage) {
    cy.validateText(errorLocator, errorMessage);
  }
}

export default RegisterPage;
