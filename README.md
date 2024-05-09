# Blogging API

## Overview

The Blogging API is a RESTful web service that allows users to create, publish, edit, and delete blog posts. It provides endpoints for managing blog posts, including functionalities for authentication, creating drafts, publishing posts, and retrieving blog lists. The API supports pagination, filtering, sorting, and searching to enhance the user experience.

## Features

- **User Authentication**: Users can register, login, and obtain authentication tokens to access protected endpoints.
- **Create Blog Posts**: Users can create new blog posts, providing title, description, tags, and body content.
- **Draft and Publish**: Blog posts can be created in a draft state and later published by the author.
- **Edit and Delete Posts**: Authors can edit or delete their blog posts, whether they are in draft or published state.
- **View Published Blogs**: Logged-in and anonymous users can view a list of published blogs.
- **Pagination**: List endpoints support pagination to manage large numbers of blog posts efficiently.
- **Filtering**: List endpoints allow filtering by state (e.g., draft or published) and searching by author, title, and tags.
- **Sorting**: Users can order the list of blogs by read count, reading time, and timestamp.

## Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Authenticate user and generate JWT token.
- **POST /createblog**: Create a new blog post.
- **PUT /blogs/:id/publish**: Publish a draft blog post.
- **PATCH /blogs/:id**: Update a blog post.
- **DELETE /blogs/:id**: Delete a blog post.
- **GET /blogs**: Get a paginated list of published blogs.
- **GET /blogs/:id**: Get a single published blog by ID.
- **GET /my-blogs**: Get a paginated list of the user's own blogs.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing blog post data.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT**: JSON Web Tokens for user authentication.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables (e.g., MongoDB connection URI, JWT secret key).
4. Start the server using `npm start`.
5. Access the API endpoints using a REST client like Postman.

## License

This project is licensed under the [MIT License](LICENSE).
