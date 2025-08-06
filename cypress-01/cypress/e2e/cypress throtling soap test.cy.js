describe('Throttling handling test', () => {
  it('should retry request after receiving 429 Too Many Requests', () => {
    let retryCount = 0;

    cy.intercept('GET', '/api/data', (req) => {
      retryCount++;
      if (retryCount === 1) {
        // Pierwsza odpowiedź: 429 Too Many Requests (symulacja throttlingu)
        req.reply({
          statusCode: 429,
          body: { message: 'Too Many Requests' },
          headers: { 'Retry-After': '1' }, // opcjonalnie nagłówek informujący, kiedy próbować ponownie
        });
      } else {
        // Kolejne odpowiedzi: 200 OK z danymi
        req.reply({
          statusCode: 200,
          body: { data: 'Dane po retry' },
        });
      }
    }).as('getData');

    cy.visit('/');  // lub strona, która wywołuje zapytanie do /api/data

    // Czekamy na zapytanie i sprawdzamy, czy po błędzie 429 aplikacja dostała poprawną odpowiedź
    cy.wait('@getData').then((interception) => {
      if (interception.response.statusCode === 429) {
        // Tutaj testujemy, czy aplikacja ma mechanizm retry - możemy poczekać i ponownie sprawdzić
        cy.wait(1500);  // czekamy trochę więcej niż 'Retry-After'
        cy.wait('@getData').its('response.statusCode').should('eq', 200);
      } else {
        // Od razu 200 OK
        expect(interception.response.statusCode).to.eq(200);
      }
    });

    // Możesz też dodać asercje, które sprawdzą, czy UI odpowiednio reaguje (np. pokazuje komunikat o błędzie)
  });
});
