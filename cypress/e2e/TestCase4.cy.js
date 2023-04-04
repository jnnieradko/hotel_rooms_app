describe('TesstCase3', () => {
  beforeEach(()=>{
    cy.visit('/');
  });
  it('calculates revenue and occupancy correctly', () => {
    cy.get('[data-cy=premium-input]').type('7');
    cy.get('[data-cy=economy-input]').type('1');
    cy.get('[data-cy=calculate-button]').click();
    cy.get('[data-cy=premium-revenue]').should('have.text', 'Premium rooms revenue: 1153 €');
    cy.get('[data-cy=economy-revenue]').should('have.text', 'Economy rooms revenue: 45 €');
    cy.get('[data-cy=total-revenue]').should('have.text', 'Total revenue: 1198 €');
    cy.get('[data-cy=occupied-premium]').should('have.text', 'Occupied Premium rooms: 7');
    cy.get('[data-cy=occupied-economy]').should('have.text', 'Occupied Economy rooms: 1');
  });
})