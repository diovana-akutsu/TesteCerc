class LinkDePagamentoElements{
    nome = () => { return '#dropdown-user-details > .ng-star-inserted > :nth-child(1)' }
    btnParticipante = () => { return '.btn-definir-participante' }
    modalInput = () => { return '.modal-content > .modal-body > .select2 > .selection > .select2-selection' }
    participanteInput = () => { return '.background-alpe > .select2-container > .select2-dropdown > .select2-search > .select2-search__field' }
    btnDefinir = () => { return '.modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary' }
    btnGerar = () => { return 'app-show-link > .content > .row > .col-sm-4 > .btn'}
    inputValor = () => { return '.box-body > .row > .form-group > .ant-input-affix-wrapper > .form-control'}
    inputCodigo = () => { return '.box > .box-body > .row > .form-group > #codigoPedido'}
    inputDesc = () => { return '#descPedido'}
    selectParcelas = () => {return '#installments'}
    dataEx = () => {return '.ant-calendar-picker-input'}
    dataExNum = () => {return '[title="31 de dezembro de 2020"] > .ant-calendar-date'}
    btnLink = () => { return '.mt-4 > .btn-primary'}
    btnCopiaLink = () => { return '.col-md-6 > .btn'}
    mensagemSucesso = () => { return '.no-records-found'}
    status = () => {return ':nth-child(1) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-title > .ng-star-inserted'}
    criacao = () => {return ':nth-child(2) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-title > .ng-star-inserted'}
    expiracao = () => {return ':nth-child(3) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-title > .ng-star-inserted'}
    valor = () => {return ':nth-child(4) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-title > .ng-star-inserted'}
    desc = () => {return ':nth-child(5) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-title > .ng-star-inserted'}
    cop = () => {return ':nth-child(6) > .ant-table-header-column > div > .ant-table-column-title > .ng-star-inserted'}
    dateLink1 = () => {return '.ant-table-tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted'}
    msgLinkcpo = () => {return '.toast-success'}
    linkVirgente = () => {return ':nth-child(1) > .td-buttons > .button-wrapper > .btn'}
    dataExpNaoVirgente = () => {return '.ant-table-tbody > :nth-child(1) > :nth-child(3) > .ng-star-inserted'}
    filtraDataExp = () => {return ':nth-child(3) > .ant-table-header-column > .ant-table-column-sorters > .ant-table-column-sorter > .ant-table-column-sorter-inner > .ant-table-column-sorter-up > svg > path'}
    filtroExpiracao = () => {return '.ant-table-tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted'}
    
}

export default LinkDePagamentoElements;