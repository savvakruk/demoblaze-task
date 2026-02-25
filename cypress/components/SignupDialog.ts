export class SignupDialog { 
    public get loginTitle(): Cypress.Chainable {
        return cy.get('#signInModalLabel');
    }

    public get usernameInput(): Cypress.Chainable {
        return cy.get('#sign-username');
    }

    public get passwordInput(): Cypress.Chainable {
        return cy.get('#sign-password');
    }

    public get loginBtn(): Cypress.Chainable {
        return cy.get('button').contains('Sign up');
    }
}