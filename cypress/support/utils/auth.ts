export function skipLogin(
    testFn: () => void,
    username = Cypress.env('username'),
    password = Cypress.env('password')
): () => void {
    return () => {
        cy.request('POST', 'https://api.demoblaze.com/login', {
            username,
            password: btoa(password),
        }).then((response) => {
            const token = response.body.replace('Auth_token: ', '');
            cy.setCookie('tokenp_', token);
            window.localStorage.setItem('tokenp_', token);
        });

        testFn();
    };
}

export function skipSignup(
    testFn: () => void,
    username = Cypress.env('username'),
    password = Cypress.env('password')
): () => void {
    return () => {
        cy.request('POST', 'https://api.demoblaze.com/signup', {
            username,
            password: btoa(password),
        }).then((response) => {
            const token = response.body.replace('Auth_token: ', '');
            cy.setCookie('tokenp_', token);
            window.localStorage.setItem('tokenp_', token);
        });

        testFn();
    };
}

