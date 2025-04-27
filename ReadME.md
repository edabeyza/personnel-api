# Personnel API

A RESTful API for managing personnel records, built with Node.js, Express.js, and MongoDB. Includes JWT-based authentication, cookie sessions, and modular project structure for easy maintenance and scalability.

## Features

`**CRUD Operations:** Create, Read, Update, Delete personnel records.

**Authentication:** Secure login and session management using JWT and cookies.

**Error Handling:** Centralized error handler to manage and format API errors.

**Password Encryption:** Hashing of user passwords with bcrypt for security.

**Modular Structure:** Organized folders for controllers, models, routes, and utilities.

**Database Connection:** MongoDB connection setup with Mongoose.

## Tech Stack

**Runtime & Framework:** Node.js, Express.js

**Database:** MongoDB, Mongoose ORM

**Authentication:** JWT, express-session

**Security:** bcrypt for password hashing

**Utilities:** dotenv for environment variables

## Project Structure
````
├── src
│   ├── controllers       # Route handlers
│   ├── models            # Mongoose schemas
│   ├── routes            # API routes
│   ├── errorHandler      # Custom error middleware
│   ├── passwordEncrypt   # Password hashing utility
│   ├── auth              # Authentication & permission logic
│   ├── dbConnection      # MongoDB connection setup
│   └── index.js          # Application entry point
├── .env                  # Environment variables
├── package.json          # Dependencies & scripts
└── README.md             # Project documentation
````
## Getting Started

### 1. Clone the repository

```
git clone https://github.com/edabeyza/personnel-api.git
cd personnel-api
```

### 2. Install dependencies

````
npm install
````

### 3. Configure environment variables

Create a .env file in the root directory and set the following:

````
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
````

### 4. Run the application

````
npm start
````

The API will be available at http://localhost:3000.

## Usage

### Auth Routes

```POST /api/auth/register``` – Register a new user

```POST /api/auth/login``` – Authenticate and receive a JWT and session cookie

```POST /api/auth/logout``` – Clear the session cookie

### Personnel Routes (protected)

```GET /api/personnel``` – List all personnel

```GET /api/personnel/:id``` – Get a single personnel record

```POST /api/personnel``` – Create a new personnel record

```PUT /api/personnel/:id``` – Update an existing record

```DELETE /api/personnel/:id``` – Delete a record

## Author

**Eda Beyza** – edabeyza

## License

This project is licensed under the MIT License.
