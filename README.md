# HealthDev Desafio Técnico - Backend

Este é um projeto de exemplo criado como parte de um desafio técnico para a HealthDev.

## Requisitos

- Node.js
- npm ou yarn
- Banco de dados PostgreSQL
- Prisma CLI

## Instalação

1. Clone este repositório
2. Execute `npm install` ou `yarn install` para instalar as dependências
3. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET="your-jwt-secret"
JWT_EXPIRES_IN="1d"
```

**Nota**: Certifique-se de substituir 'user', 'password', 'localhost' e 'database' com as informações corretas da sua configuração de banco de dados e 'your-jwt-secret' com uma chave secreta de sua escolha. 4. Execute `npx prisma init` para criar o arquivo `prisma.yml` e configurar a conexão com o banco de dados 5. Execute `npx prisma generate` para gerar os arquivos de Client Prisma 6. Execute `npx prisma migrate up` para criar o schema no banco de dados 7. Execute `npm run start` ou `yarn start` para iniciar o projeto
