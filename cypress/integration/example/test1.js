

describe('My first Test Suite', function(){

    it('My first test case', function(){
        // test step
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product').should('have.length', 5)
    cy.get('.product:visible').should('have.length', 4)

    // Parent child chaining
    cy.get('.products').as('productlocater')
    

    cy.get('@productlocater').find('.product').should('have.length',4)

    cy.get(':nth-child(3) > .product-action > button').click()
    cy.get(':nth-child(2) > .product-action > button').click()
    cy.get('@productlocater').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('@productlocater').find('.product').each(($el, index, $list) => {

       const textVeg = $el.find('h4.product-name').text()

       if (textVeg.includes('Cashews'))
       {
       $el.find('button').click()
       }
    })
    //assert if logo tet is correctly display
    cy.get('.brand').should('have.text','GREENKART')

    // This is to print in logo
    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    })

    // cy.log(cy.get('.brand').text)
    // cy.log(logo.text())






    })

    // it('My Second test case',function(){

    // })

} )