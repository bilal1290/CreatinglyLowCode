export function createChartInArtBoard() {
  cy.get('div[name="Desktop Template1"]').should("be.visible").click();

  cy.get('[data-testid="Chart"]').realHover('mouse')

//   cy.get('[data-testid="Bar Chart"]').should('be.visible')
cy.get('[data-testid="Bar Chart"]').should('be.visible').first().realClick()
}
