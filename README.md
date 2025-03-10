# Overview
This project is a React-based web application that uses React Router for routing, React Query for data fetching and state management, and Tailwind CSS for styling. The app is designed with multiple pages, including home, posts, faculty, and error handling pages. It also incorporates React Helmet for managing HTML head elements like titles and metadata.

# Technologies
In this project is used:
- React: The core UI library for building components and managing application state.
- React Query: A powerful data-fetching library that simplifies API calls and state management.
- React Router: For handling dynamic routes and navigation within the app.
- Tailwind CSS: A utility-first CSS framework used to style the components and layout.
- Vite: A fast build tool for modern JavaScript applications.
- ESLint: To maintain high-quality code and follow best practices.
- React Hot Toast: For displaying interactive toast notifications.
- React icons: To provide many kind of icons

# Project Structure
The project follows a modular structure to ensure scalability:
/src
  /assets      # Images, icons, and other static assets
  /components  # Reusable UI components like buttons, forms, and modals
  /context     # Global state management using React's Context API
  /hooks       # Custom hooks for reusable logic (e.g., data fetching)
  /pages       # Different pages (views) of the app
  /utils       # Utility functions (e.g., date formatting, validation)

# Features
# 1. React-based User Interface
The core of this project revolves around React. The project employs React Hooks to manage state and side effects within functional components. This enables efficient component re-rendering, a modern React feature that simplifies the app’s architecture.

Key Features:
- useState for local component state.
- useEffect for managing side effects like fetching data or subscriptions.
- Custom hooks to encapsulate reusable logic (e.g., data fetching, form validation).

# 2. Routing with React Router
React Router is used for dynamic routing. It enables seamless navigation between different pages or views within the app, without the need for page reloads. The 

project supports:
- Dynamic Routes: For example, /posts/:id for individual blog posts.
- Nested Routes: To organize components and ensure logical separation.
- Programmatic Navigation: To handle redirection based on user actions or app states (e.g., form submission or authentication).

# 3. Server-Side Data Management with React Query
React Query is a robust library for data fetching and state management, reducing the need for boilerplate code in fetching, caching, and synchronizing data from APIs. This project uses React Query to:

- Fetch data from APIs asynchronously with useQuery.
- Mutate data (post, update, delete) with useMutation.
- Cache the results to minimize unnecessary requests and speed up the app.
- Automatically refetch data when certain conditions change, keeping the UI up-to-date without manual intervention.

# 4. Responsive Layout with Tailwind CSS
Tailwind CSS is a utility-first CSS framework used for styling. It allows for rapid prototyping and building flexible, responsive layouts without writing custom CSS. Key features of this project:

- Utility Classes: Style components using class names directly in JSX, avoiding the need for external CSS.
- Responsive Design: Tailwind’s built-in responsive classes ensure the application looks good on all screen sizes.

# 5. Notifications with React Hot Toast
React Hot Toast is a library used to display toast notifications. These notifications appear for a brief period to alert users about certain events (e.g., form submission success or error). Features include:

- Toast Types: Success, error, info, and loading.
- Customizable Styles: Toasts can be styled using the app's global design system or custom styles.
- Auto-dismiss: Toasts automatically disappear after a set duration.

# 6. CRUD Operations
The application provides full CRUD (Create, Read, Update, Delete) functionality to manage resources like Posts, Faculty. Here's how CRUD operations are implemented:

- Create: A form is provided to submit new resources (e.g., a new post or faculty member) via React component. Once submitted, the data is sent to the backend API and stored in a database.
- Read: A list of items is fetched from the backend API using React Query, and displayed in a paginated format.
- Update: Existing records can be updated by fetching the data in a form, allowing users to edit the fields and submit the changes back to the backend.
- Delete: Users can delete a resource, and the app will update the list dynamically using React Query's refetching mechanism.
