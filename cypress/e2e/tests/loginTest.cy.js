const productPage = require("../pages/Home/productPage");
const LoginPage = require("../pages/Login/LoginPage");


describe('login', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('standard user', () => {

        cy.fixture('userData.json').then((userjson) => {
            LoginPage.loginUser(userjson.standard.username, userjson.standard.password)
            productPage.getHeaderTitle().contains('Product')

        })
    });

    it('locked user', () => {
        cy.fixture('userData.json').then((userjson) => {
            LoginPage.loginUser(userjson.locked.username, userjson.locked.password)
            LoginPage.validateError().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

        })
    });
});