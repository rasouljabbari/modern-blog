# Modern Blogging Platform with Next.js

Welcome to our modern blogging platform built using Next.js! This platform allows users to view, create, edit, and remove blog posts. Users who are logged in with GitHub can add, edit, and remove posts, while others can only view the posts list. The platform also features infinite scroll to load more posts and uses Redux Toolkit for state management.

## Features

- Server-Side Rendering (SSR) of blog post list from [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) API's.
- User authentication using GitHub.
- Create, edit, and remove blog posts for authenticated users.
- Infinite scroll for loading more blog posts.
- Error handling with `error.js`.
- Custom 404 page for handling 404 errors.

## Technologies Used

- Next.js: A React framework for server-rendered applications.
- Redux Toolkit: A powerful state management library for React applications.
- GitHub OAuth: Used for user authentication.
- JSONPlaceholder API: Used for fetching blog posts.
- Error.js: Custom error handling for development mode.
- Custom 404 Page: A dedicated page for handling 404 errors.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/rasouljabbari/modern-blog

2. Install dependencies:

   ```bash
   npm install

3. Create a .env.local file with your GitHub OAuth credentials:

    ```makefile
    GITHUB_CLIENT_ID=your-client-id
    GITHUB_CLIENT_SECRET=your-client-secret

4. Start the development server:
    ```bash
    npm run dev

5. Open your browser and go to http://localhost:3000 to view the application.

## Usage

- To view the list of blog posts, simply visit the homepage.
- To create, edit, or remove blog posts, log in with your GitHub account.

## Project Structure

- components/: Reusable React components.
- redux/: Redux Toolkit configuration and slices for state management.
- utils/: Utility functions.
- api/: API functions.
- public/: Static assets.