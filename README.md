# ecommerce-vue

### Índice

1. [Projeto](#about-project)
   1. [Setup Projeto](#setup-project)
   1. [Run para desenvolvimento](#development-run)
   1. [Run lint para correções](#lint-run)
1. [Dependências](#about-dependency)
   1. [Instalação do json-server](#install-json-serve)
   1. [Run json-server](#run-json-serve)
1. [Padrão de commit](#padrao-commit)
   1. [Sobre o padrão](#padrao-commit)
   1. [Estrutura de mensagens](#estrutura-mensagem-commit)
   1. [Tipos e Escopo](#tipos-commit)
   1. [Exemplos de commit](#exemplo-commit)
   1. [Versionamento Semântico](#versionamento-semantico)

---

## <h2 id="about-project">**Projeto**</h2>

### <h3 id="setup-project">**`Setup Projeto`**</h3>

    npm install

### <h3 id="development-run">**`Run para desenvolvimento`**</h3>

    npm run serve

### <h3 id="lint-run">**`Run lint para correções`**</h3>

    npm run lint

## <h2 id="about-dependency">**Dependências**</h2>

### <h4>**Unica dependência para desenvolvimento do projeto é o [json-server](https://www.npmjs.com/package/json-server). Para rodar api mock**</h4>

### <h3 id="install-json-serve">**`Instalação do json-server`**</h3>

    npm install -g json-server

### <h3 id="run-json-serve">**`Rodar json-server para mock de api`**</h3>

    json-server caminho_projeto/ecommerce-vue/src/assets/api/ranek.json

---

## <h2 id="padrao-commit">**Padrão de commit**</h2>

#### É utilizado nesse projeto um padrão para mensagens de commits. Ela define um conjunto de regras para criar um histórico de commit explícito, o que facilita a criação de ferramentas automatizadas. Esta convenção segue o `SemVer`, descrevendo os recursos, correções e modificações que quebram a compatibilidade nas mensagens de commit.

#### Para saber mais:

- [convetional commits](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/#especifica%c3%a7%c3%a3o).
- [SemVer](https://semver.org/).

### <h3 id="estrutura-mensagem-commit">**`Estrutura da mensagem de commit`**</h3>

    <tipo>[escopo opcional]: <descrição>

    [corpo opcional]

    [rodapé opcional]

### <h3 id="tipos-commit">**`Tipos que se comunicam com versionamento semantico:`**</h3>

- `fix` - soluciona um problema na sua base de código ( [`PATCH`](#patch) )
- `feat` - inclui um novo recurso na sua base de código ( [`MINOR`](#minor) )
- `BREAKING CHANGE` - um commit que contém o texto `BREAKING CHANGE`, no começo do texto do corpo opcional ou do rodapé opcional, inclui uma modificação que quebra a compatibilidade da API ( [`MAJOR`](#major) ). `BREAKING CHANGE` pode fazer parte de commits de qualquer tipo.

### **`Outros tipos:`**

- `docs` - apenas mudança na documentação
- `style` - alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula ausente etc.)
- `refactor` - uma alteração de código que não corrige um bug nem adiciona um recurso
- `test` - adicionando testes ausentes ou corrigindo os existentes
- `chore` - mudança no processo de construção ou ferramentas auxiliares e lib's ( add lib, frameworks, etc ).
- `perf` - uma alteração de código que melhora o desempenho
- `ci` - alterações nos arquivos e scripts de configuração do ci
- `temp` - confirmação temporária que não será incluída no seu CHANGELOG

### **`Escopo opcional`**

- pode ser qualquer coisa que especifique o local da alteração de confirmação. Exemplo `local`, `browser`, `ngClick`, `ngView`, etc. No desenvolvimento de aplicativos, o escopo pode ser uma página, um módulo ou um componente.

### <h3 id="exemplo-commit">**`Exemplos de commit`**</h3>

#### _Mensagem de commit com descrição e modificação que quebra a compatibilidade no corpo_

    feat: permitir que o objeto de configuração fornecido estenda outras configurações

    BREAKING CHANGE: a chave `extends`, no arquivo de configuração, agora é utilizada
    para estender outro arquivo de configuração

#### _Mensagem de commit com ! opcional para chamar a atenção para quebra a compatibilidade_

    chore!: remove Node 6 da matriz de testes

    BREAKING CHANGE: removendo Node 6 que atinge o final de vida em Abril

#### _Mensagem de commit sem corpo_

    chore: adicionado jest no projeto

#### _Mensagem de commit com escopo_

    feat(language): adiciona tradução para o inglês

#### _Mensagem de commit de uma correção utilizando número de ticket (opcional)_

    fix: corrige pequenos erros de digitação no código

    veja as tarefas para detalhes sobre os erros de digitação corrigidos

    closes tasks [ #109590, #110967 ]

### <h3 id="versionamento-semantico">**`Versionamento Semântico`**</h3>

Dado um número de versão `MAJOR.MINOR.PATCH`:

EX: 1.0.15

- <a id="major" title="MAJOR">`MAJOR`</a> - quando fizer mudanças incompatíveis na API
- <a id="minor" title="MINOR">`MINOR`</a> - quando adicionar funcionalidades mantendo compatibilidade
- <a id="patch" title="PATCH">`PATCH`</a> - quando corrigir falhas mantendo compatibilidade

---
