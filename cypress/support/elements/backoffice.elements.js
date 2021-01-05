class BackofficeElementos {

    inputUser = () => { return '#username' }
    inputSenha = () => { return '#password' }
    btnEntrar = () => { return '#j_idt17' }
    btnInpersonar = () => { return '#selecionar_trocar' }
    inputName = () => { return '#nameInput' }
    btnFiltrar = () => { return '#selecionar > .ui-button-text' }
    btnIniciar = () => { return '.ui-button-icon-left' }
    menuInfo = () => { return '#info_basicas' }
    selectStatus = () => { return '#j_idt29\\:customer_status > .ui-selectonemenu-trigger > .ui-icon' }
    ativo = () => { return '#j_idt29\\:customer_status_1' }
    btnAtivar = () => { return '#j_idt29\\:j_idt62 > .ui-button-text' }
    btnConfirmarAtivar = () => { return '#j_idt85 > .ui-button-text' }
    menuConta = () => { return '#conta_bancaria' }
    addConta = () => { return '#bankAccountTable\\:j_idt30 > .ui-button-text' }
    selectBanco = () => { return '#input_bank > .ui-selectonemenu-trigger > .ui-icon' }
    bradesco = () => { return '#input_bank_1' }
    agencia = () => { return '#inputAgencyNumber' }
    conta = () => { return '#inputAccountNumber' }
    digito = () => { return '#inputAccountNumberCheckDigit' }
    btnCadastrarConta = () => { return '#j_idt121 > .ui-button-text' }

}

export default BackofficeElementos;