describe('Navbar', () => {
  const navItems = [
    { label: 'Why Cypress?', path: '/' },
    { label: 'Overview', path: '/overview' },
    { label: 'Fundamentals', path: '/fundamentals' },
    { label: 'Forms', path: '/forms' },
    { label: 'Examples', path: '/examples' },
    { label: 'Component', path: '/component' },
    { label: 'Best Practices', path: '/best-practices' },
  ];

  navItems.forEach(({ label, path }) => {
    it(`nawiguje do ${path} po kliknięciu "${label}"`, () => {
      cy.visit('/');
      cy.get('.nav-bar').contains(label).click();
      cy.url().should('include', path);
    });
  });
});
