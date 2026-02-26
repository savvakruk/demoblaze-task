export class SignupDialog {

    private get dialog(): Cypress.Chainable {
        return cy.get('#signInModal');
    }

    private get loginTitle(): Cypress.Chainable {
        return cy.get('#signInModalLabel');
    }

    private get usernameInput(): Cypress.Chainable {
        return cy.get('#sign-username');
    }

    private get passwordInput(): Cypress.Chainable {
        return cy.get('#sign-password');
    }

    private get loginBtn(): Cypress.Chainable {
        return cy.get('button').contains('Sign up');
    }

    public checkSignupDialogIsVisible(): this {
        this.dialog.should('be.visible');
        this.loginTitle.should('contain.text', 'Sign up');
        return this;
    }

    public signUpWithCredentials(name: string, password: string): this {
        this.usernameInput.click().type(name)
        .should('have.value', name);

        this.passwordInput.click().type(password)
        .should('have.value', password);
        
        this.loginBtn.click();
        return this;
    }

    public checkAlertWindow(): this {
        cy.on('window:alert', (message) => {
            expect(message).to.contains('Sign up successful');
        });
        return this;
    }
}