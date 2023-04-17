### Build a CRUD API with Node.js and Sequelize

What is [`Sequelize`](https://sequelize.org/)? Sequelize is a modern, promise-based, Node.js ORM (**Object Relational Mapper**) that makes it easy to work with SQL databases like PostgreSQL, MariaDB, MySQL, Microsoft SQL Server, and SQLite.

#### Setup the Node.js Project

```shell
mkdir crud-app-sequelize
cd crud-app-sequelize && code .
```

project with the following command.

```shell
npm init
```

You will be prompted to provide some answers. If you don’t want to answer questions then use the `-y`flag.

Run the command below to install TypeScript as a global dependency. This will allow us compile the TypeScript code into pure JavaScript using the TypeScript compiler.

```shell
npm init -y  
npm install -g typescript
```

Now run these commands to install all the third-party dependencies:

```shell
npm i sequelize pg pg-hstore cors dotenv express zod config 
npm i -D @types/cors @types/config @types/express @types/node @types/morgan ts-node typescript nodemon
```

- `sequelize` – Sequelize is a promise-based Node.js ORM for SQL databases.
- `pg` – A non-blocking PostgreSQL driver for Node.js. Sequelize requires this package to create connection pools to the Postgres server and manage the data stored in the database.
- `pg-hstore` – For serializing and deserializing JSON data to PostgreSQL **hstore** data type.
- `cors` – Provides a middleware that can be used to enable CORS in a Node.js server.
- `dotenv` – Load environment variables from a `.env` file.
- `express` – A Node.js web framework.
- `zod` – A TypeScript-first schema validation library.
- `morgan` – Provides a middleware for logging HTTP requests in Node.js.
- `ts-node` – Compiles a TypeScript app and hot-reloads the server when required files change.

Run the following command to initialize a TypeScript project. A tsconfig.json file will be created in your root directory.

```shell
tsc --init
```

#### TypeScript tsconfig.json file configurations

Add the following configuration options to your **tsconfig.json** file to allow us use decorators and more in our code.

```typescript
{
  "compilerOptions": {
    "target": "es2016",
    "removeComments": true,  
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

Now add the dev script to the package.json file

```json
"scripts": {
    "dev": "nodemon ./src/index.ts"
  }
```

### These are the API endpoints we need for this Rest API

| RESOURCE | HTTP METHOD | ROUTE              | DESCRIPTION      |
| -------- | ----------- | ------------------ | ---------------- |
| notes    | GET         | /api/healthChecker | check healthy    |
| notes    | GET         | /api/note/         | return all notes |
| notes    | POST        | /api/note/         | create new note  |
| notes    | GET         | /api/note/:noteId  | find note        |
| notes    | PATCH       | /api/note/:noteId  | update note      |
| notes    | DELETE      | /api/note/:noteId  | delete note      |

### docker-compose.yml

 to see docker-compose file click [`here`](https://github.com/azita-abdollahi/crud-api-sequelize/blob/master/docker-compose.yml).

#### Run the App

 start the docker containers

```
#up docker containers and build
docker compose up -d --build  
#see the docker containers  
docker compose ps  
#stop the docker containers  
docker compose down  
#following logs of docker containers  
docker compose logs -f
```

**Note:** By default backend service listens on `TCP/3000` port and pg-admin is available on `TCP/8080.