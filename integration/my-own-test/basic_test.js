///<reference types="cypress"/>
describe('Basic Test', () => {
    it('The webpage loads, at least', () => {
        cy.viewport(1280,720) 
        cy.visit('https://test.urbanicfarm.com/')
        
    })
    
    it('Login page looks good', () => {
        cy.viewport(1280,720) 
        cy.wait(4000)
        cy.contains('Login').click()
     })
})