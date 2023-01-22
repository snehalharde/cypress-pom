class productPage {

    elements = {
        header: () => cy.get('.title'),
        item_list: () => cy.get('.inventory_item'),
        item_name: () => cy.get('.inventory_item_name')
    }

    getHeaderTitle() {
        return this.elements.header()
    }

    getProduct_item() {
        return this.elements.item_list()
    }

    get_item_names() {
        this.elements.item_name().each((item, index, list) => {
            // expect(list).to.have.length(6)
            // // Returns the current element from the loop
            // expect(Cypress.$(item).text()).to.eq(labels[index])
            return list

        })
        // return true;

    }

}

module.exports = new productPage()