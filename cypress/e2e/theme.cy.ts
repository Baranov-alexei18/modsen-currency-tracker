describe('Testing application changes theme', () => {
  it('The aplication theme should be changed correctly on desctop', () => {
    cy.visit('/');
    cy.get('[data-testid="main-layout"]').should('have.class', 'src-assets-style-theme__theme_dark');
    cy.get('[data-testid="switch-theme"]').click();

    cy.get('[data-testid="main-layout"]').should('have.class', 'src-assets-style-theme__theme_light');
    cy.get('[data-testid="switch-theme"]').click();

    cy.get('[data-testid="main-layout"]').should('have.class', 'src-assets-style-theme__theme_dark');
    cy.get('[data-testid="switch-theme-mobile"]').click({ force: true });

    cy.get('[data-testid="main-layout"]').should('have.class', 'src-assets-style-theme__theme_light');
    cy.get('[data-testid="switch-theme-mobile"]').click({ force: true });
  });
});
