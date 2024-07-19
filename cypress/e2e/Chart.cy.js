const { createChartInArtBoard } = require("../support/pageObjects/chartPage")
const { addArtBoard } = require("../support/pageObjects/commonPage")

describe('Charts - ', () => {
  before(()=>{

    cy.visit('/webstudio')
  })
  it('verify user is able to drop a Chart element inside a stack container', () => {

    addArtBoard();

    createChartInArtBoard();
  })
})