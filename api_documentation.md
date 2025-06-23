# API Documentation

Base URL: `http://localhost:5001/api`

## Endpoints

### GET /items

- Returns all items.
- **Example:**

- **Response:**
```json
[
  { "id": 1, "name": "banana", "description": "fruit" }
]

curl http://localhost:5001/api/items/1
{ "id": 1, "name": "banana", "description": "fruit" }
curl -X POST -H "Content-Type: application/json" -d '{"name":"apple","description":"fruit"}' http://localhost:5001/api/items
