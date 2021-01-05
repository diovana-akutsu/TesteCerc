Feature: Cadastro Portal Credenciamento

  Como usuario, desejo utilizar o Portal da Alpe
  Para que possa realizar o cadastro dos clientes

  Scenario: Realizar o acesso ao Portal da Alpe
    Given desejo realizar o login
    When impersonar
    Then um arquivo json