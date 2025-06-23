## 📑 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [API Endpoints](#api-endpoints)
* [Setup Instructions](#setup-instructions)
* [Running the Application](#running-the-application)
* [Testing](#testing)
* [Test Coverage](#test-coverage)

---

## Features

* Add, view, update, and delete items
* RESTful API with full CRUD operations
* Persistent storage using SQLite
* React-based frontend for easy interaction
* Automated unit, integration, and API tests with high code coverage

---

## Tech Stack

* **Backend:** Node.js, Express
* **Database:** SQLite
* **Frontend:** React (see `/frontend` directory)
* **Testing Frameworks:** Jest, Supertest

---

## API Endpoints

| Method | Endpoint         | Description             |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/items`     | List all items          |
| GET    | `/api/items/:id` | Get a single item by ID |
| POST   | `/api/items`     | Create a new item       |
| PUT    | `/api/items/:id` | Update an existing item |
| DELETE | `/api/items/:id` | Delete an item by ID    |

---

## Setup Instructions

### Prerequisites

* Node.js and npm installed

### Backend

```bash
cd backend
npm install
npm start
```

The backend will run at [http://localhost:5001](http://localhost:5001).

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run at [http://localhost:3000](http://localhost:3000).

---

## Running the Application

* Start both the backend and frontend as described above.
* Use the frontend UI or tools like Postman/cURL to interact with the API.

---

## Testing

### How to Run Tests

From the `backend` directory:

```bash
npm test
```

Or with coverage:

```bash
npx jest --coverage
```

### Testing Frameworks Used

* **Jest:** Unit, integration, and API testing, with coverage reports
* **Supertest:** For making HTTP requests to the Express API in tests

### Types of Tests

* **Unit Tests:** Test individual route logic and error handling
* **Integration Tests:** Verify database interaction
* **API Tests:** Ensure correct endpoint functionality and response

All CRUD operations and error scenarios are covered.

---

## Test Coverage

This project achieves high code coverage for the backend API.

Sample coverage summary:

```
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   83.33 |       65 |   85.71 |   93.61 |
index.js  |   83.33 |       65 |   85.71 |   93.61 | 12,89-90
```
**Example screenshot:**
<img width="711" alt="Screenshot 2025-06-23 at 1 20 49 PM" src="https://github.com/user-attachments/assets/e2c4d6b1-b32f-4c3f-b0df-fdff68bba368" />
<img width="675" alt="Screenshot 2025-06-23 at 1 20 59 PM" src="https://github.com/user-attachments/assets/93bab2fc-e3b4-43dc-87e2-5d55b69ab2ef" />
