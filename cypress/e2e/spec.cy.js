import page from '../Pages/page'

describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://changenow.io/');
    page.clickStartExchange()
    page.clickSwapButton()
    page.enterFIO("1N4Qbzg6LSXUXyXu2MDuGfzxwMA7do8AyL")
    page.checkCorrectFIO()
    page.clickNextButton()
    page.clickConfirmButton()
  })
})