/// <reference types="cypress" />

describe('REST API Test z cy.intercept', () => {

  beforeEach(() => {
    // Mockujemy odpowiedź dla GET /api/users
    cy.intercept('GET', '/api/users', {
      statusCode: 200,
      body: [
        { id: 1, name: 'Ala' },
        { id: 2, name: 'Bartek' }
      ]
    }).as('getUsers')
  })

  it('Sprawdza, czy API zwraca poprawną listę użytkowników', () => {
    // Wywołanie faktycznego endpointu (może to być stub)
    cy.request('/api/users').then((response) => {
      // Sprawdzenie statusu odpowiedzi
      expect(response.status).to.eq(200)

      // Sprawdzenie zawartości body
      expect(response.body).to.have.length(2)
      expect(response.body[0]).to.have.property('name', 'Ala')
      expect(response.body[1]).to.have.property('name', 'Bartek')
    })

    // Opcjonalnie możemy czekać na przechwycony request
    cy.wait('@getUsers')
  })

})
