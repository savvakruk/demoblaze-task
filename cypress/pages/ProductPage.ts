import { BasePage } from './BasePage';

export class ProductPage extends BasePage { 

    constructor() {
        super('prod.html');
    }

    private get productName(): Cypress.Chainable {
        return cy.get('.name');
    }

    private get addToCartBtn(): Cypress.Chainable {
        return cy.get('a.btn-success').contains('Add to cart')
    }

    public checkProductName(titleProduct: string): this {
        this.productName.contains(titleProduct);
        return this;
    }

    public clickAddToCardButton(): this {
        this.addToCartBtn.click();
        return this;
    }

    public checkAlertWindow(): this {
        cy.on('window:alert', (message) => {
            expect(message).to.contains('Product added');
        });
        return this;
    }

}