Feature: Cadastro Portal Credenciamento

  Como usuario, desejo utilizar o Portal da Alpe
  Para que possa realizar o cadastro dos clientes

  #Realiza o login para iniciar o código
  Scenario: Realizar o acesso ao Portal da Alpe
    Given desejo realizar o login


  Scenario: Realizar cadastro EC
    Given que eu acesso o página de Credenciamento
    When inserir os dados da pessoa física
    Then cliente deve estar cadastrado

  Scenario: Ativar EC na CERC
    Given que eu acesso o página do backoffice
    And atualizo status do ec para ativo
    And crio a conta bancaria
    When inpersonar o ec
    Then o parâmetro da CERC deve estar ativo
