import { HomePage } from "../pages/HomePage";

export class LoginDialog { 
    public get loginTitle(): Cypress.Chainable {
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

    private fillUsernameInput(name: string): this {
        this.usernameInput
        .should('be.visible')
        .type(name)
        .should('have.value', name);
        return this;
    }

    private fillPasswordInput(password: string): this {
        this.passwordInput
        .should('be.visible')
        .type(password)
        .should('have.value', password);
        return this;
    }

    private clickLoginBtn(): this {
        this.loginBtn.click();
        return this;
    }

    public logInWithCredentials(name: string, password: string): this {
        this.fillUsernameInput(name);
        this.fillPasswordInput(password);
        this.clickLoginBtn();
        return this;
    }
}