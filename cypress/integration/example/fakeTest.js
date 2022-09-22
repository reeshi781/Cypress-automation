/// <reference types ="Cypress" />

describe('My Mocking Http request Test',function(){

    it('my MOcking test case',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept({
            // Request Object

            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        },
        {
            // Responce object
            statusCode : 200,
            body :[{
                    "book_name" : "RestAssured with java",
                    "isbn" : "RSU",
                    "aisle": "2301"
                }]
        }).as('bookretrievals')
        cy.get('.btn-primary').click()
        cy.wait('@bookretrievals').should(({request, response}) =>{
            cy.get('tr').should('have.length',response.body.length+1)
        } )



        cy.get('p').should('have.text','Oops only 1 Book available')






    })
})