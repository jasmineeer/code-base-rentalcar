// home_page_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:

const cypress = require("cypress")

// https://on.cypress.io/writing-first-test
describe('The Home Page', () => {
    it('successfully loads', () => {
        cypress.visit('http://localhost:8080')
    })
})