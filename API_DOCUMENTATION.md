# ShoppAWatch API Documentation

## Overview
This is the API documentation for ShoppAWatch, an e-commerce platform for watches. The API is built using Ruby on Rails and follows RESTful conventions.

## Base URL
All API endpoints are prefixed with `/api/v1` and served from `http://localhost:5000` in development.

## Authentication
The API uses session-based authentication. Most cart operations work for both authenticated users and guests, with cart data being persisted appropriately in each case.

## Authentication Endpoints

### Create Session (Login)
- **POST** `/sessions`
- Authenticates user credentials and creates a new session
- **Request Body:**
  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "password"
    }
  }
  ```
- **Success Response:** (200)
  ```json
  {
    "status": "created",
    "logged_in": true,
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    },
    "user_cart": {
      // Cart details via CartSerializer
    }
  }
  ```
- **Error Response:** (401)
  ```json
  {
    "status": 401,
    "message": "Invalid password or email."
  }
  ```
- **Example Request:**
  ```bash
  curl -X POST http://localhost:5000/api/v1/sessions \
    -H "Content-Type: application/json" \
    -d '{"user": {"email": "user@example.com", "password": "password"}}'
  ```

### Register User
- **POST** `/registrations`
- Creates a new user account
- **Request Body:**
  ```json
  {
    "user": {
      "name": "John Doe",
      "email": "user@example.com",
      "password": "password"
    }
  }
  ```
- **Success Response:** (200)
  ```json
  {
    "status": "created",
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    },
    "user_cart": {
      // Cart details via CartSerializer
    }
  }
  ```
- **Error Response:** (422)
  ```json
  {
    "status": 422,
    "message": "Something went wrong. User Registration failed."
  }
  ```

### Check Login Status
- **GET** `/logged_in`
- Checks if a user is currently logged in
- **Example Request:**
  ```bash
  curl http://localhost:5000/api/v1/logged_in
  ```
- **Success Response:** (200)
  ```json
  {
    "logged_in": true,
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
  ```
- **Not Logged In Response:** (200)
  ```json
  {
    "logged_in": false
  }
  ```

### Logout
- **DELETE** `/logout`
- Ends the current user session
- **Example Request:**
  ```bash
  curl -X DELETE http://localhost:5000/api/v1/logout
  ```
- **Success Response:** (200)
  ```json
  {
    "status": 200,
    "logged_out": true,
    "cart": {
      // Cart details via CartSerializer
    }
  }
  ```

## Product Endpoints

### List Products
- **GET** `/products`
- Returns all products ordered by ID ascending
- Products include attached main images
- **Example Request:**
  ```bash
  curl http://localhost:5000/api/v1/products
  ```

### Get Single Product
- **GET** `/products/:id`
- Returns details for a specific product
- **URL Parameters:**
  - `id`: Product ID
- **Example Request:**
  ```bash
  # Get details for Fossil Nate Stainless Steel Quartz Chronograph Watch ($98.99)
  curl http://localhost:5000/api/v1/products/1

  # Get details for Timex Expedition Scout 40 Watch ($43.99)
  curl http://localhost:5000/api/v1/products/2
  ```

### Search Products
- **GET** `/products/search`
- Searches products based on search term
- **Query Parameters:**
  - `query`: Search term
- **Example Request:**
  ```bash
  # Search for Fossil watches (will return Fossil Nate, Fossil Townsman, etc.)
  curl http://localhost:5000/api/v1/products/search?query=fossil

  # Search for Michael Kors watches
  curl http://localhost:5000/api/v1/products/search?query=michael%20kors
  ```

## Shopping Cart Endpoints

### Get Cart
- **GET** `/carts/get_cart`
- Retrieves the current cart (works for both logged-in users and guests)
- **Example Request:**
  ```bash
  curl http://localhost:5000/api/v1/carts/get_cart
  ```

### Add Item to Cart
- **POST** `/carts/add_item`
- Adds a product to the cart
- **Request Body:**
  ```json
  {
    "product_id": "1",
    "quantity": 1
  }
  ```
- **Success Response:** (201)
  - Returns the updated cart
- **Error Response:** (422)
  - Returns validation errors
- **Example Request:**
  ```bash
  # Add Fossil Nate Watch ($98.99) to cart
  curl -X POST http://localhost:5000/api/v1/carts/add_item \
    -H "Content-Type: application/json" \
    -d '{"product_id": "1", "quantity": 1}'

  # Add Timex Expedition Scout ($43.99) to cart
  curl -X POST http://localhost:5000/api/v1/carts/add_item \
    -H "Content-Type: application/json" \
    -d '{"product_id": "2", "quantity": 1}'
  ```

### Update Cart Item
- **PUT** `/carts/update_item`
- Updates the quantity of a cart item
- **Request Body:**
  ```json
  {
    "cart_item_id": "1",
    "new_quantity": 2
  }
  ```
- **Success Response:** (201)
  - Returns the updated cart
- **Error Response:** (422)
  - Returns validation errors
- **Example Request:**
  ```bash
  # Update quantity of Fossil Nate Watch in cart
  curl -X PUT http://localhost:5000/api/v1/carts/update_item \
    -H "Content-Type: application/json" \
    -d '{"cart_item_id": "1", "new_quantity": 2}'
  ```

### Remove Item from Cart
- **DELETE** `/carts/remove_item`
- Removes an item from the cart
- **Request Body:**
  ```json
  {
    "cart_item_id": "1"
  }
  ```
- **Success Response:** (200)
  - Returns the updated cart
- **Example Request:**
  ```bash
  # Remove Fossil Nate Watch from cart
  curl -X DELETE http://localhost:5000/api/v1/carts/remove_item \
    -H "Content-Type: application/json" \
    -d '{"cart_item_id": "1"}'
  ```

## Data Models

### User
- name: string
- email: string
- password: string (encrypted)
- has_one: cart
- has_many: cart_items, through: cart

### Product
- name: string
- price: decimal
- description: text
- has_one_attached: main_image

### Cart
- belongs_to: user (optional)
- has_many: cart_items
- has_many: products, through: cart_items

### CartItem
- belongs_to: cart
- belongs_to: product
- quantity: integer
