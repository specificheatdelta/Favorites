# Favorite API

Favorites API, this is! Manage user favorites, it does. Node.js, TypeScript, and AWS Lambda, we use, hmm. In MySQL database, the data is stored, yes.

## Tech Stack

- AWS Lambda
- AWS API Gateway
- Node.js
- TypeScript
- Serverless Framework
- MySQL
- TypeORM

## Project Structure

- `src/`: Source code directory
  - `entities/`: Entity classes for TypeORM
  - `handler.ts`: Lambda handler
  - `controllers/`: API controller classes
  - `services/`: Service classes for business logic
  - `repositories/`: Repository classes for data access
- `serverless.yml`: Serverless Framework configuration file
- `ormconfig.json`: TypeORM configuration file

### Components

Flow of requests, like this, it is:

```
+------------+     AWS API Gateway, incoming requests it receives, triggers
| APIGateway |     Lambda function, it does.
+------------+
      |
      v
+----------------+     Lambda function entry point, this is. AWS Lambda
| FavoriteHandler |     events it receives, to requests understood by the
+----------------+     controller, they convert, and response to API Gateway,
                         they send back.
      |
      v
+-------------------+     Handles APIGatewayProxyEvents, FavoriteController
| FavoriteController |     does. Validates input, and service methods it calls,
+-------------------+     based on request. Error responses and logging,
                         it handles.
      |
      v
+----------------+     Business logic for managing favorites, it contains.
| FavoriteService |     With repository, it communicates, CRUD operations on
+----------------+     data, it performs.
      |
      v
+---------------------+     Abstraction layer over data store (MySQL), it is.
| FavoriteRepository  |     TypeORM, it uses, database operations it performs.
+---------------------+
      |
      v
+---------------------+
|    MySQL Database   |     Stores the favorites data, the database does.
+---------------------+
```

## Setup

1. Install Node.js 14.x or later.

2. Install the Serverless Framework globally:

   ```
   npm install -g serverless
   ```

3. Install dependencies, you must:

   ```
   npm install
   ```

4. Configure the environment variables, you should:

   ```
   cp .env.example .env
   ```

5. Deploy the serverless stack, do this:

   ```
   npx serverless deploy
   ```

   Example:

   ```
   serverless deploy --stage your_stage --region your_region
   ```

6. Use Postman collection to test the API, you can. Import the `postman_collection.json` file and send requests, you may.

## Docker Setup for MySQL

To simplify the process of setting up a local MySQL instance, we've provided a Dockerfile that will run a MySQL 8.0 container. This allows you to run the MySQL server in an isolated environment without affecting your local system.

### Prerequisites

1. Install Docker on your machine. Follow the official Docker installation guide for your operating system: https://docs.docker.com/get-docker/

### Steps to Run MySQL with Docker

1. Navigate to the project directory where the Dockerfile is located.

2. Build the Docker image by running the following command:

   ```
   docker build -t my-mysql:8.0 .
   ```

3. Run the Docker container with the following command:

   ```
   docker run -d -p 3306:3306 --name my-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw my-mysql:8.0
   ```

   Replace "my-secret-pw" with a secure password for the MySQL root user.

4. Update your .env file with the appropriate connection details, including the MySQL root password you set in step 3. Make sure to set the DB_HOST to "localhost" or "127.0.0.1" and the DB_PORT to 3306.

5. Now, you can run your application, and it will connect to the MySQL instance running inside the Docker container.

### Stopping the MySQL Docker Container

To stop the MySQL Docker container, run the following command:

```
docker stop my-mysql
```

To remove the container, run the following command:

```
docker rm my-mysql
```

For more information on using Docker and managing containers, refer to the official Docker documentation: https://docs.docker.com/

## Running Locally

To run the API locally using the Serverless Offline plugin, execute the following command:

```
serverless offline
```

## Endpoints

- `GET /favorites`: Retrieve favorites by filter (profileId and optional categories)
- `POST /favorites`: Create a new favorite
- `PUT /favorites/{id}`: Update an existing favorite
- `DELETE /favorites/{id}`: Delete a favorite by ID

## Tests

Jest, we use for tests. Run them like this, you can:

```

npm test

```

May the force be with you!

```

```
