///<reference types="cypress"/>

describe('login functionality', () => {
    
     it('go to webpage', () => {

        
        cy.viewport('macbook-16') 
        cy.visit('https://test.urbanicfarm.com/auth/login')
        cy.wait(6000)

    })
    
    it('search item',()=>{
        cy.viewport('macbook-16') 
        cy.get("[name='email']").should('exist')
        cy.get("[name='email']").type("alici_mail@mailsac.com")
        
        cy.get("[name='password']").should('exist')
        cy.get("[name='password']").type("3AJygjifmqYcjv5")


        cy.get("[type='submit']").click()

    
    })


})