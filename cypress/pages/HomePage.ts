import { BasePage } from './BasePage';

export class HomePage extends BasePage { 

    constructor() {
        super('index.html');
    }

    private get productsItemList(): Cypress.Chainable {
        return cy.get('#tbodyid');
    }

    private listCategoriesContainer: string = '.list-group';

    private get categoryButton(): Cypress.Chainable {
        return cy.get(`${this.listCategoriesContainer} [id="itemc"]`);
    }

    public clickOnLaptopsCategoryButton(): this {
        this.categoryButton
            .should('be.visible')
            .contains('Laptops')
            .click();
        return this;
    }

    public clickOnPhonesCategoryButton(): this {
        this.categoryButton
            .should('be.visible')
            .contains('Phones')
            .click();
        return this;
    }

    public clickOnProductItem(name: string): this {
        this.productsItemList
            .should('be.visible')
            .contains(name)
            .click();
        return this;
    }
}

