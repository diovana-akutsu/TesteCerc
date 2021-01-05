/// <reference types="Cypress" />

import LinkDePagamentoElements from '../elements/link-pagamento.elements'
const linkDePagamentoElements = new LinkDePagamentoElements

import { clientes } from '../dados'

const url = Cypress.config("baseUrl")

class CredenciamentoPage {

    realizarLogin() {

        cy.visit("/")
        cy.login()
        cy.wait(500)

    }

    impersonar() {
        cy.wait(500)
        cy.get(linkDePagamentoElements.nome()).click()
        cy.get(linkDePagamentoElements.btnParticipante()).click()
        cy.get(linkDePagamentoElements.modalInput()).click()
        cy.get(linkDePagamentoElements.participanteInput()).type('amarildo')
        cy.wait(1500)
        cy.get(linkDePagamentoElements.participanteInput()).type('{enter}')
        cy.get(linkDePagamentoElements.btnDefinir()).click()
        cy.wait(2000)

    }

    criarJson() {

        const local = JSON.parse(localStorage.getItem('staging.alpe.authUser')).membro;

        console.log(local);

        var fso, s;
        var fso = new ActiveXObject("Scripting.FileSystemObject");
        var s = fso.OpenTextFile("C:\\teste.txt", 8, true, 0);
        s.write("This is a test");
        s.Close();
    }

}

export default CredenciamentoPage;