# Passo a Passo

## 🏗️ Planejamento Inicial

- Levantar requisitos funcionais (o que a aplicação PRECISA ter para funcionar)
- Definir a arquitetura do banco de dados (o que vamos salvar)

## 🛠️ Setup das Ferramentas

### Next.js 14 com TypeScript & Tailwind

Primeiro, vamos inicializar o projeto:

```bash

npx create-next-app@latest .

```

Logo em seguida, vamos configurar um plugin do Tailwind que ordena o nome das classes automaticamente:

```bash

npm install -D prettier prettier-plugin-tailwindcss

```

### Prisma

```bash

npm install prisma --save-dev

```

```bash

npx prisma init --datasource-provider mysql

```

Este comando faz duas coisas:

- cria um novo diretório chamado prismaque contém um arquivo chamado schema.prisma, que contém o esquema Prisma com sua variável de conexão de banco de dados e modelos de esquema

- cria o .envarquivo no diretório raiz do projeto, que é usado para definir variáveis ​​de ambiente (como sua conexão com o banco de dados)

## Conecte seu banco de dados

```bash
# prisma/schema.prisma

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

```

Neste caso, o urlé definido por meio de uma variável de ambiente definida em .env:

```bash
# .env
 DATABASE_URL="mysql://root:root@localhost:3306/nextjs-prisma"

```

## criar as Tabelas no banco de dados

```bash

## Criar o modelo de dados

model Restaurant {
  id                  String     @id @default(uuid())
  name                String
  imageUrl            String
  deliveryFee         Decimal    @db.Decimal(10, 2)
  deliveryTimeMinutes Int
  categories          Category[]
  products            Product[]
}

model Category {
  id          String       @id @default(uuid())
  name        String
  imageUrl    String
  restaurants Restaurant[]
  products    Product[]
}

model Product {
  id                 String     @id @default(uuid())
  name               String
  description        String     @db.VarChar(1000)
  imageUrl           String
  price              Decimal    @db.Decimal(10, 2)
  discountPercentage Int        @default(0)
  restaurantId       String
  restaurant         Restaurant @relation(fields: [restaurantId], references: [id])
  categoryId         String
  category           Category   @relation(fields: [categoryId], references: [id])
}

```

Formatar o schema.prisma

```bash
npx prisma format
```
