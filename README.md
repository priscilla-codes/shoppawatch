# ShoppAWatch

A full-stack e-commerce platform specializing in watches, built with Ruby on Rails API and React. The application features secure user authentication, real-time shopping cart management, and AWS S3 integration for product images. The platform supports both guest and authenticated user shopping experiences, with persistent cart functionality and product search capabilities.

![Screen Shot 2022-02-24 at 1 31 45 AM](https://user-images.githubusercontent.com/10909592/155478583-83dd8acd-282f-4a99-b4ad-fc4937d4d698.png)

## Features

- User authentication and authorization
- Shopping cart functionality
- Product quantity management
- AWS S3 image storage
- Sample product database seeding
- Product search

## Tech Stack

### Backend
- Ruby 3.1.2
- Rails 6.1.7
- PostgreSQL (pg 1.1.4)
- AWS S3 for image storage
- Active Model Serializers 0.10.12
- PG Search 2.3.5
- Rack CORS
- BCrypt 3.1.16
- Puma 5.1.1

### Frontend
- React 18.2.0
- Redux
- SCSS

## API Documentation

The API documentation can be found in [API_DOCUMENTATION.md](API_DOCUMENTATION.md).

## Models

- Product
- Cart
- CartItem
- User
- Order
- OrderItem

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js 
- npm
- PostgreSQL

### Installation

1. Clone the repository
    ```bash
    git clone https://github.com/priscilla-codes/shoppawatch.git
    cd shoppawatch
    ```

2. Backend Setup
    ```bash
    cd backend-api
    bundle install
    rails db:create
    rails db:migrate
    rails db:seed
    rails s -p 5000
    ```
    The backend will run on port 5000.

3. Frontend Setup
    ```bash
    cd frontend
    npm install
    npm start
    ```
    The frontend will run on port 8000.

## Working on
- Product Pagination

## Environment Variables

Create a `.env` file in the backend directory with the following variables:
    ```
    DATABASE_URL=your_postgres_url
    AWS_ACCESS_KEY_ID=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key
    AWS_REGION=your_aws_region
    S3_BUCKET=your_bucket_name
    ```

## Live Demo

Visit the live application at [https://shoppawatch.com](https://shoppawatch.com)

### Demo Credentials
    ```
    Email: testuser@shoppawatch.com
    Password: shoppawatch
    ```

#### Run

    # Change directories
    $ cd frontend

    # Install dependencies
    npm install

    # Start the server
    npm start - will run on port 8000
