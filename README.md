# Workouts API

This service is responsible for managing workouts data.

## Tech Stack
This API was built using express.js web framework for node.js. THe persistence of data is assured by non-relational database Mongo.

## How to run locally
Before running the server locally, you should go under dev-setup folder and run:
```shell
docker compose up
```
This will run a container with a mongoDB instance to be used by the api.

Once the database is up and running, if it's the first time running the project, you should install all npm dependencies:
```shell
npm i
```

Finally, it's time to run the server:
```shell
npm run start
```

## Concepts and principles applied:

### Data Access Object(DAO) Design Pattern
DAO is a design pattern to abstract the way the business logic interacts with the database.
Since the business logic is not tightly coupled with the database we are free to change the way the data is persisted (SQL, NoSQL) without any refactor
on the business logic.

WorkoutDao defines the CRUD operations and WorkoutDaoImpl will define how its implemented. In turn. WorkoutService depends only on WorkoutDao abstract class.

### Inversion of control(IoC) using dependency injection:
We have different ways to manage our dependencies across our application. Inversion of control is a pattern where a framework manage the dependencies reducing the boilerplate code and decreasing the coupling between classes.
Also, makes the application easier to test and maintain overall.

### SOLID
SOLID is an acronym standing for the following key aspects that all software should aim for.

- **Single Responsibility Principle (SRP)**: We have defined classes that take care of one thing only.
- **Open/Closed Principle (OCP)**: Since we are relying on abstractions, we don’t have to make changes on our calling code, if we wish to change an implementation.
- **Liskov Substitution Principle (LSP)**: We can replace any of our objects by another one as long as they implement the same interface.
- **Interface Segregation Principle**: We created a WorkoutService that implements WorkoutServiceInterface, and we’re using that one to bind our implementation.
- **Dependency Inversion Principle**: We’re relying on interfaces everywhere. The only place where we’re making use of our classes is on the inversify.config.ts file, where we are defining our bindings.
