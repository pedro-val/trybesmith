### Trybesmith Project Repository
### 👨‍💻 What was developed
In this project, a medieval items store, such as customized swords, was created in the form of an API, using Typescript and Sequelize.

The Service and Controller layers of the application were developed, using JWT to authenticate some routes, and tests were implemented to ensure proper functionality. The application has endpoints that support create, read, and update operations.

There was no Front-end in this project. The focus was solely on functionality and code quality, without worrying about visualization.

The API was developed inside the ./src folder.

Tests were created at the root of the application, in a directory called tests.

All the types Order, Product, and User from the project, located in the src/types folder, were properly implemented. This was necessary to execute the migrations.

### Technologies Used
Node.js: A platform that allows running JavaScript on the server.
Typescript: A programming language that improves code quality with static typing.
Sequelize: ORM for interacting with relational databases.
JSON Web Tokens (JWT): An authentication method to secure restricted access routes.
Docker: A platform for developing, shipping, and running applications in containers.
PostgreSQL: Relational database management system.
Jest: Testing framework for JavaScript.
These technologies form the foundation of the Trybesmith project and are essential for the development of the API and services related to medieval items and orders.

### Features Implemented

### Product Registration Endpoint
### Endpoint available at /products.
The products sent were saved in the products table in the database.
Endpoint structure:
{
  "name": "Thor's Hammer",
  "price": "30 gold pieces",
  "orderId": 4
}
Tests ensured at least 30% code coverage for the Service and Controller layers.

### Product Listing Endpoint
### Endpoint available at /products.
Tests ensured at least 50% code coverage for the Service and Controller layers.

### Order Listing Endpoint
### Endpoint available at /orders.
The route returned all orders and their associated product IDs.
Tests ensured at least 60% code coverage for the Service and Controller layers.

### User Login Endpoint
### Endpoint available at /login.
The route received the username and password fields, validated against the database.
A JWT token was generated and returned upon successful login, containing the user’s ID and username in the payload.
Endpoint structure:
json
Copy code
{
  "username": "string",
  "password": "string"
}
Tests ensured at least 70% code coverage for the Service and Controller layers.
Product Validations and Tests

Validations were implemented for the product creation endpoint.
Tests ensured at least 80% code coverage for the Service and Controller layers.

### Order Registration Endpoint
### Endpoint available at /orders.
An order could only be created if the user was logged in and the JWT token was validated.
The submitted orders were saved in the orders table in the database, including the user’s ID.
The products table was updated, setting the orderId for the products included in the productIds field of the request.
Endpoint structure:
{
  "productIds": [1, 2],
  "userId": 1
}
Tests ensured at least 90% code coverage for the Service and Controller layers.
