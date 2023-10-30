# Bem-vindo ao repositório do projeto Trybesmith

👨‍💻 O que foi desenvolvido
Neste projeto, uma loja de itens medievais, como espadas personalizadas, no formato de uma API, foi criada, utilizando Typescript e Sequelize.

As camadas de Service e Controllers da aplicação foram desenvolvidas, utilizando JWT para autenticar algumas rotas, e testes foram implementados para garantir o funcionamento adequado. A aplicação possui endpoints que oferecem suporte para operações de criação, leitura e atualização de informações.

Não havia um Front-end neste projeto. Não foi necessário se preocupar com a visualização, apenas com as funcionalidades e a qualidade do código.

A API foi desenvolvida dentro da pasta ./src.

Os testes foram criados na raiz da aplicação, em um diretório chamado tests.

Todos os tipos Order, Product e User do projeto, localizados na pasta src/types, foram devidamente implementados. Isso foi necessário para executar as migrations.

Atenção ⚠️: Todas as importações foram realizadas com caminhos relativos.

1 - Foi criado um endpoint para o cadastro de produtos e testes que abrangem as funcionalidades desse endpoint.
  - O endpoint foi acessível no caminho (/products).
  - Os produtos enviados foram salvos na tabela products do banco de dados.
  - O endpoint recebeu a seguinte estrutura:
    ```json
    {
      "name": "Martelo de Thor",
      "price": "30 peças de ouro",
      "orderId": 4
    }
    ```
  - Os testes garantiram pelo menos 30% de cobertura do código das camadas Service e Controller.

2 - Foi criado um endpoint para a listagem de produtos e testes que abrangem as funcionalidades desse endpoint.
  - O endpoint foi acessível no caminho (/products).
  - Os testes garantiram pelo menos 50% de cobertura do código das camadas Service e Controller.

3 - Foi criado um endpoint para listar todos os pedidos e testes que abrangem as funcionalidades desse endpoint.
  - O endpoint foi acessível no caminho (/orders).
  - A rota retornou todos os pedidos e os IDs dos produtos associados a eles.
  - Os testes garantiram pelo menos 60% de cobertura do código das camadas Service e Controller.

4 - Foi criado um endpoint para o login de pessoas usuárias e testes que abrangem as funcionalidades desse endpoint.
  - O endpoint foi acessível no caminho (/login).
  - A rota recebeu os campos username e password, validados no banco de dados.
  - Um token JWT foi gerado e retornado em caso de sucesso no login, contendo o id e username no payload.
  - O endpoint recebeu a seguinte estrutura:
    ```json
    {
      "username": "string",
      "password": "string"
    }
    ```
  - Os testes garantiram pelo menos 70% de cobertura do código das camadas Service e Controller.

5 - Foram criadas validações para os produtos e testes que abrangem as funcionalidades desse endpoint.
  - As validações foram implementadas referentes à criação do endpoint do requisito 1.
  - Os testes garantiram pelo menos 80% de cobertura do código das camadas Service e Controller.

6 - Foi criado um endpoint para o cadastro de um pedido e testes que abrangem as funcionalidades desse endpoint.
  - O endpoint foi acessível no caminho (/orders).
  - Um pedido só pôde ser criado se a pessoa usuária estivesse logada e o token JWT fosse validado.
  - Os pedidos enviados foram salvos na tabela orders do banco de dados, incluindo o id da pessoa usuária que fez o pedido.
  - A tabela products foi atualizada, atualizando todos os produtos com os IDs incluídos na chave productIds da requisição e adicionando o orderId do pedido recém-criado.
  - O endpoint recebeu a seguinte estrutura:
    ```json
    {
      "productIds": [1, 2],
      "userId": 1
    }
    ```
  - Os testes garantiram pelo menos 90% de cobertura do código das camadas Service e Controller.
