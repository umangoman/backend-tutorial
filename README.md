# Backend Tutorial

A simple backend built with Node.js, Express and MongoDB (Mongoose).

## Features
- User register (password hashed with bcrypt)
- User login
- CRUD APIs: Create, Read, Update, Delete

## Setup
1. Run `npm install`
2. Create a `.env` file with:
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
3. Run `npm run dev`

## API Routes
- POST /api/users/register
- POST /api/users/login
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id