/// <reference types="cypress" />
describe('DEMO ECOMMERECE WEB API', () => {

    it('Search  Case ', () => {

     cy.visit("https://demo.nopcommerce.com/") // Open URL 
     cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch") // search items
     cy.get(".button-1.search-box-button").click() // Click Search Buttons 
     cy.get(".button-2.product-box-add-to-cart-button").click()
     cy.get("#add-to-cart-button-4").click()
     cy.wait(5000)
     cy.get("#topcartlink > a > span.cart-label").click() // go to cart page

    cy.wait(3000)

    cy.get(".product-unit-price").contains('$1,800.00')  // validate point
    cy.get(".remove-btn").click() // Remoe from Cart

    cy.go('back')
    cy.go('back')
    cy.wait(2000)
    cy.get("#small-searchterms").type("HTC One M8 Android L 5.0 Lollipop") // search items
    cy.get(".button-1.search-box-button").click() // Click Search Buttons 
    cy.wait(2000)
    cy.get(".button-2.add-to-wishlist-button").click()
    cy.get(".ico-wishlist > span.wishlist-label").click()
    cy.get(".button-2.wishlist-add-to-cart-button").click()
    cy.wait(3000)
    cy.get('[type="checkbox"]').check({force: true})
    cy.get(".button-2.wishlist-add-to-cart-button").click()
    cy.wait(2000)
    cy.get('#termsofservice[type="checkbox"]').check({force: true})
    cy.get(".button-1.checkout-button").click()
    cy.wait(5000)
    })

    it("Book Type ",()=> {
      cy.visit("https://demo.nopcommerce.com/books")
      cy.get(".button-2.product-box-add-to-cart-button").eq(1).click()
      cy.get("#topcartlink > a > span.cart-label").click() 
      cy.wait(2000)
      cy.get('#termsofservice[type="checkbox"]').check({force: true})
      cy.get(".button-1.checkout-button").click()
      cy.wait(5000)
    })

    it("Newsletter Subscribe",()=>{
      cy.visit("https://demo.nopcommerce.com/")
      cy.get("#newsletter-email").type("realvk4n@gmail.com")
      cy.get("#newsletter-subscribe-button").click()
    })
  })
