/* global Given, Then, When */

import CredenciamentoPage from '../pageobjects/credenciamento.page'
const credenciamentoPage = new CredenciamentoPage


beforeEach(() => {
    cy.restoreLocalStorage();
});



Given(/^desejo realizar o login$/, () => {
    credenciamentoPage.realizarLogin()
});

afterEach(() => {
    cy.saveLocalStorage();
});



Given(/^que eu acesso o página de Credenciamento$/, () => {
    credenciamentoPage.acessarCredenciamento()
});

When(/^inserir os dados da pessoa física$/, () => {
    credenciamentoPage.inserirDados()
});

Then(/^cliente deve estar cadastrado$/, () => {
    credenciamentoPage.confirmaCadastro()
});



Given(/^que eu acesso o página do backoffice$/, () => {
    credenciamentoPage.acessarBackoffice()

});

Given(/^atualizo status do ec para ativo$/, () => {
    credenciamentoPage.atualizarInfo()
});

Given(/^crio a conta bancaria$/, () => {
    credenciamentoPage.inserirConta()
});

When(/^inpersonar o ec$/, () => {
    credenciamentoPage.impersonarEc()
});


Then(/^o parâmetro da CERC deve estar ativo$/, () => {
    credenciamentoPage.ativarCerc()
});



