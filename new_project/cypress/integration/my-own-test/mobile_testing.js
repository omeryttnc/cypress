///<reference types="cypress"/>
describe('Basic Test', () => {
    it('Every basic element exists', () => {
       cy.visit('http://the-internet.herokuapp.com/')
    })

    it('Every basic element exists on mobile', () => {
        cy.viewport('iphone-x') 
        cy.visit('http://the-internet.herokuapp.com/')
     })
})