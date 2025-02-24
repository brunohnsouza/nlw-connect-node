# DevStage API

Esta é a API do DevStage, desenvolvida com Fastify, Drizzle ORM e banco de dados PostgreSQL e Redis. O projeto utiliza Docker para facilitar a configuração do ambiente.

## Tecnologias Utilizadas

- **Node.js 18**
- **Fastify**
- **Drizzle ORM**
- **PostgreSQL**
- **Redis**
- **Docker**
- **TypeScript**

## Requisitos

Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão 18+)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração e Execução do Projeto

### 1. Clone o Repositório
```sh
git clone https://github.com/brunohnsouza/nlw-connect.git
cd nlw-connect
```

### 2. Instale as Dependências
```sh
npm install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto e adicione:
```env
PORT=3333

# URLs

WEB_URL=http://localhost:3000

# Database

POSTGRES_URL=postgresql://docker:docker@localhost:5432/connect
REDIS_URL=redis://localhost:6379
```

### 4. Suba os Contêineres do Docker
```sh
docker-compose up -d
```
Isso irá iniciar os containers do PostgreSQL e do Redis.

### 5. Execute as Migrações do Banco de Dados
```sh
npm run db:migrate
```

### 6. Inicie o Servidor
```sh
npm run dev
```
A API estará rodando em `http://localhost:3333`.

## Endpoints da API

### Criar uma Inscrição
**POST** `/subscriptions`
```json
{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "referrer": "opcional"
}
```

### Acessar um Link de Convite
**GET** `/invites/{subscriberId}`

### Contar Cliques no Convite
**GET** `/subscribers/{subscriberId}/ranking/clicks`

### Contar Convites Feitos
**GET** `/subscribers/{subscriberId}/ranking/count`

### Ver Posição no Ranking
**GET** `/subscribers/{subscriberId}/ranking/position`

### Obter Ranking Geral
**GET** `/ranking`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento.
- `npm run build` - Compila o projeto para produção.
- `npm run start` - Inicia a API em modo de produção.
- `npm run db:generate` - Gera os modelos do banco com Drizzle ORM.
- `npm run db:migrate` - Executa as migrações do banco de dados.

## Licença
Este projeto está sob a licença ISC.

