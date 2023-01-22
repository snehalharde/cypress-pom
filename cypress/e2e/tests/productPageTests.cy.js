const productPage = require("../pages/Home/productPage");

describe('product page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login("standard_user", "secret_sauce")
    });
    it('product item list count', () => {

        productPage.getProduct_item().should('have.length', 6)
    });

    it('product item names validate', () => {
        const texts = productPage.get_item_names()

        expect(texts).to.deep.members.name.includes(["Sauce Labs Backpack", "Sauce Labs Bike Light", "Sauce Labs Bolt T-Shirt",
            "Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"])

    });

});