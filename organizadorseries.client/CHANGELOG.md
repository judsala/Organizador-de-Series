This file explains how Visual Studio created the project.

The following tools were used to generate this project:
- Angular CLI (ng)

The following steps were used to generate this project:
- Create Angular project with ng: `ng new organizadorseries.client --defaults --skip-install --skip-git --no-standalone `.
- Add `proxy.conf.js` to proxy calls to the backend ASP.NET server.
- Add `aspnetcore-https.js` script to install https certs.
- Update `package.json` to call `aspnetcore-https.js` and serve with https.
- Update `angular.json` to point to `proxy.conf.js`.
- Update `app.component.ts` component to fetch and display weather information.
- Modify `app.component.spec.ts` with updated tests.
- Update `app.module.ts` to import the HttpClientModule.
- Create project file (`organizadorseries.client.esproj`).
- Create `launch.json` to enable debugging.
- Update package.json to add `jest-editor-support`.
- Update package.json to add `run-script-os`.
- Add `karma.conf.js` for unit tests.
- Update `angular.json` to point to `karma.conf.js`.
- Add project to solution.
- Update proxy endpoint to be the backend server endpoint.
- Add project to the startup projects list.
- Write this file.

Este arquivo explica como o Visual Studio criou o projeto.

As seguintes ferramentas foram usadas para gerar este projeto:
- Angular CLI (ng)

As seguintes etapas foram usadas para gerar este projeto:
- Criar o projeto Angular com ng: `ng new organizadorseries.client --defaults --skip-install --skip-git --no-standalone`.
- Adicionar `proxy.conf.js` para redirecionar chamadas para o backend ASP.NET.
- Adicionar o script `aspnetcore-https.js` para instalar certificados https.
- Atualizar o `package.json` para chamar `aspnetcore-https.js` e servir com https.
- Atualizar o `angular.json` para apontar para `proxy.conf.js`.
- Atualizar o componente `app.component.ts` para buscar e exibir informações de clima.
- Modificar `app.component.spec.ts` com testes atualizados.
- Atualizar `app.module.ts` para importar o HttpClientModule.
- Criar o arquivo de projeto (`organizadorseries.client.esproj`).
- Criar `launch.json` para habilitar o debug.
- Atualizar o package.json para adicionar `jest-editor-support`.
- Atualizar o package.json para adicionar `run-script-os`.
- Adicionar `karma.conf.js` para testes unitários.
- Atualizar o `angular.json` para apontar para `karma.conf.js`.
- Adicionar o projeto à solução.
- Atualizar o endpoint do proxy para ser o endpoint do backend.
- Adicionar o projeto à lista de projetos de inicialização.
- Escrever este arquivo.
