export class OrderConfirmationAlert {

    private get confirmationAlert(): Cypress.Chainable {
        return cy.get('.sweet-alert.showSweetAlert');
    }

    private get confirmationText(): Cypress.Chainable {
        return this.confirmationAlert.find('p.lead');
    }

    private get confirmBtn(): Cypress.Chainable {
        return this.confirmationAlert.find('button.confirm').contains('OK');
    }

    public checkConfirmationAlertWindow(
        name: string,
        cardNumber: string,
        amount: number
    ): this {

        this.confirmationAlert.should('be.visible');
        this.confirmationText.within(() => {
            cy.contains(`Amount: ${amount} USD`);
            cy.contains(`Card Number: ${cardNumber}`);
            cy.contains(`Name: ${name}`);
        });
        return this;
    }

    public confirmPurchase(): this {
        this.confirmBtn.click();
        return this;
    }
}
