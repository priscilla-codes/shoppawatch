# ShoppAWatch

ShoppAWatch is an ecommerce application built with a Ruby on Rails backend and a React frontend.

![Screen Shot 2022-02-24 at 1 31 45 AM](https://user-images.githubusercontent.com/10909592/155478583-83dd8acd-282f-4a99-b4ad-fc4937d4d698.png)

### Features

- Authenticate users
- Add items to cart
- Increase/decrease quantity
- Store images with AWS S3
- Seed database with sample data (products)

### Working on

- ~~Search~~
- Product Pagination

## Getting started

    # Clone repository
    $ git clone https://github.com/priscilla-codes/shoppawatch.git

    # Change directories
    $ cd shoppawatch

### Backend

#### Models

- Product
- Cart
- CartItem
- User
- Order
- OrderItem

#### Requirements:

      Ruby 2.4+
      Rails 6
      Postgres 13.3 or above

#### Run

    # Change directories
    $ cd backend-api

    # Install the needed gems
    $ bundle install

    # Create the database
    $ rails db:create

    # Migrate the database
    $ rails db:migrate

    # Seed the database with sample data
    $ rails db:seed

    # Start the server
    $ rails s -p 5000

### Frontend

#### Run

    # Change directories
    $ cd frontend

    # Install dependencies
    npm install

    # Start the server
    npm start - will run on port 8000

## Live Demo

- https://shoppawatch.com
- User credentials
  ```
   email: testuser@shoppawatch.com
   password: shoppawatch
  ```
