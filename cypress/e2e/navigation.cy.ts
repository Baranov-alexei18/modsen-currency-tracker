describe('Testing application navigation', () => {
  it('Should load the Home page', () => {
    cy.visit('/');
  });

  it('Should load the Timeline page if click on a "Timeline" (navigation element)', () => {
    cy.visit('/');

    cy.get('a').contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('Should load the Bank card page if click on a "Bank card" (navigation element)', () => {
    cy.visit('/');

    cy.get('a').contains('Bank card').click();
    cy.url().should('include', '/bank-card');
  });

  it('Should load the Contact page if click on a "Contact" (navigation element)', () => {
    cy.visit('/');

    cy.get('a').contains('Contact').click();
    cy.url().should('include', '/contact');
  });

  it('Should load the Home page if click on a "Home" (navigation element)', () => {
    cy.visit('/contact');

    cy.get('a').contains('Home').click();
    cy.url().should('include', '/');
  });

  it('If the path does not exist, there should be a "Not found page"', () => {
    cy.visit('/non404');

    cy.get('h1').should('contain', 'Page not found');
    cy.get('button').should('contain', 'Return to Home');
  });
});
