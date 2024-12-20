# API Documentation

## /users/register

### Description

This endpoint is used to register a new user.

### Method

POST

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

Status Code: 201 Created
Response Body:

```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error

Status Code: 400 Bad Request
Response Body:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Status Code: 500 Internal Server Error
Response Body:

```json
{
  "error": "Error message"
}
```

## /users/login

### Description

This endpoint is used to log in an existing user.

### Method

POST

### Request Body

The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

Status Code: 200 OK
Response Body:

```json
{
  "token": "jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Error

Status Code: 400 Bad Request
Response Body:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Status Code: 401 Unauthorized
Response Body:

```json
{
  "message": "Invalid email or password"
}
```

Status Code: 500 Internal Server Error
Response Body:

```json
{
  "error": "Error message"
}
```

## /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Method
GET

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Error

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Error message"
  }
  ```

## /users/logout

### Description
This endpoint is used to log out the authenticated user. Also backlists the token provided in cookie or header

### Method
GET

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Error message"
  }
  ```

## /captains/register

### Description

This endpoint is used to register a new captain.

### Method

POST

### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `capacity`: A number with a minimum value of 1 (required)
  - `vehicleType`: A string that must be one of ['motorcycle', 'car', 'auto'] (required)

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success

Status Code: 201 Created
Response Body:

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error

Status Code: 400 Bad Request
Response Body:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

Status Code: 500 Internal Server Error
Response Body:

```json
{
  "error": "Error message"
}
```

## /captains/login

### Description

This endpoint is used to log in an existing captain.

### Method

POST

### Request Body

The request body should be a JSON object with the following fields:

- `email`: A string representing a valid email address (required)
- `password`: A string with a minimum length of 6 characters (required)

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success

Status Code: 200 OK
Response Body:

```json
{
  "token": "jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error

Status Code: 400 Bad Request
Response Body:

```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

Status Code: 401 Unauthorized
Response Body:

```json
{
  "message": "Invalid email or password"
}
```

Status Code: 500 Internal Server Error
Response Body:

```json
{
  "error": "Error message"
}
```

## /captains/profile

### Description
This endpoint is used to get the profile of the authenticated captain.

### Method
GET

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```

#### Error

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Error message"
  }
  ```

## /captains/logout

### Description
This endpoint is used to log out the authenticated captain. Also backlists the token provided in cookie or header

### Method
GET

### Headers
- `Authorization`: Bearer token (required)

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error

- **Status Code**: 401 Unauthorized
- **Response Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

- **Status Code**: 500 Internal Server Error
- **Response Body**:
  ```json
  {
    "error": "Error message"
  }
  ```
