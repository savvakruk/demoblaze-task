import { NavigationBar } from '../components/NavigationBar';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { skipLogin, skipSignup } from '../support/utils/auth';
import { generateUsername } from '../support/utils/random';

describe('Purchase products flow tests spec', () => {
    const name = Cypress.env('username');
    const password = Cypress.env('password');

    it('Add laptop to cart and complete order', skipSignup(() => {
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
            .clickOnCartPageButton();

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

    }, generateUsername(), password));


    it('Add products, delete, count total amount', skipLogin(() => {
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const navigationBar = new NavigationBar();
        const cartPage = new CartPage();

        homePage
            .visit()
            .waitForPageLoad()
            .clickOnPhonesCategoryButton()
            .clickOnProductItem('Nexus 6');

        productPage
            .waitForPageLoad()
            .checkProductName('Nexus 6')
            .clickAddToCardButton()

        navigationBar
            .clickOnHomePageButton();

        homePage
            .waitForPageLoad()
            .clickOnLaptopsCategoryButton()
            .clickOnProductItem('MacBook air');

        productPage
            .waitForPageLoad()
            .checkProductName('MacBook air')
            .clickAddToCardButton()

        navigationBar
            .clickOnCartPageButton();

        cartPage
            .waitForPageLoad()
            .checkTotalCartPrice(1350)
            .shouldHaveProductCount(2)
            .deleteProduct('Nexus 6')
            .checkTotalCartPrice(700)
            .shouldHaveProductCount(1)
            .deleteProduct('MacBook air')
            .shouldHaveProductCount(0);

    }, name, password));
    
});