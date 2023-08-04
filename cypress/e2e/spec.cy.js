import page from '../Pages/page'

describe('Automation exchange', () => {
  it('Exchange ETH to BTC', () => {

    cy.visit('https://changenow.io/');
    page.clickStartExchange()
    page.clickSwapButton()
    page.enterFIO("1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL")
    page.checkCorrectFIO()
    page.clickNextButton()
    page.clickConfirmButton()
  })
})
