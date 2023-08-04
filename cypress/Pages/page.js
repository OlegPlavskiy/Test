class page{
    elements ={
        startExchange : () => cy.get("button").contains(/^Exchange$/),
        swapButton : () =>  cy.get(".exchange-calculator--swap-button"),
        inputFIO: () => cy.get("#recipientWallet"),
        successfulIcon: () => cy.get(".new-stepper-field__icon-success"),
        nextButton: () =>  cy.get("button").contains("Next"),
        confirmButton: () => cy.get("button").contains("Confirm")
    }

    clickStartExchange(){
        this.elements.startExchange().click()
    }
    clickSwapButton() {
        this.elements.swapButton().click()
    }
    clickNextButton() {
        this.elements.nextButton().click()
    }
    clickConfirmButton() {
        this.elements.confirmButton().click()
    }
    enterFIO(fio){
        this.elements.inputFIO().type(fio)
    }
    checkCorrectFIO(){
        this.elements.successfulIcon().should('be.visible')
    }
}

module.exports = new page();