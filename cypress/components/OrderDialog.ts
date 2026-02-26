import { OrderConfirmationAlert } from "./OrderConfirmationAlert";

export class OrderDialog {

    public orderConfirmationAlert = new OrderConfirmationAlert();

    private get dialog(): Cypress.Chainable {
        return cy.get('#orderModal');
    }

    private get orderTitle(): Cypress.Chainable {
        return cy.get('#orderModalLabel');
    }

    private get orderTotalPrice(): Cypress.Chainable {
        return cy.get('#totalm');
    }

    private get nameInput(): Cypress.Chainable {
        return cy.get('#name');
    }

    private get countryInput(): Cypress.Chainable {
        return cy.get('#country');
    }

    private get cityInput(): Cypress.Chainable {
        return cy.get('#city');
    }

    private get creditCardInput(): Cypress.Chainable {
        return cy.get('#card');
    }

    private get monthInput(): Cypress.Chainable {
        return cy.get('#month');
    }

    private get yearInput(): Cypress.Chainable {
        return cy.get('#year');
    }

    private get purchaseBtn(): Cypress.Chainable {
        return cy.get('button').contains('Purchase');
    }

    public checkOrderDialogIsVisible(): this {
        this.dialog.should('be.visible');
        this.orderTitle.should('contain.text', 'Place order');
        return this;
    }

    public checkOrderTotalPrice(expectedPrice: number): this {
        this.orderTotalPrice.should('have.text', `Total: ${String(expectedPrice)}`);
        return this;
    }

    public fillInOrderForm(
        name: string, 
        country: string, 
        city: string, 
        creditCard: string, 
        month: string, 
        year: string): this {
            
        this.nameInput.click().type(name)
            .should('have.value', name);

        this.countryInput.click().type(country)
            .should('have.value', country);

        this.cityInput.click().type(city)
            .should('have.value', city);

        this.creditCardInput.click().type(creditCard)
            .should('have.value', creditCard);

        this.monthInput.click().type(month)
            .should('have.value', month);

        this.yearInput.click().type(year)
            .should('have.value', year);

        return this;
    }

    public clickPurchaseButton(): this {
        this.purchaseBtn.click();
        return this;
    }

}