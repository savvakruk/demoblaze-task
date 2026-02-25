import { BasePage } from './BasePage';
import { NavigationBar } from '../components/NavigationBar';

export class HomePage extends BasePage{ 

    public navigationBar: NavigationBar = new NavigationBar();

    constructor() {
        super('index.html');
    }

    public get productsContainer(): Cypress.Chainable {
        return cy.get('#contcont');
    }
}

