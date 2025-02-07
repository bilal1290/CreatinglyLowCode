const { createChartInArtBoard, stretchToChartInArtBoard, deleteArtBoard } = require("../support/pageObjects/chartPage")
const { addArtBoard } = require("../support/pageObjects/commonPage")

describe('Charts - ', () => {
  before(()=>{

    cy.visit('/webstudio',{timeout:100000})

    //Commenting below as I got captcha automation blocker with cypress as captcha is used to detect bot
    // cy.loginWithUI(Cypress.env('userId'),Cypress.env('password'))

  })
  after(()=>{
    deleteArtBoard()
  })
  it('verify user is able to drop a Chart element inside a stack container', () => {

    addArtBoard();

    createChartInArtBoard();
    stretchToChartInArtBoard()

  })
})