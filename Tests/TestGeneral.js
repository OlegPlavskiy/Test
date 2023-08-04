var expect = require('chai').expect;

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit("https://changenow.io/");
        expect(true).to.equal(true)
    })
})