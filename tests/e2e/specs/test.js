// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


  it('the number buttons should update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '24')
  })

  it('has working operator buttons', () => {
    cy.get('#number2').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '18')
  })

  it('the chains multiple operations together', () => {
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator_subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display negative numbers correctly', () => {
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
  })

  it('should display decimals correctly', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number2').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4.5')
  })


  it('should correctly display very large numbers', () => {
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '877462558000')
  })

  it('should display Not a Number when the number is divided by 0', () => {
    cy.get('#number9').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', 'Not a Number')
  })







})
