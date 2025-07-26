describe('Overview Page', () => {
  beforeEach(() => {
    cy.visit('/overview');
  });

  it('zawiera nagłówek "Overview"', () => {
    cy.contains('h1', 'Overview').should('be.visible');
  });

  it('ładuje zawartość strony', () => {
    cy.get('main').should('be.visible');
  });
});
