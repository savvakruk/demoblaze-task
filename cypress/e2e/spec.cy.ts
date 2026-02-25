import { HomePage } from '../pages/HomePage';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Login and Logout for existing user', () => {
        const homePage: HomePage = new HomePage();
        const { name, password } = { name: Cypress.env('username'), password: Cypress.env('password')};

        homePage
            .visit()
            .waitForPageLoad()
            .navigationBar.clickOnLogInButton()
            .loginDialog.logInWithCredentials(name, password)

        homePage.navigationBar
            .checkUserName(name)
            .clickOnLogOutButton()

        homePage
            .waitForPageLoad()
            .navigationBar.checkLogInButton();
  });
})