// cypess sepec

describe('My 6th test suit',function(){
    it('my 6th test case ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')


        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')







    })
})