// cypress/e2e/forms.cy.js

describe('Form tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('should handle subscribe form correctly', () => {
    
    cy.contains(/testing forms/i);

    
    cy.getDataTest('subscribe-form')
      .find('input')
      .as('subscribeInput');

    
    cy.get('@subscribeInput').clear().type('ryan@coderyan.com');
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('exist');
    cy.wait(3000);
    cy.contains(/Successfully subbed: ryan@coderyan.com!/i).should('not.exist');

   
    cy.get('@subscribeInput').clear().type('ryan@coderyan.io');
    cy.contains(/invalid email: ryan@coderyan.io!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/invalid email: ryan@coderyan.io!/i).should('exist');
    cy.wait(3000);
    cy.contains(/invalid email: ryan@coderyan.io!/i).should('not.exist');

   
    cy.get('@subscribeInput').clear();
    cy.contains(/fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/fail!/i).should('exist');
  });
});
