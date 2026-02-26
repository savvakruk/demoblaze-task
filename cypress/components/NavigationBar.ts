import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';

export class NavigationBar {

    public loginDialog = new LoginDialog();
    public signupDialog = new SignupDialog();

    private get loginBtn(): Cypress.Chainable {
        return cy.get('#login2');
    }

    private get logoutBtn(): Cypress.Chainable {
        return cy.get('#logout2');
    }

    private get signupBtn(): Cypress.Chainable {
        return cy.get('#signin2');
    }

    private get cartPageBtn(): Cypress.Chainable {
        return cy.get('#cartur');
    }

    private get homePageBtn(): Cypress.Chainable {
        return cy.get('.nav-link').contains('Home');
    }

    private get usernameLabel(): Cypress.Chainable {
        return cy.get('#nameofuser');
    }

    public clickOnLogInButton(): this {
        this.loginBtn.click();
        return this;
    }

    public clickOnSignUpButton(): this {
        this.signupBtn.click();
        return this;
    }

    public clickOnCartPageButton(): this {
        this.cartPageBtn.click();
        return this;
    }

    public clickOnHomePageButton(): this {
        this.homePageBtn.click();
        return this;
    }

    public checkUserName(userName: string): this {
        this.usernameLabel.should('have.text', `Welcome ${userName}`);
        return this;
    }

    public clickOnLogOutButton(): this {
        this.logoutBtn.click();
        return this;
    }

    public checkLogInButtonText(): this {
        this.loginBtn.should('have.text', 'Log in');
        return this;
    }
}