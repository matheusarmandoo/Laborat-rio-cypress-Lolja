Feature: Lolja

    Background: Iniciar na pagina de exemplo
        Given que esteja na pagina home

    Scenario: Realizar login com dados validos
        When realizar login com dados validos
        Then devera ser enviado a uma pagina com os meus dados de usuario

    Scenario: Realizar login com dados invalidos
        When realizar login com dados invalidos
        Then devera aparecer uma mensagem de erro





