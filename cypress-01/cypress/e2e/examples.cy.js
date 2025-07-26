describe('Examples Page', () => {
  beforeEach(() => {
    cy.visit('/examples');
  });

  it('zawiera nagłówek "Examples"', () => {
    cy.contains('h1', 'Examples').should('be.visible');
  });

  it('pokazuje przykłady testów', () => {
    cy.get('main').find('section').should('have.length.at.least', 1);
  });
});
