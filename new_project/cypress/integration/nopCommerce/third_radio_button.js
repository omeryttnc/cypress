///<reference types="cypress"/>

describe('login functionality', () => {

    it('go to webpage', () => {


        cy.viewport('macbook-16')
        cy.visit('http://demo.guru99.com/test/newtours/')
        cy.url().should('include', 'guru')

        cy.get("[name='userName']").should('be.visible').should('be.enabled').type('mercury')
        cy.get("[name='password']").should('be.visible').should('be.enabled').type('mercury')
        
        
        cy.get("[name='submit']").should('be.visible').click()

        cy.url().should('include','login_sucess')               //url verification

        cy.title().should('eq','Login: Mercury Tours')          //title verification

        cy.contains('Flights').click()


        //Radio buttons
        cy.get("[value='oneway']").should('be.visible').should('not.be.checked')
        cy.get("[value='roundtrip']").should('be.visible').should('be.checked')
        
        cy.get("[value='oneway']").click()
        
        cy.get("[value='oneway']").should('be.visible').should('be.checked')
        cy.get("[value='roundtrip']").should('be.visible').should('not.be.checked')
        

    })



    

    
})