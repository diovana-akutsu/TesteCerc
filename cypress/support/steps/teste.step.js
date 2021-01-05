/* global Given, Then, When */

import TestePage from '../pageobjects/teste.page'
const testePage = new TestePage


beforeEach(() => {
    cy.restoreLocalStorage();
});

Given(/^desejo realizar o login$/, () => {
    testePage.realizarLogin()
});

afterEach(() => {
    cy.saveLocalStorage();
});

When(/^impersonar$/, () => {
	testePage.impersonar()
});


Then(/^um arquivo json$/, () => {
	testePage.criarJson()
});

