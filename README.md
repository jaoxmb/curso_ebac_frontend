# Programação Orientada a Objetos em JavaScript

Esta tarefa tem como objetivo aplicar os conceitos de Programação Orientada a Objetos (POO) em JavaScript. O projeto é baseado na criação de uma entidade genérica e suas especializações utilizando herança. As entidades modelam diferentes tipos de usuários em um sistema fictício.


## Entidades

1. **Person**

    A classe Person é a entidade genérica, que representa uma pessoa com informações básicas, como nome, sobrenome, idade, data de nascimento, telefone e CPF.

2. **User**

    A classe User herda da classe Person e adiciona a propriedade email, representando um usuário comum de um sistema. A classe User mantém as informações básicas de uma pessoa e adiciona o email como dado específico para identificação no sistema.

3. **Admin**

    A classe Admin herda de User e é destinada a representar usuários com privilégios administrativos. Além das propriedades herdadas da classe User, a classe Admin tem a capacidade de acessar e controlar funcionalidades específicas de administrador. Métodos extras podem ser adicionados, como por exemplo, acesso a controles administrativos.

4. **PremiumUser**

    A classe PremiumUser também herda de User, mas adiciona a propriedade plan, que especifica o plano de assinatura de um usuário premium. Usuários premium têm acesso a conteúdos exclusivos, diferenciando-se dos usuários comuns.

## Conclusão

Neste projeto, foram aplicados os conceitos de herança e encapsulamento em JavaScript para modelar diferentes tipos de usuários em um sistema. A classe Person serve como base para as outras classes, que estendem suas funcionalidades para representar entidades mais específicas, como usuários comuns, administradores e usuários premium.