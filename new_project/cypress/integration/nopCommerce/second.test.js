///<reference types="cypress"/>

describe('login func', () => {
    
     it('go to webpage', () => {

        cy.viewport(1280,720) 
        cy.visit('https://www.amazon.co.uk/')
    })
    
    it('search item',()=>{
        cy.viewport(1280,720) 
        cy.get("#twotabsearchtextbox").should('exist')
        cy.get("#twotabsearchtextbox").type('Apple Macbook Pro 13-inch')

        cy.get('#nav-search-submit-button').should('exist')
        cy.get('#nav-search-submit-button').click()

        cy.url().should('include','Apple')
        cy.url().should('include','Macbook')
        cy.url().should('include','Pro')
        cy.url().should('include','13-inch')
    
    })


})