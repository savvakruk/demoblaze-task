import { NavigationBar } from '../components/NavigationBar';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { skipLogin, skipSignup } from '../support/utils/auth';
import { generateUsername } from '../support/utils/random';

describe('Purchase flow tests spec', () => {
    const name = Cypress.env('username');
    const password = Cypress.env('password');

    it('Add laptop to cart and complete order', skipLogin(() => {
        const homePage = new HomePage();

        homePage
            .visit()
            .waitForPageLoad()
            .clickOnLaptopsCategoryButton()
            .clickOnProductItem('Sony vaio i5');

        const productPage = new ProductPage();

        productPage
            .waitForPageLoad()
            .checkProductName('Sony vaio i5')
            .clickAddToCardButton()
            .checkAlertWindow();

        const navigationBar = new NavigationBar();

        navigationBar
            .clickOnCartButton();

        const cartPage = new CartPage();

        cartPage
            .waitForPageLoad()
            .shouldContainProduct('Sony vaio i5', 790)
            .checkTotalCartPrice(790)
            .placeOrder()
            .orderDialog.checkOrderDialogIsVisible()
            .checkOrderTotalPrice(790)
            .fillInOrderForm('Savva Kruk', 'Germany', 'Berlin', '1234 5678 9012 3456', '02', '2026')
            .clickPurchaseButton()
            .orderConfirmationAlert.checkConfirmationAlertWindow('Savva Kruk', '1234 5678 9012 3456', 790);

    }, name, password));

    it('Add three products copies to cart, delete one, check cart total price', skipSignup(() => {
        const homePage = new HomePage();

        homePage
            .visit()
            .waitForPageLoad()
            .clickOnPhonesCategoryButton()
            .clickOnProductItem('Nexus 6');

        const productPage = new ProductPage();

        productPage
            .waitForPageLoad()
            .checkProductName('Nexus 6')
            .clickAddToCardButton()
            .checkAlertWindow()
            .clickAddToCardButton()
            .checkAlertWindow()
            .clickAddToCardButton()
            .checkAlertWindow()

        const navigationBar = new NavigationBar();

        navigationBar
            .clickOnCartButton();

        const cartPage = new CartPage();

        cartPage
            .waitForPageLoad()
            .checkTotalCartPrice(1950)
            .deleteProduct('Nexus 6')
            .checkTotalCartPrice(1300)
            .deleteProduct('Nexus 6')
            .checkTotalCartPrice(650)

    }, generateUsername(), password));
});