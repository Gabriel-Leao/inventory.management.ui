# Inventory Management — Frontend

Interface web para gerenciamento de estoque, produtos, despesas e usuários. Construída com Next.js, Redux Toolkit e Material UI.

> Este repositório contém apenas o **frontend** da aplicação. O backend deve ser executado separadamente e exposto na URL configurada via variável de ambiente.

---

## Tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Redux Toolkit** + **RTK Query** para gerenciamento de estado e chamadas à API
- **redux-persist** para persistência do estado global no `localStorage`
- **Material UI** + **MUI X Data Grid** para tabelas e componentes de UI
- **Recharts** para gráficos
- **React Hook Form** + **Zod** para formulários com validação
- **Lucide React** para ícones
- **Prettier** + **ESLint** para padronização de código

---

## Pré-requisitos

- Node.js 18+
- npm ou equivalente
- Backend da aplicação em execução

---

## Instalação

```bash
git clone https://github.com/Gabriel-Leao/inventory.management.ui
cd inventory.management.ui
npm install
```

---

## Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL=http://localhost:3333
```

A variável é validada em tempo de execução via Zod. A aplicação não inicia se ela estiver ausente ou com formato inválido.

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |
| `npm test` | Executa os testes em modo watch |
| `npm run test:run` | Executa os testes uma vez |
| `npm run test:cov` | Executa os testes e gera relatório de cobertura |

---

## Estrutura do projeto

```
src/
├── app/                        # Rotas (Next.js App Router)
│   ├── dashboard/              # Página principal com métricas e gráficos
│   ├── inventory/              # Tabela de inventário por produto
│   ├── products/               # Listagem e cadastro de produtos
│   ├── expenses/               # Visualização de despesas por categoria
│   ├── users/                  # Listagem de usuários
│   └── settings/               # Configurações do usuário
│
├── components/                 # Componentes reutilizáveis
│   ├── navbar/                 # Barra de navegação superior
│   ├── sidebar/                # Menu lateral com links de navegação
│   ├── skeletons/              # Skeleton screens de loading por página
│   ├── appLayout.tsx           # Layout wrapper (sidebar + navbar + conteúdo)
│   ├── inputWrapper.tsx        # Wrapper de campos de formulário
│   ├── rating.tsx              # Componente de avaliação por estrelas
│   └── title.tsx               # Componente de título de página
│
├── hooks/
│   ├── useDarkMode.tsx         # Controla o tema escuro via Redux
│   └── useSidebar.tsx          # Controla o estado colapsado da sidebar
│
├── providers/
│   └── MuiThemeProvider.tsx    # Provider de tema do Material UI
│
├── state/
│   ├── store.tsx               # Configuração do Redux store com persistência
│   ├── slices/
│   │   └── globalSlice.ts      # Estado global (sidebar, dark mode)
│   └── api/
│       ├── index.ts            # Instância base do RTK Query
│       ├── dashboard.ts        # Endpoint de métricas do dashboard
│       ├── product.ts          # Endpoints de produtos (GET, POST)
│       ├── expense.ts          # Endpoint de despesas por categoria
│       └── user.ts             # Endpoint de usuários
│
├── types/
│   ├── index.ts                # Tipos globais (User, DashboardMetrics, Sale, Purchase)
│   ├── product.ts              # Tipos e schema Zod de produtos
│   └── expense.ts              # Tipos de despesas e categorias
│
└── lib/
    └── utils/
        ├── cn.ts               # Utilitário para composição de classes CSS
        └── env.ts              # Validação de variáveis de ambiente
```

---

## Funcionalidades

**Dashboard** — visão geral com cards de métricas (vendas, compras, despesas) e lista de produtos populares, com gráficos de área e de barras via Recharts.

**Inventory** — tabela completa do estoque utilizando MUI X Data Grid, com colunas para nome, preço, rating e quantidade em estoque.

**Products** — listagem em grid com busca em tempo real e modal de criação de produto, com validação de formulário via React Hook Form + Zod.

**Expenses** — gráfico de pizza com despesas agrupadas por categoria, filtráveis por categoria e por intervalo de datas.

**Users** — tabela de usuários com ID, nome e e-mail via MUI X Data Grid.

**Settings** — página de configurações com campos editáveis e toggles para notificações e modo escuro.

---

## Loading states

Todas as páginas com chamadas à API possuem skeleton screens que replicam o layout real do conteúdo durante o carregamento, evitando saltos de layout e textos genéricos de "loading...". Os skeletons usam `animate-pulse` do Tailwind e seguem os mesmos breakpoints responsivos das páginas correspondentes.

| Componente | Localização |
|---|---|
| `DashboardSkeleton` | `src/components/skeletons/dashboardSkeleton.tsx` |
| `ProductsSkeleton` | `src/components/skeletons/productsSkeleton.tsx` |
| `ExpenseSkeleton` | `src/components/skeletons/expenseSkeleton.tsx` |
| `InventorySkeleton` | `src/components/skeletons/inventorySkeleton.tsx` |
| `UserSkeleton` | `src/components/skeletons/userSkeleton.tsx` |

---

## Testes

Os testes são escritos com **Vitest** e **Testing Library**. O Jest foi descartado por incompatibilidade com o `moduleResolution: nodenext` do TypeScript e com os imports ESM nativos do Next.js 16 — configurá-lo exigiria um setup complexo de Babel e transforms customizados. O Vitest integra nativamente com o Vite, suporta ESM sem configuração adicional e oferece uma API idêntica à do Jest, tornando a migração trivial caso necessário.

Os testes cobrem as camadas com lógica real — hooks de estado e validação de formulário — e não componentes puramente visuais, onde o custo de manutenção supera o benefício.

| Arquivo | O que testa |
|---|---|
| `src/hooks/useDarkMode.test.tsx` | Toggle de tema escuro e aplicação da classe `dark` no DOM |
| `src/hooks/useSidebar.test.tsx` | Toggle da sidebar e classes CSS resultantes |
| `src/types/productSchema.test.ts` | Todas as regras de validação do schema Zod de produto |

Para rodar os testes, instale as dependências de teste primeiro:

```bash
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/dom jsdom
```

---

## Estado global

O Redux store persiste dois valores no `localStorage` via `redux-persist`:

| Estado | Descrição |
|---|---|
| `isSidebarCollapsed` | Define se a sidebar está recolhida |
| `isDarkMode` | Define o tema da aplicação |

Toda a comunicação com a API é feita via **RTK Query**, com cache automático e invalidação por tags (`Products`, `Users`, `Expenses`, `DashboardMetrics`).

---

## Endpoints consumidos

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/dashboard` | Métricas gerais do dashboard |
| `GET` | `/products` | Lista de produtos (aceita `?search=`) |
| `POST` | `/products` | Criação de produto |
| `GET` | `/expenses` | Despesas agrupadas por categoria |
| `GET` | `/users` | Lista de usuários |
