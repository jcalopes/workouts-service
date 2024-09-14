Workouts API

# DAO
# Swagger
# Dependency Injection with InversifyJS IOC:

In the end, we have an example that complies with SOLID principles:

Single Responsibility Principle (SRP): We have defined classes that take care of one thing only.
Open/Closed Principle (OCP): Since we are relying on abstractions, we don’t have to make changes on our calling code, if we wish to change an implementation.
Liskov Substitution Principle (LSP): We can replace any of our objects by another one as long as they implement the same interface.
Interface Segregation Principle: We created a PostRepositoryInterface that extends RepositoryInterface, and we’re using that one to bind our implementation. That way, we keep our base interface clean and we can add custom methods on our custom interfaces.
Dependency Inversion Principle: We’re relying on interfaces everywhere. The only place where we’re making use of our classes is on the container.ts file, when defining our bindings.
