describe('Login form – test with alias and form submission', () => {
  beforeEach(() => {
    // Odwiedzamy przykładową stronę z formularzem (demo od Cypress)
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('Wysyła formularz i sprawdza URL', () => {
    // Znajdujemy formularz na stronie i zapisujemy go pod aliasem @form
    cy.get('.action-form').as('form');

    // Znajdujemy pole email i przypisujemy alias
    cy.get('.action-email').as('emailInput');
    cy.get('@emailInput').type('tester@example.com');

    // Znajdujemy pole hasła i przypisujemy alias
    cy.get('.action-password').as('passwordInput');
    cy.get('@passwordInput').type('Haslo123!');

    // Wysłanie formularza (czyli symulacja kliknięcia "submit")
    cy.get('@form').submit(); // <--- Tu właśnie wysyłamy formularz

    // Sprawdzenie (assertion), czy adres strony po submit zawiera oczekiwany fragment
    cy.url().should('include', 'commands/actions');
    // ^^^ Upewniamy się, że zostaliśmy na tej samej stronie (czyli nie było błędu)
  });
});
