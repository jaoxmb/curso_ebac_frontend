![banner](./docs/banner.png)

# GitHub Profile Viewer

Este projeto é uma Landing Page interativa desenvolvida como parte do curso *Engenheiro Front-End* da EBAC. A aplicação consome a API do GitHub para exibir informações de perfis públicos, como número de seguidores, número de pessoas seguidas e repositórios públicos.

**Objetivo:**
- **Estudo de Requisições AJAX e Fetch API**: Aprender como utilizar requisições assíncronas para obter dados de APIs externas.
- **Consumo da API do GitHub**: Trabalhar com a API pública do GitHub para buscar dados de perfis.
- **Melhoria da experiência do usuário**: Criar uma interface simples, mas funcional, para exibição de informações úteis sobre o perfil de um usuário no GitHub.

## Funcionalidades

- Exibe informações do perfil do GitHub, como:
  - Número de seguidores
  - Número de pessoas seguidas
  - Quantidade de repositórios públicos
- Visualização dos repositórios públicos do usuário
- Permite que qualquer pessoa altere o nome de usuário do GitHub na URL para visualizar o perfil do usuário

## Como Usar

1. **Acesse a aplicação:**
   - Você pode acessar a versão de produção [aqui.](https://github-para-portfolio.vercel.app/pages/form)
2. **Alterar o perfil exibido:**
   - Para visualizar o perfil de outro usuário, basta alterar o nome de usuário na URL. Exemplo:

     ```url
      https://github-para-portfolio.vercel.app/?user=<USER_ID>
     ```
3. **Dica de otimização do perfil no GitHub:**
   - Para melhorar a apresentação do seu perfil como portfólio, recomendamos adicionar uma **capa** e uma **descrição** coerente no **README** de cada repositório.

## Tecnologias Usadas

- **HTML5**
- **CSS3**
- **Bootstrap**
- **JavaScript**

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
    git clone https://github.com/joaoxmb/curso_ebac_frontend.git
   ```
2. Navegue até o diretório do projeto:
   ```basg
   cd cursbo_ebac_frontend
   ```
3. Faça checkout para a branch do exercício:
   ```bash
   git checkout exercicio_ajax
   ```
4. Abra o arquivo `index.html` no seu navegador para visualizar a aplicação.

## Contribuições

Contribuições são sempre bem-vindas! Se você tiver sugestões de melhorias ou encontrar algum erro, por favor, abra uma issue ou envie um pull request.

## Recomendações

- **Para otimizar a visualização dos seus repositórios no GitHub**, adicione uma descrição clara e concisa no README de cada repositório.
- **Personalize seu perfil**: Inclua uma foto de capa e informações sobre suas habilidades e projetos no seu perfil do GitHub para criar um portfólio mais atraente.