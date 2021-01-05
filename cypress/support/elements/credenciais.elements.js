class CredenciaisElements {
    inputEmail = () => { return '#inputEmail' }
    inputCPF = () => { return '#cpf' }
    inputNome = () => { return '#name' }
    inputData = () => { return '#birthDate' }
    formSexo = () => { return '[formcontrolname=gender]' }
    M = () => { return '[value=M]' }
    F = () => { return '[value=F]' }
    selectTelefone = () => { return '#phoneForm > select.form-control' }
    numeroTelefone = () => { return '#phoneNumber' }
    btnTelefone = () => { return '#phoneForm > .btn' }
    optSetectTelefone = () => { return '#phoneForm > select.form-control option' }
    inputCEP = () => { return '#cep' }
    selectTipoEndereco = () => { return '#addressForm > :nth-child(2) > .form-control' }
    inputRua = () => { return '#street' }
    inputBairro = () => { return '#neighborhood' }
    inputNumeroCasa = () => { return '#number' }
    inputComplemento = () => { return '#extra' }
    selectEstado = () => { return '#state' }
    selectCidade = () => { return '#city' }
    inputUrl = () => { return '#website' }
    selectCategoriaEmpresa = () => { return '#select2-businessCategory-container' }
    inputCategoria = () => { return '.select2-search__field' }
    inputFatura = () => { return '#identificationName' }
    inputSegmento = () => { return '#segmento' }
    inputCanal = () => { return '#canal' }
    inputAcao = () => { return '#acao' }
    inputRepresentante = () => { return '#representante' }
    checkedNew = () => { return '#receiveNewsletter-input' }
    inputVende = () => { return '#fonteDeVendas' }
    btnCadastrar = () => { return '.text-center > .btn' }
    menuConf = () => { return '.menu-bottom > :nth-child(3)' }
    menuConsultaCliente = () => { return '.parent.active > .children > :nth-child(1)' }
    inputCliente = () => { return '#nome' }
    btnPesquisar = () => { return '.btn-primary' }
    btnParametro = () => { return ':nth-child(1) > .cdk-column-buttons > .buttons-div-cell > .btn-outline-dark' }
    checkEstabelecimento = () => { return '#isEstabelecimento > .mat-checkbox-layout > .mat-checkbox-inner-container' }
    checkCessao = () => { return '#mat-checkbox-5 > .mat-checkbox-layout > .mat-checkbox-inner-container' }
    btnSalvarParametro = () => { return '.btn-primary' }
    btnNovoParametro = () => { return '.d-flex > .buttons > .btn' }
    menuParametros = () => { return '.active > .children > :nth-child(2)' }

}

export default CredenciaisElements;