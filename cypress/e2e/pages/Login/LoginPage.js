class loginPage{

    elements = {
        username: ()=> cy.get('#user-name'),
        password: ()=> cy.get('#password'),
        login_button: ()=>  cy.get('#login-button'),
        errorText: ()=> cy.get('div.error-message-container.error h3')
    }


    loginUser(username, password){
        this.elements.username().type(username)
        this.elements.password().type(password)
        this.elements.login_button().click()
    }

    validateError(){
        return this.elements.errorText()
    }

}

module.exports = new loginPage();