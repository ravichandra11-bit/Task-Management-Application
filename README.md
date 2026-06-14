# Task Management Application
# Task Management Application

A full-stack web-based Task Management Application that helps users create, organize, update, and track their daily tasks efficiently.

The application provides secure user authentication, task CRUD operations, and a responsive user interface for desktop and mobile devices.

---

## 🚀 Features

### 🔐 User Authentication
- User registration and login system
- Secure password encryption
- JWT-based authentication
- Protected user routes
- User-specific task management

---

### 📝 Task Management

Users can:

- Create new tasks
- View all tasks
- Update existing tasks
- Delete tasks
- Change task status

Task details include:

- Task title
- Description
- Status
- Due date
- Creation date

---

### 📊 Task Tracking

Tasks can be organized using different statuses:

- Pending
- In Progress
- Completed

This helps users monitor their work progress.

---

### 📱 Responsive Design

The application works on:

- Desktop screens
- Tablets
- Mobile devices

Built using responsive UI techniques for better user experience.

---

### ⚡ Real-Time Updates (Optional)

Using WebSocket technology:

- Tasks can update instantly
- Multiple users can see changes without refreshing
- Improves collaboration experience

---

# 🛠️ Technology Stack

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- React Router
- Axios

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

## Authentication

- JSON Web Token (JWT)
- bcrypt

## Real-Time Communication

- Socket.IO

---

# 📂 Project Structure

Task-Management-Application

│
├── client
│ ├── src
│ │ ├── components
│ │ ├── pages
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── server
│ ├── models
│ │ ├── User.js
│ │ └── Task.js
│ │
│ ├── routes
│ │ ├── authRoutes.js
│ │ └── taskRoutes.js
│ │
│ ├── controllers
│ ├── middleware
│ └── server.js
│
└── README.md
