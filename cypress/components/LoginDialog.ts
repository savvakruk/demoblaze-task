export class LoginDialog { 

    private get dialog(): Cypress.Chainable {
        return cy.get('#logInModal');
    }

    private get loginTitle(): Cypress.Chainable {
        return cy.get('#logInModalLabel');
    }

    private get usernameInput(): Cypress.Chainable {
        return cy.get('#loginusername');
    }

    private get passwordInput(): Cypress.Chainable {
        return cy.get('#loginpassword');
    }

    private get loginBtn(): Cypress.Chainable {
        return cy.get('button').contains('Log in');
    }

    public checkLoginDialogIsVisible(): this {
        this.dialog.should('be.visible');
        this.loginTitle.should('contain.text', 'Log in');
        return this;
    }

    public logInWithCredentials(name: string, password: string): this {
        this.usernameInput.click().type(name)
        .should('have.value', name);

        this.passwordInput.click().type(password)
        .should('have.value', password);
        
        this.loginBtn.click();
        return this;
    }
}