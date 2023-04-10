Favorites API
This is a Python Flask-based RESTful API that provides endpoints to store, retrieve, and update favorite items for a user in a SQLite database. The database schema consists of a single table named favorites that contains the following columns:

email (string)
item_id (integer)
created_at (datetime)
updated_at (datetime)
Setup
Clone the repository and navigate into the project directory.

bash
Copy code
git clone https://github.com/example/favorites-api.git
cd favorites-api
Install the required Python packages.

Copy code
pip install -r requirements.txt
Initialize the database by running the init_db() function.

Copy code
python api.py
Endpoints
The API provides the following endpoints:

POST /favorites
This endpoint is used to add a new favorite item for a user. The request body should contain the following fields:

email (string)
item_id (integer)
Example request:

bash
Copy code
POST /favorites
Content-Type: application/json

{
    "email": "johndoe@example.com",
    "item_id": 12345
}
Example response:

css
Copy code
HTTP/1.1 201 CREATED
Content-Type: application/json

{
    "id": 1
}
GET /favorites
This endpoint is used to retrieve all favorite items for a user. The request should contain the email query parameter.

Example request:

sql
Copy code
GET /favorites?email=johndoe@example.com
Example response:

css
Copy code
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "email": "johndoe@example.com",
        "item_id": 12345,
        "created_at": "2023-04-09T12:00:00Z"
    },
    {
        "email": "johndoe@example.com",
        "item_id": 67890,
        "created_at": "2023-04-09T13:00:00Z"
    }
]
PUT /favorites
This endpoint is used to update a favorite item for a user. The request body should contain the following fields:

email (string)
item_id (integer)
Example request:

bash
Copy code
PUT /favorites
Content-Type: application/json

{
    "email": "johndoe@example.com",
    "item_id": 54321
}
Example response:

Copy code
HTTP/1.1 200 OK
GET /favorites/{favorite_id}
This endpoint is used to retrieve a specific favorite item by ID.

Example request:

bash
Copy code
GET /favorites/1
Example response:

css
Copy code
HTTP/1.1 200 OK
Content-Type: application/json

{
    "email": "johndoe@example.com",
    "item_id": 12345,
    "created_at": "2023-04-09T12:00:00Z"
}
Error Handling
The API returns appropriate HTTP status codes for different types of errors. Here are some examples:

400 Bad Request: Invalid request body or query parameter.
404 Not Found: The requested resource could not be found.
500 Internal Server Error: The server encountered an unexpected error.