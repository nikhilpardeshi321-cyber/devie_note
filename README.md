# Device Note API (Node.js + TypeScript + PostgreSQL)

This project implements a RESTful API for managing device notes, as described in the Java assessment document. The API is built with Node.js, Express, TypeScript, and PostgreSQL, following a layered architecture (controller, service, repository, model).

## Table: device_note
- `id` – BIGINT, auto-generated primary key
- `device_id` – BIGINT, NOT NULL
- `note` – TEXT, NOT NULL (max 1000 chars enforced at API level)
- `created_at` – TIMESTAMP, default current time
- `created_by` – VARCHAR(100), NOT NULL

> **Note:** If a `device` table does not exist in your environment, the foreign key is skipped. This implementation assumes no foreign key constraint on `device_id`.

## API Endpoints

### Create Note
**POST** `/api/v1/devices/{deviceId}/notes`

**Headers:**
- `X-User` (required): The user creating the note

**Request Body:**
```json
{
  "note": "Device rebooted during maintenance"
}
```

**Validation Rules:**
- `note` must not be blank
- Max length: 1000 characters
- `X-User` header is mandatory

### List Notes
**GET** `/api/v1/devices/{deviceId}/notes?limit=20`

**Query Params:**
- `limit` (optional, default 20): Must be between 1 and 100

**Behavior:**
- Results are ordered by `created_at` DESC

## Service Layer Rules
- Controllers only handle request/response mapping
- All validation and business rules are in the service layer
- Repository queries handle ordering and limits (no in-memory filtering)
- Transactions are used only where data consistency is required

## Database Setup
Run this SQL to create the required table:
```sql
CREATE TABLE device_note (
    id BIGSERIAL PRIMARY KEY,
    device_id BIGINT NOT NULL,
    note TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(100) NOT NULL
);
```

## Environment Variables
Set these in your `.env` file:
```
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=1234
DB_HOST=localhost
DB_PORT=5432
PORT=3005
```

## Running the Project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Health Check
Test DB connection:
```bash
curl http://localhost:3005/api/health/db
```

## Example Usage
**Create Note:**
```bash
curl -X POST http://localhost:3005/api/v1/devices/123/notes \
  -H "Content-Type: application/json" \
  -H "X-User: your-username" \
  -d '{"note": "Device rebooted during maintenance"}'
```

**List Notes:**
```bash
curl "http://localhost:3005/api/v1/devices/123/notes?limit=20"
```

## Assumptions
- No foreign key constraint on `device_id` (as device table may not exist)
- All validation is enforced at the API/service layer
