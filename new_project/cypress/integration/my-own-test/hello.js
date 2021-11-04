///<reference types="cypress"/>
describe('Empty Test',()=>{
    it('test one',()=>{
        //throw new Error('oops')
        cy.visit('http://the-internet.herokuapp.com/')
        cy.contains('Welcome to the-internet').should('exist')

        //ikiside ayni
      /*
        cy.get('div#root').should('exist') 
        cy.get('div[id=root]').should('exist')




        // 3 way to create WebElement son method daha uygun  
        cy.contains('Start Learning')

        cy.get('.asyncComponent > div > a')

        cy.get('[data-testid=learnbtn]')
        */
    })
})





