///<reference types="cypress"/>

describe('MyTestSuite',function(){

it('verify title of the page-positive',function(){
cy.visit('https://www.nopcommerce.com/en')
cy.title().should('eq','Free and open-source eCommerce platform. ASP.NET based shopping cart. - nopCommerce')

})
it('verify title of the page-negative',function(){
cy.visit('https://www.nopcommerce.com/en')
cy.title().should('eq','nopCommerce')

})



})

