// cypress -- Spec

describe('MT third test suit',function()
{

    it('MY third test casee',function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        // handle check box
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get('input[type= "checkbox"]').check(['option2','option3'])


        // handle static dropdown 
        cy.get('select').select('option2').should('have.value','option2')


        // dynamic dropdown 

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index,$list) =>{
            if($el.text()==="India"){
                $el.click()
            }
        
        })

        cy.get("#autocomplete").should('have.value','India')

        // radio
        cy.get('[value="radio2"] ').check().should("be.checked")
        // cy.get('input[type="radio"]').check(['radio1', 'radio2'])



        // visiable Invisable

        cy.get("#displayed-text").should('be.visible')
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should('not.be.visible')
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should('be.visible')













    })
})