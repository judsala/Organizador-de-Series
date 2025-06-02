# Organizador de Séries

Este projeto é um sistema web para organização de séries, permitindo que usuários cadastrem, editem, visualizem e removam séries vinculadas ao seu perfil.

## Tecnologias Utilizadas

- **Frontend:** Angular 19 (standalone components, Reactive Forms, TypeScript)
- **Backend:** ASP.NET Core 8 (Web API, C#)
- **Banco de Dados:** SQL Server (Entity Framework Core)
- **Outros:** Bootstrap 5, Tailwind CSS

## Funcionalidades

- Cadastro e login de usuários
- Cadastro, edição, listagem e exclusão de séries vinculadas ao usuário
- Validação de formulários no frontend e backend
- Relacionamento 1:N entre Usuário e Série
- API RESTful sem autenticação obrigatória
- Interface responsiva

## Como rodar o projeto

### Pré-requisitos

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- SQL Server (local ou remoto)

### Passos

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Configure o banco de dados:**

   - Crie um banco de dados SQL Server.
   - Atualize a string de conexão em `OrganizadorSeries.Server/appsettings.json` com os dados do seu servidor.
   - Execute as migrations para criar as tabelas:
     ```sh
     cd OrganizadorSeries.Server
     dotnet ef database update
     cd ..
     ```

3. **Instale as dependências do frontend:**

   ```sh
   cd organizadorseries.client
   npm install
   cd ..
   ```

4. **Rode a aplicação:**

   - Na pasta OrganizadorSeries.Server digite o comando **dotnet run** e a aplicação começará a rodar, em seguida acesse o https://localhost:53735/ para abrir a página no navegador.
     ```sh
     cd OrganizadorSeries.Server
     dotnet run
     ```

5. **Acesse no navegador:**

   - Frontend: [https://localhost:53735/](https://localhost:53735/) (ou a porta configurada)
   - API/Swagger: [https://localhost:5101/swagger](https://localhost:5101/swagger) (porta do backend)

## Estrutura do Projeto

```
OrganizadorSeries.sln
organizadorseries.client/   # Frontend Angular
OrganizadorSeries.Server/   # Backend ASP.NET Core
```

## Scripts úteis

- Rodar backend: `dotnet run` (na pasta OrganizadorSeries.Server)
- Rodar frontend: `npm start` (na pasta organizadorseries.client)
- Rodar migrations: `dotnet ef database update` (na pasta OrganizadorSeries.Server)
