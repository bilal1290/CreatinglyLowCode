export function createChartInArtBoard() {
	cy.get('div[name="Desktop Template1"]').should('be.visible').click()
	cy.get('div[data-testid="Chart"]').invoke('show');
	cy.get('div[data-testid="Chart"]').trigger('mouseover');
    cy.get('div[data-testid="Chart"]').trigger('mousemove');
    cy.get('div[data-testid="Chart"]').trigger('mouseenter');

}


  