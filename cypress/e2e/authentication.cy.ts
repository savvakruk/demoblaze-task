import { NavigationBar } from '../components/NavigationBar';
import { HomePage } from '../pages/HomePage';
import { generateUsername } from '../support/utils/random';

describe('Authentication flow tests spec', () => {

    it('Login and logout existing user', () => {
        const homePage: HomePage = new HomePage();
        const navigationBar: NavigationBar = new NavigationBar();

        const name = Cypress.env('username');
        const password = Cypress.env('password');

        homePage
            .visit()
            .waitForPageLoad()

        navigationBar
            .clickOnLogInButton()
            .loginDialog.checkLoginDialogIsVisible()
            .logInWithCredentials(name, password)

        navigationBar
            .checkUserName(name)
            .clickOnLogOutButton()
            .checkLogInButtonText();
    });


    it('Register new user', () => {
        const homePage: HomePage = new HomePage();
        const navigationBar: NavigationBar = new NavigationBar();

        const name = generateUsername();
        const password = Cypress.env('password');

        homePage
            .visit()
            .waitForPageLoad()

        navigationBar
            .clickOnSignUpButton()
            .signupDialog.checkSignupDialogIsVisible()
            .signUpWithCredentials(name, password)
            .checkSuccessAlertWindow();

        navigationBar
            .clickOnLogInButton()
            .loginDialog.checkLoginDialogIsVisible()
            .logInWithCredentials(name, password)

        navigationBar
            .checkUserName(name)
    });

    
    it('Fail to register new user with existing username', () => {
        const homePage: HomePage = new HomePage();
        const navigationBar: NavigationBar = new NavigationBar();

        const name = Cypress.env('username');
        const password = Cypress.env('password');

        homePage
            .visit()
            .waitForPageLoad()

        navigationBar
            .clickOnSignUpButton()
            .signupDialog.checkSignupDialogIsVisible()
            .signUpWithCredentials(name, password)
            .checkErrorAlertWindow();
    });

})