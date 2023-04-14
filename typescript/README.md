Favorites API, this is! Manage user favorites, it does. Node.js, TypeScript, and AWS Lambda, we use, hmm. In MySQL database, the data is stored, yes.

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

### Setup

1. Install dependencies, you must:

   ```
   npm install
   ```

2. Configure the environment variables, you should:

   ```
   cp .env.example .env
   ```

3. Deploy the serverless stack, do this:

   ```
   npx serverless deploy
   ```

4. Use Postman collection to test the API, you can. Import the `postman_collection.json` file and send requests, you may.

### Tests

Jest, we use for tests. Run them like this, you can:

```
npm test
```

May the force be with you!
