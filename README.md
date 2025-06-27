## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Test Coverage](#test-coverage)
- [CI/CD & Keploy Integration](#cicd--keploy-integration)
- [Screenshots](#screenshots)

---

## Features

- Add, view, update, and delete items
- RESTful API with full CRUD operations
- Persistent storage using SQLite
- React-based frontend for easy interaction
- Automated unit, integration, and API tests with high code coverage

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** SQLite
- **Frontend:** React (see `/frontend` directory)
- **Testing Frameworks:** Jest, Supertest

---

## API Endpoints

| Method | Endpoint | Description |
| ------ | ---------------- | ----------------------- |
| GET    | `/api/items`     | List all items          |
| GET    | `/api/items/:id` | Get a single item by ID |
| POST   | `/api/items`     | Create a new item       |
| PUT    | `/api/items/:id` | Update an existing item |
| DELETE | `/api/items/:id` | Delete an item by ID    |

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed

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

- Start both the backend and frontend as described above.
- Use the frontend UI or tools like Postman/cURL to interact with the API.

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

- **Jest:** Unit, integration, and API testing, with coverage reports
- **Supertest:** For making HTTP requests to the Express API in tests

### Types of Tests

- **Unit Tests:** Test individual route logic and error handling
- **Integration Tests:** Verify database interaction
- **API Tests:** Ensure correct endpoint functionality and response

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

---

## CI/CD & Keploy Integration

This project integrates API testing into the CI/CD pipeline using [Keploy](https://keploy.io/) and GitHub Actions.

- **OpenAPI Schema** is included for the project.
- **Automated Keploy API tests** run on every push and pull request.
- The workflow can be found in `.github/workflows/keploy-ci.yml`.

**CI/CD Workflow Status Example:**

![GitHub Actions Workflow Runs](screenshots/workflow-run.png)

---

## Screenshots

Below are screenshots demonstrating the workflow runs and Keploy test reports, as required for the API Fellowship submission:

### 1. GitHub Actions Workflow Run

<img width="1224" alt="Screenshot 2025-06-27 at 10 05 16 PM" src="https://github.com/user-attachments/assets/3a38b652-8f5c-4361-9148-96240cb6331f" />


### 2. Keploy Test Report
<img width="1237" alt="Screenshot 2025-06-27 at 10 02 43 PM" src="https://github.com/user-attachments/assets/764a72a5-45c0-45b2-8ba9-e3eecf91d512" />
<img width="1226" alt="Screenshot 2025-06-27 at 10 02 36 PM" src="https://github.com/user-attachments/assets/34f61df8-1577-4394-bb55-814f064123d1" />
<img width="1229" alt="Screenshot 2025-06-27 at 10 02 02 <img width="1083" alt="Screenshot 2025-06-27 at 10 02 17 PM" src="https://github.com/user-attachments/assets/597a935c-08d8-4419-9a8e-2d8a318b46e2" />
PM" src="https://github.com/user-attachments/assets/3c552f69-288f-4be8-a9fb-cfa3511ed5e3" />


---

## Fellowship Submission

- **Keploy API Testing integrated in CI/CD**: See `.github/workflows/keploy-ci.yml`
- **Test report screenshots**: See [Screenshots](#screenshots) section above.
- **Repository link**: [https://github.com/Yuvraajb/Item-Manager-API-Full-Stack-CRUD-App-with-Express-SQLite-and-React](https://github.com/Yuvraajb/Item-Manager-API-Full-Stack-CRUD-App-with-Express-SQLite-and-React)
