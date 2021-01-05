/// <reference types="Cypress" />


import DadosPortalCredenciamento from '../elements/portal-credenciamento.dados'
const dadosPortalCredenciamento = new DadosPortalCredenciamento

import CredenciaisElements from '../elements/credenciais.elements'
const credenciaisElements = new CredenciaisElements

import BackofficeElementos from '../elements/backoffice.elements'
const backofficeElementos = new BackofficeElementos

import LinkDePagamentoElements from '../elements/link-pagamento.elements'
const linkDePagamentoElements = new LinkDePagamentoElements

import {clientes} from '../dados'

const url = Cypress.config("baseUrl")

const faker = require('faker-br')

let user = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomCpf: faker.br.cpf(),
    randomTel: faker.phone.phoneNumber(),
    randomDate: faker.date.past(30, 2000),
    randomCep: faker.address.zipCodeValid(),
    randomNum: faker.random.number(),
    randomCompl: faker.address.streetPrefix(),
    randomUrl: faker.internet.url(),
    randomFatura: faker.random.number(),
    randomRepresentante: faker.name.firstName()
}

class CredenciamentoPage {

    realizarLogin() {

        cy.visit(url)
        cy.restoreLocalStorage()
        cy.login()
        cy.saveLocalStorage()
        cy.wait(1000)
    }

    acessarCredenciamento() {

        cy.visit('https://portal.alpe-dev.com.br/credential/basic-info')
    }

    inserirDados() {
        cy.get(credenciaisElements.inputEmail())
            .type(user.randomEmail)
            .should('have.value', user.randomEmail)

        cy.get(credenciaisElements.inputCPF())
            .type(user.randomCpf)


        cy.get(credenciaisElements.inputNome())
            .type(user.randomName)
            .should('have.value', user.randomName)

        cy.get(credenciaisElements.inputData())
            .type('25/10/2001')
            .should('have.value', '25/10/2001')

        cy.get(credenciaisElements.formSexo()).click()
        cy.get(credenciaisElements.M()).should('be.checked')
        cy.get(credenciaisElements.F()).should('not.be.checked')

        cy.get(credenciaisElements.selectTelefone())
            .select('Móvel')
            .should('have.value', 'CELLPHONE')

        cy.get(credenciaisElements.numeroTelefone())
            .type(user.randomTel)


        cy.get(credenciaisElements.btnTelefone()).click()
        cy.get('.group-item').should('exist')


        cy.get(credenciaisElements.optSetectTelefone()).then($arr => {

            const values = []

            $arr.each(function () {
                values.push(this.innerHTML)
            })

            expect(values).to.include.members(["Comercial", "Residêncial"])

        })

        cy.wait(200)

        cy.get(credenciaisElements.inputCEP())
            .type(user.randomCep)

        cy.wait(3500)

        cy.get(':nth-child(1) > .form-inline > .btn')
            .click()

        cy.wait(1800)

        cy.get(credenciaisElements.selectTipoEndereco())
            .select('BUSINESS')
            .should('have.value', 'BUSINESS')

        cy.get(credenciaisElements.inputNumeroCasa())
            .type(user.randomNum)
            .should('have.value', user.randomNum)


        cy.get(credenciaisElements.inputComplemento())
            .type(user.randomCompl)
            .should('have.value', user.randomCompl)

        cy.get(credenciaisElements.inputUrl())
            .type(user.randomUrl)
            .should('have.value', user.randomUrl)

        cy.get(credenciaisElements.selectCategoriaEmpresa()).click()

        cy.get(credenciaisElements.inputCategoria()).type('1012-1/01 - Abate de aves{enter}')

        cy.get(credenciaisElements.selectCategoriaEmpresa()).then($arr => {

            const values = []

            $arr.each(function () {
                values.push(this.innerHTML)
            })

            expect(values).to.include.members(["1012-1/01 - Abate de aves"])

        })

        cy.get(credenciaisElements.inputFatura())
            .type(user.randomFatura)
            .should('have.value', user.randomFatura)

        cy.get(credenciaisElements.inputSegmento()).type(dadosPortalCredenciamento.segmento()).should('have.value', dadosPortalCredenciamento.segmento())
        cy.get(credenciaisElements.inputCanal()).type(dadosPortalCredenciamento.canal()).should('have.value', dadosPortalCredenciamento.canal())
        cy.get(credenciaisElements.inputAcao()).type(dadosPortalCredenciamento.acao()).should('have.value', dadosPortalCredenciamento.acao())
        cy.get(credenciaisElements.inputVende()).type(dadosPortalCredenciamento.fontVendas()).should('have.value', dadosPortalCredenciamento.fontVendas())
        cy.get(credenciaisElements.inputRepresentante()).type(user.randomRepresentante).should('have.value', user.randomRepresentante)
    };

    confirmaCadastro() {

        cy.get(credenciaisElements.btnCadastrar()).click()
        cy.wait(1000)
        cy.get(credenciaisElements.menuConf()).click()
        cy.get(credenciaisElements.menuConsultaCliente()).click()
        cy.wait(400)
        cy.get(credenciaisElements.inputCliente()).type(user.randomName)
        cy.get(credenciaisElements.btnPesquisar()).click()
        cy.wait(1000)
        cy.get(credenciaisElements.btnParametro()).click()
        cy.get(credenciaisElements.checkEstabelecimento()).click()
        cy.get(credenciaisElements.checkCessao()).click()
        cy.get(credenciaisElements.btnSalvarParametro()).click()
        cy.wait(1000)

    }

    acessarBackoffice() {
        cy.wait(1500)
        cy.visit('https://backoffice.alpe-dev.com.br/login')
        cy.get(backofficeElementos.inputUser()).type('')
        cy.get(backofficeElementos.inputSenha()).type('')
        cy.get(backofficeElementos.btnEntrar()).click()
        cy.wait(300)

    }

    atualizarInfo() {
        cy.wait(300)
        cy.get(backofficeElementos.btnInpersonar()).click()
        cy.wait(1000)
        cy.get(backofficeElementos.inputName()).type(user.randomName)
        cy.get(backofficeElementos.btnFiltrar()).click()
        cy.wait(1500)
        cy.get(backofficeElementos.btnIniciar()).click()
        cy.wait(4000)

        cy.get(backofficeElementos.menuInfo()).click()
        cy.wait(1500)
        cy.get(backofficeElementos.selectStatus()).click()
        cy.wait(200)
        cy.get(backofficeElementos.ativo()).click()
        cy.get(backofficeElementos.btnAtivar()).click()
        cy.wait(500)
        cy.get(backofficeElementos.btnConfirmarAtivar()).click()
        cy.wait(4000)

    }

    inserirConta() {
        cy.get(backofficeElementos.menuConta()).click()
        cy.wait(1000)
        cy.get(backofficeElementos.addConta()).click()

        cy.get(backofficeElementos.selectBanco()).click()
        cy.wait(300)
        cy.get(backofficeElementos.bradesco()).click()
        cy.wait(200)
        cy.get(backofficeElementos.agencia())
            .type('00000')

        cy.get(backofficeElementos.conta())
            .type('000000000000')

        cy.get(backofficeElementos.digito())
            .type('00')


        cy.get('#dependencies\\:0').click()
        cy.get('#dependencies\\:1').click()
        cy.get('#dependencies\\:2').click()
        cy.get('#dependencies\\:3').click()
        cy.get('#dependencies\\:4').click()
        cy.get('#dependencies\\:5').click()
        cy.get('#dependencies\\:6').click()
        cy.get('#dependencies\\:7').click()
        cy.get('#dependencies\\:8').click()
        cy.get('#dependencies\\:9').click()
        cy.get('#dependencies\\:10').click()
        cy.get('#dependencies\\:11').click()
        cy.get('#dependencies\\:12').click()

        cy.get(backofficeElementos.btnCadastrarConta()).click()
        cy.wait(1000)

    }

    impersonarEc() {

        cy.visit('https://portal.alpe-dev.com.br/login')
        cy.login()

        cy.wait(500)
        cy.get(linkDePagamentoElements.nome()).click()
        cy.get(linkDePagamentoElements.btnParticipante()).click()
        cy.get(linkDePagamentoElements.modalInput()).click()
        cy.get(linkDePagamentoElements.participanteInput()).type(user.randomName)
        cy.wait(1500)
        cy.get(linkDePagamentoElements.participanteInput()).type('{enter}')
        cy.get(linkDePagamentoElements.btnDefinir()).click()
        cy.wait(2000)

    }

    ativarCerc() {
        cy.get(credenciaisElements.menuConf()).click()
        cy.get(credenciaisElements.menuParametros()).click()
        cy.get(credenciaisElements.btnNovoParametro()).click()
        cy.wait(400)

        cy.get('div').contains('Selecione um produto').click()
        cy.get('li').contains('Cerc').click()

        cy.get('div').contains('Selecione um tipo').click()
        cy.get('li').contains('Participante').click()
        cy.wait(40)
        cy.get('div').contains('Digite o nome do participante').click()
        cy.wait(1000)
        cy.get('span').find('input').type(user.randomName, {delay : 300} , '{enter}')
        cy.wait(1000)
        cy.get('li[class="ant-select-dropdown-menu-item ng-star-inserted"]').click()

        // cy.get('label > span').contains('Não').click({ force: true })
        // cy.wait(1000)
        // cy.get('button[class="ant-btn ant-btn-primary "]').click({ force: true })

    }
}

export default CredenciamentoPage;