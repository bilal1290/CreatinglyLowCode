

export function createChartInArtBoard() {
  cy.get('div[name="Desktop Template1"]').should("be.visible").click();

  cy.get('[data-testid="Chart"]').realHover('mouse')

//   cy.get('[data-testid="Bar Chart"]').should('be.visible')
cy.get('[data-testid="Bar Chart"]').should('be.visible').first().realClick()
}

export function stretchToChartInArtBoard(){
  cy.get('button.btn span').contains('Stretch vertically').should('be.visible').click({force:true})
  cy.get('button.btn span').contains('Stretch horizontally').should('be.visible').click({force:true})
}

export function deleteArtBoard(){
  cy.get('div[name="Artboard Deletion"]').should('be.visible').click()
  cy.get('div.notiflix-confirm-buttons a.confirm-button-ok').should('be.visible').click()
}
