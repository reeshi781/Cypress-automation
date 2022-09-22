// cypress -- Spec

import HomePage from '../../support/pageObject/homePage'


describe('My framework test suite',function(){

    before(function(){
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data
            // this.data = data

        })

    })


    it('My framework test case ',function(){
        const homePage = new HomePage()



        cy.visit(Cypress.env('url'))



        // cy.get(':nth-child(1) > .form-control').type(this.data.name)
        homePage.getEditBox().type(this.data.name)
        // cy.get('select').select(this.data.gender)
        homePage.getGender().select(this.data.gender)
        // cy.get(':nth-child(4) > .ng-pristine').should('have.value',this.data.name)
        homePage.getTowWayDataFinding().should('have.value',this.data.name)
        // cy.get('input[name= "name"]:nth-child(2)').should('have.attr','minlength','2')
        homePage.getEditBox().should('have.attr','minlength','2')
        // cy.get('#inlineRadio3').should('be.disabled')
        homePage.getEntrepreneaur().should('be.disabled')

        // cy.get(':nth-child(2) > .nav-link').click()
        homePage.getShopTab().click()


        this.data.productName.forEach(function(element) {
 
            cy.selectProduct(element)
          });

          cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
          

          var sum =0
          cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{
            const amount=$el.text()
            var res= amount.split(" ")
           res= res[1].trim()
           sum= Number(sum)+Number(res)
        
          }).then(function(){
            cy.log(sum)

          })

          cy.get('h3 strong').then(function(element)
{
    const amount=element.text()
    var res= amount.split(" ")
   var total= res[1].trim()
   expect(Number(total)).to.equal(sum)

})
         
         
          cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
          cy.get('#country').type('India')
          cy.get('.suggestions > ul > li > a').click()
          cy.get('.checkbox > label').click({force: true})
          cy.get('.ng-untouched > .btn').click()
        //   cy.get('.alert').should('have.text','Thank you! Your order will be delivered in next few weeks :-). ')

        cy.get('.alert').then(function(element)
        {
            const actualText=element.text()
          expect(actualText.includes("Success")).to.be.true
        })
      
    


        


    })
})