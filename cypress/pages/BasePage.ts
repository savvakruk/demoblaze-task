export abstract class BasePage {

  protected readonly url: string;

  constructor(url: string) {
    this.url = url;
  }

  visit(): this {
    cy.visit(`${Cypress.env('baseUrl'), this.url}`);
    return this;
  }

  getTitle(): Cypress.Chainable<string> {
    return cy.title();
  }

  waitForPageLoad(): this {
    cy.get('body').should('be.visible');
    cy.location('href').should('include', `${Cypress.env('baseUrl'), this.url}`);
    return this;
  }
}