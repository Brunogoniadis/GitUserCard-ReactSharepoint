# Resumo da Funcionalidade

O componente `SharepointWeb` usa a API do GitHub para buscar informações do perfil do usuário `brunogoniadis`, incluindo foto de perfil, nome, empresa, número de repositórios públicos, número de usuários seguidos e biografia. Essas informações são então exibidas em um cartão.

**README Padrão para GitHub**

**SharepointWeb**

Este projeto React exibe informações do perfil de um usuário do GitHub em um cartão.

**Como usar**

1. Instale as dependências do projeto.
2. Crie um arquivo `ISharepointWebProps.ts` com as propriedades necessárias.
3. Crie um arquivo `SharepointWeb.tsx` que importe o componente `SharepointWeb`.
4. Renderize o componente `SharepointWeb` em seu aplicativo React.

**Propriedades**

* `description`: Uma descrição do componente (opcional).
* `isDarkTheme`: Um booleano que indica se o tema escuro está sendo usado (opcional).
* `environmentMessage`: Uma mensagem de ambiente (opcional).
* `hasTeamsContext`: Um booleano que indica se o componente está sendo renderizado no contexto do Teams (opcional).
* `userDisplayName`: O nome de exibição do usuário atual (opcional).

**Dependências**

* `@microsoft/sp-http`
* `@pnp/sp`
* `axios`

**Contribuindo**

Sinta-se à vontade para enviar solicitações de pull request com melhorias ou correções.

**Licença**

Este projeto está licenciado sob a licença MIT.
