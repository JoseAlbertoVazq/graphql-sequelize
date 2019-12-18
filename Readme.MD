# GRAPHQL CRUD DEMO EXAMPLE

GraphQL + Sequelize + NodeJS + MySQL demo example of CRUD entities.

## Install

Remember! You have to execute the following command after cloning this repository:

```bash
npm install
```

## First steps

In /config/config.json you will find all you need to connect this project with your database. In this
case, I have used MySQL as db. Let's see:

```json
"development": {
    "username": "root",
    "password": "password",
    "database": "passport_dev",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }

```
You can (and must) change the username and password to your own credentials in your local MySQL configuration. You can also change the "database" field, that's the name the database will have.

To start working with this project, you have to run the following commands:

The first one is to create our new database in MySQL:
```bash
npx sequelize-cli db:create
```
Secondly, we have to execute our migrations. These will create the tables structure in our database, as well as the associations between entities and their attributes constrainsts. So let's run:

```bash
npx sequelize-cli db:migrate
```

Now we can run our application. 

```bash
npm start
```
# HAVE YOU CHANGED THE STRUCTURE OR TABLES IN DATABASE?

If you add new models and migrations, or deleted any table, or you just filled your database with lots of garbage, you can do all the previous steps BUT YOU HAVE TO RUN FIRST THE NEXT COMMAND:
```bash
npx sequelize-cli db:drop
```

## Where is this project running?

The server port by default is 3000. Run this and you will have this
beautiful backend in http://localhost:3000

## Oh wait, no routes? what?

If you are new using GraphQL you will see some little tiny differences with REST. Resolvers and Schemas are in their own folders at the root of the project. If this is your first time with GraphQL, I recommend you to follow first this tutorial: https://www.howtographql.com/

## Where can I work with this backend?

Once you run this project, you can navigate to http://localhost:3000/ and you will see the graphic interface to work with, and all the documentation you will need.

Any doubts, any suggestion, any request or any invitation to a good dinner, you can write an issue and I will read it as soon as I can.

## Autor

José Alberto Vázquez López

You can find me on: 
- Linkedin: https://www.linkedin.com/in/josealbertovazq/
- Twitter: https://twitter.com/JoseAlbertoVazq
- Instagram: https://www.instagram.com/JoseAlbertoVazq
- Facebook: https://www.facebook.com/JoseAlbertoVazq
