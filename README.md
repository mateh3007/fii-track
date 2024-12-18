# API de Investimentos Imobiliários

Este projeto é uma API para gerenciamento e consulta de lucros em fundos de investimentos imobiliários (FIIs). A API foi desenvolvida utilizando **NestJS** e **TypeORM**, seguindo os princípios da **Clean Architecture**, além de possuir instrumentação para observabilidade, autenticação e limites de requisições para usuários não autenticados.

---

## 🚀 **Funcionalidades**

### Principais:

1. **Autenticação de Usuários**:
   - Cadastro e login de usuários.
   - Tokens JWT para acesso a recursos protegidos.
2. **Gerenciamento de FIIs**:
   - Registro de fundos imobiliários vinculados aos usuários autenticados.
   - Cálculo de lucros de investimentos.
3. **Consultas Públicas**:
   - Usuários não autenticados podem consultar FIIs (limite de 5 consultas diárias).
4. **Análise Geral**:
   - Endpoint para cálculo consolidado dos lucros de todos os FIIs de um usuário autenticado.

### Diferenciais:

- Instrumentação para **Elastic Observability**.
- Deploy utilizando **Docker**, **Kubernetes** e **Terraform**.
- Documentação interativa com **Swagger**.

---

## 🛠️ **Tecnologias Utilizadas**

- **NestJS**: Framework para desenvolvimento da API.
- **TypeORM**: ORM para gestão do banco de dados.
- **Clean Architecture**: Estruturação do código para máxima manutenibilidade.
- **Docker**: Contêinerização da aplicação.
- **Kubernetes**: Orquestração de contêineres.
- **Terraform**: Infraestrutura como código para deploy.
- **Elastic Observability**: Instrumentação para logs e métricas.
- **Swagger**: Documentação interativa da API.
- **PostgreSQL**: Banco de dados relacional.

---

## 🏗️ **Como Executar Localmente**

### Pré-requisitos:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Terraform](https://www.terraform.io/)

### Passos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/sua-org/api-investimentos-imobiliarios.git
   cd api-investimentos-imobiliarios
   ```
2. **Instale as dependências**:
   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente em um arquivo .env**:
   ```bash
   DATABASE_URL=postgres://user:password@localhost:5432/investments
   JWT_SECRET=your_jwt_secret
   ELASTIC_URL=http://localhost:9200
   ```
4. **Suba os serviços com Docker**:
   ```bash
   docker-compose up -d
   ```
5. **Suba os serviços com Docker**:
   ```bash
   npm run migration:run
   ```
6. **Inicie o servidor**:
   ```bash
   npm run start
   ```
7. **Acesse a documentação Swagger**:
   ```bash
   http://localhost:3000/api
   ```

---

## 🏗️ **Estrutura do Projeto**

```plaintext
src/
├── application/    # Casos de uso
├── domain/         # Entidades e interfaces de domínio
├── infrastructure/ # Implementações específicas, como TypeORM e serviços externos
├── presentation/   # Controladores e validadores
└── main.ts         # Entrada da aplicação
```

---

## 📚 **Documentação**

### Acesse a documentação Swagger

- **Ambiente Local**: [http://localhost:3000/api](http://localhost:3000/api)
- **Ambiente de Produção**: [https://sua-url-na-cloud.com/api](https://sua-url-na-cloud.com/api)

---

## 💬 **Contato**

### Se você tiver dúvidas, sugestões ou deseja contribuir, entre em contato:

- **Autor**: Matheus Reis
- **Email**: contatodevvmatheus@gmail.com
- **LinkedIn**: [https://www.linkedin.com/in/matheus-reis-443817264/]
- **GitHub**: [https://www.github.com/mateh3007/]
