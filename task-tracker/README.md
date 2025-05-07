# React + Vite
Backend: Node.js with Express

Database: MongoDB

you have to install following libraries for run code: npm i bootstrap bootstrap-icons react-cookie react-router-dom axios formik etc.

for backend server install :npm init-y mongodb express cors etc.  go to server directory and use command node api.js for start server-side.

📁 Project Structure
The task-tracker directory includes:

Backend Server: app.js (or server.js)

Dependencies: package.json

Configuration: MongoDB connection string and environment variables

🛠️ Features
User Management: Register users with details like username, password, email, and country.

Task Management: Add, edit, delete, and retrieve tasks associated with specific users.

API Endpoints:

GET /users: Fetch all users.

GET /tasks: Fetch all tasks.

GET /get-task/:id: Fetch tasks for a specific user by ID.

POST /register-user: Register a new user.

POST /add-task: Add a new task.

PUT /edit-task/:id: Edit an existing task.

DELETE /delete-task/:id: Delete a task.



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
