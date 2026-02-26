import { OrderDialog } from '../components/OrderDialog';
import { BasePage } from './BasePage';

export class CartPage extends BasePage { 

    public orderDialog: OrderDialog = new OrderDialog();

    constructor() {
        super('cart.html');
    }

    private get rows(): Cypress.Chainable {
        return cy.get('#tbodyid tr');
    }

    private getRow(productName: string): Cypress.Chainable {
        return this.rows.contains('td', productName).parent('tr');
    }

    private get totalCartPrice(): Cypress.Chainable {
        return cy.get('#totalp');
    }

    private get placeOrderBtn(): Cypress.Chainable {
        return cy.get('.btn-success').contains('Place Order')
    }

    public placeOrder(): this {
        this.placeOrderBtn.click();
        return this;
    }

    public checkTotalCartPrice(expectedPrice: number): this {
        this.totalCartPrice.should('have.text', String(expectedPrice));
        return this;
    }

    public shouldContainProduct(productName: string, expectedPrice: number): this {
        this.getRow(productName).find('td').eq(2).should('have.text', String(expectedPrice));
        return this;
    }

    public deleteProduct(productName: string): this {
        this.getRow(productName).first().contains('a', 'Delete').click();
        return this;
    }

    public shouldHaveProductCount(count: number): this {
        this.rows.should('have.length', count);
        return this;
    }
}