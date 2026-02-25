// import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { LoginDialog } from './LoginDialog';
import { SignupDialog } from './SignupDialog';

export class NavigationBar {

    public loginDialog: LoginDialog = new LoginDialog();
    public signupDialog: SignupDialog = new SignupDialog();

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

    // public clickOnCartButton(): CartPage {
    //     this.cartPageBtn.click();
    //     return new CartPage();
    // }

    public clickOnHomePageButton(): HomePage {
        this.homePageBtn.click();
        return new HomePage();
    }

    public checkUserName(userName: string): this {
        this.usernameLabel.should('have.text', `Welcome ${userName}`);
        return this;
    }

    public clickOnLogOutButton(): this {
        this.logoutBtn.click();
        return this;
    }

    public checkLogInButton(): this {
        this.loginBtn.should('have.text', 'Log in');
        return this;
    }
}