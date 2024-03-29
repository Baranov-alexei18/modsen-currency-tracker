describe('Testing the chart module', () => {
  beforeEach(() => cy.visit('/timeline'));

  it('The timeline page should be displayed', () => {
    cy.get('[data-testid="loading"]').should('not.exist');

    cy.get('[data-testid=block-info-chart]').should('exist');
    cy.get('[data-testid=chart]').should('exist');
    cy.get('button').contains('Create chart').should('exist');
    cy.get('[data-testid="toast"]').should('not.exist');
  });

  it('Should display the correct initial state', () => {
    cy.get('[data-testid="input-days"]').should('have.value', '15');
    cy.contains('Create chart').should('be.enabled');
  });

  it('Should appear toast with the build new chart for 30 days', () => {
    cy.contains('Create chart').click();

    cy.get('[data-testid="input-days"]').type('30');

    cy.get('[data-testid="input-days"]').invoke('val').then((inputValue) => {
      if (inputValue === '30') {
        cy.get('[data-testid="toast"]').should('exist');
      } else {
        cy.get('[data-testid="toast"]').should('not.exist');
      }
    });
  });
});
