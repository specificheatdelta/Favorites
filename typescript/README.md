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
